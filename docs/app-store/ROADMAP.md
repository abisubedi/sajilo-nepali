# Sajilo Nepali on the Apple App Store: step by step

The app stays one codebase: the website in `public/` is wrapped in a small native iPhone/iPad app with
**Capacitor** (free, open source). The same files run on sajilonepali.app and inside the App Store app, so every
change, recording and picture keeps reaching both.

Who does what: **[Claude]** = I do it here. **[You]** = needs your Mac, your Apple account or a decision.

---

## Step 1: make the app self-contained ✅ done
An App Store app must work with no internet, and an app in the **Kids** category must not contact other companies.
- The fonts (Baloo 2, Nunito) are now built into the app (`public/fonts/`) instead of loading from Google.
- Checked: with every outside server blocked, the app makes **0** outside requests and works fully offline.
- The Grown-ups privacy note now says the app never contacts any other company.

## Step 2: create the iPhone/iPad project [Claude] ✅ done
- Add Capacitor: `package.json`, `capacitor.config.json` (app ID `app.sajilonepali`, name "Sajilo Nepali", web folder `public`)
  and the generated Xcode project in `ios/`.
- Native touches Apple expects from a real app (not just a website in a frame):
  - all pictures, sounds and stories bundled inside the app: no download needed, works on a plane;
  - keeps the screen awake during Read to me;
  - sound plays through the speaker as children expect;
  - no web-only extras inside the app (the "add to home screen" hints, the offline-download button);
  - safe areas for the notch and home bar, no page bounce.
- A privacy policy page at **sajilonepali.app/privacy** (Apple requires one; it says: no data collected).

What was built: `package.json`, `capacitor.config.json` (app ID `app.sajilonepali`) and the Xcode project in `ios/`
(Capacitor 8 with Swift Package Manager, so no CocoaPods needed). The app icon and the launch screen use the Pandu artwork.
Sound plays even when the silent switch is on. The microphone permission text is set (the echo and family-voice activities need it).
The encryption question is answered once in the project, so App Store uploads don't ask it every time. Inside the app,
the website-only buttons (save for offline, share the website) are hidden, and Read to me keeps the screen on through the native plugin.

## Step 2b: the Family Pass subscription [Claude, next]
Decided: **Chapter 1 is free.** Everything else needs the **Sajilo Family Pass**, which starts with a **7-day free trial**, then
**$2.99 a month** or **$24.99 a year**. The website stays free.
- The purchase screen in the app: Pandu, what's included, both prices with the trial, **Restore purchases**, and links to the
  privacy policy and Apple's standard terms (Apple requires all of these for subscriptions). It opens only after the grown-ups' check.
- Purchases go straight to Apple (StoreKit); no other company is involved, which keeps the app within the Kids category rules.
- Locked chapters and activities show a small lock; tapping one opens the grown-ups' check and then the purchase screen.
- In App Store Connect (step 4) you'll create a subscription group **Sajilo Family Pass** with two products:
  `app.sajilonepali.pass.monthly` ($2.99) and `app.sajilonepali.pass.yearly` ($24.99), each with a 7-day free trial
  (an "introductory offer"). You'll also need to accept the **Paid Apps agreement** and add bank and tax details.

## Step 3: run it on your Mac and iPhone [You, about 1 hour the first time]
1. Install **Xcode** from the Mac App Store (free, large download).
2. Install **Node.js** (nodejs.org, the LTS version).
3. In Terminal: `git clone https://github.com/abisubedi/sajilo-nepali.git`, then `cd sajilo-nepali`, `npm install`, `npx cap sync ios`, `npx cap open ios`.
4. In Xcode: click **App** in the left column, then **Signing & Capabilities**, choose your **Team** (your developer membership).
5. Pick an iPhone simulator at the top and press ▶ to run. Then plug in your iPhone and run it there too.
I'll give exact screenshots-level instructions when we get there.

## Step 4: set up the app in App Store Connect [You, with my help, 30 minutes]
1. developer.apple.com, then **Certificates, IDs & Profiles**, then **Identifiers**: register the Bundle ID `app.sajilonepali`.
2. appstoreconnect.apple.com, then **Apps**, then **+ New App**: platform iOS, name **Sajilo Nepali**, primary language English (U.S.),
   bundle ID `app.sajilonepali`, SKU `sajilonepali`.
3. App information: category **Education**; turn on **Made for Kids**, age band **6–8** (decided).
4. App Privacy: **Data Not Collected**. Privacy policy URL: `https://sajilonepali.app/privacy`.
5. Age rating questionnaire: answer "None" to everything; it comes out 4+.

## Step 5: icon, launch screen and screenshots [Claude, you approve]
- App icon 1024×1024 (no transparency, no rounded corners: Apple rounds it), from the Pandu icon.
- Screenshots Apple requires: iPhone 6.9" (1320×2868) and iPad 13" (2064×2752). I'll make them from the real app.
- Description, keywords and the "What's new" text: I'll draft, you edit.

## Step 6: Kids category rules check [Claude]
Apple reviews Kids apps strictly (guidelines 1.3 and 5.1.4):
- Anything that leaves the app (links, sharing, email) sits behind the grown-ups' check (the app already has one for some buttons; I'll make sure it covers all of them).
- No ads, no analytics, no tracking: already true.
- Nothing asks for the child's personal information. The name is only kept on the device: already true.

## Step 7: TestFlight, then submit [You and Claude]
1. In Xcode: **Product, then Archive**, then **Distribute App, then App Store Connect**. This uploads a build.
2. In App Store Connect: **TestFlight**, then add yourself (and family) as testers, and try it on real devices for a few days.
3. Pick the build on the app's version page, then **Add for Review**, then **Submit**. Review usually takes 1 to 3 days.

## Step 8: price ✅ decided
Free download. Chapter 1 free; the Sajilo Family Pass unlocks everything: 7-day free trial, then $2.99 a month or $24.99 a year
(see step 2b). The website stays free.

---

### Your voice recordings
They fit in at any time: each recorded batch goes into both the website and the next app build. If you finish them
within the week, the first App Store version can launch with your own voice.
