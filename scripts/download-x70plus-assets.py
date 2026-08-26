"""Download JETOUR X70 Plus assets: 360 spin, gallery, interiors."""
from __future__ import annotations

import sys
import time
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

ROOT = Path(r"d:\jetour\public\models\x70-plus")
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
ND = "https://images.netdirector.co.uk/gforces-auto/image/upload/q_auto,c_limit,w_1920,f_auto,fl_lossy/auto-client"
CF = "https://d2y8x0yfrfw1tb.cloudfront.net/assets/x70-plus"

SPIN_COLORS = [
    ("white", "white"),
    ("night_black", "black"),
    ("tech_grey", "gray"),
    ("auroral_green", "green"),
]

GALLERY = [
    (f"{CF}/gallery/01.webp", ROOT / "gallery" / "01.webp"),
    (f"{CF}/gallery/02.webp", ROOT / "gallery" / "02.webp"),
    (f"{CF}/gallery/techImage.webp", ROOT / "gallery" / "tech.webp"),
    (f"{ND}/fe51e1728a3b15459b8a7a9091c6b500/jetour_x70_plus_luxury_in_the_uae_desktop.jpg", ROOT / "gallery" / "luxe.jpg"),
    (f"{ND}/5baaad8a36af4c27e6a0fbdc9285ab16/jetour_x70_plus_comfort_in_the_uae_desktop.jpg", ROOT / "gallery" / "confort.jpg"),
    (f"{ND}/340df6d9f1774969d738645388b2e02b/exterior_jetour_x70_plus_panoramic_sunroof_1920x873.jpg", ROOT / "gallery" / "toit.jpg"),
    (f"{ND}/404c228ea1971513fb6068028565ebad/exterior_jetour_x70_plus_alloy_wheels_1920x873.jpg", ROOT / "gallery" / "jante.jpg"),
    (f"{ND}/2a399721c804ef2ab4fd8863bb91f626/exterior_jetour_x70_plus_led_headlights_1920x873.jpg", ROOT / "gallery" / "phare.jpg"),
    (f"{ND}/fa81b40f6437e84ee657a2b920d3a9ff/exterior_jetour_x70_plus_led_taillights_1920x873.jpg", ROOT / "gallery" / "feux.jpg"),
    (f"{ND}/41348823bfaa4d00d02cb32898b53e93/2024_jetour_x70_plus_purple_sideview_960x540.jpg", ROOT / "gallery" / "profil.jpg"),
    (f"{ND}/f53ed525b9a35ceef41d39b44b79e8e9/2024_jetour_x70_plus_puruple_backview_960x540.jpg", ROOT / "gallery" / "arriere.jpg"),
    (f"{ND}/f34cb2e6cd0d00b675fda70993f7de3f/safety_jetour_x70_plus_adaptive_cruise_control_1920x873.jpg", ROOT / "gallery" / "acc.jpg"),
    (f"{ND}/4600e52391dfb42a91aa353467306deb/jetour_x70_plus_white_1920x640.jpg", ROOT / "hero.jpg"),
]

INTERIORS = [
    (f"{ND}/77324c908a2fd986cdd337c7c4dad8ec/x70_plus_spacious_interior_desktop.jpg", ROOT / "interior" / "espace.jpg"),
    (f"{ND}/ebf9702ec9736cd159423486424fc017/x70_plus_mart_infotainment_and_advanced_connectivity_desktop.jpg", ROOT / "interior" / "infotainment.jpg"),
    (f"{ND}/bbfb9022f7058a8501e959f4eb334786/x70_plus_enhanced_digital_display_desktop.jpg", ROOT / "interior" / "ecrans.jpg"),
    (f"{ND}/899f23c6052f2bd183083b7fee3e2160/x70_plus_multi_function_steering_desktop.jpg", ROOT / "interior" / "volant.jpg"),
    (f"{ND}/862a62723cccf00b866a4efa9cfec98c/x70_plus_intelligent_air_purification_system_desktop.jpg", ROOT / "interior" / "air.jpg"),
]


def jobs() -> list[tuple[str, Path]]:
    items: list[tuple[str, Path]] = []
    items.extend(GALLERY)
    items.extend(INTERIORS)
    for remote, local in SPIN_COLORS:
        for i in range(1, 37):
            src = f"{CF}/{remote}/{i:02d}.png"
            dest = ROOT / "spin" / local / f"{i}.png"
            items.append((src, dest))
    return items


def fetch(url: str, dest: Path, retries: int = 3) -> str:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if dest.exists() and dest.stat().st_size > 800:
        return f"skip {dest.relative_to(ROOT)}"
    last_err = ""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": UA, "Referer": "https://jetourja.com/models/x70-plus"},
            )
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
