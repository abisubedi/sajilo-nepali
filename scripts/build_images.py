"""Turn the artwork in art/ into the small transparent pictures the game uses.
Run: python3 scripts/build_images.py
- Every art/<name>.(jpg|jpeg|png|webp) whose name starts with w-, li-, st-, av- or pandu- becomes public/img/<name>.webp
  (skipped when the .webp is already newer than the original, so hand-tuned cut-outs are kept).
- cast-* files are reference sheets for drawing and are not used in the game.
- Writes public/img-manifest.js: window.IMG = { name: "img/name.webp?v=<hash>" } so updated pictures always reach phones,
  and window.IMG_ADDED = { name: "YYYY-MM-DD" }: the day each picture first appeared (kept in scripts/img_dates.json),
  so the game can feature the newest pictures (daily sticker drop, word of the day)."""
import datetime, hashlib, json, os, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ART, IMG = os.path.join(ROOT, "art"), os.path.join(ROOT, "public", "img")
PREFIXES = ("w-", "li-", "st-", "av-", "pandu-", "story-", "scene-", "s-")
os.makedirs(IMG, exist_ok=True)
made = []
for f in sorted(os.listdir(ART)):
    name, ext = os.path.splitext(f)
    if ext.lower() not in (".jpg", ".jpeg", ".png", ".webp") or not name.startswith(PREFIXES):
        continue
    src, out = os.path.join(ART, f), os.path.join(IMG, name + ".webp")
    if os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
        continue
    if name.startswith("scene-"):   # full-background scenes: no cut-out, just a sharp WebP
        from PIL import Image
        im = Image.open(src).convert("RGB"); im.thumbnail((1400, 1400)); im.save(out, "WEBP", quality=84, method=6); made.append(name); continue
    size = "512" if name.startswith("story-") else "384" if name.startswith(("st-", "av-", "pandu-", "s-")) else "320"
    # Pictures in the storybook style (from 2026-11-08) are round stickers: protect the circle.
    subprocess.run([sys.executable, os.path.join(ROOT, "scripts", "cutout.py"), src, out, size, "disk=auto"], check=True, capture_output=True)
    made.append(name)

DATES = os.path.join(ROOT, "scripts", "img_dates.json")
dates = json.load(open(DATES)) if os.path.exists(DATES) else {}
def first_added(name):
    out = subprocess.run(["git", "-C", ROOT, "log", "--diff-filter=A", "--format=%as", "--", f"public/img/{name}.webp"], capture_output=True, text=True).stdout.split()
    return out[-1] if out else datetime.date.today().isoformat()
manifest = {}
for f in sorted(os.listdir(IMG)):
    if f.endswith(".webp"):
        h = hashlib.sha1(open(os.path.join(IMG, f), "rb").read()).hexdigest()[:8]
        manifest[f[:-5]] = f"img/{f}?v={h}"
        if f[:-5] in made: dates[f[:-5]] = datetime.date.today().isoformat()   # new or redrawn: counts as newest
        elif f[:-5] not in dates: dates[f[:-5]] = first_added(f[:-5])
dates = {k: dates[k] for k in sorted(dates) if k in manifest}
json.dump(dates, open(DATES, "w"), indent=0)
with open(os.path.join(ROOT, "public", "img-manifest.js"), "w") as fh:
    fh.write("/* Pictures in public/img (built from art/ by scripts/build_images.py). ?v= changes when a picture changes. */\n")
    fh.write("window.IMG = " + json.dumps(manifest, indent=1) + ";\n")
    fh.write("window.IMG_ADDED = " + json.dumps(dates, separators=(",", ":")) + ";\n")
print(f"made {len(made)}: {', '.join(made) if made else '-'}\nmanifest: {len(manifest)} pictures")
