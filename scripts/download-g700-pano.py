"""Build G700 interior equirect panos from jetourglobal.com krpano cubes."""
from __future__ import annotations

import math
import sys
import tempfile
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

import numpy as np
from PIL import Image

UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
BASE = "https://jetourglobal.com/new-static/vtour/panos"
ROOT = Path(r"d:\jetour\public\models\g700\pano")
TILE_CACHE = Path(tempfile.gettempdir()) / "g700-krpano-tiles"

# XML lists 5 levels; l5 404s. l4 is the 4736 px cube (9*512 + 128).
LEVEL = 4
FACE_PX = 4736
TILE = 512
GRID = 10
OUT_W, OUT_H = 8192, 4096
FACES = ("f", "r", "b", "l", "u", "d")
SCENES = (
    ("g700_black_orange", "orange.jpg"),
    ("g700_black_beige", "beige.jpg"),
    ("g700_black_red", "red.jpg"),
)


def tile_url(scene: str, face: str, v: int, h: int) -> str:
    vv, hh = f"{v:02d}", f"{h:02d}"
    return f"{BASE}/{scene}.tiles/{face}/l{LEVEL}/{vv}/l{LEVEL}_{face}_{vv}_{hh}.jpg"


def fetch(url: str, dest: Path, retries: int = 4) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 200:
        return
    last = ""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": UA, "Referer": "https://jetourglobal.com/spain/g700"},
            )
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = resp.read()
            if len(data) < 200 or data[:2] != b"\xff\xd8":
                raise RuntimeError(f"not a jpeg ({len(data)} B)")
            tmp = dest.with_suffix(dest.suffix + ".part")
            tmp.write_bytes(data)
            tmp.replace(dest)
            return
        except Exception as exc:  # noqa: BLE001
            last = str(exc)
            time.sleep(0.5 * (attempt + 1))
    raise RuntimeError(f"{url} :: {last}")


def assemble_face(scene: str, face: str) -> Image.Image:
    canvas = Image.new("RGB", (FACE_PX, FACE_PX))
    for v in range(1, GRID + 1):
        for h in range(1, GRID + 1):
            path = TILE_CACHE / scene / face / f"{v:02d}_{h:02d}.jpg"
            tile = Image.open(path).convert("RGB")
            canvas.paste(tile, ((h - 1) * TILE, (v - 1) * TILE))
    return canvas


def cube_to_equirect(faces: dict[str, np.ndarray], width: int, height: int) -> np.ndarray:
    """Standard lat-long pano; u=0.25 is +Z (krpano front), matching InteriorPano lon=90."""
    ys, xs = np.meshgrid(
        (np.arange(height, dtype=np.float64) + 0.5) / height,
        (np.arange(width, dtype=np.float64) + 0.5) / width,
        indexing="ij",
    )
    theta = xs * (2.0 * math.pi)
    phi = ys * math.pi
    dx = np.sin(phi) * np.cos(theta)
    dy = np.cos(phi)
    dz = np.sin(phi) * np.sin(theta)

    ax, ay, az = np.abs(dx), np.abs(dy), np.abs(dz)
    is_x = (ax >= ay) & (ax >= az)
    is_y = (~is_x) & (ay >= az)
    is_z = ~is_x & ~is_y

    uc = np.empty_like(dx)
    vc = np.empty_like(dx)
    face_id = np.empty(dx.shape, dtype=np.int8)

    pos_x = is_x & (dx > 0)
    neg_x = is_x & ~pos_x
    pos_y = is_y & (dy > 0)
    neg_y = is_y & ~pos_y
    pos_z = is_z & (dz > 0)
    neg_z = is_z & ~pos_z

    # r, l, u, d, f, b
    uc[pos_x], vc[pos_x], face_id[pos_x] = -dz[pos_x] / ax[pos_x], dy[pos_x] / ax[pos_x], 0
    uc[neg_x], vc[neg_x], face_id[neg_x] = dz[neg_x] / ax[neg_x], dy[neg_x] / ax[neg_x], 1
    uc[pos_y], vc[pos_y], face_id[pos_y] = dx[pos_y] / ay[pos_y], -dz[pos_y] / ay[pos_y], 2
    uc[neg_y], vc[neg_y], face_id[neg_y] = dx[neg_y] / ay[neg_y], dz[neg_y] / ay[neg_y], 3
    uc[pos_z], vc[pos_z], face_id[pos_z] = dx[pos_z] / az[pos_z], dy[pos_z] / az[pos_z], 4
    uc[neg_z], vc[neg_z], face_id[neg_z] = -dx[neg_z] / az[neg_z], dy[neg_z] / az[neg_z], 5

    order = ("r", "l", "u", "d", "f", "b")
    n = FACE_PX
    px = np.clip((uc + 1.0) * 0.5 * (n - 1), 0, n - 1)
    py = np.clip((1.0 - vc) * 0.5 * (n - 1), 0, n - 1)
    x0 = np.floor(px).astype(np.int32)
    y0 = np.floor(py).astype(np.int32)
    x1 = np.clip(x0 + 1, 0, n - 1)
    y1 = np.clip(y0 + 1, 0, n - 1)
    tx = (px - x0).astype(np.float32)
    ty = (py - y0).astype(np.float32)

    out = np.zeros((height, width, 3), dtype=np.float32)
    for idx, name in enumerate(order):
        mask = face_id == idx
        if not np.any(mask):
            continue
        img = faces[name]
        m_y, m_x = np.nonzero(mask)
        xa, xb = x0[mask], x1[mask]
        ya, yb = y0[mask], y1[mask]
        a = tx[mask][:, None]
        b = ty[mask][:, None]
        c00 = img[ya, xa].astype(np.float32)
        c10 = img[ya, xb].astype(np.float32)
        c01 = img[yb, xa].astype(np.float32)
        c11 = img[yb, xb].astype(np.float32)
        out[m_y, m_x] = (c00 * (1 - a) + c10 * a) * (1 - b) + (c01 * (1 - a) + c11 * a) * b
    return np.clip(out, 0, 255).astype(np.uint8)


def download_scene(scene: str) -> None:
    jobs: list[tuple[str, Path]] = []
    for face in FACES:
        for v in range(1, GRID + 1):
            for h in range(1, GRID + 1):
                dest = TILE_CACHE / scene / face / f"{v:02d}_{h:02d}.jpg"
                jobs.append((tile_url(scene, face, v, h), dest))
    print(f"{scene}: {len(jobs)} tiles", flush=True)
    fails: list[str] = []
    done = 0
    with ThreadPoolExecutor(max_workers=12) as pool:
        futs = {pool.submit(fetch, url, dest): url for url, dest in jobs}
        for fut in as_completed(futs):
            done += 1
            try:
                fut.result()
            except Exception as exc:  # noqa: BLE001
                fails.append(str(exc))
            if done % 80 == 0 or done == len(jobs):
                print(f"  [{done}/{len(jobs)}]", flush=True)
    if fails:
        raise RuntimeError(f"{scene} failed {len(fails)}: {fails[0]}")


def build_scene(scene: str, filename: str) -> None:
    download_scene(scene)
    print(f"{scene}: assemble + convert", flush=True)
    arrays = {face: np.asarray(assemble_face(scene, face)) for face in FACES}
    rgb = cube_to_equirect(arrays, OUT_W, OUT_H)
    ROOT.mkdir(parents=True, exist_ok=True)
    dest = ROOT / filename
    Image.fromarray(rgb).save(dest, "JPEG", quality=86, optimize=True)
    print(f"{scene}: wrote {dest} ({dest.stat().st_size} B)", flush=True)


def main() -> int:
    TILE_CACHE.mkdir(parents=True, exist_ok=True)
    for scene, filename in SCENES:
        build_scene(scene, filename)
    return 0


if __name__ == "__main__":
    sys.exit(main())
