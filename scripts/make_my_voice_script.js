// Run: node scripts/make_my_voice_script.js
// Builds the "record it in my own voice" script: every Nepali clip the app plays (English car-ride questions left out),
// in 5 batches. Writes docs/my-voice/recording-script.md (to read from), docs/my-voice/script.json (id -> clip key, used by
// scripts/install_my_voice.py) and public/studio-script.js (used by the recording page at /studio.html).
const fs = require("fs"), path = require("path"), R = path.join(__dirname, "..");
global.window = {}; require(R + "/public/lessons.js"); require(R + "/public/audio-manifest.js");
const W = window, A = W.AUDIO, K = W.audioKey;
const BATCHES = [
  { n: 1, title: "Letters, numbers and the app's own phrases", tone: "Clear and friendly, a little slower than normal speech." },
  { n: 2, title: "Lessons: home, family, animals, travel, my body and feelings", tone: "Clear and friendly." },
  { n: 3, title: "Lessons: play, weather, culture, school, numbers and talking with grandparents", tone: "Clear and friendly." },
  { n: 4, title: "World of Words, festivals, calendar, missions, riddles and games", tone: "Clear and friendly; riddles a little playful." },
  { n: 5, title: "Stories, fables and rhymes", tone: "Warm storyteller. Bedtime stories softly and slowly; rhymes sing-song." }];
const rows = [[], [], [], [], [], []], seen = new Set();
const add = (b, key, read, rom, en, note) => { if (!key || seen.has(key) || !A[key] || key.startsWith("EN:")) return; seen.add(key); rows[b].push({ key, read: read.trim(), rom: rom || "", en: en || "", note: note || "" }); };
const addNe = (b, o, note) => { if (o && typeof o.ne === "string") add(b, K(o.ne), o.ne, o.rom, o.en || o.title, note); };
const walk = (b, o, note) => { if (Array.isArray(o)) return o.forEach(x => walk(b, x, note)); if (!o || typeof o !== "object") { if (typeof o === "string") add(b, K(o), o, "", "", note); return; }
  addNe(b, o, note); if (typeof o.say === "string") add(b, K(o.say), o.say, o.rom, o.en, note); if (typeof o.word === "string") add(b, K(o.word), o.word, o.wordRom, o.en, note);
  for (const [f, v] of Object.entries(o)) if (v && typeof v === "object") walk(b, v, note); };
const lesson = id => W.LESSONS.find(l => l.id === id);
const doLesson = (b, l) => { addNe(b, { ne: l.ne, rom: l.rom, en: l.title }, "lesson name");
  for (const it of l.items || []) { if (l.letters) add(b, W.letterKey(it), W.letterSpeech(it), it.word ? `${it.rom}, ${it.wordRom}` : it.rom, it.word ? `letter, then ${it.en}` : "letter sound", "say the letter, a short pause, then the word"); walk(b, it); }
  for (const s of l.sentences || []) { if (Array.isArray(s.ne)) { add(b, K(s.ne.join(" ")), s.ne.join(" ") + (/\?$/.test(s.en || "") ? "?" : "।"), (s.rom || []).join(" "), s.en, "whole sentence"); s.ne.forEach((w, i) => add(b, K(w), w, (s.rom || [])[i], "", "single word tile")); } else walk(b, s); } };
const ch = id => W.CHAPTERS.find(c => c.id === id);
// Batch 1: letters chapter, counting words, the app's own phrases, chapter and sticker lines
for (const p of Object.values(W.PHRASES)) if (typeof p === "string") add(1, K(p), p, "", "", "app phrase");
W.CHEERS.forEach(c => add(1, K(c[0]), c[0], c[1], c[2], "praise"));
[W.CREDIT_INTRO, W.STICKER_PANDU, W.STICKER_LOCKED].forEach(s => s && addNe(1, s, "sticker line"));
W.CHAPTERS.forEach(c => { addNe(1, c, "chapter name"); addNe(1, c.sticker && c.sticker.say, "sticker line"); });
ch("letters").lessons.forEach(id => doLesson(1, lesson(id))); doLesson(1, lesson("num")); doLesson(1, lesson("numbers-11-20"));
// Batches 2 and 3: the other lessons, chapter by chapter
["home", "nature", "me"].forEach(c => ch(c).lessons.forEach(id => doLesson(2, lesson(id))));
["play", "culture", "school", "talk"].forEach(c => ch(c).lessons.forEach(id => doLesson(3, lesson(id))));
// Batch 4: World of Words, then everything outside the lessons except stories and rhymes
ch("words").lessons.forEach(id => doLesson(4, lesson(id)));
const STORYISH = new Set(["STORY", "STORY2", "TALES", "RHYMES", "RHYMES_TITLE", "GOODNIGHT", "STORY_OPEN", "STORY_CLOSE"]);
for (const k of Object.keys(W)) if (!["LESSONS", "AUDIO", "CHAPTERS", "PHRASES", "CHEERS", "NAME_DICT"].includes(k) && !STORYISH.has(k) && typeof W[k] === "object") walk(4, W[k], k.toLowerCase().replace(/_/g, " "));
// Batch 5: stories and rhymes
[W.STORY_OPEN, W.STORY_CLOSE].forEach(s => addNe(5, s, "story opening / ending"));
[W.STORY, W.STORY2].forEach(s => { addNe(5, s, "bedtime story title"); s.pages.forEach(p => addNe(5, p, "bedtime story: softly")); });
(W.TALES || []).forEach(t => { addNe(5, t, "story title"); walk(5, t.pages, `story: ${t.en}`); walk(5, t.quiz, `story question: ${t.en}`); });
addNe(5, W.RHYMES_TITLE, "rhymes"); (W.RHYMES || []).forEach(r => walk(5, r, "rhyme: sing-song")); addNe(5, W.GOODNIGHT, "goodnight: softly");
// anything the app plays that the data walk did not reach (a handful of phrases written in the app itself)
const left = Object.keys(A).filter(k => !k.startsWith("EN:") && !seen.has(k)); left.forEach(k => add(4, k, k + "।", "", "", "app phrase"));
let md = `# Sajilo Nepali: recordings in my own voice\n\n${rows.flat().length} Nepali clips in 5 batches (the English car-ride questions are not included).\nRead the **Nepali** column exactly as written. The other columns are only there to help.\nThe easiest way to record is the recording page: https://sajilonepali.app/studio.html (see docs/my-voice/HOW-TO-RECORD.md).\n\n`;
const out = { batches: [] }, studio = [];
BATCHES.forEach(B => { const rs = rows[B.n]; rs.forEach((r, i) => r.id = `${B.n}-${String(i + 1).padStart(3, "0")}`);
  md += `## Batch ${B.n}: ${B.title} (${rs.length} clips)\n\nTone: ${B.tone}\n\n| ID | Nepali (read this) | How to say it | Meaning | Note |\n|---|---|---|---|---|\n` + rs.map(r => `| ${r.id} | ${r.read.replace(/\|/g, "/")} | ${r.rom} | ${(r.en || "").replace(/\|/g, "/")} | ${r.note} |`).join("\n") + "\n\n";
  out.batches.push({ n: B.n, title: B.title, rows: rs.map(r => ({ id: r.id, key: r.key, slow: B.n === 5 })) });
  studio.push({ n: B.n, title: B.title, tone: B.tone, rows: rs.map(r => [r.id, r.read, r.rom, r.en, r.note]) }); });
fs.writeFileSync(R + "/docs/my-voice/recording-script.md", md);
fs.writeFileSync(R + "/docs/my-voice/script.json", JSON.stringify(out));
fs.writeFileSync(R + "/public/studio-script.js", "/* Lines for the recording page (studio.html). Built by scripts/make_my_voice_script.js */\nwindow.STUDIO = " + JSON.stringify(studio) + ";\n");
console.log(BATCHES.map(B => `batch ${B.n}: ${rows[B.n].length}`).join(", "), "| total", rows.flat().length, "| left over", left.length);
