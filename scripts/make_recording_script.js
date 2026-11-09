// Run: node scripts/make_recording_script.js .
// Builds a numbered recording script of every clip the game uses, in lesson order.
const fs = require('fs'), path = require('path');
global.window = {}; const R = process.argv[2];
require(path.join(R, 'public/lessons.js')); require(path.join(R, 'public/audio-manifest.js'));
const W = window, K = W.audioKey, seen = new Set(), sections = [];
let cur = null; const sec = t => { cur = { title: t, rows: [] }; sections.push(cur); };
const POLITE = new Set(["उठ","हेर","सुत","दौड","उफ्र","नाच","हाँस","फ्याँक","समात","लुक","सुन","खोल","पर्ख","जित","फुकाल","दाँत माझ","किताब पढ","बन्द गर","सफा गर","ढोका बन्द गर","खेलौना मिलाएर राख","मलाई पर्ख","भकुण्डो मलाई फ्याँक","साँझमा दियो बाल","ठूलो हात्ती हेर","गर","राख","बाल"]);
const add = (key, say, rom, en) => { if (!key || seen.has(key) || !W.AUDIO[key]) return; seen.add(key); cur.rows.push({ key, say, rom: rom || '', en: en || '', polite: POLITE.has(key) }); };
sec("Greetings, Pandu and stickers");
add(K(W.PHRASES.hello), W.PHRASES.hello, 'namaste!', 'Hello!'); add(K(W.PHRASES.morning), W.PHRASES.morning, 'shubha bihaani!', 'Good morning!');
add(K(W.PHRASES.night), W.PHRASES.night, 'shubha raatri!', 'Good night!'); add(K(W.PHRASES.brand), W.PHRASES.brand, 'sajilo nepaali', 'Easy Nepali');
add(K(W.PHRASES.stickers), W.PHRASES.stickers, 'mero stikar', 'My stickers'); add(K(W.PHRASES.wellDone), W.PHRASES.wellDone, 'syaabaas!', 'Well done!');
add(K(W.PHRASES.tryAgain), W.PHRASES.tryAgain, 'pheri prayas garaun!', "Let's try again!");
W.CHEERS.forEach(c => add(K(c[0]), c[0], c[1], c[2]));
[W.CREDIT_INTRO, W.STICKER_PANDU, W.STICKER_LOCKED, ...W.CHAPTERS.map(c => c.sticker.say)].forEach(s => add(K(s.ne), s.ne, s.rom, s.en));
W.CHAPTERS.forEach((c, ci) => {
  sec(`Chapter ${ci + 1}: ${c.ne} (${c.en})`); add(K(c.ne), c.ne, c.rom, c.en);
  for (const id of c.lessons) {
    const l = W.LESSONS.find(x => x.id === id); add(K(l.ne), l.ne, l.rom, l.title);
    for (const it of l.items || []) {
      if (l.letters) { add(W.letterKey(it), W.letterSpeech(it), it.word ? `${it.rom}, ${it.wordRom}` : it.rom, it.word ? `letter ${it.ne}, then the word ${it.word} (${it.en})` : `the letter sound ${it.ne}`); if (it.word) add(K(it.word), it.word, it.wordRom, it.en); }
      else add(K(it.ne), it.ne, it.rom, it.en);
    }
    for (const s of l.sentences || []) { add(K(s.ne.join(' ')), s.ne.join(' ') + (/\?$/.test(s.en) ? '?' : '।'), s.rom.join(' '), s.en); s.ne.forEach((w, i) => add(K(w), w, s.rom[i], 'sentence tile')); }
  }
});
sec("Family tree and missions");
if (W.KIN) { [...W.KIN.dad, ...W.KIN.mom, ...W.KIN.me, W.KIN.greetElder].forEach(x => add(K(x.ne), x.ne + "।", x.rom, x.who || x.en)); }
(W.MISSIONS || []).forEach(m => add(K(m.ne), m.ne, m.rom, m.en));
sec("Riddles, bedtime story and sound-word sentences");
(W.RIDDLES || []).forEach(r => { add(K(r.say), r.say, r.rom, r.en); add(K(r.answer.ne), r.answer.ne + "।", r.answer.rom, r.answer.en); });
if (W.RIDDLE_TITLE) add(K(W.RIDDLE_TITLE.ne), W.RIDDLE_TITLE.ne + "!", W.RIDDLE_TITLE.rom, W.RIDDLE_TITLE.en);
if (W.STORY) { add(K(W.STORY.ne), W.STORY.ne + "। (softly)", W.STORY.rom, W.STORY.en); W.STORY.pages.forEach(p => add(K(p.ne), p.ne + " (softly)", p.rom, p.en)); }
W.LESSONS.forEach(l => (l.items || []).forEach(it => it.ex && add(K(it.ex.ne), it.ex.ne, it.ex.rom, it.ex.en)));
['गिलास', 'आलु', 'सोफा', 'गलैंचा', 'टिभी', 'जून'].forEach(w => add(K(w), w + "।", "", "word"));
sec("Extra sentence tiles"); W.EXTRA_TILES.forEach(t => add(K(t[0]), t[0], t[1], 'sentence tile'));

let n = 0; sections.forEach(s => s.rows.forEach(r => r.id = String(++n).padStart(3, '0')));
let md = `# Sajilo Nepali: recording script\n\nEvery clip in the game, ${n} in total, numbered in the order they appear.\n\n` +
`## How to record\n\n1. **One recording per section** is easiest. Read the lines in order and **pause about 1 second** between lines. Start each section by saying nothing for 1 second.\n` +
`2. If you slip, pause, then **say the line again**. Tell me the number and I'll use the second take.\n` +
`3. Quiet room, phone or mic about a hand's width from your mouth, the same place and volume each time.\n` +
`4. Lines marked **(polite)** are timi-form commands: say the final "a" (utha, not uth).\n` +
`5. Save as mp3 (m4a or wav also fine) and name each file by its section number, like \`section-01.mp3\`, \`section-02.mp3\`. Single re-takes can be named by line number, like \`137.mp3\`.\n` +
`6. Upload to a **voice** folder in the repo on GitHub and commit, then tell me which sections are done.\n\n`;
sections.forEach((s, i) => { if (!s.rows.length) return; md += `## Section ${String(i + 1).padStart(2, '0')}: ${s.title} (${s.rows.length} lines)\n\n| # | Say | How to say it | Meaning |\n|---|---|---|---|\n` + s.rows.map(r => `| ${r.id} | ${r.say}${r.polite ? ' **(polite)**' : ''} | ${r.rom} | ${r.en} |`).join('\n') + '\n\n'; });
fs.writeFileSync(path.join(R, 'docs/recording-script.md'), md);
fs.writeFileSync(path.join(R, 'docs/recording-script.json'), JSON.stringify(sections.map((s, i) => ({ section: i + 1, title: s.title, rows: s.rows.map(r => ({ id: r.id, key: r.key })) })), null, 0));
console.log(sections.map((s, i) => `Section ${i + 1}: ${s.title} — ${s.rows.length}`).join('\n') + `\nTOTAL ${n} of ${Object.keys(W.AUDIO).length}`);
