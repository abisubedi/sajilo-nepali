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

- It is a private test copy for the owner's family: everything unlocked, the in-app landing page (see below) instead of the website's, its own progress, hidden from search engines, with a "TEST VERSION" tag. It is switched on by `window.SN_TEST` in `public/index.html` (hostname `testpage.*` or `*.workers.dev`) and the `testpage.sajilonepali.app` route in `wrangler.jsonc`.
- **The real site comes first, always.** Every change goes to the real address (sajilonepali.app) first. Never publish anything only to the test site, never give it its own branch, deploy or files, and never put content there ahead of the real site. Today both come from the same files and the same deploy, so the test site simply gets each change together with the real site: keep it that way. The one exception the owner asked for: chapters that aren't in the App Store app yet show on the test site but not on the real site (see below).
- **No connection to the App Store, ever, and no link to the real site.** On the test site there must be no App Store links, badges, banners or "Get the app" pages, and shares, prints, certificates and help links must use the test site's own address (`SITE` / `SITE_URL` in `public/index.html`), never sajilonepali.app. Check this whenever you add a new link, share text or App Store button.
- Don't mention or link the test address anywhere public (the real site, the App Store listing, social posts).

## Chapters and features not in the App Store app yet

- The public website must not show a chapter that the App Store app doesn't have yet. Such chapters are listed in `NOT_IN_APP_YET` in `public/index.html` (today: `first-steps`). The real website drops them; the test site (`window.SN_TEST`), the iPhone/iPad app build and private previews (`window.SN_PREVIEW`) keep them, so the family can try new chapters early.
- When you add a new chapter, add its id to `NOT_IN_APP_YET`. When the app update containing it is live on the App Store, remove the id (the owner will say when).
- The app, the test site and previews show the **in-app landing page** (`lp-app`, feature `app-landing`): only the first page of the website's landing page, with no App Store badge, no "Get the app" button, no menu, no other slides or arrows, and no mention of downloading the app anywhere. "Start free" goes straight into the app. It shows on first launch (or with `?home`). Keep it free of download wording whenever the landing page changes.
- The same goes for every new app feature (anything that isn't in the current App Store version, today 1.1): gate it with `featureOn("name")` and list the name in `FEATURES_NOT_IN_APP_YET` in `public/index.html` (today: `first-card-spotlight`, `map-arrows`, `app-landing`, `landing-v2`). It then shows on the test site, in the app build and in previews, but not on sajilonepali.app until the owner says the app update is live. Website-only changes (the landing page, App Store links) are not app features and go to the real site as usual.
