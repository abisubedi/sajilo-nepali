"""Run: python3 scripts/build_coloring.py
Turns every story picture (public/img/story-*.webp and tale-*.webp) into a black-and-white
coloring page (public/img/color-<name>.webp) and writes public/coloring-manifest.js.
Run it after build_images.py whenever story pictures change."""
import glob, hashlib, json, os
import numpy as np
from PIL import Image, ImageFilter, ImageOps
ROOT = os.path.join(os.path.dirname(__file__), "..", "public")
out = {}
for f in sorted(glob.glob(os.path.join(ROOT, "img", "story-*.webp")) + glob.glob(os.path.join(ROOT, "img", "tale-*.webp"))):
    name = os.path.basename(f)[:-5]
    im = Image.open(f).convert("RGBA")
    flat = Image.new("RGB", im.size, "white"); flat.paste(im, mask=im.split()[3])   # transparent edges become paper
    g = ImageOps.grayscale(flat)
    inv = ImageOps.invert(g).filter(ImageFilter.GaussianBlur(6))
    a = np.asarray(g).astype(float); b = np.asarray(inv).astype(float)
    d = np.clip(a * 255 / (255 - b + 1e-3), 0, 255)          # pencil-sketch "color dodge"
    d = np.where(d < 215, d * 0.55, 255)                       # keep the ink lines, wipe the paint
    sk = Image.fromarray(d.astype("uint8"))
    if sk.width > 1200: sk = sk.resize((1200, round(1200 * sk.height / sk.width)), Image.LANCZOS)
    dest = os.path.join(ROOT, "img", f"color-{name}.webp")
    sk.save(dest, "WEBP", quality=72)
    out[name] = f"img/color-{name}.webp?v=" + hashlib.sha1(open(dest, "rb").read()).hexdigest()[:8]
with open(os.path.join(ROOT, "coloring-manifest.js"), "w") as fh:
    fh.write("/* Coloring pages made from the story pictures by scripts/build_coloring.py */\nwindow.COLORING = " + json.dumps(out, indent=1) + ";\n")
print("coloring pages:", len(out))
