# Sajilo Nepali (सजिलो नेपाली)

A free, Duolingo-style web game that teaches kids aged 4–15 basic Nepali.

- **Two levels:** Little learners (4–7) get picture and sound questions; Big learners (8–15) get longer, harder lessons plus sentence building.
- **Lessons:** Greetings, Numbers 1–10, Animals, Colours, Family, Food, and Make sentences (Big learners only).
- **Game features:** stars, points, daily streak, hearts, lessons that unlock in order, and a red panda mascot.
- **Privacy:** no accounts and no tracking. Progress is saved in the browser on the device being used.

## Run it
Open `public/index.html` in a browser. It's a single file with no build step.

## Host it for free (Cloudflare)
The site is in `public/`, and `wrangler.jsonc` tells Cloudflare to serve that folder.
- **Cloudflare Workers project** (the default when you click Create → connect a Git repo): leave the build command empty. The deploy command is `npx wrangler deploy`.
- **Cloudflare Pages project:** leave the build command empty and set the build output directory to `public`.

## Edit the words
All the content is in the `LESSONS` list near the top of the `<script>` in `public/index.html`.
Each word has `ne` (Nepali), `rom` (how to say it), `en` (English) and `pic` (an emoji picture).
Please have a native speaker review any new content.

## Sound
"Listen" uses the device's built-in Nepali voice, or a Hindi voice if there's no Nepali one. If the device has neither, listening questions are turned off.
