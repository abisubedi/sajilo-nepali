"""Turn the artwork in art/ into the small transparent pictures the game uses.
Run: python3 scripts/build_images.py
- Every art/<name>.(jpg|jpeg|png|webp) whose name starts with w-, li-, st-, av- or pandu- becomes public/img/<name>.webp
  (skipped when the .webp is already newer than the original, so hand-tuned cut-outs are kept).
- cast-* files are reference sheets for drawing and are not used in the game.
- Writes public/img-manifest.js: window.IMG = { name: "img/name.webp?v=<hash>" } so updated pictures always reach phones."""
import hashlib, json, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART, IMG = os.path.join(ROOT, "art"), os.path.join(ROOT, "public", "img")
PREFIXES = ("w-", "li-", "st-", "av-", "pandu-")
os.makedirs(IMG, exist_ok=True)
made = []
for f in sorted(os.listdir(ART)):
    name, ext = os.path.splitext(f)
    if ext.lower() not in (".jpg", ".jpeg", ".png", ".webp") or not name.startswith(PREFIXES):
        continue
    src, out = os.path.join(ART, f), os.path.join(IMG, name + ".webp")
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        continue
    size = "384" if name.startswith(("st-", "av-", "pandu-")) else "320"
    subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "cutout.py"), src, out, size], check=True, capture_output=True)
    made.append(name)

manifest = {}
for f in sorted(os.listdir(IMG)):
    if f.endswith(".webp"):
        h = hashlib.sha1(open(os.path.join(IMG, f), "rb").read()).hexdigest()[:8]
        manifest[f[:-5]] = f"img/{f}?v={h}"
with open(os.path.join(ROOT, "public", "img-manifest.js"), "w") as fh:
    fh.write("/* Pictures in public/img (built from art/ by scripts/build_images.py). ?v= changes when a picture changes. */\n")
    fh.write("window.IMG = " + json.dumps(manifest, indent=1) + ";\n")
print(f"made {len(made)}: {', '.join(made) if made else '-'}\nmanifest: {len(manifest)} pictures")
