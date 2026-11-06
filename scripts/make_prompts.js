// Run: node scripts/make_prompts.js
// Builds docs/image-prompts.md and docs/image-prompts.csv from the lessons, so every picture in the game has a prompt.
const fs = require('fs');
global.window = {}; require(require('path').join(__dirname, '..', 'public', 'lessons.js'));
const D = require('./prompts_data.js');
const OUT = require('path').join(__dirname, '..', 'docs');
const isLabel = s => /^(SUN|MON|TUE|WED|THU|FRI|SAT|\d+)$/.test(s);
const slug = s => s.toLowerCase().replace(/\(polite\)/g, 'polite').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const STYLE = "Cute children's game illustration, flat vector style with soft shading, thick rounded dark-navy outlines, people and animals have big friendly eyes while objects and food stay simple without faces, simple clear shapes, bright cheerful colors (crimson red #e2453c, royal blue #2f6fd6, leaf green #2fa75a, marigold yellow #f6b71c, warm orange #e8742a), Nepali cultural setting, one clear subject centered with empty space around it, isolated on a transparent background, no text, no letters, no numbers, no watermark, suitable for kids aged 4–15.";
const rows = [], missing = [], seen = new Map();
const add = (group, file, subject, usedFor, size = "1024x1024") => {
  if (seen.has(file)) { seen.get(file).used.push(usedFor); return; }
  const r = { group, file: file + ".png", size, subject, prompt: `${STYLE} Subject: ${subject}.`, used: [usedFor] };
  seen.set(file, r); rows.push(r);
};

D.CAST.forEach(([f, d]) => add("1. Cast reference sheets (make these first)", f, `character reference sheet of ${d}, front view, full body, standing in a neutral friendly pose`, "reference only"));
D.PANDU.forEach(([f, pose]) => add("2. Pandu the mascot", f, `${D.C.pandu}, ${pose}`, "mascot"));
D.AVATARS.forEach(([f, d, col]) => add("3. Player avatars", f, `head-and-shoulders portrait of ${d}, inside a soft ${col} circle`, "Who is playing? picker", "512x512"));
D.STICKERS.forEach(([f, name, d]) => add("4. Chapter stickers", f, `a round die-cut sticker with a thick white border and a slight drop shadow showing ${d}`, `sticker: ${name}`, "512x512"));

for (const l of window.LESSONS) {
  for (const it of l.items || []) {
    if (it.word) {
      const d = D.LW[it.word]; if (!d) { missing.push('letter ' + it.word); continue; }
      const k = D.W[it.en.toLowerCase()] ? 'w-' + slug(it.en) : 'w-' + slug(it.en);
      add("6. Letter example words", k, d, `${l.title}: ${it.ne} = ${it.word} (${it.en})`, "512x512");
    } else if (!isLabel(it.pic) && !/^Say /.test(it.en)) {
      const d = D.W[it.en.toLowerCase()]; if (!d) { missing.push(`${l.id}: ${it.en}`); continue; }
      add("5. Word pictures", 'w-' + slug(it.en), d, `${l.title}: ${it.ne} = ${it.en}`, "512x512");
    }
  }
}
for (const l of window.LESSONS) {
  const d = D.LI[l.id]; if (!d) { missing.push('lesson icon ' + l.id); continue; }
  add("7. Lesson icons (trail discs)", 'li-' + l.id, `a simple bold icon of ${d}, inside nothing (no circle; the app adds the colored disc)`, `trail: ${l.title}`, "512x512");
}
D.UI.forEach(([f, d]) => add("8. Game icons", f, `a small simple bold game icon of ${d}`, "interface", "256x256"));
for (const l of window.LESSONS) for (const [i, s] of (l.sentences || []).entries())
  add("9. Sentence scenes (optional)", `s-${l.id}-${i + 1}`, `a warm everyday scene that shows the meaning of the sentence "${s.en}", with ${/grand/i.test(s.en) ? D.C.hajuraama + ' or ' + D.C.hajurbaa : D.C.maya + ' or ' + D.C.arjun}, at home or outdoors in Nepal`, `${l.title}: ${s.ne.join(' ')}`, "1024x768");
add("10. App icon and link preview", "app-icon", `${D.C.pandu}, face and shoulders, waving, on a solid sky-blue (#e8f4ff) background filling the whole square (not transparent), no text`, "home-screen icon");
add("10. App icon and link preview", "og-image", `a wide banner: ${D.C.pandu} waving on the left, white Himalayan peaks and colorful prayer flags along the top, sky-blue background, empty space on the right for the title (added in the app), no text`, "link preview", "1200x630");

if (missing.length) { console.error('MISSING:', missing); process.exit(1); }

// Markdown
const groups = [...new Set(rows.map(r => r.group))];
let md = `# Sajilo Nepali: picture prompts\n\nEvery picture in the game, ${rows.length} in total. Each prompt below is complete (it already includes the shared style), so you can paste it as is.\n\n`;
md += `## How to make them match\n\n1. **Same tool, same settings** for everything. Square images unless the size column says otherwise.\n2. **Make section 1 (the cast) and \`pandu-wave\` first.** Then attach the matching cast picture as a reference whenever a prompt mentions that person (Maya, Arjun, Aama, Hajuraama…), so they look the same in every picture.\n3. **Transparent background** (PNG). If your tool can't do it, use plain white and I'll remove it. Exception: \`app-icon\` and \`og-image\` need a full background.\n4. **Keep the file names.** Put the images in \`public/img/\` in the repo, or send them to me in batches. I'll shrink them for the web and swap them in.\n5. **No words in pictures.** Image tools misspell Nepali, so any Nepali letters (like **अ** on the Letter Master sticker) are added by the app.\n6. **Priority if you want to do it in stages:** Pandu → avatars → stickers → word pictures → lesson icons → game icons → sentence scenes (optional).\n\n## Shared style (already inside every prompt)\n\n> ${STYLE}\n\n`;
for (const g of groups) {
  const rs = rows.filter(r => r.group === g);
  md += `## ${g} (${rs.length})\n\n`;
  for (const r of rs) md += `**${r.file}** · ${r.size} · used for: ${r.used.join('; ')}\n\n> ${r.prompt}\n\n`;
}
fs.writeFileSync(OUT + '/image-prompts.md', md);
const q = s => '"' + String(s).replace(/"/g, '""') + '"';
fs.writeFileSync(OUT + '/image-prompts.csv', 'section,file,size,used_for,prompt\n' + rows.map(r => [r.group, r.file, r.size, r.used.join('; '), r.prompt].map(q).join(',')).join('\n') + '\n');
const counts = groups.map(g => `${g}: ${rows.filter(r => r.group === g).length}`).join('\n');
console.log(counts + '\nTOTAL ' + rows.length);
