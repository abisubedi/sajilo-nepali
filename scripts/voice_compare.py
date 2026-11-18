#!/usr/bin/env python3
"""Compare new voice takes with what the app plays now, then switch the ones you like.

  python3 scripts/voice_compare.py build  lines.json "Title of the comparison"
  python3 scripts/voice_compare.py apply  lines.json

lines.json is a list of {"text": "<Nepali line exactly as in the app>", "en": "<optional meaning>",
"file": "<path to the new take (mp3/m4a/wav)>", "story": true|false, "heading": "<optional section heading before this line>"}.
build: cleans each new take the same way as the app's recordings (rumble/hiss filtered, dead air trimmed,
pauses inside a line kept to 0.3 s, 0.6 s for story lines, even loudness) into public/compare/, and writes
public/compare.html (not linked from the app, hidden from search engines) with "current" and "new" buttons per line.
apply: copies the cleaned new takes over the app's clips (same file names, new ?v= tags) and removes the compare page.
The previous recordings stay in recording/ (the original batch zips), so any line can be switched back.
"""
import hashlib, html, json, os, re, shutil, subprocess, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
key = lambda t: re.sub(r"[!।?.,]", "", t).strip()
man = os.path.join(PUB, "audio-manifest.js")
src = open(man, encoding="utf-8").read()
m = re.search(r"window\.AUDIO = (\{.*\});?\s*$", src, re.S)
AUD = json.loads(m.group(1))

def clean(inp, out, story):
    gap, lufs = (0.6, -21) if story else (0.3, -19)
    chain = (f"highpass=f=80,lowpass=f=12000,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.04:"
             f"stop_periods=-1:stop_duration={gap + .15}:stop_threshold=-45dB:stop_silence={gap},"
             "areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.06,areverse,"
             f"loudnorm=I={lufs}:TP=-1.5:LRA=11,afade=t=in:d=0.01,apad=pad_dur=0.08")
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", inp, "-af", chain, "-ac", "1", "-ar", "44100", "-b:a", "96k", out], check=True)

def build(lines, title):
    os.makedirs(os.path.join(PUB, "compare"), exist_ok=True)
    rows = []
    for i, L in enumerate(lines):
        out = f"compare/new-{i:03d}.mp3"
        clean(L["file"], os.path.join(PUB, out), L.get("story"))
        cur = AUD.get(key(L["text"]))
        head = f'<h2>{html.escape(L["heading"])}</h2>' if L.get("heading") else ""
        mine = f'<button onclick="play(\'{cur}\',this)">▶ Now in the app</button>' if cur else '<button disabled>(not in the app yet)</button>'
        rows.append(f'{head}<div class="row"><p class="ne" lang="ne">{html.escape(L["text"])}</p>'
                    + (f'<p class="en">{html.escape(L["en"])}</p>' if L.get("en") else "")
                    + f'<div class="btns">{mine}<button class="el" onclick="play(\'{out}\',this)">▶ New version</button></div></div>')
    page = f'''<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Voice comparison · Sajilo Nepali</title>
<link rel="stylesheet" href="fonts/fonts.css"><style>body{{margin:0;font:16px/1.5 Nunito,system-ui,sans-serif;background:#e8f4ff;color:#1f2a44}}main{{max-width:720px;margin:0 auto;padding:18px}}h1,h2{{font-family:"Baloo 2",sans-serif}}
.row{{background:#fff;border-radius:14px;padding:12px 16px;margin:10px 0;box-shadow:0 2px 8px rgba(31,42,68,.08)}}.ne{{font-family:"Baloo 2",sans-serif;font-size:20px;margin:0}}.en{{color:#5a6780;font-size:14px;margin:4px 0 0}}
.btns{{display:flex;gap:8px;margin-top:10px;flex-wrap:wrap}}button{{flex:1;min-width:150px;font:700 15px Nunito,sans-serif;padding:10px;border-radius:12px;border:2px solid #2f6fd6;background:#fff;color:#2f6fd6}}button[disabled]{{opacity:.45;border-color:#999;color:#666}}button.el{{border-color:#e8742a;color:#e8742a}}button.on{{background:#2f6fd6;color:#fff}}button.el.on{{background:#e8742a;color:#fff}}</style></head>
<body><main><h1>{html.escape(title)}</h1><p><b style="color:#2f6fd6">Blue</b>: what the app plays now. <b style="color:#e8742a">Orange</b>: the new version. Both cleaned the same way.</p>{"".join(rows)}</main>
<script>let a=new Audio(),b=null;function play(s,btn){{a.pause();if(b)b.classList.remove("on");if(b===btn){{b=null;return}}a=new Audio(s);b=btn;btn.classList.add("on");a.onended=()=>{{btn.classList.remove("on");b=null}};a.play()}}</script></body></html>'''
    open(os.path.join(PUB, "compare.html"), "w", encoding="utf-8").write(page)
    print(f"built compare.html with {len(rows)} lines")

def apply(lines):
    n = 0
    for i, L in enumerate(lines):
        k = key(L["text"]); new = os.path.join(PUB, f"compare/new-{i:03d}.mp3")
        if k not in AUD or not os.path.exists(new):
            print("  skipped (not in the app or not built):", L["text"][:30]); continue
        rel = AUD[k].split("?")[0]; shutil.copy(new, os.path.join(PUB, rel))
        AUD[k] = rel + "?v=" + hashlib.sha1(open(os.path.join(PUB, rel), "rb").read()).hexdigest()[:8]; n += 1
    open(man, "w", encoding="utf-8").write(src[:m.start()] + "window.AUDIO = " + json.dumps(AUD, ensure_ascii=False, indent=1) + ";\n")
    shutil.rmtree(os.path.join(PUB, "compare"), ignore_errors=True)
    if os.path.exists(os.path.join(PUB, "compare.html")): os.remove(os.path.join(PUB, "compare.html"))
    print(f"switched {n} lines; compare page removed")

if __name__ == "__main__":
    if len(sys.argv) < 3 or sys.argv[1] not in ("build", "apply"): sys.exit(__doc__)
    L = json.load(open(sys.argv[2], encoding="utf-8"))
    build(L, sys.argv[3] if len(sys.argv) > 3 else "Voice comparison") if sys.argv[1] == "build" else apply(L)
