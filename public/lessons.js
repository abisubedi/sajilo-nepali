/* Sajilo Nepali lesson content.
   Each word: ne = Nepali, rom = how to say it, en = English, pic = picture (emoji or short label).
   Letters also have: word / wordRom = an example word that starts with the letter.
   Audio for every Nepali text lives in audio/ and is listed in audio-manifest.js.
   Please have a native speaker review any changes. */

window.LESSONS = [
  { id: "greet", title: "Greetings", ne: "अभिवादन", icon: "🙏", color: "var(--flag-blue)", items: [
    { ne: "नमस्ते", rom: "namaste", en: "Hello", pic: "🙏" },
    { ne: "धन्यवाद", rom: "dhanyabad", en: "Thank you", pic: "😊" },
    { ne: "हो", rom: "ho", en: "Yes", pic: "✅" },
    { ne: "होइन", rom: "hoina", en: "No", pic: "❌" },
    { ne: "शुभ रात्रि", rom: "shubha ratri", en: "Good night", pic: "🌙" },
    { ne: "फेरि भेटौँला", rom: "pheri bhetaunla", en: "See you again", pic: "👋" },
  ]},
  { id: "num", title: "Numbers 1–10", ne: "अङ्क", icon: "🔢", color: "var(--flag-yellow)", count: true, items: [
    { ne: "एक", rom: "ek", en: "one", pic: "1", digit: "१", n: 1 },
    { ne: "दुई", rom: "dui", en: "two", pic: "2", digit: "२", n: 2 },
    { ne: "तीन", rom: "tin", en: "three", pic: "3", digit: "३", n: 3 },
    { ne: "चार", rom: "char", en: "four", pic: "4", digit: "४", n: 4 },
    { ne: "पाँच", rom: "panch", en: "five", pic: "5", digit: "५", n: 5 },
    { ne: "छ", rom: "chha", en: "six", pic: "6", digit: "६", n: 6 },
    { ne: "सात", rom: "saat", en: "seven", pic: "7", digit: "७", n: 7 },
    { ne: "आठ", rom: "aath", en: "eight", pic: "8", digit: "८", n: 8 },
    { ne: "नौ", rom: "nau", en: "nine", pic: "9", digit: "९", n: 9 },
    { ne: "दस", rom: "das", en: "ten", pic: "10", digit: "१०", n: 10 },
  ]},
  { id: "animals", title: "Animals", ne: "जनावर", icon: "🐘", color: "var(--flag-green)", items: [
    { ne: "कुकुर", rom: "kukur", en: "Dog", pic: "🐕" },
    { ne: "बिरालो", rom: "biralo", en: "Cat", pic: "🐈" },
    { ne: "गाई", rom: "gaai", en: "Cow", pic: "🐄" },
    { ne: "हात्ती", rom: "hatti", en: "Elephant", pic: "🐘" },
    { ne: "बाँदर", rom: "baandar", en: "Monkey", pic: "🐒" },
    { ne: "चरा", rom: "chara", en: "Bird", pic: "🐦" },
    { ne: "माछा", rom: "machha", en: "Fish", pic: "🐟" },
    { ne: "बाघ", rom: "bagh", en: "Tiger", pic: "🐅" },
    { ne: "भालु", rom: "bhalu", en: "Bear", pic: "🐻" },
    { ne: "गैँडा", rom: "gainda", en: "Rhino", pic: "🦏" },
  ]},
  { id: "colours", title: "Colours", ne: "रङ", icon: "🎨", color: "var(--flag-red)", items: [
    { ne: "रातो", rom: "raato", en: "Red", pic: "🔴" },
    { ne: "निलो", rom: "nilo", en: "Blue", pic: "🔵" },
    { ne: "हरियो", rom: "hariyo", en: "Green", pic: "🟢" },
    { ne: "पहेँलो", rom: "pahenlo", en: "Yellow", pic: "🟡" },
    { ne: "सेतो", rom: "seto", en: "White", pic: "⚪" },
    { ne: "कालो", rom: "kaalo", en: "Black", pic: "⚫" },
    { ne: "सुन्तले", rom: "suntale", en: "Orange", pic: "🟠" },
    { ne: "गुलाबी", rom: "gulabi", en: "Pink", pic: "🌸" },
  ]},
  { id: "family", title: "Family", ne: "परिवार", icon: "👨‍👩‍👧", color: "var(--panda)", items: [
    { ne: "आमा", rom: "aama", en: "Mother", pic: "👩" },
    { ne: "बुबा", rom: "buba", en: "Father", pic: "👨" },
    { ne: "दाइ", rom: "daai", en: "Big brother", pic: "👦" },
    { ne: "दिदी", rom: "didi", en: "Big sister", pic: "👧" },
    { ne: "हजुरआमा", rom: "hajur-aama", en: "Grandmother", pic: "👵" },
    { ne: "हजुरबुबा", rom: "hajur-buba", en: "Grandfather", pic: "👴" },
  ]},
  { id: "food", title: "Food", ne: "खाना", icon: "🥟", color: "var(--flag-blue)", items: [
    { ne: "भात", rom: "bhaat", en: "Rice", pic: "🍚" },
    { ne: "दाल", rom: "daal", en: "Lentil soup", pic: "🥣" },
    { ne: "रोटी", rom: "roti", en: "Flatbread", pic: "🫓" },
    { ne: "दूध", rom: "doodh", en: "Milk", pic: "🥛" },
    { ne: "पानी", rom: "paani", en: "Water", pic: "💧" },
    { ne: "स्याउ", rom: "syaau", en: "Apple", pic: "🍎" },
    { ne: "केरा", rom: "kera", en: "Banana", pic: "🍌" },
    { ne: "मोमो", rom: "momo", en: "Momo", pic: "🥟" },
  ]},
  { id: "body", title: "My body", ne: "शरीर", icon: "🙆", color: "var(--flag-red)", items: [
    { ne: "टाउको", rom: "taauko", en: "Head", pic: "🙆" },
    { ne: "कपाल", rom: "kapaal", en: "Hair", pic: "💇" },
    { ne: "आँखा", rom: "aankha", en: "Eyes", pic: "👀" },
    { ne: "कान", rom: "kaan", en: "Ear", pic: "👂" },
    { ne: "नाक", rom: "naak", en: "Nose", pic: "👃" },
    { ne: "मुख", rom: "mukh", en: "Mouth", pic: "👄" },
    { ne: "दाँत", rom: "daant", en: "Teeth", pic: "🦷" },
    { ne: "हात", rom: "haat", en: "Hand", pic: "✋" },
    { ne: "खुट्टा", rom: "khutta", en: "Leg", pic: "🦵" },
    { ne: "औँला", rom: "aunla", en: "Finger", pic: "☝️" },
  ]},
  { id: "days", title: "Days of the week", ne: "बार", icon: "📅", color: "var(--flag-yellow)", items: [
    { ne: "आइतबार", rom: "aaitabaar", en: "Sunday", pic: "SUN" },
    { ne: "सोमबार", rom: "sombaar", en: "Monday", pic: "MON" },
    { ne: "मङ्गलबार", rom: "mangalbaar", en: "Tuesday", pic: "TUE" },
    { ne: "बुधबार", rom: "budhabaar", en: "Wednesday", pic: "WED" },
    { ne: "बिहीबार", rom: "bihibaar", en: "Thursday", pic: "THU" },
    { ne: "शुक्रबार", rom: "shukrabaar", en: "Friday", pic: "FRI" },
    { ne: "शनिबार", rom: "shanibaar", en: "Saturday", pic: "SAT" },
  ]},
  { id: "vowels", title: "Letters: vowels", ne: "स्वर", icon: "अ", color: "var(--flag-green)", letters: true, items: [
    { ne: "अ", rom: "a", word: "अण्डा", wordRom: "anda", en: "Egg", pic: "🥚" },
    { ne: "आ", rom: "aa", word: "आँप", wordRom: "aanp", en: "Mango", pic: "🥭" },
    { ne: "इ", rom: "i", word: "इँटा", wordRom: "inta", en: "Brick", pic: "🧱" },
    { ne: "ई", rom: "ee", word: "ईश्वर", wordRom: "eeshwar", en: "God", pic: "🙏" },
    { ne: "उ", rom: "u", word: "उल्लु", wordRom: "ullu", en: "Owl", pic: "🦉" },
    { ne: "ऊ", rom: "oo", word: "ऊन", wordRom: "oon", en: "Wool", pic: "🧶" },
    { ne: "ए", rom: "e", word: "एक", wordRom: "ek", en: "One", pic: "1" },
    { ne: "ऐ", rom: "ai", word: "ऐना", wordRom: "aina", en: "Mirror", pic: "🪞" },
    { ne: "ओ", rom: "o", word: "ओखर", wordRom: "okhar", en: "Walnut", pic: "🌰" },
    { ne: "औ", rom: "au", word: "औँला", wordRom: "aunla", en: "Finger", pic: "☝️" },
  ]},
  { id: "cons1", title: "Letters: क to ढ", ne: "व्यञ्जन", icon: "क", color: "var(--flag-blue)", letters: true, items: [
    { ne: "क", rom: "ka", word: "कमल", wordRom: "kamal", en: "Lotus", pic: "🪷" },
    { ne: "ख", rom: "kha", word: "खरायो", wordRom: "kharayo", en: "Rabbit", pic: "🐇" },
    { ne: "ग", rom: "ga", word: "गमला", wordRom: "gamala", en: "Flower pot", pic: "🪴" },
    { ne: "घ", rom: "gha", word: "घर", wordRom: "ghar", en: "House", pic: "🏠" },
    { ne: "च", rom: "cha", word: "चरा", wordRom: "chara", en: "Bird", pic: "🐦" },
    { ne: "छ", rom: "chha", word: "छाता", wordRom: "chhaata", en: "Umbrella", pic: "☂️" },
    { ne: "ज", rom: "ja", word: "जुत्ता", wordRom: "jutta", en: "Shoes", pic: "👟" },
    { ne: "झ", rom: "jha", word: "झण्डा", wordRom: "jhanda", en: "Flag", pic: "🚩" },
    { ne: "ट", rom: "ṭa", word: "टोपी", wordRom: "topi", en: "Hat", pic: "🧢" },
    { ne: "ढ", rom: "ḍha", word: "ढोल", wordRom: "dhol", en: "Drum", pic: "🥁" },
  ]},
  { id: "cons2", title: "Letters: त to म", ne: "व्यञ्जन", icon: "त", color: "var(--flag-red)", letters: true, items: [
    { ne: "त", rom: "ta", word: "तारा", wordRom: "taara", en: "Star", pic: "⭐" },
    { ne: "थ", rom: "tha", word: "थाल", wordRom: "thaal", en: "Plate", pic: "🍽️" },
    { ne: "द", rom: "da", word: "दाँत", wordRom: "daant", en: "Teeth", pic: "🦷" },
    { ne: "ध", rom: "dha", word: "धनुष", wordRom: "dhanush", en: "Bow", pic: "🏹" },
    { ne: "न", rom: "na", word: "नाक", wordRom: "naak", en: "Nose", pic: "👃" },
    { ne: "प", rom: "pa", word: "पानी", wordRom: "paani", en: "Water", pic: "💧" },
    { ne: "फ", rom: "pha", word: "फूल", wordRom: "phool", en: "Flower", pic: "🌸" },
    { ne: "ब", rom: "ba", word: "बाख्रा", wordRom: "baakhra", en: "Goat", pic: "🐐" },
    { ne: "भ", rom: "bha", word: "भालु", wordRom: "bhalu", en: "Bear", pic: "🐻" },
    { ne: "म", rom: "ma", word: "माछा", wordRom: "machha", en: "Fish", pic: "🐟" },
  ]},
  { id: "cons3", title: "Letters: य to ह", ne: "व्यञ्जन", icon: "य", color: "var(--panda)", letters: true, items: [
    { ne: "य", rom: "ya", word: "याक", wordRom: "yaak", en: "Yak", pic: "🐂" },
    { ne: "र", rom: "ra", word: "रेल", wordRom: "rel", en: "Train", pic: "🚂" },
    { ne: "ल", rom: "la", word: "लसुन", wordRom: "lasun", en: "Garlic", pic: "🧄" },
    { ne: "व", rom: "wa", word: "वन", wordRom: "ban", en: "Forest", pic: "🌳" },
    { ne: "स", rom: "sa", word: "सर्प", wordRom: "sarpa", en: "Snake", pic: "🐍" },
    { ne: "ह", rom: "ha", word: "हात्ती", wordRom: "hatti", en: "Elephant", pic: "🐘" },
  ]},
  { id: "sentences", title: "Make sentences", ne: "वाक्य", icon: "🧩", color: "var(--flag-green)", bigOnly: true, sentences: [
    { ne: ["म", "ठीक", "छु"], rom: ["ma", "thik", "chhu"], en: "I am fine." },
    { ne: ["मेरो", "नाम", "सीता", "हो"], rom: ["mero", "naam", "Sita", "ho"], en: "My name is Sita." },
    { ne: ["यो", "मेरो", "कुकुर", "हो"], rom: ["yo", "mero", "kukur", "ho"], en: "This is my dog." },
    { ne: ["मलाई", "मोमो", "मन", "पर्छ"], rom: ["malai", "momo", "man", "parchha"], en: "I like momo." },
    { ne: ["आकाश", "निलो", "छ"], rom: ["aakash", "nilo", "chha"], en: "The sky is blue." },
    { ne: ["म", "पानी", "पिउँछु"], rom: ["ma", "paani", "piunchhu"], en: "I drink water." },
    { ne: ["बिरालो", "सानो", "छ"], rom: ["biralo", "saano", "chha"], en: "The cat is small." },
    { ne: ["हात्ती", "ठूलो", "छ"], rom: ["hatti", "thulo", "chha"], en: "The elephant is big." },
  ]},
];

window.EXTRA_TILES = [["र", "ra"], ["पनि", "pani"], ["होइन", "hoina"], ["रातो", "raato"], ["तिमी", "timi"]];
window.CHEERS = [["स्याबास!", "syabaas!", "Well done!"], ["राम्रो!", "ramro!", "Great!"], ["एकदम ठीक!", "ekdam thik!", "Exactly right!"]];
window.PHRASES = { hello: "नमस्ते!", brand: "सजिलो नेपाली", tryAgain: "फेरि प्रयास गरौँ!", wellDone: "स्याबास!" };

/* What to say for a piece of Nepali text. Letters say the letter, then their example word. */
window.audioKey = function (text) { return String(text).replace(/[!।?.,]/g, "").trim(); };
window.letterKey = function (item) { return "L:" + item.ne; };
window.letterSpeech = function (item) { return item.ne + ", " + item.word + "।"; };
