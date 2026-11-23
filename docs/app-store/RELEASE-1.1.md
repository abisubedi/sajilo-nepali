# Sajilo Nepali 1.1: release guide

Version **1.1**, build **2** (already set in the Xcode project).
Version 1.0 (build 1) was made from commit `c410d67` on Nov 15, 2026. Everything below has been added since then.

## What's changed since 1.0

**A new voice for the whole app**
- Almost every Nepali word, sentence, story, rhyme, riddle and quiz question (about 960 lines) is re-recorded in a
  clear, warm voice made from the owner's own recordings.
- Polite command endings are spoken properly ("utha", "basa", "chada", "hinda" instead of "uth", "bas"…).
- Pronunciation fixes for ग्लुक्क, पिङ, ऐना and मह.
- Story narration has calmer pacing with longer pauses (bedtime stories and the folk tales).
- The two folk tales that had silent titles (बाँदर र गोही, सानो मुसो र ठूलो सिंह) now speak their titles.
- Still on the original recordings by choice: the single letters and vowels, हलो and टर्रो.

**Rhymes**
- The classic rhyme ताराबाजी लै लै replaces the old तारा बाजी लै लै, with 8 lines, new readings and new English meanings.

**Home screen**
- Chapter tiles sit in balanced rows; a shorter last row is centred.
- Each chapter tile shows a small progress bar with lessons played (for example ३/७).
- Tiles give a little bounce when tapped; tapping one marks it and the "Play next" button jumps to that chapter's next lesson.
- From 7:30 pm the greeting card turns into a calm night sky with twinkling stars.
- All counters in the top bar use Nepali numerals (the sticker count now too).
- The fourth tab reads अभिभावक · Grown-ups, like the other bilingual tabs.
- More room above the bottom tabs, so the last card is never covered.

**Pictures and small fixes**
- 17 lessons that used an emoji icon now use a picture from the lesson; new pictures for चुलो, कुकर, the uncles and aunts,
  ढोग गरेँ and the room objects.
- Thanksgiving's reading now says "thyaanks-giving".

## "What's New" text for the App Store (copy and paste)

```
A brand-new voice! Almost every Nepali word, story, rhyme and riddle has been re-recorded in a clear, warm voice, with polite endings spoken properly (utha, basa, hinda).

• New classic rhyme: ताराबाजी लै लै
• Calmer narration for bedtime stories and folk tales
• Chapter tiles now show your progress, and Play next follows the chapter you tap
• A cosy night-sky greeting after 7:30 pm
• Nepali numerals across the top bar, new lesson pictures and many small fixes
```

## Step by step (on your Mac)

### Part A: make the build (about 20 minutes)

1. Open **Terminal** and go to the project folder (the same one you used for 1.0):
   ```
   cd sajilo-nepali
   git pull
   npm install
   npx cap sync ios
   npx cap open ios
   ```
   `git pull` gets everything new, `npx cap sync ios` copies the website (with all the new voices) into the iPhone app,
   and the last line opens Xcode.
2. In Xcode, click **App** at the top of the left column, then the **General** tab. Check that it says
   **Version 1.1** and **Build 2**. (Already set; just look.)
3. At the top of the window, next to the play button, choose **Any iOS Device (arm64)** as the destination.
4. Menu **Product → Archive**. Wait until the Organizer window opens (a few minutes).
5. In Organizer, select the new 1.1 (2) archive, click **Distribute App → App Store Connect → Upload**, and keep the
   default choices until it uploads.
6. Wait for the email "has completed processing" (usually 15–30 minutes).

### Part B: try it before anyone else (optional, recommended)

7. In App Store Connect, open **TestFlight**; build 1.1 (2) appears there. Add yourself as an internal tester and install
   it with the TestFlight app on your iPhone or iPad. Check a few lessons, a bedtime story and the ताराबाजी rhyme.

You can do Parts A and B while 1.0 is still waiting for review: uploading a build does not touch the 1.0 review.

### Part C: send 1.1 to Apple (only after 1.0 is approved)

8. In App Store Connect, open the app, and next to **iOS App** in the left column click **+** (or **Add Version**). Type **1.1**.
9. Paste the **What's New** text from above.
10. Scroll to **Build**, click **+**, and pick **1.1 (2)**.
11. In **App Review Information → Notes**, keep the Kids Category answers (no analytics, no ads, no data shared, all data
    on the device) so the reviewer doesn't have to ask again.
12. Click **Save**, then **Add for Review**, then **Submit for Review**.

Screenshots and the description carry over from 1.0, so nothing else needs changing.

## If something goes wrong

- **"No such module" or plugin errors in Xcode:** close Xcode, run `npm install` and `npx cap sync ios` again, reopen.
- **Upload says the build number was already used:** in Xcode, General tab, change **Build** to 3 and archive again.
- **Signing errors:** App → Signing & Capabilities → pick your Team again (same as for 1.0).
