# Sajilo Nepali 1.2: release guide

Version **1.2**, build **3** (already set in the Xcode project).
The app build shows everything below automatically (the app always includes chapters and features that the website is
still holding back). The website catches up once 1.2 is live on the App Store (Part D).

## What's new since 1.1

**New chapter: पहिलो पाइला · First Steps, a beginner course (Big learners)**
- Six lessons, 300 real phrases, each with its own recording and picture:
  1. नमस्ते र शिष्टाचार · Greetings & manners
  2. चिया र खाना · Tea stall & restaurant
  3. बजार र किनमेल · Market & shopping (with Nepali money pictures)
  4. बाटो, गाडी र ट्याक्सी · Taxis & getting around
  5. मद्दत, स्वास्थ्य र सुरक्षा · Help, health & safety
  6. सजिलो वाक्य संरचना · Grammar hacks & sentence builders

**A welcome page when the app first opens**
- Pandu pops in, types his greeting for the time of day and says it out loud.
- Tap-to-hear word cards that change with the Little / Big learner switch, and the switch opens the app on that level.
- An Echo try-out: hear a word, 3-2-1, say it out loud, and a chime cheers you on.
- One big "Start free" button that stays in view.

**Home screen and map**
- New learners see a gentle spotlight on the first card to tap.
- Top / Back / Next arrows to move around the map (beside the page on iPad; on iPhone they show while scrolling).
- Little learners get one tidy Pandu card with Play next, the word of the day and today's sticker; Big learners see the
  sticker drop and the word of the day side by side.
- A small festival badge on the culture chapter while a Nepali festival is on.

**Games and rewards**
- Follow Pandu's beat: Pandu drums धिं and ना on the madal and the child copies it, from 3 beats up to 6.
- Letter tracing ends with a chalk-wipe sound and Pandu cheering "स्याबास! क — कछुवा!" with the word's picture.
- Locked stickers say how to win them, with a button straight to the lesson that wins it.
- Big learners get a word-order tip in sentence building (the doing word goes last).
- A tip in For grown-ups: grandparents can record cheers in Family voices.

## "What's New" text for the App Store (copy and paste)

```
NEW: First Steps, a beginner course!
300 real phrases in six lessons for greetings, tea stalls and restaurants, markets and money, taxis and buses, staying safe, and simple sentence patterns. Every phrase is spoken aloud with a picture. (In Big learners.)

A WARM WELCOME
Pandu now greets you when the app opens, says hello for the time of day, and lets you tap words and try saying one out loud before you start.

MORE FUN
• Follow Pandu's beat on the madal drum
• A chalk-slate cheer when you finish tracing a letter
• Locked stickers tell you how to win them
• A tidier home screen for little learners
• Top, Back and Next arrows on the map
• Festival badges, a word-order tip for big learners and many small fixes
```

## Step by step (on your Mac)

### Part A: make the build (about 20 minutes)

1. Open **Terminal** and go to the project folder:
   ```
   cd sajilo-nepali
   git pull
   npm install
   npx cap sync ios
   npx cap open ios
   ```
   `git pull` gets everything new, `npx cap sync ios` copies the website (with the new chapter, voices and pictures)
   into the iPhone app, and the last line opens Xcode.
2. In Xcode, click **App** at the top of the left column, then the **General** tab. Check that it says
   **Version 1.2** and **Build 3**. (Already set; just look.)
3. At the top of the window, next to the play button, choose **Any iOS Device (arm64)**.
4. Menu **Product → Archive**. Wait until the Organizer window opens.
5. In Organizer, select the 1.2 (3) archive, click **Distribute App → App Store Connect → Upload**, and keep the default
   choices until it uploads.
6. Wait for the email "has completed processing" (usually 15–30 minutes).

### Part B: try it on your own iPhone or iPad first (recommended)

7. In App Store Connect, open **TestFlight**; build 1.2 (3) appears there. Install it with the TestFlight app.
8. Check these, in this order:
   - To see the welcome page, delete the app first and install it fresh from TestFlight (it only shows on first launch).
     Pandu should greet you, the word cards should talk, and there should be no "download" wording anywhere.
   - Pick **Big learners**, tap **Start free**: the map should open on Big learners with **First Steps** at the end.
   - Open a First Steps lesson (for example चिया र खाना): pictures, sounds and the game.
   - Play → Madal: try **Follow Pandu's beat**. Letters: trace क and tap Done.
   - Your progress from 1.1 is still there (TestFlight replaces the app but keeps its data, unless you deleted it in the
     first step).

### Part C: send 1.2 to Apple

9. In App Store Connect, open the app, and next to **iOS App** in the left column click **+** (or **Add Version**).
   Type **1.2**.
10. Paste the **What's New** text from above.
11. **Screenshots:** under **App Previews and Screenshots**, remove the old pictures and upload the new ones from
    `docs/app-store/screenshots-1.2/app-store/`, in number order:
    - **iPhone with Dynamic Island (medium display):** the 10 `iphone-6.3-*.jpg` (1206 × 2622); the 6.1" set
      (`iphone-6.1-*.jpg`, 1179 × 2556) also fits that slot. Use `iphone-6.9-*.jpg` only if a 6.9" slot asks for them.
    - **iPad 13" Display:** the 10 `ipad-13-*.jpg`
12. **Header and Search Results** (same page): upload `docs/app-store/product-page/header-5244x2950.png` (PNG only: JPG is refused; or the
    3840 × 1646 one if that is the size it asks for) as the Header, and `search-results-1920x1280.png` as the Search
    Results picture, if you haven't already.
13. **Description:** replace it with the new one in `LISTING.md` (it now says "Up to 12 chapters" and has a NEW line for
    First Steps). Keywords and subtitle stay the same.
14. Scroll to **Build**, click **+**, and pick **1.2 (3)**.
15. In **App Review Information → Notes**, keep the same notes as 1.1 (Chapter 1 is free, the grown-ups' question, the
    Kids Category answers: no analytics, no ads, no data shared, all data on the device).
16. Click **Save**, then **Add for Review**, then **Submit for Review**.

### Part D: when 1.2 is live on the App Store

17. Tell Claude "1.2 is live". Claude will then switch everything on for sajilonepali.app in one go: the First Steps
    chapter (`NOT_IN_APP_YET`) and all the features waiting in `FEATURES_NOT_IN_APP_YET` (the welcome page changes, map
    arrows, home screen, stickers, tracing, madal, festival badge and word-order tip). The website then matches the app.
    The test site (testpage) stays exactly as it is: unlocked, its own progress, no App Store links. Only the two lists
    are emptied, so the next new chapters and features can be tried there first again, the same way as for 1.2.
18. Optional: update the **Promotional text** (it can change any time without a review) to mention First Steps, for example:
    `नमस्ते! NEW: First Steps, 300 real phrases for travel and family. Plus picture lessons, folk tales and games in a warm Nepali voice. Start free with Chapter 1.`

## If something goes wrong

- **"No such module" or plugin errors in Xcode:** close Xcode, run `npm install` and `npx cap sync ios` again, reopen.
- **Upload says the build number was already used:** in Xcode, General tab, change **Build** to 4 and archive again.
- **Signing errors:** App → Signing & Capabilities → pick your Team again.
- **A screenshot is rejected for its size:** each iPhone slot takes only its own sizes (medium display: 1206 × 2622 or
  1179 × 2556; 6.9": 1320 × 2868) and the iPad 13" slot takes 2064 × 2752;
  use the files in `screenshots-1.2/app-store/` (not the `1080/` copies).
