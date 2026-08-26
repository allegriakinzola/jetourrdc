"""Download JETOUR X50 assets: 360 spin, hero video, gallery, interiors."""
from __future__ import annotations

import os
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(r"d:\jetour\public\models\x50")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
ND = "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_limit,w_1920,f_auto,fl_lossy/auto-client"
CF = "https://d2y8x0yfrfw1tb.cloudfront.net/assets/x50"
BH = "https://jetourbahrain.com/data/tms/website/html/images/carModel/x50"

SPIN_COLORS = [
    ("white", "white"),
    ("black", "black"),
    ("blue", "blue"),
    ("silver", "silver"),
    ("phantom-gray", "gray"),
]

GALLERY = [
    (f"{CF}/gallery/home_urban.webp", ROOT / "gallery" / "urbain.webp"),
    (f"{CF}/gallery/01.webp", ROOT / "gallery" / "01.webp"),
    (f"{CF}/gallery/02.webp", ROOT / "gallery" / "02.webp"),
    (f"{ND}/57658c446db9e44a43575766d045e6b6/960_540_1_2.jpg", ROOT / "gallery" / "lifestyle.jpg"),
    (f"{ND}/ca9cebd4d7b5fb11d2dd117a49e8493b/960_540_2_1.jpg", ROOT / "gallery" / "profil.jpg"),
    (f"{ND}/bc6f8ab9b1364f38a2cc8981b60e23c4/960_540_6.jpg", ROOT / "gallery" / "experience.jpg"),
    (f"{ND}/bab54eeeeecafc8ff1e12bf185f078b3/1920_873_grill.jpg", ROOT / "gallery" / "calandre.jpg"),
    (f"{ND}/cd1ea619d029484b212ee2a5ce190220/1920_873.jpg", ROOT / "gallery" / "argent.jpg"),
    (f"{ND}/15a2c061effa52b75f8a07ef44a68fd7/768_576_headlight.jpg", ROOT / "gallery" / "phare.jpg"),
    (f"{ND}/6e257218eb828527f19298aefb30c05d/1920_873_wheel.jpg", ROOT / "gallery" / "jante.jpg"),
    (f"{ND}/f29c6d6f4ac20318e758b7a52f4c95d2/x50_1920x873_01.jpg", ROOT / "gallery" / "dimensions.jpg"),
    (f"{ND}/2e82abca43cb02430111f2204b69e036/1920_873_infotainment.jpg", ROOT / "gallery" / "infotainment.jpg"),
    (f"{BH}/p2_1.jpg", ROOT / "gallery" / "p2-1.jpg"),
    (f"{BH}/p2_2.jpg", ROOT / "gallery" / "p2-2.jpg"),
    (f"{BH}/p2_3.jpg", ROOT / "gallery" / "p2-3.jpg"),
]

INTERIORS = [
    (f"{ND}/e029908e5396a39ca73e822aebccb676/1920_873_dashboard.jpg", ROOT / "interior" / "dashboard.jpg"),
    (f"{ND}/2e82abca43cb02430111f2204b69e036/1920_873_infotainment.jpg", ROOT / "interior" / "infotainment.jpg"),
    (f"{ND}/6cc70e8a232462fd4a40911ca3ac64e3/1920_873_seat.jpg", ROOT / "interior" / "sieges.jpg"),
    (f"{BH}/p3_1.jpg", ROOT / "interior" / "p3-1.jpg"),
    (f"{BH}/p3_2.jpg", ROOT / "interior" / "p3-2.jpg"),
    (f"{BH}/p3_3.jpg", ROOT / "interior" / "p3-3.jpg"),
]

HERO = [
    (f"{BH}/banner.mp4", ROOT / "hero.mp4"),
    (f"{BH}/banner_pic_pc.jpg", ROOT / "hero.jpg"),
]


def jobs() -> list[tuple[str, Path]]:
    items: list[tuple[str, Path]] = []
    items.extend(HERO)
    items.extend(GALLERY)
    items.extend(INTERIORS)
    for remote, local in SPIN_COLORS:
        for i in range(1, 37):
            src = f"{CF}/{remote}/{i:02d}.webp"
            dest = ROOT / "spin" / local / f"{i}.webp"
            items.append((src, dest))
    return items


def fetch(url: str, dest: Path, retries: int = 3) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 800:
        return f"skip {dest.relative_to(ROOT)}"
    last_err = ""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Referer": "https://jetourja.com/"})
            with urllib.request.urlopen(req, timeout=90) as resp:
                data = resp.read()
            if len(data) < 400:
                raise RuntimeError(f"too small ({len(data)} bytes)")
            tmp = dest.with_suffix(dest.suffix + ".part")
            tmp.write_bytes(data)
            tmp.replace(dest)
            return f"ok   {dest.relative_to(ROOT)} ({len(data)} B)"
        except Exception as exc:  # noqa: BLE001
            last_err = str(exc)
            time.sleep(0.6 * (attempt + 1))
    return f"FAIL {dest.relative_to(ROOT)} :: {last_err} :: {url}"


def main() -> int:
    items = jobs()
    print(f"{len(items)} files to fetch", flush=True)
    fails: list[str] = []
    done = 0
    with ThreadPoolExecutor(max_workers=12) as pool:
        futs = {pool.submit(fetch, url, dest): dest for url, dest in items}
        for fut in as_completed(futs):
            msg = fut.result()
            done += 1
            if msg.startswith("FAIL"):
                fails.append(msg)
            if done % 20 == 0 or msg.startswith("FAIL") or "hero" in msg:
                print(f"[{done}/{len(items)}] {msg}", flush=True)
    print(f"done {done}, fails {len(fails)}", flush=True)
    for line in fails:
        print(line, flush=True)
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
