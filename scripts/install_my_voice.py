#!/usr/bin/env python3
"""Install recordings made in my own voice.

Usage:  python3 scripts/install_my_voice.py recordings/sajilo-voice-batch-1.zip [more zips or folders ...] [--dry-run]

Each file is named by its line ID (for example 1-005.m4a), as the recording page (public/studio.html) saves them.
docs/my-voice/script.json maps every ID to the clip it replaces. Each recording is cleaned up the same way:
  rumble removed (high-pass 70 Hz), silence trimmed at both ends, loudness evened out
  (-19 LUFS for words and phrases, -21 for story narration), a 10 ms fade-in, 80 ms of quiet at the end,
  mono 96 kbps MP3.
It replaces the old clip file in place and gives it a new ?v= tag in public/audio-manifest.js so phones fetch the new one.
--dry-run processes everything into a temporary folder and reports, without touching the app.
"""
import hashlib, json, os, re, subprocess, sys, tempfile, zipfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
args = [a for a in sys.argv[1:] if not a.startswith("--")]
DRY = "--dry-run" in sys.argv
if not args:
    sys.exit(__doc__)

script = json.load(open(os.path.join(ROOT, "docs/my-voice/script.json")))
ids = {r["id"]: r for b in script["batches"] for r in b["rows"]}
man_path = os.path.join(ROOT, "public/audio-manifest.js")
src = open(man_path, encoding="utf-8").read()
m = re.search(r"window\.AUDIO = (\{.*\});?\s*$", src, re.S)
AUDIO = json.loads(m.group(1))

work = tempfile.mkdtemp(prefix="myvoice-")
found = {}  # id -> path of the raw recording
for a in args:
    paths = []
    if zipfile.is_zipfile(a):
        with zipfile.ZipFile(a) as z:
            for n in z.namelist():
                if n.endswith("/"):
                    continue
                out = os.path.join(work, "raw", os.path.basename(n))
                os.makedirs(os.path.dirname(out), exist_ok=True)
                with z.open(n) as f, open(out, "wb") as g:
                    g.write(f.read())
                paths.append(out)
    elif os.path.isdir(a):
        paths = [os.path.join(a, n) for n in os.listdir(a)]
    else:
        paths = [a]
    for p in paths:
        mid = re.match(r"^(\d-\d{3})\.(m4a|mp4|webm|ogg|wav|mp3|aiff?|caf)$", os.path.basename(p), re.I)
        if mid:
            found[mid.group(1)] = p
        elif not p.endswith(".txt"):
            print("  ? not a recording name, skipped:", os.path.basename(p))

def duration(p):
    out = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", p], capture_output=True, text=True).stdout.strip()
    return float(out or 0)

done, warn = 0, []
for rid in sorted(found):
    if rid not in ids:
        warn.append(f"{rid}: no such line in the script")
        continue
    row, raw = ids[rid], found[rid]
    key = row["key"]
    if key not in AUDIO:
        warn.append(f"{rid}: the app no longer plays this line ({key})")
        continue
    rel = AUDIO[key].split("?")[0]
    dest = os.path.join(work, "out", os.path.basename(rel)) if DRY else os.path.join(ROOT, "public", rel)
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    lufs = -21 if row.get("slow") else -19
    chain = ("highpass=f=70,"
             "silenceremove=start_periods=1:start_threshold=-42dB:start_silence=0.05,areverse,"
             "silenceremove=start_periods=1:start_threshold=-42dB:start_silence=0.05,areverse,"
             f"loudnorm=I={lufs}:TP=-1.5:LRA=11,afade=t=in:d=0.01,apad=pad_dur=0.08")
    r = subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", raw, "-af", chain, "-ac", "1", "-ar", "44100", "-b:a", "96k", dest], capture_output=True, text=True)
    if r.returncode:
        warn.append(f"{rid}: could not read the file ({r.stderr.strip()[:120]})")
        continue
    d = duration(dest)
    if d < 0.3:
        warn.append(f"{rid}: only {d:.2f}s long, maybe silent")
    elif d > (60 if row.get("slow") else 12):
        warn.append(f"{rid}: {d:.1f}s long, maybe extra talking at the end")
    if not DRY:
        AUDIO[key] = rel + "?v=" + hashlib.sha1(open(dest, "rb").read()).hexdigest()[:8]
    done += 1

if not DRY and done:
    open(man_path, "w", encoding="utf-8").write(src[:m.start()] + "window.AUDIO = " + json.dumps(AUDIO, ensure_ascii=False, indent=1) + ";\n")

batches = sorted({rid[0] for rid in found})
for b in batches:
    want = [r["id"] for r in next(x for x in script["batches"] if str(x["n"]) == b)["rows"]]
    missing = [i for i in want if i not in found]
    print(f"batch {b}: {len([i for i in want if i in found])} of {len(want)} lines recorded" + (f"; missing: {', '.join(missing[:40])}{' ...' if len(missing) > 40 else ''}" if missing else ""))
print(f"{'checked' if DRY else 'installed'} {done} recordings" + (f" (dry run, output in {work}/out)" if DRY else ""))
for w in warn:
    print("  !", w)
