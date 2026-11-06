# Sajilo Nepali (सजिलो नेपाली)

A free, Duolingo-style web game that teaches kids aged 4–15 basic Nepali.

- **Two levels:**
  - **Little learners (4–7):** 3 big picture choices, listening and tracing, 6 questions, no hearts so nobody fails, "how to say it" shown.
  - **Big learners (8–15):** 4 choices, type the English meaning, sentence building, days of the week and all consonants, 12 questions, 3 hearts, "how to say it" hidden by default.
- **Lessons:** Greetings, Numbers 1–10, Animals, Colours, Family, Food, My body, Days of the week, Letters (vowels and three consonant groups) and Make sentences (Big learners only).
- **Letters:** meet each letter with an example word and picture, find letters, listen for letters, and trace them with a finger.
- **Tap to hear:** every Nepali word, letter and sentence on screen can be tapped to hear it.
- **Game features:** stars, points, daily streak, hearts, lessons that unlock in order, and a red panda mascot.
- **Privacy:** no accounts and no tracking. Progress is saved in the browser on the device being used.

## Run it
Open `public/index.html` in a browser. It's a single file with no build step.

## Hosting
Live at https://sajilo-nepali.subediabi.workers.dev on Cloudflare Workers, which redeploys automatically on every push to `main`.
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
