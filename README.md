# Sajilo Nepali (सजिलो नेपाली)

A free, Duolingo-style web game that teaches kids aged 4–15 basic Nepali.

- **Two levels:**
  - **Little learners (4–7):** 3 big picture choices, listening and tracing, 6 questions, no hearts so nobody fails, "how to say it" shown.
  - **Big learners (8–15):** 4 choices, type the English meaning, sentence building, days of the week and all consonants, 12 questions, no hearts (missed words come back later in the lesson), "how to say it" hidden by default.
- **Lessons:** 42 lessons in 8 chapters: मेरो घर (around the home), म र मेरो शरीर (all about me), खेल र बाहिर (play & outside), हाम्रो संस्कृति (Nepali culture & time), प्रकृति र यात्रा (nature & travel), स्कूल र गन्ती (school & counting), कुराकानी र कथा (real conversations) and अक्षर र वाक्य (the full alphabet and sentences). Some lessons (days, numbers 11–20, polite forms, some sentence lessons) are for Big learners only.
- **Map:** lessons are grouped into chapter banners along a trail. Every lesson is open, and the next unfinished one is marked "Start here" / "Next up!".
- **Two ways to play each lesson:** 📖 Flashcards (one card at a time, swipe or use the arrows, tap to hear) or 🎮 Play game (questions, earn ★★★).
- **Situations:** everyday phrases show who is speaking, e.g. "👩 Aama calls you: यता आऊ".
- **Letters:** meet each letter with an example word and picture, find letters, listen for letters, and trace them with a finger.
- **Tap to hear:** every Nepali word, letter and sentence on screen can be tapped to hear it.
- **Game features:** stars, points and a red panda mascot (Pandu) who greets kids by the time of day (शुभ प्रभात!).
- **Daily streak + streak freeze:** play one lesson a day to grow your 🔥 streak. Every 7 days in a row earns a ❄️ streak freeze (keep up to 2), which saves the streak if one day is missed.
- **Word of the day:** a banner under Pandu shows a new word every day. The first listen each day earns +5 ⭐, and "Practice →" opens the lesson the word comes from.
- **Chapter jump bar:** a row of chapter pills (Ch 1 … Ch 8) stays at the top while scrolling. Tap one to jump to that chapter.
- **Players:** brothers and sisters on one device can each have their own player (name + animal), with separate stars, streak and stickers. Tap the player pill in the top bar to switch or add players.
- **Mero Stickers (मेरो स्टिकर):** finish every lesson in a chapter to win its sticker, and get ★★★ on all of them to make it gold. Tap 🏅 in the top bar to see the sticker book. Every sticker talks when tapped (stickers not won yet say "अझै बाँकी छ!").
- **Celebration and sharing:** a 3-star lesson ends with confetti and a ready-made message to share or copy for family.
- **Print flashcards:** in a lesson's sheet, "🖨️ Print flashcards for home" makes a cut-out sheet of picture cards.
- **Sound settings:** 🔊 turns all sound on or off. 🎵 turns off only the game beeps and keeps the recorded voice.
- **Typing answers (Big learners):** typed English answers accept common other words (mum/mom, tummy/stomach), contractions (im / i'm), plurals and one small typo. Answers that were marked wrong show up under **For grown-ups → 📝 Answers to check**, where a grown-up can tap Accept so they count from then on.
- **For grown-ups (bottom of the map):**
  - 💌 **Share with another family:** opens the phone's share sheet (or copies the link on a computer).
  - 📤 **Copy save code** / 📥 **Load save code:** moves every player's stars, streak and stickers to another phone or tablet, with no account or server.
  - 📶 **Save sounds for offline:** downloads all the recordings so the whole game works on a plane or a road trip.
- **Works offline and installs like an app:** after the first visit the game keeps working without internet. On iPhone/iPad use Safari → Share → Add to Home Screen; on Android, Chrome offers "Install app".
- **Privacy:** no accounts and no tracking. Progress (for each player) is saved in the browser on the device being used.

## Credits

Created, coded and voiced by **Abi Subedi (अबी सुवेदी)** in Pittsburgh, Pennsylvania. Every Nepali word in the game uses Abi's voice. Tap Abi's name at the bottom of the map to hear a hello.

## Pictures

Character art lives in `art/` (the original files) and `public/img/` (small transparent WebP files the game uses). To add one:

```
python3 scripts/build_images.py
```

Name each file in `art/` by its prompt (`w-mom.jpg`, `li-greet.png` …). The script cuts out the white background of every new picture, shrinks it into `public/img/` and updates `public/img-manifest.js`; the game then shows it instead of the emoji (word cards, answers, flashcards, print cards and lesson icons). `cast-*` files are drawing references only. To redo one picture by hand: `python3 scripts/cutout.py art/st-home.jpg public/img/st-home.webp`. For a round sticker with a light sky near the edge, protect the circle with `disk=CX,CY,R` (see the top of the script). Prompts for every picture are in `docs/image-prompts.md`; rebuild them with `node scripts/make_prompts.js`. The same prompts split into one chapter per day are in `docs/image-prompts-by-day/` (rebuild with `node scripts/make_daily_prompts.js`; the checklists tick off pictures already in `public/img/`).

## Run it
Open `public/index.html` in a browser. It's a single file with no build step.

## Hosting
Live at https://sajilonepali.app (also https://sajilo-nepali.subediabi.workers.dev) on Cloudflare Workers, which redeploys automatically on every push to `main`.
`wrangler.jsonc` publishes only the `public/` folder.

### Making an update
1. Edit `public/index.html`. Anything outside `public/` is never published.
2. Commit and push to `main`.
3. Cloudflare builds and deploys within about a minute (Worker → **Deployments**).

If a push doesn't deploy, check the Worker's **Settings → Build**: the Git repository should be `abisubedi/sajilo-nepali`, the branch `main`, the build command empty and the deploy command `npx wrangler deploy`. Also check that the **Cloudflare Workers and Pages** GitHub app has access to this repo (GitHub → Settings → Applications). As a fallback, use **Retry build** on the latest build.

**Direct deploy (no Git build needed):** run `python3 scripts/bundle_worker.py`, then `cd dist && npx wrangler deploy`
(needs a Cloudflare API token with the "Edit Cloudflare Workers" permission). This bundles everything in `public/` into one Worker script.

## Edit the words
All the content is in `public/lessons.js`.
Each word has `ne` (Nepali), `rom` (how to say it), `en` (English) and `pic` (an emoji picture).
Please have a native speaker review any new content.

## Sound
Recorded clips are in `public/audio/` (ElevenLabs voice "Subedi – Nepali Voice Male") and listed in `public/audio-manifest.js`
(key = the Nepali text, or `L:<letter>` for a letter, which says the letter and then its example word).
Anything without a recording uses the device's Nepali voice, or a Hindi one if there's no Nepali voice. If the device has neither, that word stays silent.
