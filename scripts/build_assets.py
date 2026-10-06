#!/usr/bin/env python3
"""Build optimized web assets from assets-src/ into public/assets/img/.

Idempotent and deterministic: re-running produces the same files.

  python3 scripts/build_assets.py

Requires Pillow with WebP support (pip install Pillow).

What it does
- Proof screenshots -> WebP (primary) + progressive JPEG (fallback), metadata stripped
  (EXIF can carry GPS / device data from students' phones).
- Brand marks -> optimized PNG + WebP.
- Favicons (ICO + 64px PNG) and a 180px apple-touch-icon on the page background.
- grain.png: the 160x160 film-grain tile, generated with the same seeded PRNG
  (mulberry32, seed 99) the design used at runtime, so it is pixel-identical.
- Writes scripts/asset-manifest.json (sizes) which the test-suite checks the HTML against.
"""
from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    from PIL import Image, features
except ImportError:  # pragma: no cover - environment guard
    sys.exit("Pillow is required: pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "assets-src"
OUT = ROOT / "public" / "assets" / "img"
PAGE_BG = (5, 7, 10)  # #05070A

PROOF_MAX_W = 1100
WEBP_Q = 82
JPEG_Q = 84


def fail(msg: str) -> None:
    sys.exit(f"build_assets: {msg}")


def strip(im: Image.Image) -> Image.Image:
    """Copy without EXIF/ICC/XMP: re-creating from raw pixels drops every metadata chunk."""
    mode = "RGBA" if im.mode in ("RGBA", "LA") or (im.mode == "P" and "transparency" in im.info) else "RGB"
    im = im.convert(mode)
    return Image.frombytes(mode, im.size, im.tobytes())


def build_proof(manifest: dict) -> None:
    src_dir = SRC / "proof"
    out_dir = OUT / "proof"
    out_dir.mkdir(parents=True, exist_ok=True)
    files = sorted(src_dir.glob("*.jpg"))
    if not files:
        fail(f"no proof images in {src_dir}")
    for f in files:
        with Image.open(f) as raw:
            im = strip(raw)
        if im.width > PROOF_MAX_W:
            h = round(im.height * PROOF_MAX_W / im.width)
            im = im.resize((PROOF_MAX_W, h), Image.LANCZOS)
        im = im.convert("RGB")
        im.save(out_dir / f"{f.stem}.webp", "WEBP", quality=WEBP_Q, method=6)
        im.save(out_dir / f"{f.stem}.jpg", "JPEG", quality=JPEG_Q, optimize=True, progressive=True)
        manifest["proof"][f.stem] = {"width": im.width, "height": im.height}


def build_brand(manifest: dict) -> None:
    src_dir = SRC / "brand"
    out_dir = OUT / "brand"
    out_dir.mkdir(parents=True, exist_ok=True)
    for name in ("crown-gold", "crown-white", "wordmark-gold"):
        with Image.open(src_dir / f"{name}.png") as raw:
            im = strip(raw)
        bbox = im.getchannel("A").getbbox() if im.mode == "RGBA" else None
        if bbox:
            im = im.crop(bbox)
        im.save(out_dir / f"{name}.png", "PNG", optimize=True)
        im.save(out_dir / f"{name}.webp", "WEBP", quality=90, method=6, lossless=False)
        manifest["brand"][name] = {"width": im.width, "height": im.height}

    # Icons from the 900px master crown, trimmed to its visible bounds.
    with Image.open(src_dir / "crown-gold-900.png") as raw:
        crown = strip(raw)
    crown = crown.crop(crown.getchannel("A").getbbox())

    def square(size: int, pad: float, bg: tuple | None) -> Image.Image:
        canvas = Image.new("RGBA", (size, size), (*bg, 255) if bg else (0, 0, 0, 0))
        inner = int(size * (1 - 2 * pad))
        c = crown.copy()
        c.thumbnail((inner, inner), Image.LANCZOS)
        canvas.alpha_composite(c, ((size - c.width) // 2, (size - c.height) // 2))
        return canvas

    square(64, 0.04, None).save(OUT / "favicon-64.png", "PNG", optimize=True)
    square(256, 0.04, None).save(
        ROOT / "public" / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)]
    )
    square(180, 0.14, PAGE_BG).convert("RGB").save(OUT / "apple-touch-icon.png", "PNG", optimize=True)


def mulberry32(seed: int):
    a = seed & 0xFFFFFFFF

    def imul(x: int, y: int) -> int:
        return (x * y) & 0xFFFFFFFF

    def nxt() -> float:
        nonlocal a
        a = (a + 0x6D2B79F5) & 0xFFFFFFFF
        t = imul(a ^ (a >> 15), 1 | a)
        t = ((t + imul(t ^ (t >> 7), 61 | t)) & 0xFFFFFFFF) ^ t
        return ((t ^ (t >> 14)) & 0xFFFFFFFF) / 4294967296

    return nxt


def build_grain() -> None:
    r = mulberry32(99)
    px = bytearray()
    for _ in range(160 * 160):
        v = int(r() * 255)
        px.append(v)
    Image.frombytes("L", (160, 160), bytes(px)).save(OUT / "grain.png", "PNG", optimize=True)


def main() -> None:
    if not features.check("webp"):
        fail("this Pillow build lacks WebP support")
    manifest: dict = {"proof": {}, "brand": {}}
    build_proof(manifest)
    build_brand(manifest)
    build_grain()
    (ROOT / "scripts" / "asset-manifest.json").write_text(json.dumps(manifest, indent=2, sort_keys=True) + "\n")
    print(f"built {len(manifest['proof'])} proof images, {len(manifest['brand'])} brand marks, icons, grain")


if __name__ == "__main__":
    main()
