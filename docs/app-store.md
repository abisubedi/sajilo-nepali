# Sajilo Nepali on the App Store (when you are ready)

The website is already prepared for an iOS wrapper:

- **Full screen + notch:** `viewport-fit=cover`, safe-area padding (`env(safe-area-inset-*)`), the chapter bar sticks just below the notch.
- **App-like touch:** no text highlighting or "Copy / Look Up" pop-up on long-press, no pinch-zoom inside the app, no sideways wiggle.
  (Typing boxes and the share text stay selectable.)
- **Parental gate (Kids Category, Guideline 1.3):** a quick multiplication question before *Share with another family*, *Copy / Load save code*,
  *Save sounds for offline*, *Answers to check*, *Start over* and every share button. One right answer covers 3 minutes.
- **Audio:** every sound uses a relative path (`audio/…`, `img/…`), so the same files work on sajilonepali.app and offline inside the app.
  The chime engine and voice player are unlocked on the first tap (iOS rule).
- **No ads, no accounts, no tracking, no data leaves the device** (the 🎤 echo recording stays in memory and is never saved or sent).

## Steps (on a Mac with Xcode)

```bash
git clone https://github.com/abisubedi/sajilo-nepali && cd sajilo-nepali
npm init -y && npm install @capacitor/core @capacitor/cli @capacitor/ios
npx cap init "Sajilo Nepali" app.sajilonepali --web-dir public
npx cap add ios
npx cap open ios
```

In Xcode, in `AppDelegate.swift` → `application(_:didFinishLaunchingWithOptions:)`, add this so the voice plays even when the
iPad's mute switch is on:

```swift
import AVFoundation
try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .default)
try? AVAudioSession.sharedInstance().setActive(true)
```

Then: app icon (1024×1024, from `app-icon` in the picture prompts), Kids Category (age band 5 and under / 6–8 / 9–11),
privacy answers "Data not collected", and screenshots from an iPhone and an iPad. After every website update, run `npx cap copy ios`.
