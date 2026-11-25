# Notes for Claude

## Social videos (Facebook / Instagram reels)

- Save completed videos and their social copy **only** in `~/Downloads/Sajilo Nepali` on the owner's Mac, as plain folders (no zip files). Don't put them in this repo or anywhere else.
- One folder per post, e.g. `08 - Word of the Day - DIYO/`, containing:
  - `Sajilo Nepali - Reel NN - <title> - FINAL.mp4` (1080×1920, 9:16)
  - `captions.md` with the Instagram caption, the Facebook caption and the first comment to pin
  - `cover.jpg`
- If the session can't reach that Mac folder (for example a cloud session with no shared computer folder), say so, and don't hand the files over as a zip without asking first.
- Nepali audio: use the clips the website plays (`public/audio-manifest.js`).

## Test site (testpage.sajilonepali.app)

- It is a private test copy for the owner's family: everything unlocked, no landing page, its own progress, hidden from search engines, with a "TEST VERSION" tag. It is switched on by `window.SN_TEST` in `public/index.html` (hostname `testpage.*` or `*.workers.dev`) and the `testpage.sajilonepali.app` route in `wrangler.jsonc`.
- **The real site comes first, always.** Every change goes to the real address (sajilonepali.app) first. Never publish anything only to the test site, never give it its own branch, deploy or files, and never put content there ahead of the real site. Today both come from the same files and the same deploy, so the test site simply gets each change together with the real site: keep it that way.
- **No connection to the App Store, ever, and no link to the real site.** On the test site there must be no App Store links, badges, banners or "Get the app" pages, and shares, prints, certificates and help links must use the test site's own address (`SITE` / `SITE_URL` in `public/index.html`), never sajilonepali.app. Check this whenever you add a new link, share text or App Store button.
- Don't mention or link the test address anywhere public (the real site, the App Store listing, social posts).
