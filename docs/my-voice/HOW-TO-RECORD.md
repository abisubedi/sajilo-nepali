# Recording Sajilo Nepali in my own voice

There are **868 Nepali clips** in **5 batches**: every Nepali word, letter, sentence, story page and rhyme the app plays.
English is not included. The full list, with how to say each line and what it means, is in
`docs/my-voice/recording-script.md`.

| Batch | What's in it | Clips | Rough time |
|---|---|---|---|
| 1 | Letters (say the letter, a short pause, then the word), numbers, the app's own phrases, chapter and sticker lines | 197 | 1 to 1.5 hours |
| 2 | Lessons: home, family, animals, travel, my body and feelings | 162 | 1 hour |
| 3 | Lessons: play, weather, culture, school, numbers, talking with grandparents | 201 | 1 to 1.5 hours |
| 4 | World of Words, festivals, calendar months, missions, riddles, games | 183 | 1 hour |
| 5 | Stories, fables and rhymes (long lines, storyteller voice) | 125 | 1.5 to 2 hours |

Until a batch is installed, the app keeps playing the current voice for those lines.

---

## Step 1: get the Mac ready (5 minutes, once)

1. Pick a **quiet room** with soft things in it (curtains, a sofa, a bed). Turn off fans and the air conditioner.
2. Turn on **Do Not Disturb**: click Control Centre (top right of the screen), then **Focus**, then **Do Not Disturb**.
3. Use a microphone if you have one: a USB microphone, a wired headset, or wired EarPods. AirPods work too but sound thinner.
   The Mac's built-in microphone is fine if you sit close to the Mac and the room is quiet.
4. Open **System Settings, then Sound, then Input**. Choose your microphone. Set the **Input volume** to about three quarters.
   Speak normally: the level bar should move to about the middle.

## Step 2: open the recording page

1. Open **Safari** or **Chrome** on the Mac and go to **https://sajilonepali.app/studio.html**
   (this page is not linked from the app, and it is not listed in search engines).
2. Choose the batch at the top (start with **1**).
3. Click **● Record** once. When the browser asks to use the microphone, click **Allow**.

Always use **the same browser on the same Mac**, and **not** a private window. Your recordings are kept inside that browser
until you download them, so you can stop and carry on another day.

## Step 3: record

- Press **Space** to start, read the big Nepali line, then press **Space** again. The line is saved and the next one appears.
- Leave about **half a second of quiet** before and after you speak. The app trims the silence for you.
- Press **P** to hear the last line back. To redo a line, click it in the list below (it plays back), then press Space and record it again.
- The green bar shows your level. If it turns **red**, move back a little or turn the input volume down.
- Keep the **same distance** from the microphone every time: about a hand's width (15 to 20 cm), slightly to the side of your mouth.
- Read the **Nepali** exactly as written. The romanised line and the meaning are only there to help.
- For letters (batch 1), say the letter, take a short pause, then say the word: "क ... कछुवा".
- Batch 5: speak like a warm storyteller. Read the bedtime stories (notes say "softly") quietly and slowly, and the rhymes sing-song.
- Take a short break every 40 to 50 lines and have a sip of water. Your voice will sound fresher and more even.

## Step 4: download the batch

1. When every line in the batch has a ✓, click **⬇️ Download this batch (.zip)** at the top.
2. The Mac saves **sajilo-voice-batch-1.zip** (or 2, 3, ...) in your **Downloads** folder.
   Inside it is one file per line, named by its ID (1-001.m4a, 1-002.m4a, ...), plus a list of the lines.

You can also download a batch that is only half done. Lines you haven't recorded yet just keep the current voice.

## Step 5: upload it to GitHub

**On the GitHub website (zip files up to 25 MB):**
1. Go to **https://github.com/abisubedi/sajilo-nepali** and sign in.
2. Click **Add file**, then **Upload files**.
3. Drag **sajilo-voice-batch-1.zip** from Downloads onto the page.
4. In the box above the file list, type `recordings/` before the file name, so it goes into a folder called **recordings**.
   (If the folder already exists, open it first and then use Add file, then Upload files.)
5. Click **Commit changes**.

**With GitHub Desktop (for bigger zips, usually batch 5):**
1. Copy the zip into the **recordings** folder inside your sajilo-nepali folder on the Mac.
2. In GitHub Desktop, write a summary such as "voice batch 5", click **Commit to main**, then **Push origin**.

## Step 6: tell me

Send me a message such as **"voice batch 1 uploaded"**. I will then:
1. Check every recording (missing, empty, or much longer than the line).
2. Clean each one up: remove rumble, trim the silence, even out the loudness, and convert it to the app's small audio format.
3. Replace the old clips, test the app, and publish. It is live on sajilonepali.app about 2 minutes later.

To see the new voice on a phone, close the app fully and open it again.

---

### For later: changing the words in the app

If lines are added to or changed in the app, run `node scripts/make_my_voice_script.js` to rebuild the list, the recording page
and `docs/my-voice/script.json`. The install step is `python3 scripts/install_my_voice.py recordings/sajilo-voice-batch-1.zip`
(add `--dry-run` to only check the recordings).
