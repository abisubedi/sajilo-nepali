// Run: node scripts/make_daily_prompts.js
// Splits the picture prompts into one file per day (one chapter each) in docs/image-prompts-by-day/.
const fs = require('fs'), path = require('path');
global.window = {}; require(path.join(__dirname, '..', 'public', 'lessons.js'));
const D = require('./prompts_data.js');
const OUT = path.join(__dirname, '..', 'docs', 'image-prompts-by-day');
fs.mkdirSync(OUT, { recursive: true });
const IMG = path.join(__dirname, '..', 'public', 'img');
const isLabel = s => /^(SUN|MON|TUE|WED|THU|FRI|SAT|\d+)$/.test(s);
const slug = s => s.toLowerCase().replace(/\(polite\)/g, 'polite').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const { styleFor, SINCE } = require('./art_style.js');
const OLD_STYLE = "Cute children's game illustration, flat vector style with soft shading, thick rounded dark-navy outlines, people and animals have big friendly eyes while objects and food stay simple without faces, simple clear shapes, bright cheerful colors (crimson red, royal blue, leaf green, marigold yellow, warm orange), Nepali cultural setting, one clear subject centered with empty space around it, plain white background, no text, no letters, no numbers, no watermark, suitable for kids aged 4–15.";
const CASTNAMES = [["Maya", "cast-maya"], ["Arjun", "cast-arjun"], ["Aama", "cast-aama"], ["Baba", "cast-baba"], ["Didi", "cast-didi"], ["Dai", "cast-dai"],
  ["Bahini", "cast-bahini"], ["Bhai", "cast-bhai"], ["Hajuraama", "cast-hajuraama"], ["Hajurbaa", "cast-hajurbaa"], ["the teacher", "cast-teacher"]];
const refsFor = s => CASTNAMES.filter(([n]) => new RegExp(`\\b${n}\\b`).test(s)).map(([, f]) => f + '.png');

const done = new Set(), days = [];
const item = (file, subject, used, size = "512x512") => ({ file: file + '.png', subject, used: [used], size });
const take = (list, it) => { if (done.has(it.file)) { const o = days.flatMap(d => d.items).find(x => x.file === it.file); if (o) o.used.push(...it.used); return; } done.add(it.file); list.push(it); };

// New storybook style: the pictures kids see most come first.
const PANDU_MORE = [["pandu-tea", "sitting happily and holding a small steaming cup of Nepali chiya (milk tea) in both paws, a little morning sun behind, cozy and cheerful"],
  ["pandu-bike", "riding a small red bicycle with a happy open-mouthed smile, tail flying behind, a few motion lines, playful afternoon fun"]];
{ const items = [];
  [...D.PANDU, ...PANDU_MORE].forEach(([f, pose]) => take(items, item(f, `${D.C.pandu}, ${pose}`, f === "pandu-tea" ? "home screen, mornings" : f === "pandu-bike" ? "home screen, afternoons" : "mascot", "1024x1024")));
  D.CAST.forEach(([f, d]) => take(items, item(f, `character reference sheet of ${d}, front view, full body, standing in a neutral friendly pose`, "reference for every picture with this person", "1024x1024")));
  days.push({ title: "Pandu and the family (cast)", items }); }
{ const items = [];
  for (const c of window.CHAPTERS) for (const id of c.lessons) { const l = window.LESSONS.find(x => x.id === id); if (D.LI[id]) take(items, item('li-' + id, `a simple bold icon of ${D.LI[id]}`, `lesson circle on the map: ${l.title}`)); }
  D.STICKERS.forEach(([f, name, d]) => take(items, item(f, d, `sticker book and chapter pills: ${name}`)));
  D.AVATARS.forEach(([f, d]) => take(items, item(f, `head-and-shoulders portrait of ${d}`, "Who is playing? picker")));
  days.push({ title: "Map circles, chapter stickers and player pictures", items }); }
window.CHAPTERS.forEach((c, ci) => {
  const items = [];
  for (const id of c.lessons) {
    const l = window.LESSONS.find(x => x.id === id);
    for (const it of l.items || []) {
      if (it.word) { const d = D.LW[it.word]; if (d) take(items, item('w-' + slug(it.en), d, `${l.title}: ${it.ne} = ${it.word} (${it.en})`)); }
      else if (!isLabel(it.pic) && !/^Say /.test(it.en)) { const d = D.W[it.en.toLowerCase()]; if (d) take(items, item('w-' + slug(it.en), d, `${l.title}: ${it.ne} = ${it.en}`)); }
    }
  }
  days.push({ title: `Chapter ${ci + 1}: ${c.ne} (${c.en})`, items });
});
{ const items = []; D.UI.forEach(([f, d]) => take(items, item(f, `a small simple bold game icon of ${d}`, "game interface", "256x256")));
  take(items, item("app-icon", `${D.C.pandu}, face and shoulders, waving, on a solid sky-blue (#e8f4ff) background filling the whole square, no text`, "home-screen app icon (keep the full background)", "1024x1024"));
  take(items, item("og-image", `a wide banner: ${D.C.pandu} waving on the left, white Himalayan peaks and colorful prayer flags along the top, sky-blue background, empty space on the right for the title, no text`, "link preview when the site is shared (keep the full background)", "1200x630"));
  days.push({ title: "Game icons, app icon and link preview", items }); }
{ const items = []; for (const l of window.LESSONS) for (const [i, s] of (l.sentences || []).entries())
    take(items, item(`s-${l.id}-${i + 1}`, `a warm everyday scene that shows the meaning of the sentence "${s.en}", with ${/grand/i.test(s.en) ? D.C.hajuraama + ' or ' + D.C.hajurbaa : D.C.maya + ' or ' + D.C.arjun}, at home or outdoors in Nepal`, `${l.title}: ${s.ne.join(' ')}`, "1024x768"));
  days.push({ title: "Sentence scenes (optional)", items }); }

const ART = path.join(__dirname, '..', 'art'), artFiles = fs.existsSync(ART) ? fs.readdirSync(ART) : [];
const { execFileSync } = require('child_process');
const newStyle = file => {
  const f = artFiles.find(x => x.replace(/\.[a-z]+$/i, '') === file); if (!f) return false;
  let d = ""; try { d = execFileSync('git', ['-C', path.join(__dirname, '..'), 'log', '-1', '--format=%as', '--', 'art/' + f], { encoding: 'utf8' }).trim(); } catch (e) {}
  return !d || d >= SINCE;
};
const have = f => newStyle(f.replace(/\.png$/, ''));
let index = `# Picture prompts, one day at a time\n\nNew storybook sketch style from ${SINCE} (see pandu-namaste). Done counts pictures added or redrawn since then; older pictures stay in the game until they are replaced.\n\n| Day | What | Pictures | Done |\n|---|---|---|---|\n`;
days.forEach((d, i) => {
  const n = i + 1, file = `day-${String(n).padStart(2, '0')}.md`, got = d.items.filter(x => have(x.file)).length;
  index += `| ${n} | [${d.title}](${file}) | ${d.items.length} | ${got}/${d.items.length} |\n`;
  let md = `# Day ${n} of ${days.length}: ${d.title}\n\n${d.items.length} pictures in the **storybook sketch style** (ink outlines, colored pencil, watercolor, round sticker). Every prompt is complete, so paste it as is.\n\n`;
  md += `**Tips**\n- Same tool and settings as pandu-namaste, and attach **pandu-namaste** as a style reference for every picture.\n- White outside the circle is fine: I remove it.\n- Where it says **Attach**, also add that cast picture so the person looks the same everywhere.${n === 1 ? ' Make the 11 cast sheets today: every picture with people uses them.' : ''}\n- Keep the file names. A new picture with an old name replaces the old one in the game automatically.\n- Send them in batches of 5–10, each batch in a new message, or upload them to art/ on GitHub.\n\n`;
  md += `## Checklist\n\n${d.items.map(x => `- [${have(x.file) ? 'x' : ' '}] ${x.file}`).join('\n')}\n\n## Prompts\n\n`;
  for (const x of d.items) {
    const refs = [x.file.startsWith('pandu-') || /Pandu/.test(x.subject) ? 'pandu-namaste.png (style + Pandu)' : 'pandu-namaste.png (style reference)', ...(x.file.startsWith('cast-') ? [] : refsFor(x.subject))];
    md += `### ${x.file}\n${x.size} · used for: ${x.used.join('; ')}${refs.length ? `\n\n**Attach:** ${refs.join(', ')}` : ''}\n\n> ${styleFor(x.file)} Subject: ${x.subject}.\n\n`;
  }
  fs.writeFileSync(path.join(OUT, file), md);
});
fs.writeFileSync(path.join(OUT, 'README.md'), index);
console.log(days.map((d, i) => `Day ${i + 1}: ${d.title} — ${d.items.length}`).join('\n'));
