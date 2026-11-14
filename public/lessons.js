/* Sajilo Nepali lesson content.
   Each word: ne = Nepali, rom = how to say it, en = English, pic = picture (emoji or short label).
   Letters also have: word / wordRom = an example word that starts with the letter.
   Audio for every Nepali text lives in audio/ and is listed in audio-manifest.js.
   Please have a native speaker review any changes. */

window.LESSONS = [
  { id: "greet", title: "Greetings", ne: "अभिवादन", rom: "abhivaadan", icon: "🙏", color: "var(--flag-blue)", items: [
    { ne: "नमस्ते", rom: "namaste", en: "Hello", ctx: "👵 You meet Hajuraama and say:", alt: ["hi", "namaste"], pic: "🙏" },
    { ne: "धन्यवाद", rom: "dhanyabad", en: "Thank you", ctx: "🎁 Didi gives you a gift. You say:", alt: ["thanks", "thankyou"], pic: "😊" },
    { ne: "हो", rom: "ho", en: "Yes", pic: "✅" },
    { ne: "होइन", rom: "hoina", en: "No", pic: "❌" },
    { ne: "शुभ रात्रि", rom: "shubha ratri", en: "Good night", ctx: "🌙 At bedtime you say:", alt: ["goodnight"], pic: "🌙" },
    { ne: "फेरि भेटौँला", rom: "pheri bhetaunla", en: "See you again", ctx: "👋 When a friend goes home you say:", alt: ["see you", "see you later", "goodbye", "bye"], pic: "👋" },
    { ne: "कृपया", rom: "kripayaa", en: "please", ctx: "🍪 You want one more cookie. You start with:", pic: "🥺", alt: ["pls", "please may i"] },
    { ne: "स्वागत छ", rom: "swaagat chha", en: "welcome", ctx: "🚪 A friend comes to your house. You say:", pic: "🤗", alt: ["welcome home", "you are welcome here"] },
  ]},
  { id: "num", title: "Numbers 1–10", ne: "अङ्क", rom: "anka", icon: "🔢", color: "var(--flag-yellow)", count: true, items: [
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
  { id: "home-animals", title: "Pets & Farm Animals", ne: "घरपालुवा जनावर", rom: "gharpaaluwaa janaawar", icon: "🐄", color: "var(--flag-green)", items: [
    { ne: "कुकुर", rom: "kukur", en: "Dog", alt: ["puppy"], pic: "🐕" },
    { ne: "बिरालो", rom: "biralo", en: "Cat", alt: ["kitten", "kitty"], pic: "🐈" },
    { ne: "गाई", rom: "gaai", en: "Cow", pic: "🐄" },
    { ne: "खरायो", rom: "kharaayo", en: "Rabbit", pic: "🐇", alt: ["bunny"] },
    { ne: "चरा", rom: "chara", en: "Bird", alt: ["birds"], pic: "🐦" },
    { ne: "माछा", rom: "machha", en: "Fish", pic: "🐟" },
  ]},
  { id: "animals", title: "Forest Animals", ne: "वनका जनावर", rom: "wanakaa janaawar", icon: "🐘", color: "var(--flag-green)", items: [
    { ne: "हात्ती", rom: "hatti", en: "Elephant", pic: "🐘" },
    { ne: "बाँदर", rom: "baandar", en: "Monkey", pic: "🐒" },
    { ne: "बाघ", rom: "bagh", en: "Tiger", pic: "🐅" },
    { ne: "भालु", rom: "bhalu", en: "Bear", pic: "🐻" },
    { ne: "गैँडा", rom: "gainda", en: "Rhino", alt: ["rhinoceros"], pic: "🦏" },
    { ne: "हरिण", rom: "harin", en: "Deer", pic: "🦌" },
    { ne: "हाब्रे", rom: "haabre", en: "Red panda", pic: "🦊", alt: ["panda"] },
  ]},
  { id: "colours", title: "Colors", ne: "रङ", rom: "rang", icon: "🎨", color: "var(--flag-red)", items: [
    { ne: "रातो", rom: "raato", en: "Red", pic: "🔴" },
    { ne: "निलो", rom: "nilo", en: "Blue", pic: "🔵" },
    { ne: "हरियो", rom: "hariyo", en: "Green", pic: "🟢" },
    { ne: "पहेँलो", rom: "pahenlo", en: "Yellow", pic: "🟡" },
    { ne: "सेतो", rom: "seto", en: "White", pic: "⚪" },
    { ne: "कालो", rom: "kaalo", en: "Black", pic: "⚫" },
    { ne: "सुन्तले", rom: "suntale", en: "Orange", pic: "🟠" },
    { ne: "गुलाबी", rom: "gulabi", en: "Pink", pic: "🌸" },
  ]},
  // --- At home: everyday spoken Nepali ---
  { id: "respect-family", title: "Family & Respect", ne: "परिवार र आदर", rom: "pariwaar ra aadar", icon: "👨‍👩‍👧‍👦", color: "var(--panda)", items: [
    { ne: "आमा", rom: "aama", en: "mom", pic: "👩", alt: ["mother", "mum", "mummy", "mama"] },
    { ne: "बाबा", rom: "baba", en: "dad", pic: "👨", alt: ["father", "daddy", "papa", "buwa", "buba"] },
    { ne: "हजुर", rom: "hajur", en: "yes (polite)", ctx: "👵 Hajuraama calls your name. You answer:", pic: "🙋", alt: ["yes", "pardon", "coming", "yes please"] },
    { ne: "दिदी", rom: "didi", en: "older sister", pic: "👧", alt: ["big sister", "elder sister", "sister"] },
    { ne: "दाइ", rom: "daai", en: "older brother", pic: "👦", alt: ["big brother", "elder brother", "brother"] },
    { ne: "बहिनी", rom: "bahini", en: "younger sister", pic: "👶", alt: ["little sister", "sister"] },
    { ne: "भाइ", rom: "bhaai", en: "younger brother", pic: "🧒", alt: ["little brother", "brother"] },
    { ne: "हजुरआमा", rom: "hajur-aama", en: "grandma", pic: "👵", alt: ["grandmother", "granny", "nana", "nani", "grandmom", "grandmama", "gran"] },
    { ne: "हजुरबा", rom: "hajur-ba", en: "grandpa", pic: "👴", alt: ["grandfather", "granddad", "grandad", "gramps", "grandpapa", "grandpop"] },
  ]},
  { id: "kitchen-tummy", title: "Kitchen & Tummy", ne: "भान्सा र खाना", rom: "bhaansa ra khaana", icon: "🍛", color: "var(--flag-green)",
    order: { box: "basket", who: "Hajuraama says: put these in the basket!", want: ["स्याउ", "दूध", "केरा", "मोमो", "रोटी", "पानी"], extra: ["जुत्ता", "किताब", "टोपी", "कुर्सी", "झोला"] }, items: [
    { ne: "पानी", rom: "paani", en: "water", pic: "💧", alt: ["drink water"] },
    { ne: "खाना", rom: "khaana", en: "rice", pic: "🍚", alt: ["cooked rice", "food", "meal", "khana", "bhat"] },
    { ne: "दूध", rom: "doodh", en: "milk", pic: "🥛", alt: ["warm milk"] },
    { ne: "दाल", rom: "daal", en: "lentil soup", pic: "🥣", alt: ["lentils", "lentil", "dal", "daal", "soup"] },
    { ne: "रोटी", rom: "roti", en: "flatbread", pic: "🫓", alt: ["bread", "roti"] },
    { ne: "स्याउ", rom: "syaau", en: "apple", pic: "🍎", alt: ["apples"] },
    { ne: "केरा", rom: "kera", en: "banana", pic: "🍌", alt: ["bananas"] },
    { ne: "मोमो", rom: "momo", en: "momo", pic: "🥟", alt: ["dumpling", "dumplings", "momos"] },
    { ne: "भोक लाग्यो", rom: "bhok laagyo", en: "I am hungry", ctx: "🧒 You tell Aama:", pic: "😋", alt: ["hungry", "im hungry", "i'm hungry", "feeling hungry"] },
    { ne: "मिठो छ", rom: "mitho chha", en: "it is yummy", ctx: "🍛 You taste the dal and say:", pic: "🤤", alt: ["yummy", "tasty", "delicious", "it is tasty", "its yummy"] },
    { ne: "अघाएँ", rom: "aghaaen", en: "I am full", ctx: "🍽️ After dinner you tell Aama:", pic: "😌", alt: ["full", "im full", "i'm full", "done eating"] },
    { ne: "तातो", rom: "taato", en: "hot", ctx: "👩 Aama warns you:", pic: "🔥", alt: ["warm"] },
    { ne: "चम्चा", rom: "chamcha", en: "spoon", pic: "🥄" },
    { ne: "पुग्यो", rom: "pugyo", en: "that's enough", ctx: "👵 Hajuraama offers more rice, but you're full. You say:", pic: "✋", alt: ["enough", "no more", "no more please", "that is enough", "i am good"] },
    { ne: "अझै अलिकति", rom: "ajhai alikati", en: "a little more", ctx: "🍛 The dal is so good. You hold out your plate:", pic: "🤏", alt: ["little more", "a bit more", "some more", "more please"] },
    { ne: "पिरो छ", rom: "piro chha", en: "it's spicy", ctx: "🌶️ You taste the achaar and fan your mouth:", pic: "🥵", alt: ["spicy", "it is spicy", "too spicy", "hot spicy"] },
  ]},
  { id: "veggies", title: "Veggies", ne: "तरकारी", rom: "tarkaari", icon: "🥕", color: "var(--flag-green)", items: [
    { ne: "आलु", rom: "aalu", en: "potato", pic: "🥔", alt: ["potatoes"] },
    { ne: "मकै", rom: "makai", en: "corn", pic: "🌽", alt: ["maize", "corn cob"] },
    { ne: "गाजर", rom: "gaajar", en: "carrot", pic: "🥕", alt: ["carrots"] },
    { ne: "गोलभेँडा", rom: "golbhenda", en: "tomato", pic: "🍅", alt: ["tomatoes"] },
    { ne: "काँक्रो", rom: "kaankro", en: "cucumber", pic: "🥒", alt: ["cucumbers"] },
    { ne: "प्याज", rom: "pyaaj", en: "onion", pic: "🧅", alt: ["onions"] },
    { ne: "लसुन", rom: "lasun", en: "garlic", pic: "🧄" },
    { ne: "साग", rom: "saag", en: "leafy greens", pic: "🥬", alt: ["greens", "spinach", "saag"] },
  ]},
  { id: "daily-routines", title: "Daily Routines", ne: "दैनिक काम", rom: "dainik kaam", icon: "🪥", color: "var(--flag-blue)",
    chains: [["उठ", "दाँत माझ", "जुत्ता लाऊ"], ["बाहिर खेलौँ", "हात धोऊ", "सुत"]], items: [
    { ne: "उठ", rom: "utha", en: "wake up", ctx: "👩 Aama, in the morning:", pic: "☀️", alt: ["get up", "stand up"] },
    { ne: "दाँत माझ", rom: "daant maajha", en: "brush teeth", ctx: "👩 Aama, after breakfast:", pic: "🪥", alt: ["brush your teeth", "brush"] },
    { ne: "हात धोऊ", rom: "haat dhou", en: "wash hands", ctx: "👩 Aama, before dinner:", pic: "🧼", alt: ["wash your hands", "clean hands"] },
    { ne: "जुत्ता लाऊ", rom: "jutta laau", en: "put on shoes", ctx: "👨 Baba, before school:", pic: "👟", alt: ["wear shoes", "shoes on", "put your shoes on"] },
    { ne: "यता आऊ", rom: "yata aau", en: "come here", ctx: "👩 Aama calls you:", pic: "👋", alt: ["come"] },
    { ne: "बाहिर खेलौँ", rom: "baahira khelaun", en: "let's play outside", ctx: "🧒 You ask Dai:", pic: "⚽", alt: ["play outside", "lets play", "lets play outside"] },
    { ne: "किताब पढ", rom: "kitaab padha", en: "read a book", ctx: "👨 Baba, after school:", pic: "📖", alt: ["read book", "read", "study"] },
    { ne: "सुत", rom: "suta", en: "go to sleep", ctx: "👩 Aama, at bedtime:", pic: "🛌", alt: ["sleep", "bedtime", "go to bed"] },
    { ne: "धोएँ", rom: "dhoen", en: "I washed them", ctx: "👩 Aama said “हात धोऊ”. When you're done, you tell her:", pic: "🙌", alt: ["i washed", "i washed my hands", "washed", "done washing"] },
    { ne: "खाँदै छु", rom: "khaandai chhu", en: "I am eating", ctx: "👩 Aama calls “खाना खाऊ!” You answer:", pic: "🍽️", alt: ["eating", "i m eating", "im eating", "i am eating now"] },
  ]},
  { id: "home-sentences", title: "Home Talk", ne: "घरको कुराकानी", rom: "gharko kuraakaani", icon: "🏠", color: "var(--flag-red)", sentences: [
    { ne: ["आमा", "मलाई", "भोक", "लाग्यो"], rom: ["aama", "malai", "bhok", "laagyo"], en: "Mom, I am hungry." },
    { ne: ["मलाई", "पानी", "दिनुहोस्"], rom: ["malai", "paani", "dinuhos"], en: "Please give me water." },
    { ne: ["ढोका", "बन्द", "गर"], rom: ["dhoka", "banda", "gara"], en: "Close the door." },
    { ne: ["खाना", "धेरै", "मिठो", "छ"], rom: ["khaana", "dherai", "mitho", "chha"], en: "The food is very yummy." },
    { ne: ["साबुनले", "हात", "धोऊ"], rom: ["saabunle", "haat", "dhou"], en: "Wash your hands with soap." },
    { ne: ["खेलौना", "मिलाएर", "राख"], rom: ["khelauna", "milaaera", "raakha"], en: "Put your toys away." },
  ]},
  { id: "what-i-have", title: "What I Have", ne: "मसँग के छ?", rom: "masanga ke chha?", icon: "🎒", color: "#e8742a", sentences: [
    { ne: ["मसँग", "झोला", "छ"], rom: ["masanga", "jhola", "chha"], en: "I have a bag." },
    { ne: ["मसँग", "किताब", "छ"], rom: ["masanga", "kitaab", "chha"], en: "I have a book." },
    { ne: ["मसँग", "रातो", "कलम", "छ"], rom: ["masanga", "raato", "kalam", "chha"], en: "I have a red pen." },
    { ne: ["मसँग", "नयाँ", "खेलौना", "छ"], rom: ["masanga", "nayaan", "khelauna", "chha"], en: "I have a new toy." },
    { ne: ["मसँग", "चस्मा", "छैन"], rom: ["masanga", "chasma", "chhaina"], en: "I don't have glasses." },
    { pic: "🎁", ne: ["तिमीसँग", "के", "छ"], rom: ["timisanga", "ke", "chha"], en: "What do you have?" },
  ]},
  { id: "body", title: "My body", ne: "शरीर", rom: "shareer", icon: "🙆", color: "var(--flag-red)", items: [
    { ne: "टाउको", rom: "taauko", en: "Head", pic: "🙆" },
    { ne: "कपाल", rom: "kapaal", en: "Hair", pic: "💇" },
    { ne: "आँखा", rom: "aankha", en: "Eyes", alt: ["eye"], pic: "👀" },
    { ne: "कान", rom: "kaan", en: "Ear", alt: ["ears"], pic: "👂" },
    { ne: "नाक", rom: "naak", en: "Nose", pic: "👃" },
    { ne: "मुख", rom: "mukh", en: "Mouth", pic: "👄" },
    { ne: "दाँत", rom: "daant", en: "Teeth", alt: ["tooth"], pic: "🦷" },
    { ne: "हात", rom: "haat", en: "Hand", alt: ["hands"], pic: "✋" },
    { ne: "खुट्टा", rom: "khutta", en: "Leg", alt: ["legs", "foot", "feet"], pic: "🦵" },
    { ne: "पेट", rom: "pet", en: "Tummy", pic: "🤢", alt: ["stomach", "belly"] },
    { ne: "औँला", rom: "aunla", en: "Finger", alt: ["fingers"], pic: "☝️" },
  ]},
  { id: "days", title: "Days of the week", ne: "बार", rom: "baar", icon: "📅", color: "var(--flag-yellow)", bigOnly: true, items: [
    { ne: "आइतबार", rom: "aaitabaar", en: "Sunday", pic: "SUN" },
    { ne: "सोमबार", rom: "sombaar", en: "Monday", pic: "MON" },
    { ne: "मङ्गलबार", rom: "mangalbaar", en: "Tuesday", pic: "TUE" },
    { ne: "बुधबार", rom: "budhabaar", en: "Wednesday", pic: "WED" },
    { ne: "बिहीबार", rom: "bihibaar", en: "Thursday", pic: "THU" },
    { ne: "शुक्रबार", rom: "shukrabaar", en: "Friday", pic: "FRI" },
    { ne: "शनिबार", rom: "shanibaar", en: "Saturday", pic: "SAT" },
  ]},
  // --- Around the home ---
  { id: "rooms-house", title: "My House", ne: "घरका कोठाहरू", rom: "gharka kothaharu", icon: "🏠", color: "#2f6fd6", items: [
    { ne: "भान्सा", rom: "bhansa", en: "kitchen", pic: "🍳", alt: ["bhansakotha"] },
    { ne: "सुत्ने कोठा", rom: "sutne kotha", en: "bedroom", pic: "🛏️", alt: ["bedroom"] },
    { ne: "आँगन", rom: "aangan", en: "yard / courtyard", pic: "🏡", alt: ["courtyard", "yard", "garden"] },
    { ne: "बाथरूम", rom: "baathruum", en: "bathroom", pic: "🚿", alt: ["bathroom", "toilet"] },
    { ne: "बैठक कोठा", rom: "baithak kotha", en: "living room", pic: "🛋️", alt: ["living room", "hall"] },
  ]},
  { id: "house-objects", title: "Around the Room", ne: "घरका सामान", rom: "gharka saamaan", icon: "🛋️", color: "var(--flag-blue)", items: [
    { ne: "ढोका", rom: "dhoka", en: "door", pic: "🚪" },
    { ne: "झ्याल", rom: "jhyaal", en: "window", pic: "🪟" },
    { ne: "ओछ्यान", rom: "ochhyaan", en: "bed", pic: "🛏️" },
    { ne: "कुर्सी", rom: "kursi", en: "chair", pic: "🪑", alt: ["seat"] },
    { ne: "खेलौना", rom: "khelauna", en: "toy", pic: "🧸", alt: ["toys"] },
    { ne: "किताब", rom: "kitaab", en: "book", pic: "📚", alt: ["books"] },
    { ne: "झोला", rom: "jhola", en: "bag", pic: "🎒", alt: ["backpack", "school bag"] },
    { ne: "बत्ती", rom: "batti", en: "light", pic: "💡", alt: ["lamp", "bulb"] },
  ]},
  // --- All about me ---
  { id: "feelings-needs", title: "Feelings & Needs", ne: "भावना र चाहना", rom: "bhaawana ra chaahana", icon: "😊", color: "var(--flag-yellow)", items: [
    { ne: "खुशी", rom: "khushi", en: "happy", pic: "😄", alt: ["glad"] },
    { ne: "दुःखी", rom: "dukhi", en: "sad", pic: "😢", alt: ["upset", "unhappy"] },
    { ne: "निद्रा लाग्यो", rom: "nidra laagyo", en: "sleepy", pic: "🥱", alt: ["i am sleepy", "im sleepy", "tired"], ctx: "🌙 At night you tell Aama:" },
    { ne: "तिर्खा लाग्यो", rom: "tirkha laagyo", en: "thirsty", pic: "🥤", alt: ["i am thirsty", "im thirsty"], ctx: "⚽ After playing you say:" },
    { ne: "जाडो भयो", rom: "jaado bhayo", en: "I feel cold", pic: "🥶", alt: ["cold", "it is cold", "i am cold", "feeling cold"] },
    { ne: "गर्मी भयो", rom: "garmi bhayo", en: "I feel hot", pic: "☀️", alt: ["hot", "it is hot", "i am hot", "feeling hot"] },
    { ne: "दुख्यो", rom: "dukhyo", en: "it hurts", pic: "🤕", alt: ["ouch", "pain", "hurts"], ctx: "🤕 You fall down and cry:" },
    { ne: "डर लाग्यो", rom: "dar laagyo", en: "I am scared", pic: "😨", alt: ["scared", "afraid", "im scared"] },
    { ne: "ठिक छ", rom: "thik chha", en: "it's okay", ctx: "🤝 Your friend says sorry. You smile and say:", pic: "👌", alt: ["its okay", "it is okay", "that's okay", "okay"] },
  ]},
  { id: "clothes", title: "Clothes & Shoes", ne: "लुगा र जुत्ता", rom: "luga ra jutta", icon: "👕", color: "var(--flag-green)", items: [
    { ne: "लुगा", rom: "luga", en: "clothes", pic: "👕", alt: ["shirt", "clothing"] },
    { ne: "जुत्ता", rom: "jutta", en: "shoes", pic: "👟", alt: ["shoe"] },
    { ne: "मोजा", rom: "moja", en: "socks", pic: "🧦", alt: ["sock"] },
    { ne: "चप्पल", rom: "chappal", en: "slippers", pic: "🩴", alt: ["sandals", "flip flops"] },
    { ne: "टोपी", rom: "topi", en: "hat", pic: "🧢", alt: ["cap"] },
    { ne: "ज्याकेट", rom: "jyaaket", en: "jacket", pic: "🧥", alt: ["coat"] },
    { ne: "चस्मा", rom: "chasma", en: "glasses", pic: "👓", alt: ["sunglasses", "spectacles"] },
    { ne: "फुकाल", rom: "phukaala", en: "take off", pic: "🧺", alt: ["take it off", "remove"], ctx: "👩 Aama, when you come home:" },
  ]},
  // --- Play & outside ---
  { id: "playtime-verbs", title: "Play & Move", ne: "खेल र कुद", rom: "khel ra kuda", icon: "🏃", color: "var(--flag-green)", items: [
    { ne: "दौड", rom: "dauda", en: "run", pic: "🏃", alt: ["run fast", "running"] },
    { ne: "उफ्र", rom: "uphra", en: "jump", pic: "🦘", alt: ["hop", "jumping"] },
    { ne: "नाच", rom: "naacha", en: "dance", pic: "💃", alt: ["dancing"] },
    { ne: "गाऊ", rom: "gaau", en: "sing", pic: "🎤", alt: ["sing a song", "singing"] },
    { ne: "हाँस", rom: "haansa", en: "laugh", pic: "😆", alt: ["smile", "laughing"] },
    { ne: "फ्याँक", rom: "phyaanka", en: "throw", pic: "🤾", alt: ["toss", "throw the ball"] },
    { ne: "समात", rom: "samaata", en: "catch", pic: "🤲", alt: ["hold", "grab"] },
    { ne: "लुक", rom: "luka", en: "hide", pic: "🙈", alt: ["hide and seek"] },
    { ne: "सँगै खेलौँ", rom: "sangai khelaun", en: "let's play together", ctx: "🧸 A new kid is alone at the park. You say:", pic: "🤝", alt: ["lets play together", "let us play together", "play together"] },
  ]},
  { id: "helping-verbs", title: "Everyday Actions", ne: "दैनिक क्रिया", rom: "dainik kriya", icon: "🧹", color: "var(--flag-blue)", items: [
    { ne: "हेर", rom: "hera", en: "look", pic: "👀", alt: ["see", "watch"] },
    { ne: "सुन", rom: "suna", en: "listen", pic: "👂", alt: ["hear", "listen to me"] },
    { ne: "देऊ", rom: "deu", en: "give", pic: "🎁", alt: ["give me", "hand over"] },
    { ne: "लेऊ", rom: "leu", en: "take", pic: "🫳", alt: ["take it", "get"] },
    { ne: "खोल", rom: "khola", en: "open", pic: "🔓", alt: ["open up", "open it"] },
    { ne: "बन्द गर", rom: "banda gara", en: "close", pic: "🔒", alt: ["shut", "turn off", "close it"] },
    { ne: "सफा गर", rom: "saphaa gara", en: "clean up", pic: "🧹", alt: ["clean", "tidy up"] },
    { ne: "पर्ख", rom: "parkha", en: "wait", pic: "✋", alt: ["hold on", "wait for me"] },
    { ne: "म मद्दत गर्छु", rom: "ma maddat garchhu", en: "I will help", ctx: "🧺 Aama is carrying heavy bags. You say:", pic: "💪", alt: ["i'll help", "ill help", "let me help", "i can help"] },
  ]},
  { id: "sports-outdoors", title: "Bikes, Balls & Park", ne: "पार्क र खेल", rom: "paark ra khel", icon: "🚲", color: "var(--panda)", items: [
    { ne: "भकुण्डो", rom: "bhakundo", en: "ball", pic: "⚽", alt: ["football", "soccer ball"] },
    { ne: "साइकल", rom: "saaikal", en: "bicycle", pic: "🚲", alt: ["bike", "cycle"] },
    { ne: "पिङ", rom: "ping", en: "swing", pic: "🎠", alt: ["swings"] },
    { ne: "पार्क", rom: "paark", en: "park", pic: "🛝", alt: ["playground"] },
    { ne: "बाटो", rom: "baato", en: "road", pic: "🛣️", alt: ["path", "street", "way"] },
    { ne: "साथी", rom: "saathi", en: "friend", pic: "🤝", alt: ["friends", "buddy"] },
    { ne: "जित", rom: "jita", en: "win", pic: "🏆", alt: ["winner", "victory"] },
    { ne: "पालो", rom: "paalo", en: "turn", pic: "🔄", alt: ["my turn", "your turn"] },
  ]},
  { id: "weather-nature", title: "Weather & Nature", ne: "मौसम र प्रकृति", rom: "mausam ra prakriti", icon: "⛰️", color: "var(--flag-blue)", items: [
    { ne: "घाम", rom: "ghaam", en: "sunshine", pic: "☀️", alt: ["sun", "sunny"] },
    { ne: "पानी पर्‍यो", rom: "paani paryo", en: "it is raining", pic: "🌧️", alt: ["rain", "raining", "its raining"] },
    { ne: "हिउँ", rom: "hiun", en: "snow", pic: "❄️", alt: ["snowing"] },
    { ne: "हावा", rom: "haawa", en: "wind", pic: "💨", alt: ["air", "breeze"] },
    { ne: "हिमाल", rom: "himaal", en: "snowy mountain", pic: "🏔️", alt: ["mountain", "mountains", "himalaya"] },
    { ne: "रूख", rom: "rookh", en: "tree", pic: "🌳", alt: ["trees"] },
    { ne: "फूल", rom: "phool", en: "flower", pic: "🌸", alt: ["flowers"] },
    { ne: "तारा", rom: "taara", en: "star", pic: "⭐", alt: ["stars"] },
    { ne: "चन्द्रमा", rom: "chandrama", en: "moon", pic: "🌙" },
  ]},
  { id: "opposites", title: "Opposites", ne: "उल्टो शब्द", rom: "ulto shabda", icon: "⚖️", color: "var(--flag-green)", items: [
    { ne: "ठूलो", rom: "thulo", en: "big", pic: "🐘", alt: ["large"] },
    { ne: "सानो", rom: "saano", en: "small", pic: "🐁", alt: ["little", "tiny"] },
    { ne: "तातो", rom: "taato", en: "hot", pic: "🔥", alt: ["warm"] },
    { ne: "चिसो", rom: "chiso", en: "cold", pic: "🧊", alt: ["cool"] },
    { ne: "छिटो", rom: "chhito", en: "fast", pic: "🐆", alt: ["quick", "quickly"] },
    { ne: "बिस्तारै", rom: "bistaarai", en: "slowly", pic: "🐢", alt: ["slow"] },
    { ne: "माथि", rom: "maathi", en: "up", pic: "⬆️", alt: ["above", "upstairs"] },
    { ne: "तल", rom: "tala", en: "down", pic: "⬇️", alt: ["below", "downstairs"] },
  ]},
  { id: "sound-words", title: "Fun Sound Words", ne: "रमाइलो आवाज", rom: "ramaailo aawaaj", icon: "🎶", color: "#f4b41a", items: [
    { ne: "टम्म", rom: "tamma", en: "full tummy (stuffed!)", pic: "🥟", ctx: "🥟 After eating 10 momos, your tummy feels:", alt: ["full", "full stomach", "stuffed", "tummy full", "full tummy"], ex: { ne: "मेरो पेट टम्म भयो।", rom: "mero pet tamma bhayo", en: "My tummy is completely full." } },
    { ne: "मुसुक्क", rom: "musukka", en: "sweet little smile", pic: "😊", ctx: "📸 When Aama takes your photo, you smile:", alt: ["smile", "smiling", "sweet smile"], ex: { ne: "ऊ मुसुक्क हाँस्यो।", rom: "u musukka haasyo", en: "He smiled sweetly." } },
    { ne: "ग्लुक्क", rom: "glukka", en: "gulp! (swallowing sound)", pic: "🥛", ctx: "🥛 Drinking a big glass of milk in one go:", alt: ["gulp", "swallow", "drinking sound"], ex: { ne: "पानी ग्लुक्क पिएँ।", rom: "paani glukka piyen", en: "I gulped down the water." } },
    { ne: "झमझम", rom: "jhamjham", en: "pouring rain sound", pic: "🌧️", ctx: "☔ Listen outside! The rain is falling:", alt: ["rain", "raining", "heavy rain", "pouring", "pouring rain"], ex: { ne: "झमझम पानी पर्‍यो।", rom: "jhamjham paani paryo", en: "The rain poured down." } },
    { ne: "खरपखुरुप", rom: "kharap-khurup", en: "gobbling up everything fast!", pic: "🍽️", ctx: "🍽️ Eating all your dinner super fast:", alt: ["eating fast", "gobble", "gobbling", "finish food", "gobble up"], ex: { ne: "खाना खरपखुरुप खाऊ।", rom: "khaana kharap-khurup khaau", en: "Eat up all your food quickly." } },
    { ne: "भुसुक्क", rom: "bhusukka", en: "fast asleep (knocked out!)", pic: "😴", ctx: "🌙 At bedtime, Pandu falls:", alt: ["asleep", "deep sleep", "sleeping", "fast asleep"], ex: { ne: "भाइ भुसुक्क निदायो।", rom: "bhaai bhusukka nidaayo", en: "Little brother fell fast asleep." } },
  ]},
  { id: "retro-90s", title: "Old-Day Games", ne: "पुरानो खेल र याद", rom: "puraano khel ra yaad", icon: "📼", color: "#e2453c", cassette: true, items: [
    { ne: "चुङ्गी", rom: "chungi", en: "chungi (kick shuttlecock)", pic: "🏸", ctx: "🏫 Recess time at school! Kick it up with your foot:", alt: ["chungi", "shuttlecock", "kick shuttlecock", "rubber band shuttlecock", "rubber band ball"], ex: { ne: "हामी चुङ्गी खेल्छौँ।", rom: "haami chungi khelchhau", en: "We play chungi." } },
    { ne: "डण्डीबियो", rom: "dandibiyo", en: "dandi biyo (stick and peg game)", pic: "🏏", ctx: "🌾 After harvest, in the open field, hit the little peg with a stick:", alt: ["dandi biyo", "dandibiyo", "stick game", "stick and peg", "gilli danda"], ex: { ne: "डण्डीबियो खेल्न जाऔँ।", rom: "dandibiyo khelna jaaun", en: "Let's go play dandi biyo." } },
    { ne: "गुच्चा", rom: "guchcha", en: "marbles", pic: "🔮", ctx: "🎯 Kneeling in the dusty lane, aiming for the little hole:", alt: ["marble", "glass marbles", "guchcha", "guccha"], ex: { ne: "गुच्चा खेल्न रमाइलो छ।", rom: "guchcha khelna ramaailo chha", en: "Playing marbles is fun." } },
    { ne: "क्यासेट", rom: "kyaaset", en: "cassette tape", pic: "📼", ctx: "✏️ Winding back a Narayan Gopal song with a pencil:", alt: ["cassette", "tape", "music tape", "audio tape"], ex: { ne: "क्यासेट बजाऊ।", rom: "kyaaset bajaau", en: "Play the cassette." } },
    { ne: "पेप्सीकोला", rom: "pepsikola", en: "ice pop (pepsi-cola)", pic: "🧊", ctx: "☀️ A hot afternoon after school, two rupees at the corner shop:", alt: ["ice pop", "ice lolly", "ice candy", "pepsi cola", "pepsicola", "popsicle"], ex: { ne: "पेप्सीकोला चिसो र गुलियो छ।", rom: "pepsikola chiso ra guliyo chha", en: "The ice pop is cold and sweet." } },
  ]},
  { id: "play-sentences", title: "Park Sentences", ne: "खेलको वाक्य", rom: "khelko waakya", icon: "⚽", color: "var(--flag-yellow)", sentences: [
    { ne: ["मलाई", "पर्ख"], rom: ["malai", "parkha"], en: "Wait for me." },
    { ne: ["अब", "मेरो", "पालो"], rom: ["aba", "mero", "paalo"], en: "Now it's my turn." },
    { ne: ["पार्कमा", "साइकल", "चलाऔँ"], rom: ["paarkma", "saaikal", "chalaaun"], en: "Let's ride bikes in the park." },
    { ne: ["हजुरबा", "यहाँ", "बस्नुहोस्"], rom: ["hajurba", "yahaan", "basnuhos"], en: "Grandpa, please sit here." },
    { ne: ["भकुण्डो", "मलाई", "फ्याँक"], rom: ["bhakundo", "malai", "phyaanka"], en: "Throw the ball to me." },
  ]},
  // --- Nepali culture & time ---
  { id: "festivals-culture", title: "Festivals & Traditions", ne: "चाडपर्व र संस्कृति", rom: "chaadparva ra sanskriti", icon: "🪔", color: "var(--panda)", items: [
    { ne: "टीका", rom: "tika", en: "tika", pic: "🔴", alt: ["blessing mark", "red mark"] },
    { ne: "जमरा", rom: "jamara", en: "barley shoots", pic: "🌱", alt: ["jamara"] },
    { ne: "दियो", rom: "diyo", en: "oil lamp", pic: "🪔", alt: ["lamp", "light", "diya"] },
    { ne: "माला", rom: "maala", en: "flower garland", pic: "🌼", alt: ["garland"] },
    { ne: "चङ्गा", rom: "changa", en: "kite", pic: "🪁", alt: ["flying kite"] },
    { ne: "मादल", rom: "maadal", en: "Nepali drum", pic: "🥁", alt: ["drum", "madal"] },
    { ne: "मन्दिर", rom: "mandir", en: "temple", pic: "🛕", alt: ["shrine"] },
    { ne: "आशीर्वाद", rom: "aashirwaad", en: "blessing", pic: "🙏", alt: ["blessings"] },
  ]},
  { id: "our-nepal", title: "Our Nepal", ne: "हाम्रो नेपाल", rom: "haamro nepaal", icon: "🇳🇵", color: "var(--flag-red)", items: [
    { ne: "झण्डा", rom: "jhanda", en: "flag", pic: "🇳🇵", alt: ["nepal flag", "nepali flag"] },
    { ne: "डाँफे", rom: "daanphe", en: "Danphe bird", img: "av-danphe", pic: "🦚", alt: ["danphe", "pheasant", "national bird"] },
    { ne: "लालीगुराँस", rom: "laaliguraans", en: "rhododendron", pic: "🌺", alt: ["national flower", "red flower"] },
    { ne: "सगरमाथा", rom: "sagarmaathaa", en: "Mount Everest", pic: "🏔️", alt: ["everest", "sagarmatha", "tallest mountain"] },
    { ne: "ढाका टोपी", rom: "dhaakaa topi", en: "Dhaka topi", pic: "🧢", alt: ["topi", "nepali hat", "dhaka hat"] },
    { ne: "सारङ्गी", rom: "saarangi", en: "sarangi", pic: "🎻", alt: ["fiddle", "nepali fiddle"] },
    { ne: "चौतारी", rom: "chautaari", en: "resting place", pic: "🌳", alt: ["chautari", "rest stop", "resting spot"] },
  ]},
  { id: "nepali-treats", title: "Nepali Treats", ne: "मिठो परिकार", rom: "mitho parikaar", icon: "🥟", color: "var(--flag-red)",
    order: { box: "thali", bigWho: "Hajurbaa's order! Listen and fill his thali:", want: ["दाल भात", "अचार", "दही", "पापड", "चिया", "सेल रोटी", "रोटी", "मोमो"] }, items: [
    { ne: "मोमो", rom: "momo", en: "momo", pic: "🥟", alt: ["dumplings", "momos"] },
    { ne: "दाल भात", rom: "daal bhaat", en: "lentils and rice", pic: "🍛", alt: ["dal bhat", "rice and lentils"] },
    { ne: "चिया", rom: "chiya", en: "milk tea", pic: "☕", alt: ["tea", "chai"] },
    { ne: "सेल रोटी", rom: "sel roti", en: "sel roti", pic: "🍩", alt: ["sweet ring bread", "selroti", "donut"] },
    { ne: "अचार", rom: "achaar", en: "pickle", pic: "🌶️", alt: ["chutney", "achar"] },
    { ne: "दही", rom: "dahi", en: "yogurt", pic: "🥣", alt: ["curd", "yoghurt"] },
    { ne: "रोटी", rom: "roti", en: "flatbread", pic: "🫓", alt: ["bread", "chapati"] },
    { ne: "पापड", rom: "paapad", en: "papad", pic: "🍘", alt: ["cracker", "crispy cracker"] },
  ]},
  { id: "time-of-day", title: "Time & Days", ne: "समय र दिन", rom: "samaya ra din", icon: "⏰", color: "var(--flag-blue)", items: [
    { ne: "बिहान", rom: "bihaana", en: "morning", pic: "🌅", alt: ["in the morning"] },
    { ne: "दिउँसो", rom: "diunso", en: "afternoon", pic: "☀️", alt: ["daytime", "midday"] },
    { ne: "साँझ", rom: "saanjha", en: "evening", pic: "🌇", alt: ["dusk", "sunset"] },
    { ne: "राति", rom: "raati", en: "night", pic: "🌙", alt: ["at night", "nighttime"] },
    { ne: "आज", rom: "aaja", en: "today", pic: "📅" },
    { ne: "भोलि", rom: "bholi", en: "tomorrow", pic: "⏭️" },
    { ne: "हिजो", rom: "hijo", en: "yesterday", pic: "⏮️" },
    { ne: "अहिले", rom: "ahile", en: "right now", pic: "⏱️", alt: ["now"] },
  ]},
  { id: "question-words", title: "Asking Questions", ne: "प्रश्नहरू", rom: "prashnaharu", icon: "❓", color: "var(--flag-red)", items: [
    { ne: "के हो?", rom: "ke ho?", en: "what is it?", pic: "❓", alt: ["what", "what is this", "whats that"] },
    { ne: "कहाँ छ?", rom: "kahaan chha?", en: "where is it?", pic: "🗺️", alt: ["where"] },
    { ne: "को हो?", rom: "ko ho?", en: "who is it?", pic: "🧑", alt: ["who"] },
    { ne: "किन?", rom: "kina?", en: "why?", pic: "🤔", alt: ["why"] },
    { ne: "कहिले?", rom: "kahile?", en: "when?", pic: "⏰", alt: ["when"] },
    { ne: "कति?", rom: "kati?", en: "how many?", pic: "🔢", alt: ["how many", "how much"] },
    { ne: "कस्तो छ?", rom: "kasto chha?", en: "how is it?", pic: "👍", alt: ["how are you", "how"] },
  ]},
  { id: "culture-sentences", title: "Festival Talk", ne: "चाडपर्वको कुरा", rom: "chaadparvako kura", icon: "🎉", color: "var(--flag-yellow)", bigOnly: true, sentences: [
    { ne: ["आज", "शनिबार", "हो"], rom: ["aaja", "shanibaar", "ho"], en: "Today is Saturday." },
    { ne: ["हजुरआमाले", "टीका", "लगाइदिनुभयो"], rom: ["hajuraamaale", "tika", "lagaaidinubhayo"], en: "Grandma put tika on me." },
    { ne: ["मोमो", "धेरै", "मिठो", "छ"], rom: ["momo", "dherai", "mitho", "chha"], en: "Momo is very yummy." },
    { ne: ["साँझमा", "दियो", "बाल"], rom: ["saanjhama", "diyo", "baala"], en: "Light the lamp in the evening." },
    { ne: ["बाहिर", "चङ्गा", "उडाऔँ"], rom: ["baahira", "changa", "udaaun"], en: "Let's fly a kite outside." },
  ]},
  // --- Nature & travel ---
  { id: "birds-bugs", title: "Birds & Bugs", ne: "चरा र कीरा", rom: "chara ra kira", icon: "🦋", color: "var(--flag-yellow)", items: [
    { ne: "चरा", rom: "chara", en: "bird", pic: "🐦", alt: ["birdie"] },
    { ne: "पुतली", rom: "putali", en: "butterfly", pic: "🦋" },
    { ne: "मौरी", rom: "mauri", en: "bee", pic: "🐝", alt: ["honeybee"] },
    { ne: "कमिला", rom: "kamila", en: "ant", pic: "🐜", alt: ["ants"] },
    { ne: "माकुरा", rom: "maakura", en: "spider", pic: "🕷️" },
    { ne: "भ्यागुतो", rom: "bhyaaguto", en: "frog", pic: "🐸", alt: ["toad"] },
    { ne: "माछा", rom: "maachha", en: "fish", pic: "🐟" },
    { ne: "कछुवा", rom: "kachhuwa", en: "turtle", pic: "🐢", alt: ["tortoise"] },
  ]},
  { id: "vehicles-travel", title: "On the Go", ne: "गाडी र यात्रा", rom: "gaadi ra yaatra", icon: "🚗", color: "var(--flag-blue)", items: [
    { ne: "गाडी", rom: "gaadi", en: "car", pic: "🚗", alt: ["vehicle"] },
    { ne: "बस", rom: "bas", en: "bus", pic: "🚌", alt: ["school bus"] },
    { ne: "रेल", rom: "rel", en: "train", pic: "🚂" },
    { ne: "हवाईजहाज", rom: "hawaaijahaaj", en: "airplane", pic: "✈️", alt: ["plane", "aeroplane"] },
    { ne: "डुङ्गा", rom: "dunga", en: "boat", pic: "⛵", alt: ["ship"] },
    { ne: "नदी", rom: "nadi", en: "river", pic: "🏞️", alt: ["stream"] },
    { ne: "समुद्र", rom: "samudra", en: "sea", pic: "🏖️", alt: ["ocean", "beach"] },
    { ne: "पुल", rom: "pul", en: "bridge", pic: "🌉" },
  ]},
  { id: "animal-sounds", title: "Animal Sounds", ne: "जनावरको आवाज", rom: "janaawarko aawaaj", icon: "🐶", color: "var(--flag-green)", items: [
    { ne: "भाउ भाउ", rom: "bhau bhau", en: "woof woof (dog)", pic: "🐕", img: "w-dog", alt: ["woof", "woof woof", "dog", "bark", "dog barking"] },
    { ne: "म्याउँ म्याउँ", rom: "myaaun myaaun", en: "meow meow (cat)", pic: "🐈", img: "w-cat", alt: ["meow", "meow meow", "cat", "miaow"] },
    { ne: "बाँ बाँ", rom: "baan baan", en: "moo moo (cow)", pic: "🐄", img: "w-cow", alt: ["moo", "moo moo", "cow"] },
    { ne: "चिरबिर", rom: "chirbir", en: "tweet tweet (bird)", pic: "🐦", img: "w-bird", alt: ["tweet", "tweet tweet", "chirp", "bird", "chirping"] },
    { ne: "ट्वार्र ट्वार्र", rom: "twaarra twaarra", en: "ribbit ribbit (frog)", pic: "🐸", img: "w-frog", alt: ["ribbit", "croak", "frog", "ribbit ribbit"] },
  ]},
  { id: "travel-sentences", title: "Out & About", ne: "घुम्न जाऔँ", rom: "ghumna jaaun", icon: "🏕️", color: "var(--panda)", bigOnly: true, sentences: [
    { ne: ["ठूलो", "हात्ती", "हेर"], rom: ["thulo", "hatti", "hera"], en: "Look at the big elephant." },
    { ne: ["चरा", "रूखमा", "छ"], rom: ["chara", "rookhma", "chha"], en: "The bird is in the tree." },
    { ne: ["समुद्रमा", "पौडी", "खेलौँ"], rom: ["samudrama", "paudi", "khelaun"], en: "Let's swim in the sea." },
    { ne: ["बाँदर", "छिटो", "उफ्रियो"], rom: ["baandar", "chhito", "uphriyo"], en: "The monkey jumped fast." },
  ]},
  // --- School & counting ---
  { id: "school-supplies", title: "School & Drawing", ne: "स्कूल र पढाइ", rom: "skul ra padhaai", icon: "🎒", color: "var(--flag-blue)", items: [
    { ne: "स्कूल", rom: "skul", en: "school", pic: "🏫" },
    { ne: "कलम", rom: "kalam", en: "pen", pic: "✏️", alt: ["pencil"] },
    { ne: "कागज", rom: "kaagaj", en: "paper", pic: "📄", alt: ["page", "sheet"] },
    { ne: "कापी", rom: "kaapi", en: "notebook", pic: "📓", alt: ["copy"] },
    { ne: "चित्र", rom: "chitra", en: "picture", pic: "🖼️", alt: ["drawing", "art", "photo"] },
    { ne: "कथा", rom: "katha", en: "story", pic: "📖", alt: ["tale"] },
    { ne: "गीत", rom: "geet", en: "song", pic: "🎵", alt: ["music"] },
    { ne: "शिक्षक", rom: "shikshak", en: "teacher", pic: "👩‍🏫" },
  ]},
  { id: "shapes", title: "Shapes", ne: "आकार", rom: "aakaar", icon: "🔷", color: "var(--flag-yellow)", items: [
    { ne: "गोलो", rom: "golo", en: "circle", pic: "⭕", alt: ["round", "a circle"] },
    { ne: "वर्ग", rom: "barga", en: "square", pic: "🟦", alt: ["a square", "four cornered", "four-cornered", "four corners", "chaarkune", "charkune"], ex: { ne: "वर्गलाई चारकुने पनि भन्छन्।", rom: "bargalaai chaarkune pani bhanchhan.", en: "People also call a square चारकुने (four corners)." } },
    { ne: "त्रिभुज", rom: "tribhuj", en: "triangle", pic: "🔺", alt: ["a triangle", "three cornered", "three-cornered", "three corners", "teenkune", "tinkune"], ex: { ne: "त्रिभुजलाई तीनकुने पनि भन्छन्।", rom: "tribhujlaai teenkune pani bhanchhan.", en: "People also call a triangle तीनकुने (three corners)." } },
    { ne: "आयत", rom: "aayat", en: "rectangle", pic: "▬", alt: ["a rectangle", "oblong"] },
    { ne: "तारा", rom: "taaraa", en: "star", pic: "⭐", alt: ["a star"] },
    { ne: "मुटु", rom: "mutu", en: "heart", pic: "❤️", alt: ["a heart", "heart shape"] },
  ]},
  { id: "fruits-snacks", title: "Fruits & Lunchbox", ne: "फलफूल र खाजा", rom: "phalphul ra khaaja", icon: "🍎", color: "var(--flag-red)", items: [
    { ne: "स्याउ", rom: "syaau", en: "apple", pic: "🍎", alt: ["apples"] },
    { ne: "केरा", rom: "kera", en: "banana", pic: "🍌", alt: ["bananas"] },
    { ne: "आँप", rom: "aanp", en: "mango", pic: "🥭", alt: ["mangoes"] },
    { ne: "सुन्तला", rom: "suntala", en: "orange", pic: "🍊", alt: ["tangerine", "mandarin"] },
    { ne: "अंगुर", rom: "angur", en: "grapes", pic: "🍇", alt: ["grape"] },
    { ne: "कागती", rom: "kaagati", en: "lemon", pic: "🍋", alt: ["lime"] },
    { ne: "गुलियो", rom: "guliyo", en: "sweet", pic: "🍯", alt: ["sugary"] },
    { ne: "अमिलो", rom: "amilo", en: "sour", pic: "😖", alt: ["tart"] },
  ]},
  { id: "numbers-11-20", title: "Numbers 11–20", ne: "एघारदेखि बीस", rom: "eghaardekhi bees", icon: "🔢", color: "var(--flag-yellow)", bigOnly: true, items: [
    { ne: "एघार", rom: "eghaara", en: "eleven", pic: "11", digit: "११", n: 11 },
    { ne: "बाह्र", rom: "baahra", en: "twelve", pic: "12", digit: "१२", n: 12 },
    { ne: "तेह्र", rom: "tehra", en: "thirteen", pic: "13", digit: "१३", n: 13 },
    { ne: "चौध", rom: "chaudha", en: "fourteen", pic: "14", digit: "१४", n: 14 },
    { ne: "पन्ध्र", rom: "pandhra", en: "fifteen", pic: "15", digit: "१५", n: 15 },
    { ne: "सोह्र", rom: "sohra", en: "sixteen", pic: "16", digit: "१६", n: 16 },
    { ne: "सत्र", rom: "satra", en: "seventeen", pic: "17", digit: "१७", n: 17 },
    { ne: "अठार", rom: "athaara", en: "eighteen", pic: "18", digit: "१८", n: 18 },
    { ne: "उन्नाइस", rom: "unnaais", en: "nineteen", pic: "19", digit: "१९", n: 19 },
    { ne: "बीस", rom: "bees", en: "twenty", pic: "20", digit: "२०", n: 20 },
  ]},
  // --- Real conversations ---
  { id: "likes-dislikes", title: "I Like It!", ne: "मन पर्छ", rom: "man parchha", icon: "❤️", color: "var(--flag-red)", items: [
    { ne: "मन पर्छ", rom: "man parchha", en: "I like it", pic: "😍", alt: ["like", "love it", "i love it"] },
    { ne: "मन पर्दैन", rom: "man pardaina", en: "I don't like it", pic: "🙅", alt: ["dont like", "do not like", "dislike"] },
    { ne: "चाहिन्छ", rom: "chaahinchha", en: "I need it", pic: "🙋", alt: ["need", "want", "i want it"] },
    { ne: "चाहिँदैन", rom: "chaahindaina", en: "I don't need it", pic: "✋", alt: ["no thanks", "dont want", "dont need"] },
    { ne: "थाहा छ", rom: "thaaha chha", en: "I know", pic: "💡", alt: ["know"] },
    { ne: "थाहा छैन", rom: "thaaha chhaina", en: "I don't know", pic: "🤷", alt: ["dont know", "not sure"] },
    { ne: "हुन्छ", rom: "hunchha", en: "okay", pic: "👌", alt: ["ok", "alright", "sure", "yes"] },
    { ne: "हुँदैन", rom: "hundaina", en: "not allowed", pic: "🚫", alt: ["no", "not okay"] },
  ]},
  { id: "phone-grandparents", title: "Talking to Family", ne: "सञ्चो बिसञ्चो", rom: "sancho bisancho", icon: "📞", color: "var(--flag-green)", items: [
    { ne: "सञ्चै हुनुहुन्छ?", rom: "sanchai hunuhunchha?", en: "how are you? (polite)", pic: "👵", alt: ["how are you"], ctx: "📞 Hajuraama calls. You ask:" },
    { ne: "सञ्चै छु", rom: "sanchai chhu", en: "I am fine", pic: "😊", alt: ["im fine", "fine", "good"] },
    { ne: "खाना खानुभयो?", rom: "khaana khaanubhayo?", en: "did you eat? (polite)", pic: "🍛", alt: ["did you eat", "have you eaten"] },
    { ne: "खाएँ", rom: "khaaen", en: "I ate", pic: "😋", alt: ["i have eaten", "yes i ate", "already ate"] },
    { ne: "के गर्दै हुनुहुन्छ?", rom: "ke gardai hunuhunchha?", en: "what are you doing?", pic: "🤔", alt: ["what are you doing", "what are you up to"] },
    { ne: "माया गर्छु", rom: "maaya garchhu", en: "I love you", pic: "🫶", alt: ["love you"] },
    { ne: "फेरि भेटौँला", rom: "pheri bhetaunla", en: "see you again", pic: "👋", alt: ["see you later", "bye", "goodbye"] },
  ]},
  { id: "polite-commands", title: "Talking to Elders", ne: "तपाईं र तिमी", rom: "tapaain ra timi", icon: "🙇", color: "var(--flag-red)", bigOnly: true, items: [
    { ne: "आउनुहोस्", rom: "aaunuhos", en: "please come", pic: "🙏", alt: ["come please", "please come in"] },
    { ne: "बस्नुहोस्", rom: "basnuhos", en: "please sit", pic: "🪑", alt: ["sit down please", "please sit down"] },
    { ne: "खानुहोस्", rom: "khaanuhos", en: "please eat", pic: "🍽️", alt: ["eat please"] },
    { ne: "दिनुहोस्", rom: "dinuhos", en: "please give", pic: "🤲", alt: ["give please", "please give me"] },
    { ne: "हेर्नुहोस्", rom: "hernuhos", en: "please look", pic: "👀", alt: ["look please"] },
    { ne: "सुन्नुहोस्", rom: "sunnuhos", en: "please listen", pic: "👂", alt: ["listen please"] },
    { ne: "माफ गर्नुहोस्", rom: "maaf garnuhos", en: "sorry", pic: "🙇", alt: ["excuse me", "i am sorry", "forgive me"] },
  ]},
  { id: "grandparent-sentences", title: "Conversation Master", ne: "कुराकानी", rom: "kuraakaani", icon: "💬", color: "var(--flag-blue)", sentences: [
    { ne: ["मलाई", "आँप", "मन", "पर्छ"], rom: ["malai", "aanp", "man", "parchha"], en: "I really like mangoes." },
    { ne: ["हजुरआमा", "सञ्चै", "हुनुहुन्छ?"], rom: ["hajuraama", "sanchai", "hunuhunchha?"], en: "Grandma, how are you?" },
    { ne: ["म", "आज", "स्कूल", "गएँ"], rom: ["ma", "aaja", "skul", "gaen"], en: "I went to school today." },
    { ne: ["आमा", "म", "तपाईंलाई", "माया", "गर्छु"], rom: ["aama", "ma", "tapaainlaai", "maaya", "garchhu"], en: "Mom, I love you." },
    { ne: ["मेरो", "झोला", "कहाँ", "छ", "थाहा", "छैन"], rom: ["mero", "jhola", "kahaan", "chha", "thaaha", "chhaina"], en: "I don't know where my bag is." },
  ]},
  // Letters follow the Nepali वर्णमाला chart (स्वर वर्ण and व्यञ्जन वर्ण) and its example words.
  // hint: "has" = the word contains the letter but doesn't start with it; "none" = no example word.
  { id: "vowels", title: "Letters: vowels", ne: "स्वर वर्ण", rom: "swar barna", icon: "अ", color: "var(--flag-green)", letters: true, items: [
    { ne: "अ", rom: "a", word: "अमला", wordRom: "amala", en: "Gooseberry", pic: "🍏" },
    { ne: "आ", rom: "aa", word: "आमा", wordRom: "aama", en: "Mother", pic: "👩‍👧" },
    { ne: "इ", rom: "i", word: "इनार", wordRom: "inaar", en: "Well", pic: "🪣" },
    { ne: "ई", rom: "ii", word: "ईश्वर", wordRom: "iishwar", en: "God", pic: "🕉️" },
    { ne: "उ", rom: "u", word: "उखु", wordRom: "ukhu", en: "Sugarcane", pic: "🎋" },
    { ne: "ऊ", rom: "uu", word: "ऊन", wordRom: "uun", en: "Wool", pic: "🧶" },
    { ne: "ऋ", rom: "ri", word: "ऋषि", wordRom: "rishi", en: "Sage", pic: "🧘" },
    { ne: "ए", rom: "e", word: "एकतारे", wordRom: "ektaare", en: "One-string lute", pic: "🪕" },
    { ne: "ऐ", rom: "ai", word: "ऐना", wordRom: "aina", en: "Mirror", pic: "🪞" },
    { ne: "ओ", rom: "o", word: "ओखर", wordRom: "okhar", en: "Walnut", pic: "🌰" },
    { ne: "औ", rom: "au", word: "औषधी", wordRom: "aushadhi", en: "Medicine", pic: "💊" },
    { ne: "अं", rom: "am", word: "अंगुर", wordRom: "angur", en: "Grapes", pic: "🍇" },
    { ne: "अः", rom: "ah", hint: "none", en: "Say “ah”", pic: "अः" },
  ]},
  { id: "cons1", title: "Letters: क to ञ", ne: "व्यञ्जन वर्ण", rom: "byanjan barna", icon: "क", color: "var(--flag-blue)", letters: true, items: [
    { ne: "क", rom: "ka", word: "कछुवा", wordRom: "kachhuwa", en: "Tortoise", pic: "🐢" },
    { ne: "ख", rom: "kha", word: "खरायो", wordRom: "kharayo", en: "Rabbit", pic: "🐇" },
    { ne: "ग", rom: "ga", word: "गमला", wordRom: "gamala", en: "Flower pot", pic: "🪴" },
    { ne: "घ", rom: "gha", word: "घडी", wordRom: "ghadi", en: "Watch", pic: "⌚" },
    { ne: "ङ", rom: "nga", word: "नङ", wordRom: "nang", en: "Fingernail", pic: "💅", hint: "has" },
    { ne: "च", rom: "cha", word: "चरा", wordRom: "chara", en: "Bird", pic: "🐦" },
    { ne: "छ", rom: "chha", word: "छाता", wordRom: "chhaata", en: "Umbrella", pic: "☂️" },
    { ne: "ज", rom: "ja", word: "जग", wordRom: "jag", en: "Jug", pic: "🫖" },
    { ne: "झ", rom: "jha", word: "झण्डा", wordRom: "jhanda", en: "Flag", pic: "🇳🇵" },
    { ne: "ञ", rom: "nya", hint: "none", en: "Say “nya”", pic: "ञ" },
  ]},
  { id: "cons2", title: "Letters: ट to न", ne: "व्यञ्जन वर्ण", rom: "byanjan barna", icon: "ट", color: "var(--flag-red)", letters: true, items: [
    { ne: "ट", rom: "ṭa", word: "टपरी", wordRom: "tapari", en: "Leaf plate", pic: "🍃" },
    { ne: "ठ", rom: "ṭha", word: "ठडेउरो", wordRom: "thadeuro", en: "Lamp stand", pic: "🪔" },
    { ne: "ड", rom: "ḍa", word: "डमरु", wordRom: "damaru", en: "Hand drum", pic: "🪘" },
    { ne: "ढ", rom: "ḍha", word: "ढक्की", wordRom: "dhakki", en: "Basket", pic: "🧺" },
    { ne: "ण", rom: "ṇa", word: "णतो", wordRom: "nato", en: "Book stand", pic: "📖" },
    { ne: "त", rom: "ta", word: "तराजु", wordRom: "taraju", en: "Scales", pic: "⚖️" },
    { ne: "थ", rom: "tha", word: "थरमस", wordRom: "tharmas", en: "Flask", pic: "🧴" },
    { ne: "द", rom: "da", word: "दराज", wordRom: "daraj", en: "Cupboard", pic: "🗄️" },
    { ne: "ध", rom: "dha", word: "धनुष", wordRom: "dhanush", en: "Bow", pic: "🏹" },
    { ne: "न", rom: "na", word: "नरिवल", wordRom: "nariwal", en: "Coconut", pic: "🥥" },
  ]},
  { id: "cons3", title: "Letters: प to व", ne: "व्यञ्जन वर्ण", rom: "byanjan barna", icon: "प", color: "var(--panda)", letters: true, items: [
    { ne: "प", rom: "pa", word: "परेवा", wordRom: "parewa", en: "Pigeon", pic: "🕊️" },
    { ne: "फ", rom: "pha", word: "फलफूल", wordRom: "phalphul", en: "Fruits", pic: "🍉" },
    { ne: "ब", rom: "ba", word: "बस", wordRom: "bas", en: "Bus", pic: "🚌" },
    { ne: "भ", rom: "bha", word: "भकुण्डो", wordRom: "bhakundo", en: "Football", pic: "⚽" },
    { ne: "म", rom: "ma", word: "मकै", wordRom: "makai", en: "Corn", pic: "🌽" },
    { ne: "य", rom: "ya", word: "यज्ञ", wordRom: "yagya", en: "Fire ritual", pic: "🔥" },
    { ne: "र", rom: "ra", word: "रथ", wordRom: "rath", en: "Chariot", pic: "🛞" },
    { ne: "ल", rom: "la", word: "लसुन", wordRom: "lasun", en: "Garlic", pic: "🧄" },
    { ne: "व", rom: "wa", word: "वकिल", wordRom: "wakil", en: "Lawyer", pic: "🧑‍⚖️" },
  ]},
  { id: "cons4", title: "Letters: श to ज्ञ", ne: "व्यञ्जन वर्ण", rom: "byanjan barna", icon: "श", color: "var(--flag-yellow)", letters: true, items: [
    { ne: "श", rom: "sha", word: "शङ्ख", wordRom: "shankha", en: "Conch shell", pic: "🐚" },
    { ne: "ष", rom: "ṣha", word: "षट्कोण", wordRom: "shatkon", en: "Six-point star", pic: "🔯" },
    { ne: "स", rom: "sa", word: "सर्प", wordRom: "sarpa", en: "Snake", pic: "🐍" },
    { ne: "ह", rom: "ha", word: "हलो", wordRom: "halo", en: "Plough", pic: "🚜" },
    { ne: "क्ष", rom: "ksha", word: "क्षमा", wordRom: "kshama", en: "Sorry", pic: "🙏" },
    { ne: "त्र", rom: "tra", word: "त्रिशूल", wordRom: "trishul", en: "Trident", pic: "🔱" },
    { ne: "ज्ञ", rom: "gya", word: "ज्ञानी", wordRom: "gyani", en: "Good child", pic: "🧒" },
  ]},
  { id: "barakhari", title: "Matra Magic", ne: "बाह्रखरी", rom: "baahrakhari", icon: "का", color: "var(--flag-blue)", letters: true, barakhari: true, items: [
    { ne: "पा", rom: "paa", base: "प", sign: "ा", word: "पानी", wordRom: "paani", en: "water", pic: "💧" },
    { ne: "कि", rom: "ki", base: "क", sign: "ि", word: "किताब", wordRom: "kitaab", en: "book", pic: "📖" },
    { ne: "दी", rom: "dee", base: "द", sign: "ी", word: "दिदी", wordRom: "didi", en: "older sister", pic: "👧", hint: true },
    { ne: "कु", rom: "ku", base: "क", sign: "ु", word: "कुकुर", wordRom: "kukur", en: "dog", pic: "🐕" },
    { ne: "दू", rom: "doo", base: "द", sign: "ू", word: "दूध", wordRom: "doodh", en: "milk", pic: "🥛" },
    { ne: "के", rom: "ke", base: "क", sign: "े", word: "केरा", wordRom: "keraa", en: "banana", pic: "🍌" },
    { ne: "कै", rom: "kai", base: "क", sign: "ै", word: "मकै", wordRom: "makai", en: "corn", pic: "🌽", hint: true },
    { ne: "मो", rom: "mo", base: "म", sign: "ो", word: "मोमो", wordRom: "momo", en: "momo", pic: "🥟" },
    { ne: "मौ", rom: "mau", base: "म", sign: "ौ", word: "मौरी", wordRom: "mauri", en: "bee", pic: "🐝" },
    { ne: "अं", rom: "an", base: "अ", sign: "ं", word: "अंगुर", wordRom: "angur", en: "grapes", pic: "🍇" },
  ]},
  { id: "sentences", title: "Make sentences", ne: "वाक्य", rom: "waakya", icon: "🧩", color: "var(--flag-green)", bigOnly: true, sentences: [
    { pic: "😊", ne: ["म", "ठीक", "छु"], rom: ["ma", "thik", "chhu"], en: "I am fine." },
    { pic: "👧", ne: ["मेरो", "नाम", "सीता", "हो"], rom: ["mero", "naam", "Sita", "ho"], en: "My name is Sita." },
    { ne: ["यो", "मेरो", "कुकुर", "हो"], rom: ["yo", "mero", "kukur", "ho"], en: "This is my dog." },
    { ne: ["मलाई", "मोमो", "मन", "पर्छ"], rom: ["malai", "momo", "man", "parchha"], en: "I like momo." },
    { ne: ["आकाश", "निलो", "छ"], rom: ["aakash", "nilo", "chha"], en: "The sky is blue." },
    { ne: ["म", "पानी", "पिउँछु"], rom: ["ma", "paani", "piunchhu"], en: "I drink water." },
    { ne: ["बिरालो", "सानो", "छ"], rom: ["biralo", "saano", "chha"], en: "The cat is small." },
    { ne: ["हात्ती", "ठूलो", "छ"], rom: ["hatti", "thulo", "chha"], en: "The elephant is big." },
  ]},
  // World of Words (big learners): a review-and-grow chapter
  {"id":"words-himal-nature","title":"Nature & Weather","ne":"प्रकृति र मौसम","rom":"prakriti ra mausam","icon":"🏔️","color":"#2980b9","items":[{"ne":"हिमाल","rom":"himaal","en":"snowy mountain","pic":"🏔️","alt":["mountain","mountains","himalaya","snow peak","himal"]},{"ne":"पहाड","rom":"pahaad","en":"Hill","pic":"⛰️","alt":["hill","hills","pahad"]},{"ne":"खोला","rom":"kholaa","en":"River / Stream","pic":"🏞️","alt":["river","stream","brook"]},{"ne":"झरना","rom":"jharanaa","en":"Waterfall","pic":"💧","alt":["waterfall","falls","cascade"]},{"ne":"ताल","rom":"taal","en":"Lake","pic":"🌊","alt":["lake","pond"]},{"ne":"जङ्गल","rom":"jangal","en":"Forest / Jungle","pic":"🌲","alt":["forest","jungle","woods"]},{"ne":"गुफा","rom":"guphaa","en":"Cave","pic":"🕳️","alt":["cave","cavern"]},{"ne":"बादल","rom":"baadal","en":"Cloud","pic":"☁️","alt":["cloud","clouds"]},{"ne":"घाम","rom":"ghaam","en":"sunshine","pic":"☀️","alt":["sun","sunny","sunlight"]},{"ne":"इन्द्रेणी","rom":"indreni","en":"Rainbow","pic":"🌈","alt":["rainbow"]},{"ne":"हावाहुरी","rom":"haawaahuri","en":"Wind / Storm","pic":"💨","alt":["wind","storm","gale"]},{"ne":"माटो","rom":"maato","en":"Soil / Earth","pic":"🌱","alt":["soil","earth","dirt","mud"]},{"ne":"पानी","rom":"paani","en":"water","pic":"💧","alt":["drink water","rain"]},{"ne":"आगो","rom":"aago","en":"Fire","pic":"🔥","alt":["fire","flame"]},{"ne":"रूख","rom":"rookh","en":"tree","pic":"🌳","alt":["trees"]},{"ne":"पात","rom":"paat","en":"Leaf","pic":"🍃","alt":["leaf","leaves"]},{"ne":"ढुङ्गा","rom":"dhungaa","en":"Stone / Rock","pic":"🪨","alt":["stone","rock"]},{"ne":"बालुवा","rom":"baaluwaa","en":"Sand","pic":"🏖️","alt":["sand"]},{"ne":"हुस्सु","rom":"hussu","en":"Fog / Mist","pic":"🌫️","alt":["fog","mist","haze"]},{"ne":"शीत","rom":"sheet","en":"Dew","pic":"💧","alt":["dew","dewdrop"]},{"ne":"तारा","rom":"taara","en":"star","pic":"⭐","alt":["stars"]},{"ne":"जून","rom":"joon","en":"Moon","pic":"🌙","alt":["moon","moonlight"]}],"bigOnly":true},
  {"id":"words-nepali-kitchen","title":"Kitchen & Daily Food","ne":"भान्सा र खाना","rom":"bhaansaa ra khaanaa","icon":"🍲","color":"#d35400","items":[{"ne":"दालभात","rom":"daalbhaat","en":"Lentils and rice","pic":"🍛","alt":["daal bhat","rice and lentils","dal bhat"]},{"ne":"अचार","rom":"achaar","en":"pickle","pic":"🌶️","alt":["chutney","achar","spicy pickle"]},{"ne":"तरकारी","rom":"tarkaari","en":"Vegetable curry","pic":"🥗","alt":["vegetables","curry","tarkari"]},{"ne":"चिया","rom":"chiya","en":"milk tea","pic":"☕","alt":["tea","chai"]},{"ne":"रोटी","rom":"roti","en":"flatbread","pic":"🫓","alt":["bread","roti","chapati"]},{"ne":"दही","rom":"dahi","en":"yogurt","pic":"🥣","alt":["curd","yoghurt","dahi"]},{"ne":"घ्यू","rom":"ghyu","en":"Clarified butter (Ghee)","pic":"🧈","alt":["ghee","clarified butter","butter"]},{"ne":"नुन","rom":"nun","en":"Salt","pic":"🧂","alt":["salt"]},{"ne":"खोर्सानी","rom":"khorsaani","en":"Chili pepper","pic":"🌶️","alt":["chili","hot pepper","pepper"]},{"ne":"थाल","rom":"thaal","en":"Plate / Platter","pic":"🍽️","alt":["plate","platter","dish"]},{"ne":"अम्खोरा","rom":"amkhoraa","en":"Brass water vessel","pic":"🏺","alt":["water vessel","brass jug","amkhora"]},{"ne":"डाडु","rom":"daadu","en":"Serving ladle","pic":"🥄","alt":["ladle","big spoon"]},{"ne":"चम्चा","rom":"chamcha","en":"spoon","pic":"🥄","alt":[]},{"ne":"काँटा","rom":"kaantaa","en":"Fork","pic":"🍴","alt":["fork"]},{"ne":"चक्कु","rom":"chakku","en":"Knife","pic":"🔪","alt":["knife"]},{"ne":"गिलास","rom":"gilaas","en":"Drinking glass / Cup","pic":"🥛","alt":["glass","cup","tumbler"]},{"ne":"कचौरा","rom":"kachauraa","en":"Small bowl","pic":"🥣","alt":["bowl","small bowl"]},{"ne":"तावा","rom":"taawaa","en":"Flat frying pan (Tawa)","pic":"🍳","alt":["pan","frying pan","tawa"]},{"ne":"कराही","rom":"karaahi","en":"Cooking wok (Karai)","pic":"🥘","alt":["wok","pot","karai","karahi"]},{"ne":"दूध","rom":"doodh","en":"milk","pic":"🥛","alt":["warm milk"]},{"ne":"चिनी","rom":"chini","en":"Sugar","pic":"🍬","alt":["sugar"]},{"ne":"बेसार","rom":"besaar","en":"Turmeric","pic":"🟡","alt":["turmeric","yellow spice"]},{"ne":"मोमो","rom":"momo","en":"momo","pic":"🥟","alt":["dumpling","dumplings","momos","steamed dumplings"]}],"bigOnly":true},
  {"id":"words-wildlife-birds","title":"Animals & Birds","ne":"पशुपन्छी र जीव","rom":"pashupanchhi ra jeev","icon":"🦚","color":"#27ae60","items":[{"ne":"डाँफे","rom":"daanphe","en":"Danphe bird","img":"av-danphe","pic":"🦚","alt":["danphe","pheasant","national bird","monal"]},{"ne":"मुनाल","rom":"munaal","en":"Munal pheasant","pic":"🦃","alt":["munal","pheasant"]},{"ne":"गैँडा","rom":"gainda","en":"Rhino","alt":["rhinoceros"],"pic":"🦏"},{"ne":"पाटेबाघ","rom":"paatebaagh","en":"Royal Bengal tiger","pic":"🐅","alt":["tiger","bengal tiger"]},{"ne":"हात्ती","rom":"hatti","en":"Elephant","pic":"🐘","alt":[]},{"ne":"कस्तुरी","rom":"kasturi","en":"Musk deer","pic":"🦌","alt":["musk deer","deer"]},{"ne":"चौँरीगाई","rom":"chaunrigaai","en":"Himalayan Yak","pic":"🐂","alt":["yak","chaunri"]},{"ne":"स्याल","rom":"syaal","en":"Jackal","pic":"🦊","alt":["jackal"]},{"ne":"ढुकुर","rom":"dhukur","en":"Dove","pic":"🕊️","alt":["dove"]},{"ne":"चील","rom":"cheel","en":"Kite (bird) / Eagle","pic":"🦅","alt":["kite","eagle","hawk"]},{"ne":"जुका","rom":"jukaa","en":"Leech","pic":"🪱","alt":["leech"]},{"ne":"भ्यागुतो","rom":"bhyaaguto","en":"frog","pic":"🐸","alt":["toad"]},{"ne":"गाई","rom":"gaai","en":"Cow","pic":"🐄","alt":[]},{"ne":"कुकुर","rom":"kukur","en":"Dog","alt":["puppy"],"pic":"🐕"},{"ne":"बिरालो","rom":"biralo","en":"Cat","alt":["kitten","kitty"],"pic":"🐈"},{"ne":"बाख्रा","rom":"baakhraa","en":"Goat","pic":"🐐","alt":["goat"]},{"ne":"कुखुरा","rom":"kukhuraa","en":"Chicken / Rooster","pic":"🐓","alt":["chicken","rooster","hen"]},{"ne":"भँगेरा","rom":"bhangeraa","en":"Sparrow","pic":"🐦","alt":["sparrow","small bird"]},{"ne":"काग","rom":"kaag","en":"Crow","pic":"🐦‍⬛","alt":["crow","raven"]},{"ne":"पुतली","rom":"putali","en":"butterfly","pic":"🦋","alt":[]},{"ne":"माहुरी","rom":"maahuri","en":"Honeybee","pic":"🐝","alt":["bee","honeybee"]},{"ne":"कमिला","rom":"kamila","en":"ant","pic":"🐜","alt":["ants"]}],"bigOnly":true},
  {"id":"words-festivals-tradition","title":"Festivals & Heritage","ne":"चाडपर्व र संस्कार","rom":"chaadparwa ra sanskaar","icon":"🪔","color":"#8e44ad","items":[{"ne":"दशैँ","rom":"dashain","en":"Dashain festival","pic":"🌾","alt":["dashain","dasain"]},{"ne":"तिहार","rom":"tihaar","en":"Tihar (Lights festival)","pic":"🪔","alt":["tihar","deepawali"]},{"ne":"टीका","rom":"tika","en":"tika","pic":"🔴","alt":["blessing mark","red mark","teeka"]},{"ne":"जमरा","rom":"jamara","en":"barley shoots","pic":"🌱","alt":["jamara","barley grass"]},{"ne":"दियो","rom":"diyo","en":"oil lamp","pic":"🪔","alt":["lamp","light","diya","diyo"]},{"ne":"पिङ","rom":"ping","en":"swing","pic":"🎠","alt":["swings","bamboo swing","ping"]},{"ne":"देउसी","rom":"deusi","en":"Deusi carols","pic":"🎶","alt":["deusi"]},{"ne":"भैलो","rom":"bhailo","en":"Bhailo song tradition","pic":"✨","alt":["bhailo"]},{"ne":"मादल","rom":"maadal","en":"Nepali drum","pic":"🥁","alt":["drum","madal"]},{"ne":"बाँसुरी","rom":"baansuri","en":"Bamboo flute","pic":"🪈","alt":["flute","bansuri"]},{"ne":"सारङ्गी","rom":"saarangi","en":"sarangi","pic":"🎻","alt":["fiddle","nepali fiddle"]},{"ne":"शङ्ख","rom":"shankha","en":"Conch shell","pic":"🐚","alt":["conch","shankha"]},{"ne":"नमस्ते","rom":"namaste","en":"Hello","ctx":"👵 You meet Hajuraama and say:","alt":["hi","namaste","greetings"],"pic":"🙏"},{"ne":"प्रसाद","rom":"prasaad","en":"Blessed food offering","pic":"🍬","alt":["prasad","blessed food","offering"]},{"ne":"धूप","rom":"dhoop","en":"Incense","pic":"🪔","alt":["incense","dhoop","incense stick"]},{"ne":"माला","rom":"maala","en":"flower garland","pic":"🌼","alt":["garland","necklace","mala"]},{"ne":"घण्टी","rom":"ghanti","en":"Temple bell","pic":"🔔","alt":["bell","temple bell"]},{"ne":"ढाका टोपी","rom":"dhaakaa topi","en":"Dhaka topi","pic":"🧢","alt":["topi","nepali hat","dhaka hat","nepali cap"]},{"ne":"दौरा सुरुवाल","rom":"dauraa suruwaal","en":"National dress (Daura Suruwal)","pic":"🥋","alt":["daura suruwal","national dress"]},{"ne":"गुन्यू चोली","rom":"gunyu choli","en":"Traditional dress (Gunyu Choli)","pic":"👗","alt":["gunyu choli","traditional dress"]},{"ne":"आशीर्वाद","rom":"aashirwaad","en":"blessing","pic":"🙏","alt":["blessings"]},{"ne":"पूजा","rom":"poojaa","en":"Worship / Prayer ceremony","pic":"🌸","alt":["puja","pooja","worship","prayer"]}],"bigOnly":true},
  {"id":"words-village-community","title":"Home & Community","ne":"घर र समुदाय","rom":"ghar ra samudaaya","icon":"🏘️","color":"#16a085","items":[{"ne":"गाउँ","rom":"gaaun","en":"Village","pic":"🏡","alt":["village","countryside"]},{"ne":"सहर","rom":"sahar","en":"City / Town","pic":"🏙️","alt":["city","town"]},{"ne":"खेत","rom":"khet","en":"Terraced rice field","pic":"🌾","alt":["field","paddy field","farm"]},{"ne":"बारी","rom":"baari","en":"Home garden / Farm","pic":"🥕","alt":["garden","vegetable garden"]},{"ne":"चौतारी","rom":"chautaari","en":"resting place","pic":"🌳","alt":["chautari","rest stop","resting spot","resting bench"]},{"ne":"पँधेरो","rom":"pandhero","en":"Natural water spring","pic":"💧","alt":["spring","water spring","tap"]},{"ne":"हाट बजार","rom":"haat bajaar","en":"Open weekly market","pic":"🎪","alt":["market","bazaar","fair"]},{"ne":"पुल","rom":"pul","en":"bridge","pic":"🌉","alt":["suspension bridge"]},{"ne":"छिमेकी","rom":"chhimeki","en":"Neighbor","pic":"🤝","alt":["neighbor","neighbour"]},{"ne":"डाक्टर","rom":"daaktar","en":"Doctor","pic":"🧑‍⚕️","alt":["doctor","physician"]},{"ne":"शिक्षक","rom":"shikshak","en":"teacher","pic":"👩‍🏫","alt":["guru","sir","miss"]},{"ne":"किसान","rom":"kisaan","en":"Farmer","pic":"🧑‍🌾","alt":["farmer","grower"]},{"ne":"घर","rom":"ghar","en":"House / Home","pic":"🏠","alt":["house","home"]},{"ne":"ढोका","rom":"dhoka","en":"door","pic":"🚪","alt":["gate"]},{"ne":"झ्याल","rom":"jhyaal","en":"window","pic":"🪟","alt":[]},{"ne":"छाना","rom":"chhaanaa","en":"Roof","pic":"🏠","alt":["roof","rooftop"]},{"ne":"ओछ्यान","rom":"ochhyaan","en":"bed","pic":"🛏️","alt":["mattress"]},{"ne":"लुगा","rom":"luga","en":"clothes","pic":"👕","alt":["shirt","clothing","dress"]},{"ne":"जुत्ता","rom":"jutta","en":"shoes","pic":"👟","alt":["shoe","footwear"]},{"ne":"विद्यालय","rom":"vidyaalaya","en":"School","pic":"🏫","alt":["school","vidyalaya"]},{"ne":"अस्पताल","rom":"aspataal","en":"Hospital","pic":"🏥","alt":["hospital","clinic"]},{"ne":"पसल","rom":"pasal","en":"Store / Shop","pic":"🏪","alt":["shop","store","grocer"]}],"bigOnly":true},
  {"id":"words-emotions-actions","title":"Feelings, Time & Verbs","ne":"भावना र काम","rom":"bhaawanaa ra kaam","icon":"💫","color":"#e74c3c","items":[{"ne":"खुशी","rom":"khushi","en":"happy","pic":"😄","alt":["glad","joy"]},{"ne":"दुःखी","rom":"dukhi","en":"sad","pic":"😢","alt":["upset","unhappy"]},{"ne":"अचम्म","rom":"achamma","en":"Surprised / Wonder","pic":"😲","alt":["surprised","wonder","amazed"]},{"ne":"माया","rom":"maayaa","en":"Love / Care","pic":"❤️","alt":["love","affection","care"]},{"ne":"हाँस्ने","rom":"haansne","en":"To laugh / smile","pic":"😄","alt":["laugh","to laugh","smile"]},{"ne":"रोक्ने","rom":"rokne","en":"To stop","pic":"🛑","alt":["stop","to stop"]},{"ne":"दौडने","rom":"daudane","en":"To run","pic":"🏃","alt":["run","to run"]},{"ne":"पढ्ने","rom":"padhne","en":"To read / study","pic":"📖","alt":["read","to read","study"]},{"ne":"लेख्ने","rom":"lekhne","en":"To write","pic":"✍️","alt":["write","to write"]},{"ne":"सुत्ने","rom":"sutne","en":"To sleep","pic":"😴","alt":["sleep","to sleep"]},{"ne":"खाने","rom":"khaane","en":"To eat","pic":"🍽️","alt":["eat","to eat"]},{"ne":"बोल्ने","rom":"bolne","en":"To speak / talk","pic":"🗣️","alt":["speak","to speak","talk"]},{"ne":"पिउने","rom":"piune","en":"To drink","pic":"🥤","alt":["drink","to drink"]},{"ne":"हिँड्ने","rom":"hindne","en":"To walk","pic":"🚶","alt":["walk","to walk"]},{"ne":"खेल्ने","rom":"khelne","en":"To play","pic":"⚽","alt":["play","to play"]},{"ne":"सुन्ने","rom":"sunne","en":"To listen / hear","pic":"👂","alt":["listen","to listen","hear"]},{"ne":"हेर्ने","rom":"herne","en":"To look / watch","pic":"👀","alt":["look","to look","watch","see"]},{"ne":"नुहाउने","rom":"nuhaaune","en":"To bathe / shower","pic":"🚿","alt":["bathe","to bathe","shower"]},{"ne":"सोध्ने","rom":"sodhne","en":"To ask","pic":"❓","alt":["ask","to ask"]},{"ne":"बिहान","rom":"bihaana","en":"morning","pic":"🌅","alt":["in the morning"]},{"ne":"दिउँसो","rom":"diunso","en":"afternoon","pic":"☀️","alt":["daytime","midday"]},{"ne":"साँझ","rom":"saanjha","en":"evening","pic":"🌇","alt":["dusk","sunset"]},{"ne":"राति","rom":"raati","en":"night","pic":"🌙","alt":["at night","nighttime"]},{"ne":"आज","rom":"aaja","en":"today","pic":"📅","alt":[]}],"bigOnly":true},
];

/* The map groups lessons into chapters, in this order. */
window.CHAPTERS = [
  { id: "home", ne: "मेरो घर", rom: "mero ghar", en: "Around the home", color: "var(--panda)", sticker: { pic: "🏡", img: "img/st-home.webp", name: "Home Hero", say: { ne: "तिमी घरको हिरो हौ!", rom: "timi gharko hiro hau!", en: "You're the home hero!" } }, lessons: ["greet", "respect-family", "kitchen-tummy", "veggies", "daily-routines", "house-objects", "rooms-house", "home-sentences"] },
  { id: "nature", ne: "प्रकृति र यात्रा", rom: "prakriti ra yaatra", en: "Nature & travel", color: "var(--flag-green)", sticker: { pic: "🐘", img: "img/st-explorer.webp", name: "Explorer", say: { ne: "वाह! तिमी साहसी यात्री हौ!", rom: "waah! timi saahasi yaatri hau!", en: "Wow, you're a brave explorer!" } }, lessons: ["home-animals", "animals", "birds-bugs", "animal-sounds", "vehicles-travel", "travel-sentences"] },
  { id: "me", ne: "म र मेरो शरीर", rom: "ma ra mero shareer", en: "All about me", color: "var(--flag-yellow)", sticker: { pic: "😊", img: "img/st-me.webp", name: "All About Me", say: { ne: "तिमी धेरै बाठो छौ!", rom: "timi dherai baatho chhau!", en: "You're so clever!" } }, lessons: ["body", "feelings-needs", "clothes", "what-i-have"] },
  { id: "play", ne: "खेल र बाहिर", rom: "khel ra baahira", en: "Play & outside", color: "var(--flag-green)", sticker: { pic: "⚽", img: "img/st-play.webp", name: "Play Champ", say: { ne: "खेलमा तिमी च्याम्पियन!", rom: "khelma timi chyaampiyan!", en: "You're a play champion!" } }, lessons: ["playtime-verbs", "helping-verbs", "sports-outdoors", "weather-nature", "colours", "opposites", "sound-words", "retro-90s", "play-sentences"] },
  { id: "culture", ne: "हाम्रो संस्कृति", rom: "haamro sanskriti", en: "Nepali culture & time", color: "var(--flag-red)", sticker: { pic: "🪔", img: "img/st-festival.webp", name: "Festival Star", say: { ne: "तिमी चाडपर्वको तारा हौ!", rom: "timi chaadparvako taara hau!", en: "You're a festival star!" } }, lessons: ["festivals-culture", "our-nepal", "nepali-treats", "time-of-day", "days", "question-words", "culture-sentences"] },
  { id: "school", ne: "स्कूल र गन्ती", rom: "skul ra ganti", en: "School & counting", color: "var(--flag-blue)", sticker: { pic: "🎒", img: "img/st-school.webp", name: "School Star", say: { ne: "तिमी स्कूलको तारा हौ!", rom: "timi skulko taara hau!", en: "You're a school star!" } }, lessons: ["num", "school-supplies", "shapes", "fruits-snacks", "numbers-11-20"] },
  { id: "talk", ne: "कुराकानी र कथा", rom: "kuraakaani ra katha", en: "Real conversations", color: "var(--panda)", sticker: { pic: "💬", img: "img/st-chatter.webp", name: "Chatterbox", say: { ne: "तिमी कति राम्रो कुरा गर्छौ!", rom: "timi kati raamro kura garchhau!", en: "You talk so well!" } }, lessons: ["likes-dislikes", "phone-grandparents", "polite-commands", "grandparent-sentences"] },
  { id: "letters", ne: "अक्षर र वाक्य", rom: "akshar ra waakya", en: "Letters & sentences", color: "var(--flag-blue)", sticker: { pic: "अ", img: "img/st-letters.webp", letter: "अ", name: "Letter Master", say: { ne: "तिमी अक्षरमा उस्ताद हौ!", rom: "timi aksharma ustaad hau!", en: "You're a letter master!" } }, lessons: ["vowels", "cons1", "cons2", "cons3", "cons4", "barakhari", "sentences"] },
  {"id":"words","ne":"शब्द संसार","rom":"shabda sansaar","en":"World of Words","color":"var(--flag-yellow)","sticker":{"pic":"🏔️","img":"img/st-words.webp","name":"Word Sage","say":{"ne":"वाह! तिमीले धेरै नयाँ शब्दहरू सिक्यौ!","rom":"waah! timile dherai nayaa shabdaharu sikyau!","en":"Incredible! You have mastered the World of Words!"}},"lessons":["words-himal-nature","words-nepali-kitchen","words-wildlife-birds","words-festivals-tradition","words-village-community","words-emotions-actions"]},
];

// More typed answers the Big learners game accepts (key = the lesson's English answer, lowercase).
// Plurals, UK/US spellings (mum/mom), contractions (im/i'm) and one small typo are already accepted automatically.
window.MORE_ANSWERS = {
  "hello": ["hey", "hi there", "namaskar"], "thank you": ["thank u", "ty", "dhanyabad"], "yes": ["yeah", "yep", "ho"], "no": ["nope", "nah", "hoina"],
  "good night": ["night", "nighty night", "sweet dreams"], "see you again": ["see ya", "bye bye", "later"],
  "mom": ["ma", "amma", "aama", "mommy"], "dad": ["pa", "pop", "baba", "papa"], "grandma": ["grandmom", "nani", "hajuraama", "hajurama", "grandmother"],
  "grandpa": ["grandad", "grandpapa", "hajurbaa", "hajurba", "grandfather"], "older sister": ["didi"], "older brother": ["dai", "daai"],
  "younger sister": ["bahini"], "younger brother": ["bhai"], "red panda": ["lesser panda"], "rhino": ["rhinoceros"], "rabbit": ["bunny rabbit"],
  "tummy": ["stomach", "belly", "tum"], "mouth": ["lips"], "hand": ["palm"], "leg": ["foot", "feet"],
  "water": ["drink", "paani"], "rice": ["bhat", "bhaat", "cooked rice"], "flatbread": ["chapati", "roti", "bread"], "lentil soup": ["dal", "daal", "lentils"],
  "spoon": ["chamcha"], "hot": ["warm"], "i am hungry": ["hungry", "starving"], "it is yummy": ["yum", "yummy", "tasty", "delicious"], "i am full": ["full", "stuffed"],
  "wake up": ["wakeup", "get up"], "brush teeth": ["brush my teeth", "brushing teeth"], "go to sleep": ["sleep time", "time for bed", "go to bed"], "come here": ["come over", "come here please"],
  "clothes": ["dress", "outfit", "clothing"], "shoes": ["sneakers", "trainers", "shoe"], "jacket": ["sweater", "coat", "hoodie"], "hat": ["cap", "topi"], "slippers": ["chappal", "flip flops", "sandals"],
  "happy": ["joyful", "glad", "cheerful"], "sad": ["upset", "unhappy", "crying"], "sleepy": ["tired", "i am tired"], "i am scared": ["scared", "afraid", "frightened"],
  "ball": ["football", "soccer ball"], "bicycle": ["bike", "cycle"], "friend": ["pal", "mate", "buddy", "saathi"], "park": ["playground"],
  "sunshine": ["sunlight", "sun", "sunny"], "snowy mountain": ["snow mountain", "himal", "mountain"], "wind": ["windy", "breeze"],
  "bag": ["backpack", "school bag", "jhola"], "light": ["lamp", "bulb"], "notebook": ["copy", "exercise book", "copybook"], "teacher": ["sir", "miss", "guru"],
  "picture": ["drawing", "photo", "painting"], "airplane": ["plane", "jet"], "sea": ["ocean"], "car": ["taxi"],
  "okay": ["alright", "sure", "fine"], "i love you": ["love you", "i love u", "love u"], "i am fine": ["fine", "good", "i am good", "i am okay"],
};
window.EXTRA_TILES = [["र", "ra"], ["पनि", "pani"], ["होइन", "hoina"], ["रातो", "raato"], ["तिमी", "timi"], ["मलाई", "malai"], ["दिनुहोस्", "dinuhos"], ["ढोका", "dhoka"], ["गर", "gara"]];
window.CHEERS = [["स्याबास!", "syabaas!", "Well done!"], ["राम्रो!", "ramro!", "Great!"], ["एकदम ठीक!", "ekdam thik!", "Exactly right!"]];
// What each sticker says when tapped (Pandu's sticker, and any sticker not won yet).
window.STICKER_PANDU_IMG = "img/st-pandu.webp";
// Player animals with artwork (others use the emoji).
window.AVATAR_IMG = { "🐼": "img/av-redpanda.webp", "🐘": "img/av-elephant.webp", "🦏": "img/av-rhino.webp", "🦚": "img/av-danphe.webp", "🐃": "img/av-yak.webp", "🐒": "img/av-monkey.webp", "🐯": "img/av-tiger.webp", "🐆": "img/av-snowleopard.webp" };
// Pandu's poses (any pose without a picture yet falls back to the drawn Pandu).
window.PANDU_IMG = { wave: "img/pandu-wave.webp", listen: "img/pandu-listen.webp", think: "img/pandu-think.webp", oops: "img/pandu-oops.webp", sleep: "img/pandu-sleep.webp", cheer: "img/pandu-cheer.webp" };
window.STICKER_PANDU = { ne: "नमस्ते साथी! म पाण्डु हुँ।", rom: "namaste saathi! ma Pandu hun.", en: "Hello friend! I'm Pandu." };
window.STICKER_LOCKED = { ne: "अझै बाँकी छ!", rom: "ajhai baanki chha!", en: "Not yet! Keep playing to win me." };
// Tapping the creator's name in the footer plays this greeting.
window.CREDIT_INTRO = { ne: "नमस्ते! मेरो नाम अबी सुवेदी हो। सजिलो नेपालीमा स्वागत छ!", rom: "namaste! mero naam Abi Subedi ho. sajilo nepaalima swaagat chha!", en: "Hello! My name is Abi Subedi. Welcome to Sajilo Nepali!" };
window.PHRASES = { hello: "नमस्ते!", morning: "शुभ बिहानी!", night: "शुभ रात्रि!", stickers: "मेरो स्टिकर", brand: "सजिलो नेपाली", tryAgain: "फेरि प्रयास गरौँ!", wellDone: "स्याबास!" };

/* What to say for a piece of Nepali text. Letters say the letter, then their example word. */
window.audioKey = function (text) { return String(text).replace(/[!।?.,]/g, "").trim(); };
window.letterKey = function (item) { return "L:" + item.ne; };
window.letterSpeech = function (item) { return item.word ? item.ne + ", " + item.word + "।" : item.ne + "।"; };

/* Who's who in our family: what to call each relative and how to greet them. */
window.KIN = {
  dad: [
    { ne: "हजुरबा", rom: "hajurba", en: "Grandpa", who: "Dad's father", pic: "👴", art: "w-grandpa", elder: true },
    { ne: "हजुरआमा", rom: "hajuraama", en: "Grandma", who: "Dad's mother", pic: "👵", art: "w-grandma", elder: true },
    { ne: "ठूलोबाबा", rom: "thulobaabaa", en: "Big uncle", who: "Dad's older brother", pic: "👨‍🦳", elder: true },
    { ne: "ठूलीआमा", rom: "thuliaamaa", en: "Big aunt", who: "Dad's older brother's wife (or Mom's older sister)", pic: "👩", elder: true },
    { ne: "काका", rom: "kaakaa", en: "Uncle", who: "Dad's younger brother", pic: "👨", elder: true },
    { ne: "काकी", rom: "kaaki", en: "Aunt", who: "Dad's younger brother's wife", pic: "👩", elder: true },
    { ne: "फुपू", rom: "phupu", en: "Aunt", who: "Dad's sister", pic: "👩‍🦱", elder: true },
    { ne: "फुपाजु", rom: "phupaaju", en: "Uncle", who: "Dad's sister's husband", pic: "👨‍🦱", elder: true },
  ],
  mom: [
    { ne: "मामा", rom: "maamaa", en: "Uncle", who: "Mom's brother", pic: "🧔", elder: true },
    { ne: "माइजू", rom: "maaiju", en: "Aunt", who: "Mom's brother's wife", pic: "👩", elder: true },
    { ne: "ठूलीआमा", rom: "thuliaamaa", en: "Big aunt", who: "Mom's older sister", pic: "👩‍🦳", elder: true },
    { ne: "सानीआमा", rom: "saaniaamaa", en: "Little aunt", who: "Mom's younger sister", pic: "👧", elder: true },
  ],
  me: [
    { ne: "दाइ", rom: "daai", en: "Older brother", who: "Your older brother (and older boy cousins)", pic: "👦", art: "w-older-brother", elder: true },
    { ne: "दिदी", rom: "didi", en: "Older sister", who: "Your older sister (and older girl cousins)", pic: "👧", art: "w-older-sister", elder: true },
    { ne: "भाइ", rom: "bhaai", en: "Younger brother", who: "Your younger brother (and younger boy cousins)", pic: "🧒", art: "w-younger-brother" },
    { ne: "बहिनी", rom: "bahini", en: "Younger sister", who: "Your younger sister (and younger girl cousins)", pic: "👶", art: "w-younger-sister" },
  ],
  greetElder: { ne: "ढोग गरेँ", rom: "dhog garen", en: "I bow to you (to elders, touching their feet or bowing)" },
  greetYounger: { ne: "नमस्ते", rom: "namaste", en: "Hello" },
};

/* Real-life missions: one a day, said out loud to someone at home. Every line already has a voice clip. */
window.MISSIONS = [
  { ne: "एक, दुई, तीन, चार, पाँच", rom: "ek, dui, teen, chaar, paanch", en: "One, two, three, four, five.", go: "Chungi challenge! Kick a chungi (or bounce a ball) and count every kick out loud:" },
  { ne: "मलाई रातो चाहियो", rom: "malaai raato chaahiyo", en: "I want red.", go: "Ice-pop cart game! A grown-up is the shopkeeper. Ask for your colour:" },
  { ne: "हजुर, सानोमा के खेल्नुहुन्थ्यो?", rom: "hajur, saanomaa ke khelnuhunthyo?", en: "What games did you play when you were little?", go: "Ask Aama, Baba, Hajuraama or Hajurbaa:" },
  { ne: "मलाई पानी दिनुहोस्", rom: "malaai paani dinuhos", en: "Please give me water.", go: "Go to Aama or Baba and say:" },
  { ne: "आमा म तपाईंलाई माया गर्छु", rom: "aamaa ma tapaailaai maayaa garchhu", en: "Mom, I love you.", go: "Go to Aama and say:" },
  { ne: "खाना धेरै मिठो छ", rom: "khaanaa dherai mitho chha", en: "The food is very yummy.", go: "At dinner, tell whoever cooked:" },
  { ne: "धन्यवाद", rom: "dhanyabaad", en: "Thank you.", go: "Find someone who helped you today and say:" },
  { ne: "शुभ रात्रि", rom: "shubha raatri", en: "Good night.", go: "At bedtime, say to everyone:" },
  { ne: "खाना खानुभयो?", rom: "khaanaa khaanubhayo?", en: "Did you eat? (polite)", go: "Ask Baba or Hajurba:" },
  { ne: "हजुरआमा सञ्चै हुनुहुन्छ?", rom: "hajuraamaa sanchai hunuhunchha?", en: "Grandma, how are you?", go: "Ask Hajuraama (a phone call works too!):" },
  { ne: "नमस्ते", rom: "namaste", en: "Hello.", go: "Fold your hands and say to the next grown-up you see:" },
  { ne: "आमा मलाई भोक लाग्यो", rom: "aamaa malaai bhok laagyo", en: "Mom, I am hungry.", go: "Go to Aama and say:" },
  { ne: "बस्नुहोस्", rom: "basnuhos", en: "Please sit.", go: "Offer a grown-up a seat and say:" },
  { ne: "आज के पकाउनुभयो?", rom: "aaja ke pakaaunubhayo?", en: "What did you cook today?", go: "At dinner, ask the cook:" },
  { ne: "म थाली राख्न मद्दत गर्छु", rom: "ma thaali raakhna maddat garchhu", en: "I will help put out the plates.", go: "Before dinner, tell Aama or Baba:" },
  { ne: "हजुरबा, मलाई एउटा कथा सुनाउनुहोस्", rom: "hajurbaa, malaai euta kathaa sunaaunuhos", en: "Grandpa, please tell me a story.", go: "Ask Hajurba (or Hajuraama) at bedtime:" },
];

/* Festivals: Pandu's card gets a marigold garland (and a diyo for lamp festivals) on these days.
   Lunar dates move every year: add next year's dates when the Nepali calendar is published. */
/* Festivals and national holidays, shown on the home screen while they last, with a countdown in the days before.
   2083 BS dates (to mid-April 2027) are the government's published holidays. Entries marked approx are projections
   for 2084 BS: check them against the official 2084 holiday list when it is published (early 2027) and add the next year.
   tint = the colour theme of the home-screen greeting during the festival and its countdown (see .greet.tint-* in index.html). */
window.FESTIVALS = [
  { from: "2026-10-11", to: "2026-10-25", tint: "dashain", ne: "दशैँ", rom: "dashain", en: "Dashain", line: "Happy Dashain! Time for tika, jamara and big family visits.", soon: "Get ready for tika and jamara!", diyo: false },
  { from: "2026-11-07", to: "2026-11-11", tint: "marigold", ne: "तिहार", rom: "tihaar", en: "Tihar", line: "Happy Tihar! Diyo lamps, marigold garlands and Bhai Tika.", soon: "Diyo lamps and marigolds are coming!", diyo: true },
  { from: "2026-11-15", to: "2026-11-15", tint: "sun", ne: "छठ", rom: "chhath", en: "Chhath", line: "Happy Chhath! Families pray to the rising and setting sun at the riverbank.", soon: "Prayers to the sun at the river." },
  { from: "2026-11-26", to: "2026-11-26", tint: "harvest", ne: "थ्याङ्क्सगिभिङ", rom: "thyaanksagibhing", en: "Thanksgiving", line: "Happy Thanksgiving! Around the world, families in places like the USA and Canada share a big meal and say धन्यवाद (thank you) for everything they have.", soon: "A day to say धन्यवाद, thank you!" },
  { from: "2026-12-25", to: "2026-12-25", tint: "xmas", ne: "क्रिसमस", rom: "krismas", en: "Christmas", line: "Merry Christmas! It is a public holiday in Nepal too.", soon: "A public holiday in Nepal too." },
  { from: "2026-12-30", to: "2026-12-30", tint: "lhosar", ne: "तमु ल्होसार", rom: "tamu lhosaar", en: "Tamu Lhosar", line: "Happy Tamu Lhosar! The Gurung New Year, with songs and dances.", soon: "The Gurung New Year is coming." },
  { from: "2027-01-01", to: "2027-01-01", tint: "sparkle", ne: "अङ्ग्रेजी नयाँ वर्ष", rom: "angreji nayaa barsha", en: "New Year's Day", line: "Happy New Year 2027! All around the world, people count down to midnight and welcome the new year with fireworks.", soon: "Get ready to count down to 2027!" },
  { from: "2027-01-11", to: "2027-01-11", tint: "flag", ne: "पृथ्वी जयन्ती", rom: "prithvi jayanti", en: "National Unity Day", line: "National Unity Day! Nepal remembers King Prithvi Narayan Shah, who joined Nepal together.", soon: "Nepal's Unity Day is coming." },
  { from: "2027-01-15", to: "2027-01-15", tint: "sun", ne: "माघे सङ्क्रान्ति", rom: "maaghe sankraanti", en: "Maghe Sankranti", line: "Happy Maghe Sankranti! Til ko laddu, ghee and sweet potatoes today.", soon: "Til ko laddu and sweet potatoes!" },
  { from: "2027-02-07", to: "2027-02-07", tint: "lhosar", ne: "सोनाम ल्होसार", rom: "sonaam lhosaar", en: "Sonam Lhosar", line: "Happy Sonam Lhosar! The Tamang New Year.", soon: "The Tamang New Year is coming." },
  { from: "2027-02-19", to: "2027-02-19", tint: "flag", ne: "प्रजातन्त्र दिवस", rom: "prajaatantra diwas", en: "Democracy Day", line: "Democracy Day! Nepal celebrates the people's right to choose their leaders.", soon: "Democracy Day is coming." },
  { from: "2027-03-06", to: "2027-03-06", tint: "shiva", ne: "महाशिवरात्रि", rom: "mahaashivaraatri", en: "Maha Shivaratri", line: "Happy Maha Shivaratri! Bonfires to keep warm and visits to Pashupatinath.", soon: "Bonfires and Pashupatinath!" },
  { from: "2027-03-21", to: "2027-03-22", tint: "holi", ne: "होली", rom: "holi", en: "Holi", line: "Happy Holi! The festival of colors.", soon: "The festival of colors is coming!" },
  { from: "2027-04-14", to: "2027-04-14", tint: "newyear", ne: "नयाँ वर्ष", rom: "nayaa barsha", en: "Nepali New Year", line: "Happy Nepali New Year! Naya barsha ko shubhakaamanaa!", soon: "A brand-new Nepali year, 2084!" },
  { from: "2027-05-20", to: "2027-05-20", approx: true, tint: "lotus", ne: "बुद्ध जयन्ती", rom: "buddha jayanti", en: "Buddha Jayanti", line: "Happy Buddha Jayanti! The Buddha was born in Lumbini, Nepal.", soon: "The Buddha's birthday is coming." },
  { from: "2027-05-29", to: "2027-05-29", approx: true, tint: "flag", ne: "गणतन्त्र दिवस", rom: "ganatantra diwas", en: "Republic Day", line: "Republic Day! Nepal became a republic on this day.", soon: "Republic Day is coming." },
  { from: "2027-08-17", to: "2027-08-17", approx: true, tint: "sun", ne: "जनै पूर्णिमा", rom: "janai purnimaa", en: "Janai Purnima", line: "Happy Janai Purnima! A sacred thread on the wrist and a bowl of kwati soup.", soon: "Kwati soup and sacred threads!" },
  { from: "2027-09-03", to: "2027-09-03", approx: true, tint: "teej", ne: "तीज", rom: "teej", en: "Teej", line: "Happy Teej! Women dress in red, sing and dance.", soon: "Red saris, songs and dances!" },
  { from: "2027-09-20", to: "2027-09-20", approx: true, tint: "flag", ne: "संविधान दिवस", rom: "sambidhaan diwas", en: "Constitution Day", line: "Constitution Day! Nepal's constitution was written on this day.", soon: "Constitution Day is coming." },
  { from: "2027-09-30", to: "2027-10-14", approx: true, tint: "dashain", ne: "दशैँ", rom: "dashain", en: "Dashain", line: "Happy Dashain! Time for tika, jamara and big family visits.", soon: "Get ready for tika and jamara!" },
  { from: "2027-10-27", to: "2027-10-31", approx: true, tint: "marigold", ne: "तिहार", rom: "tihaar", en: "Tihar", line: "Happy Tihar! Diyo lamps, marigold garlands and Bhai Tika.", soon: "Diyo lamps and marigolds are coming!", diyo: true },
  { from: "2027-11-25", to: "2027-11-25", tint: "harvest", ne: "थ्याङ्क्सगिभिङ", rom: "thyaanksagibhing", en: "Thanksgiving", line: "Happy Thanksgiving! Around the world, families in places like the USA and Canada share a big meal and say धन्यवाद (thank you) for everything they have.", soon: "A day to say धन्यवाद, thank you!" },
];

/* Gau Khane Katha (गाउँ खाने कथा): Pandu's riddle, the last question of Today's challenge. say = the recorded line. */
window.RIDDLES = [
  { ne: "सेतो घर भित्र पहेँलो राजा — के हो?", say: "सेतो घर भित्र पहेँलो राजा। के हो?", rom: "seto ghar bhitra pahelo raajaa — ke ho?", en: "Inside a white house lives a yellow king — what is it?",
    answer: { ne: "अण्डा", rom: "andaa", en: "egg", pic: "🥚" }, wrong: [{ ne: "स्याउ", rom: "syaau", en: "apple", pic: "🍎" }, { ne: "टोपी", rom: "topi", en: "hat", pic: "🧢" }, { ne: "चम्चा", rom: "chamchaa", en: "spoon", pic: "🥄" }] },
  { ne: "रातो घर भित्र सेता बाख्राहरू — के हो?", say: "रातो घर भित्र सेता बाख्राहरू। के हो?", rom: "raato ghar bhitra setaa baakhraaharu — ke ho?", en: "Inside a red house sit rows of little white goats — what are they?",
    answer: { ne: "दाँत", rom: "daant", en: "teeth", pic: "🦷" }, wrong: [{ ne: "आँखा", rom: "aankhaa", en: "eyes", pic: "👀" }, { ne: "जुत्ता", rom: "juttaa", en: "shoes", pic: "👟" }, { ne: "फूल", rom: "phool", en: "flower", pic: "🌼" }] },
  { ne: "पानी पर्दा फुल्छ, घाम लाग्दा सुक्छ — के हो?", say: "पानी पर्दा फुल्छ, घाम लाग्दा सुक्छ। के हो?", rom: "paani pardaa phulchha, ghaam laagdaa sukchha — ke ho?", en: "It blooms open when it rains, and folds up when the sun comes out — what is it?",
    answer: { ne: "छाता", rom: "chhaataa", en: "umbrella", pic: "☂️" }, wrong: [{ ne: "किताब", rom: "kitaab", en: "book", pic: "📖" }, { ne: "झोला", rom: "jholaa", en: "bag", pic: "🎒" }, { ne: "गिलास", rom: "gilaas", en: "glass", pic: "🥛" }] },
  { ne: "पहेँलो कोट फुकालेर भित्रको मिठो खाने — के हो?", say: "पहेँलो कोट फुकालेर भित्रको मिठो खाने। के हो?", rom: "pahelo kot phukaalera bhitrako mitho khaane — ke ho?", en: "You peel off its yellow coat to eat the sweet inside — what is it?",
    answer: { ne: "केरा", rom: "keraa", en: "banana", pic: "🍌" }, wrong: [{ ne: "आलु", rom: "aalu", en: "potato", pic: "🥔" }, { ne: "रोटी", rom: "roti", en: "flatbread", pic: "🫓" }, { ne: "दूध", rom: "dudh", en: "milk", pic: "🥛" }] },
  { ne: "दुई भाइ सँगै बस्छन्, तर एक अर्कालाई कहिल्यै देख्दैनन् — के हो?", say: "दुई भाइ सँगै बस्छन्, तर एक अर्कालाई कहिल्यै देख्दैनन्। के हो?", rom: "dui bhaai sangai baschhan, tara ek arkaalaai kahilyai dekhdainan — ke ho?", en: "Two brothers live right next to each other, but can never see each other — what are they?",
    answer: { ne: "आँखा", rom: "aankhaa", en: "eyes", pic: "👀" }, wrong: [{ ne: "हात", rom: "haat", en: "hands", pic: "👐", img: "w-hand" }, { ne: "खुट्टा", rom: "khuttaa", en: "feet", pic: "🦶", img: "w-leg" }, { ne: "पेट", rom: "pet", en: "tummy", pic: "🫃" }] },
  { ne: "आफू बोल्दैन तर तिम्रो अनुहार जस्ताको तस्तै देखाउँछ — के हो?", say: "आफू बोल्दैन तर तिम्रो अनुहार जस्ताको तस्तै देखाउँछ। के हो?", rom: "aafu boldaina tara timro anuhaar jastaako tastai dekhaaunchha — ke ho?", en: "It never speaks, but shows your face just as it is — what is it?",
    answer: { ne: "ऐना", rom: "aina", en: "mirror", pic: "🪞" }, wrong: [{ ne: "ढोका", rom: "dhoka", en: "door", pic: "🚪" }, { ne: "कुर्सी", rom: "kursi", en: "chair", pic: "🪑" }, { ne: "टोपी", rom: "topi", en: "hat", pic: "🧢" }] },
  { ne: "रातदिन टिक टिक हिँडिरहन्छ तर कहिल्यै थाक्दैन — के हो?", say: "रातदिन टिक टिक हिँडिरहन्छ तर कहिल्यै थाक्दैन। के हो?", rom: "raatdin tik tik hindirahanchha tara kahilyai thaakdaina — ke ho?", en: "It goes tick-tick day and night, but never gets tired — what is it?",
    answer: { ne: "घडी", rom: "ghadi", en: "watch", pic: "⌚" }, wrong: [{ ne: "जुत्ता", rom: "jutta", en: "shoes", pic: "👟" }, { ne: "साइकल", rom: "saaikal", en: "bicycle", pic: "🚲" }, { ne: "गाडी", rom: "gaadi", en: "car", pic: "🚗" }] },
  { ne: "पाना पल्टायो भने धेरै कुरा सिकाउँछ — के हो?", say: "पाना पल्टायो भने धेरै कुरा सिकाउँछ। के हो?", rom: "paanaa paltaayo bhane dherai kuraa sikaaunchha — ke ho?", en: "Turn its pages and it teaches you many things — what is it?",
    answer: { ne: "किताब", rom: "kitaab", en: "book", pic: "📚" }, wrong: [{ ne: "कलम", rom: "kalam", en: "pen", pic: "🖊️" }, { ne: "झोला", rom: "jhola", en: "bag", pic: "🎒" }, { ne: "बत्ती", rom: "batti", en: "light", pic: "💡" }] },
  { ne: "दिउँसो लुक्छ, राति आकाशमा चम्किन्छ — के हो?", say: "दिउँसो लुक्छ, राति आकाशमा चम्किन्छ। के हो?", rom: "diunso lukchha, raati aakaashmaa chamkinchha — ke ho?", en: "It hides in the day and shines in the sky at night — what is it?",
    answer: { ne: "जून", rom: "joon", en: "moon", pic: "🌙" }, wrong: [{ ne: "घाम", rom: "ghaam", en: "sun", pic: "☀️", img: "w-sunshine" }, { ne: "बत्ती", rom: "batti", en: "light", pic: "💡" }, { ne: "किताब", rom: "kitaab", en: "book", pic: "📚" }] },
  { ne: "पानी भित्र बस्छ, पानी बाहिर निस्क्यो भने बाँच्दैन — के हो?", say: "पानी भित्र बस्छ, पानी बाहिर निस्क्यो भने बाँच्दैन। के हो?", rom: "paani bhitra baschha, paani baahira niskyo bhane baanchdaina — ke ho?", en: "It lives in water and can't live out of water — what is it?",
    answer: { ne: "माछा", rom: "maachhaa", en: "fish", pic: "🐟" }, wrong: [{ ne: "बिरालो", rom: "biraalo", en: "cat", pic: "🐈" }, { ne: "चरा", rom: "charaa", en: "bird", pic: "🐦" }, { ne: "कुकुर", rom: "kukur", en: "dog", pic: "🐕" }] },
  { ne: "पखेटा छैन तर धागोमा बाँधिएर आकाशमा उड्छ — के हो?", say: "पखेटा छैन तर धागोमा बाँधिएर आकाशमा उड्छ। के हो?", rom: "pakhetaa chhaina tara dhaagomaa baandhiera aakaashmaa udchha — ke ho?", en: "It has no wings, but tied to a string it flies in the sky — what is it?",
    answer: { ne: "चङ्गा", rom: "changaa", en: "kite", pic: "🪁" }, wrong: [{ ne: "हवाईजहाज", rom: "hawaaijahaaj", en: "airplane", pic: "✈️" }, { ne: "जुत्ता", rom: "juttaa", en: "shoes", pic: "👟" }, { ne: "किताब", rom: "kitaab", en: "book", pic: "📚" }] },
  { ne: "आफू हिँड्दैन तर तिमी हिँड्दा सधैँ तिम्रो खुट्टामा हुन्छ — के हो?", say: "आफू हिँड्दैन तर तिमी हिँड्दा सधैँ तिम्रो खुट्टामा हुन्छ। के हो?", rom: "aaphu hindadaina tara timi hindaa sadhain timro khuttaamaa hunchha — ke ho?", en: "It never walks by itself, but it's always on your feet when you walk — what is it?",
    answer: { ne: "जुत्ता", rom: "juttaa", en: "shoes", pic: "👟" }, wrong: [{ ne: "टोपी", rom: "topi", en: "hat", pic: "🧢" }, { ne: "झोला", rom: "jholaa", en: "bag", pic: "🎒" }, { ne: "घडी", rom: "ghadi", en: "watch", pic: "⌚" }] },
];
window.RIDDLE_TITLE = { ne: "गाउँ खाने कथा", rom: "gaaun khaane kathaa", en: "Pandu's riddle" };

/* Bedtime story (रात्री कथा): shown after 7:30 PM. Each page is one recorded line; pic = a Pandu pose or a picture name. */
window.STORY = { ne: "पाण्डु र जून", rom: "paandu ra joon", en: "Pandu and the Moon", pages: [
  { ne: "एक दिन साँझ, पाण्डु आँगनमा बसेको थियो।", rom: "ek din saanjh, paandu aanganmaa baseko thiyo.", en: "One evening, Pandu was sitting in the courtyard.", art: "story-1", pic: "pandu-tea" },
  { ne: "आकाशमा ठूलो, गोलो जून देखियो।", rom: "aakaashmaa thulo, golo joon dekhiyo.", en: "A big, round moon appeared in the sky.", art: "story-2", pic: "pandu-think" },
  { ne: "पाण्डुले भन्यो, नमस्ते जून! तिमी कति राम्रो!", rom: "paandule bhanyo, namaste joon! timi kati raamro!", en: "Pandu said, “Hello, Moon! You are so pretty!”", art: "story-3", pic: "pandu-namaste" },
  { ne: "जूनले मुसुक्क हाँसेर भन्यो, अब सुत्ने बेला भयो, पाण्डु।", rom: "joonle musukka haansera bhanyo, aba sutne belaa bhayo, paandu.", en: "The moon smiled sweetly and said, “It’s time to sleep now, Pandu.”", art: "story-4", pic: "pandu-listen" },
  { ne: "पाण्डु ओछ्यानमा गयो र भुसुक्क निदायो। शुभ रात्रि!", rom: "paandu ochhyaanmaa gayo ra bhusukka nidaayo. shubha raatri!", en: "Pandu went to bed and fell fast asleep. Good night!", art: "story-5", pic: "pandu-sleep" },
] };

/* Second bedtime story (alternates nightly with the first). */
window.STORY2 = { ne: "पाण्डु र डाँफे", rom: "paandu ra daanphe", en: "Pandu and the Danphe", pages: [
  { ne: "एक दिन बिहान, पाण्डु डाँडामा घुम्न गयो।", rom: "ek din bihaan, paandu daandaamaa ghumna gayo.", en: "One morning, Pandu went for a walk on the hill.", art: "story-danphe-1", pic: "pandu-wave" },
  { ne: "लालीगुराँसको रूखमुनि एउटा सानो डाँफे रोइरहेको थियो।", rom: "laaliguraansko rukhmuni euta saano daanphe roiraheko thiyo.", en: "Under a rhododendron tree, a little Danphe bird was crying.", art: "story-danphe-2", pic: "pandu-think" },
  { ne: "पाण्डुले सोध्यो, के भयो साथी?", rom: "paandule sodhyo, ke bhayo saathi?", en: "Pandu asked, “What happened, friend?”", art: "story-danphe-3", pic: "pandu-listen" },
  { ne: "डाँफेले भन्यो, म घर जाने बाटो बिर्सेँ।", rom: "daanphele bhanyo, ma ghar jaane baato birsen.", en: "The Danphe said, “I forgot the way home.”", art: "story-danphe-4", pic: "pandu-oops" },
  { ne: "पाण्डुले भन्यो, नडराऊ, म मद्दत गर्छु!", rom: "paandule bhanyo, nadaraau, ma maddat garchhu!", en: "Pandu said, “Don’t be scared, I will help!”", art: "story-danphe-5", pic: "pandu-cheer" },
  { ne: "डाँफेकी आमाले भनिन्, धन्यवाद पाण्डु! तिमी असल साथी हौ।", rom: "daanpheki aamaale bhanin, dhanyabaad paandu! timi asal saathi hau.", en: "The Danphe’s mother said, “Thank you, Pandu! You are a good friend.”", art: "story-danphe-6", pic: "pandu-namaste" },
  { ne: "त्यो राति पाण्डु खुसी हुँदै भुसुक्क निदायो। शुभ रात्रि!", rom: "tyo raati paandu khusi hundai bhusukka nidaayo. shubha raatri!", en: "That night, Pandu fell fast asleep, feeling happy. Good night!", art: "story-danphe-7", pic: "pandu-sleep" },
] };

/* "Who are you talking to?" (Talking to Elders): pick the polite or the friendly form. */
window.POLITE_PAIRS = [
  { en: "eat", polite: { ne: "खानुहोस्", rom: "khaanuhos" }, plain: { ne: "खाऊ", rom: "khaau" } },
  { en: "sit", polite: { ne: "बस्नुहोस्", rom: "basnuhos" }, plain: { ne: "बस", rom: "basa" } },
  { en: "come", polite: { ne: "आउनुहोस्", rom: "aaunuhos" }, plain: { ne: "आऊ", rom: "aau" } },
  { en: "look", polite: { ne: "हेर्नुहोस्", rom: "hernuhos" }, plain: { ne: "हेर", rom: "hera" } },
  { en: "listen", polite: { ne: "सुन्नुहोस्", rom: "sunnuhos" }, plain: { ne: "सुन", rom: "suna" } },
  { en: "give it", polite: { ne: "दिनुहोस्", rom: "dinuhos" }, plain: { ne: "देऊ", rom: "deu" } },
];
window.TALK_TO = [
  { who: "Hajuraama", ne: "हजुरआमा", img: "w-grandma", polite: true },
  { who: "Hajurbaa", ne: "हजुरबा", img: "w-grandpa", polite: true },
  { who: "your teacher", ne: "गुरुआमा", img: "w-teacher", polite: true },
  { who: "your little brother", ne: "भाइ", img: "w-younger-brother", polite: false },
  { who: "your little sister", ne: "बहिनी", img: "w-younger-sister", polite: false },
  { who: "your friend", ne: "साथी", img: "w-friend", polite: false },
];
/* Join the letters: tap each letter to hear it, then they snap into a word (no matras yet). */
window.BLEND_WORDS = [
  { letters: ["ब", "स"], ne: "बस", rom: "bas", en: "bus", img: "w-bus" },
  { letters: ["घ", "र"], ne: "घर", rom: "ghar", en: "house", img: "li-rooms-house" },
  { letters: ["ज", "ग"], ne: "जग", rom: "jag", en: "jug", img: "w-jug" },
  { letters: ["फ", "ल"], ne: "फल", rom: "phal", en: "fruit", img: "w-fruits" },
  { letters: ["र", "थ"], ne: "रथ", rom: "rath", en: "chariot", img: "w-chariot" },
  { letters: ["क", "ल", "म"], ne: "कलम", rom: "kalam", en: "pen", img: "w-pen" },
  // second set (shown after the first six)
  { letters: ["न", "ल"], ne: "नल", rom: "nal", en: "water tap", img: "w-water-tap" },
  { letters: ["त", "ल"], ne: "तल", rom: "tala", en: "down", img: "w-down" },
  { letters: ["ध", "न"], ne: "धन", rom: "dhan", en: "coins (wealth)", img: "w-coins" },
  { letters: ["म", "ट", "र"], ne: "मटर", rom: "matar", en: "peas", img: "w-peas" },
  { letters: ["क", "म", "ल"], ne: "कमल", rom: "kamal", en: "lotus", img: "w-lotus" },
  { letters: ["स", "ड", "क"], ne: "सडक", rom: "sadak", en: "road", img: "w-road" },
];
window.BLEND_TITLE = { ne: "अक्षर जोडौँ", rom: "akshar jodaun", en: "Join the letters" };

/* Rhymes (बालगीत): sung line by line; tap a line to hear just that line. */
window.RHYMES_TITLE = { ne: "बालगीत", rom: "baalgeet", en: "Rhymes" };
window.RHYMES = [
  { id: "tara", ne: "तारा बाजी लै लै", rom: "taaraa baaji lai lai", en: "Stars twinkle, lai lai", art: "scene-rhyme-tara", pic: "🐴", lines: [
    { ne: "तारा बाजी लै लै,", rom: "taaraa baaji lai lai,", en: "Stars twinkle, lai lai," },
    { ne: "मामा आए घोडा।", rom: "maamaa aae ghodaa.", en: "Uncle came riding a horse." },
    { ne: "हात्ती आयो सरर,", rom: "haatti aayo sarara,", en: "The elephant came, swish swish," },
    { ne: "घोडा आयो फरर।", rom: "ghodaa aayo pharara.", en: "The horse came, whoosh!" },
    { ne: "मामाले ल्याए गुड,", rom: "maamaale lyaae gud,", en: "Uncle brought sweet gud," },
    { ne: "मैले खाएँ सुप्प!", rom: "maile khaaen supp!", en: "I ate it all up, slurp!" } ] },
  { id: "kukhuri", ne: "कुखुरी काँ", rom: "kukhuri kaan", en: "Cock-a-doodle-doo", art: "scene-rhyme-kukhuri", pic: "🐓", lines: [
    { ne: "काग कराउँछ काँ काँ,", rom: "kaag karaaunchha kaan kaan,", en: "The crow calls kaa kaa," },
    { ne: "भाले बास्छ कुखुरी काँ!", rom: "bhaale baaschha kukhuri kaan!", en: "The rooster crows cock-a-doodle-doo!" },
    { ne: "ढुकुर बोल्छ घुर घुर,", rom: "dhukur bolchha ghur ghur,", en: "The dove coos ghur ghur," },
    { ne: "भँगेरा नाच्छ फुर फुर!", rom: "bhangeraa naachchha phur phur!", en: "The sparrow dances flutter flutter!" },
    { ne: "बिहानी भयो उठौँ अब,", rom: "bihaani bhayo uthaun aba,", en: "It's morning, let's get up now," },
    { ne: "हातमुख धोई पढौँ अब!", rom: "haatmukh dhoi padhaun aba!", en: "Wash hands and face, then let's study!" } ] },
  { id: "chari", ne: "चरी बस्यो रूखमा", rom: "chari basyo rukhmaa", en: "A bird sat in the tree", art: "scene-rhyme-chari", pic: "🐦", lines: [
    { ne: "एक दुई तीन,", rom: "ek dui teen,", en: "One, two, three," },
    { ne: "चरी बस्यो रूखमा।", rom: "chari basyo rukhmaa.", en: "A little bird sat in the tree." },
    { ne: "चार पाँच छ,", rom: "chaar paanch chha,", en: "Four, five, six," },
    { ne: "मिठो फल छ मुखमा।", rom: "mitho phal chha mukhmaa.", en: "A tasty fruit in its beak." },
    { ne: "सात आठ नौ,", rom: "saat aath nau,", en: "Seven, eight, nine," },
    { ne: "पखेटा फिँजाई उड्यो पर,", rom: "pakhetaa phinjaai udyo para,", en: "It spread its wings and flew far," },
    { ne: "दस भन्दै आयो घर!", rom: "das bhandai aayo ghar!", en: "Counting ten, it came back home!" } ] },
];
window.GOODNIGHT = { ne: "शुभ रात्रि! अब सुत्ने बेला भयो।", rom: "shubha raatri! aba sutne belaa bhayo.", en: "Good night! It's time to sleep now." };

/* Daytime stories (दिनको कथा), in the Play drawer. "spot" = one thing to tap on the picture (placed once the picture exists).
   A page with "choice" lets the child pick a path; pages with "branch" belong to one path only. "quiz" is asked to big learners at the end. */
window.TALES = [
  { id: "rabbit", ne: "चतुर खरायो र सिंह", rom: "chatur kharaayo ra singha", en: "The Clever Rabbit and the Lion", art: "tale-rabbit-1", pic: "🐇", pages: [
    { ne: "हरियो जङ्गलमा धेरै जनावरहरू खुसीसाथ बस्थे।", rom: "hariyo jangalmaa dherai janaawarharu khusisaath basthe.", en: "In a green forest, many animals lived happily.", art: "tale-rabbit-1", pic: "pandu-wave", spot: { ne: "चिरबिर", en: "a bird sings: chirbir!", x: 73, y: 38, r: 7 } },
    { ne: "तर त्यहाँ एउटा रिसाहा सिंह पनि थियो। ऊ गर्ज्यो, ह्वार्र!", rom: "tara tyahaan euta risaahaa singha pani thiyo. u garjyo, hwaarr!", en: "But a grumpy lion lived there too. He roared: rawrr!", art: "tale-rabbit-2", pic: "pandu-oops", spot: { ne: "ह्वार्र", en: "the lion roars: hwaarr!", x: 47, y: 40, r: 9 } },
    { ne: "सिंहले भन्यो, हरेक दिन एउटा जनावर मेरो गुफामा आउनुपर्छ!", rom: "singhale bhanyo, harek din euta janaawar mero guphaamaa aaunuparchha!", en: "The lion said, “Every day, one animal must come to my cave!”", art: "tale-rabbit-3", pic: "pandu-think", spot: { ne: "गुफा", en: "the lion's cave", x: 10, y: 38, r: 7 } },
    { ne: "सबै जनावरहरू डरले थरथर काँपे।", rom: "sabai janaawarharu darale tharthar kaanpe.", en: "All the animals shook with fear, thar-thar.", art: "tale-rabbit-4", pic: "pandu-oops", spot: { ne: "थरथर", en: "shaking: thar-thar!", x: 50, y: 55, r: 12 } },
    { ne: "एक दिन सानो खरायोको पालो आयो।", rom: "ek din saano kharaayoko paalo aayo.", en: "One day, it was the little rabbit's turn.", art: "tale-rabbit-5", pic: "pandu-listen", spot: { ne: "खरायो", en: "the little rabbit", x: 34, y: 72, r: 6 } },
    { ne: "खरायो बिस्तारै बिस्तारै हिँड्यो, र एउटा उपाय सोच्यो।", rom: "kharaayo bistaarai bistaarai hindyo, ra euta upaaya sochyo.", en: "The rabbit walked slowly, slowly, and thought of a plan.", art: "tale-rabbit-6", pic: "pandu-think", spot: { ne: "टुक्क", en: "a bright idea: tukka!", x: 41, y: 47, r: 5 } },
    { ne: "सिंह रिसले चिच्यायो, किन यति ढिलो आएको?", rom: "singha risale chichyaayo, kina yati dhilo aaeko?", en: "The lion shouted angrily, “Why are you so late?”", art: "tale-rabbit-7", pic: "pandu-oops", spot: { ne: "ह्वार्र", en: "an angry roar!", x: 37, y: 42, r: 10 } },
    { ne: "खरायोले भन्यो, बाटोमा अर्को सिंहले मलाई रोक्यो!", rom: "kharaayole bhanyo, baatomaa arko singhale malaai rokyo!", en: "The rabbit said, “Another lion stopped me on the way!”", art: "tale-rabbit-8", pic: "pandu-listen", spot: { ne: "खरायो", en: "the clever rabbit", x: 26, y: 60, r: 7 } },
    { ne: "सिंह झन् रिसायो। मलाई त्यो सिंह देखाऊ!", rom: "singha jhan risaayo. malaai tyo singha dekhaau!", en: "The lion got even angrier. “Show me that lion!”", art: "tale-rabbit-9", pic: "pandu-oops", spot: { ne: "ह्वार्र", en: "rawrr!", x: 62, y: 45, r: 10 } },
    { ne: "खरायोले सिंहलाई एउटा गहिरो इनारमा लग्यो।", rom: "kharaayole singhalaai euta gahiro inaarmaa lagyo.", en: "The rabbit led the lion to a deep well.", art: "tale-rabbit-10", pic: "pandu-think", spot: { ne: "इनार", en: "a deep well", x: 79, y: 58, r: 8 } },
    { ne: "सिंहले पानीमा आफ्नै छायाँ देख्यो र गर्ज्यो। इनारबाट पनि आवाज आयो, ह्वार्र!", rom: "singhale paanimaa aaphnai chhaayaan dekhyo ra garjyo. inaarbaata pani aawaaj aayo, hwaarr!", en: "The lion saw his own reflection and roared. The well roared back: rawrr!", art: "tale-rabbit-11", pic: "pandu-oops", spot: { ne: "छायाँ", en: "the lion's reflection", x: 46, y: 60, r: 7 } },
    { ne: "सिंहले इनारमा हाम फाल्यो, छप्लक्क! भिजेको सिंह लाजले जङ्गल छोडेर भाग्यो।", rom: "singhale inaarmaa haam phaalyo, chhaplakka! bhijeko singha laajale jangal chhodera bhaagyo.", en: "The lion jumped into the well: splash! The soaking-wet lion ran away from the forest in shame.", art: "tale-rabbit-12", pic: "pandu-cheer", spot: { ne: "छप्लक्क", en: "splash!", x: 20, y: 42, r: 10 } },
    { ne: "सबै जनावरले भने, स्याबास, चतुर खरायो!", rom: "sabai janaawarle bhane, syaabaas, chatur kharaayo!", en: "All the animals cheered, “Well done, clever rabbit!”", art: "tale-rabbit-13", pic: "pandu-cheer", spot: { ne: "स्याबास", en: "well done!", x: 47, y: 35, r: 7 } },
  ], quiz: { ne: "खरायोले सिंहलाई कहाँ लग्यो?", rom: "kharaayole singhalaai kahaan lagyo?", en: "Where did the rabbit take the lion?",
    answer: { ne: "इनार", rom: "inaar", en: "a well", img: "w-well" }, wrong: [{ ne: "रूख", rom: "rukh", en: "a tree", img: "w-tree" }, { ne: "घर", rom: "ghar", en: "a house", img: "li-rooms-house" }] } },
  { id: "kite", ne: "पाण्डुको चङ्गा", rom: "paanduko changaa", en: "Pandu's Kite", art: "tale-kite-1", pic: "🪁", pages: [
    { ne: "दशैँ आयो! आकाश निलो छ, हावा सरर चल्छ।", rom: "dashain aayo! aakaash nilo chha, haawaa sarara chalchha.", en: "Dashain is here! The sky is blue and the breeze blows, sarara.", art: "tale-kite-1", pic: "pandu-wave", spot: { ne: "सरर", en: "the breeze: sarara!", x: 68, y: 37, r: 7 } },
    { ne: "पाण्डुले आफ्नो रातो चङ्गा र लट्टाई लियो।", rom: "paandule aaphno raato changaa ra lattaai liyo.", en: "Pandu took his red kite and his string spool.", art: "tale-kite-2", pic: "pandu-cheer", spot: { ne: "लट्टाई", en: "the kite-string spool", x: 49, y: 57, r: 5 } },
    { ne: "चङ्गा माथि, माथि, धेरै माथि उड्यो!", rom: "changaa maathi, maathi, dherai maathi udyo!", en: "The kite flew up, up, very high!", art: "tale-kite-3", pic: "pandu-cheer", spot: { ne: "चङ्गा", en: "the kite", x: 77, y: 21, r: 6 } },
    { ne: "अचानक, हावाले चङ्गालाई डाँडापारि उडाएर लग्यो। ओहो!", rom: "achaanak, haawaale changaalaai daandaapaari udaaera lagyo. oho!", en: "Suddenly, the wind blew the kite over the hill. Oh no!", art: "tale-kite-4", pic: "pandu-oops", spot: { ne: "ओहो", en: "oh no!", x: 78, y: 32, r: 7 } },
    { ne: "चङ्गा खोज्न जाँदा पाण्डुले दुईवटा बाटो देख्यो। कुन बाटो जाने?", rom: "changaa khojna jaandaa paandule duiwataa baato dekhyo. kun baato jaane?", en: "Looking for the kite, Pandu found two paths. Which way should he go?", art: "tale-kite-5", pic: "pandu-think",
      choice: [{ go: "bridge", ne: "झोलुङ्गे पुल", rom: "jholunge pul", en: "the swing bridge", pic: "🌉" }, { go: "river", ne: "नदीको बाटो", rom: "nadiko baato", en: "the river path", pic: "🏞️" }] },
    { branch: "bridge", ne: "पाण्डु झोलुङ्गे पुलमा हिँड्यो। पुल हल्लियो, झुल झुल!", rom: "paandu jholunge pulmaa hindyo. pul halliyo, jhul jhul!", en: "Pandu walked across the swing bridge. It swayed: jhul jhul!", art: "tale-kite-6a", pic: "pandu-oops", spot: { ne: "झुल झुल", en: "the bridge sways: jhul jhul!", x: 74, y: 64, r: 8 } },
    { branch: "bridge", ne: "पुलपारि एउटा बाँदरले रूखमा अड्केको चङ्गा देखायो।", rom: "pulpaari euta baandarle rukhmaa adkeko changaa dekhaayo.", en: "Across the bridge, a monkey pointed at the kite stuck in a tree.", art: "tale-kite-7a", pic: "pandu-listen", spot: { ne: "बाँदर", en: "a monkey", x: 46, y: 47, r: 6 } },
    { branch: "bridge", ne: "बाँदर रूखमा चढ्यो, र चङ्गा झारिदियो।", rom: "baandar rukhmaa chadhyo, ra changaa jhaaridiyo.", en: "The monkey climbed the tree and brought the kite down.", art: "tale-kite-8a", pic: "pandu-cheer", spot: { ne: "चङ्गा", en: "the kite!", x: 49, y: 52, r: 6 } },
    { branch: "river", ne: "पाण्डु नदीको किनारै किनार हिँड्यो। पानी कलकल बग्यो।", rom: "paandu nadiko kinaarai kinaar hindyo. paani kalkal bagyo.", en: "Pandu walked along the riverbank. The water flowed, kalkal.", art: "tale-kite-6b", pic: "pandu-wave", spot: { ne: "कलकल", en: "the river: kalkal!", x: 82, y: 58, r: 8 } },
    { branch: "river", ne: "ढुङ्गामाथि बसेको एउटा भ्यागुतोले चङ्गा देखायो।", rom: "dhungaamaathi baseko euta bhyaagutole changaa dekhaayo.", en: "A frog sitting on a rock pointed at the kite.", art: "tale-kite-7b", pic: "pandu-listen", spot: { ne: "भ्यागुतो", en: "a frog", x: 56, y: 54, r: 5 } },
    { branch: "river", ne: "भ्यागुतो फुत्त उफ्र्यो, र चङ्गा ल्याइदियो।", rom: "bhyaaguto phutta uphryo, ra changaa lyaaidiyo.", en: "The frog hopped, phutta!, and brought the kite back.", art: "tale-kite-8b", pic: "pandu-cheer", spot: { ne: "फुत्त", en: "hop: phutta!", x: 37, y: 39, r: 6 } },
    { ne: "पाण्डुले भन्यो, धेरै धेरै धन्यवाद, साथी!", rom: "paandule bhanyo, dherai dherai dhanyabaad, saathi!", en: "Pandu said, “Thank you so much, friend!”", art: "tale-kite-9", pic: "pandu-namaste", spot: { ne: "धन्यवाद", en: "thank you!", x: 72, y: 55, r: 8 } },
    { ne: "घाम अस्ताउँदै थियो। पाण्डुको चङ्गा फेरि आकाशमा नाच्यो।", rom: "ghaam astaaundai thiyo. paanduko changaa pheri aakaashmaa naachyo.", en: "The sun was setting. Pandu's kite danced in the sky again.", art: "tale-kite-10", pic: "pandu-cheer", spot: { ne: "घाम", en: "the setting sun", x: 40, y: 22, r: 8 } },
    { ne: "पाण्डु खुसी हुँदै घर फर्कियो। अर्को पटक, अर्को बाटो जाऔँ!", rom: "paandu khusi hundai ghar pharkiyo. arko patak, arko baato jaaun!", en: "Pandu went home happy. Next time, let's try the other path!", art: "tale-kite-11", pic: "pandu-wave", spot: { ne: "घर", en: "home", x: 22, y: 45, r: 10 } },
  ], quiz: { ne: "पाण्डुको चङ्गा कस्तो रङको थियो?", rom: "paanduko changaa kasto rangko thiyo?", en: "What color was Pandu's kite?",
    answer: { ne: "रातो", rom: "raato", en: "red", img: "w-red" }, wrong: [{ ne: "निलो", rom: "nilo", en: "blue", img: "w-blue" }, { ne: "पहेँलो", rom: "pahenlo", en: "yellow", img: "w-yellow" }] } },
  { id: "jackal", ne: "बाठो स्याल र सोझो भालु", rom: "baatho syaal ra sojho bhaalu", en: "The Clever Jackal and the Innocent Bear", art: "tale-jackal-1", pic: "🦊", pages: [
    { ne: "एउटा गाउँनजिकैको जङ्गलमा धेरै बाठो स्याल बस्थ्यो। ऊ सधैँ काम नगरी मिठो-मिठो खान खोज्थ्यो। एक रात ऊ लुसुक्क गाउँ पस्यो र खोरबाट मोटो कुखुरा चोरेर भाग्यो!", rom: "euta gaaunnajikaiko jangalmaa dherai baatho syaal basthyo. u sadhain kaam nagari mitho-mitho khaana khojthyo. ek raat u lusukka gaaun pasyo ra khorbaata moto kukhuraa chorera bhaagyo!", en: "In a forest near a village lived a very clever jackal. He always looked for delicious food without doing any work. One night, he crept quietly into the village, stole a plump chicken from the coop, and ran!", art: "tale-jackal-1", pic: "pandu-think", spot: { ne: "कुखुरी काँ", en: "the chicken: kukhuri kaa!", x: 77, y: 57, r: 6 } },
    { ne: "तर स्यालको चलाखी धेरै दिन टिकेन। गाउँलेहरूले थाहा पाए र स्याललाई च्याप्प समाते! गाउँलेहरूले भने, “यो चोर स्याललाई कडा सजाय दिनुपर्छ।”", rom: "tara syaalko chalaakhi dherai din tikena. gaaunleharule thaahaa paae ra syaalalaai chyaappa samaate! gaaunleharule bhane, “yo chor syaalalaai kadaa sajaaya dinuparchha.”", en: "But the jackal's tricks didn't last long. The villagers found out and caught him red-handed! The villagers said, “This thief jackal must be given a strict punishment.”", art: "tale-jackal-2", pic: "pandu-oops", spot: { ne: "च्याप्प", en: "caught: chyappa!", x: 52, y: 63, r: 7 } },
    { ne: "गाउँलेहरूले स्याललाई टाढा जङ्गलमा लगे। त्यहाँ एउटा ठूलो रूखको हाँगामा उसलाई डोरीले कसेर बाँधिदिए। रूखमा एउटा पाटी झुन्ड्याए—‘यो स्याल चोर हो, जसले भेटे पनि सजाय दिनू!’", rom: "gaaunleharule syaalalaai taadhaa jangalmaa lage. tyahaan euta thulo rukhko haangaamaa usalaai dorile kasera baandhidiye. rukhmaa euta paati jhundyaae: ‘yo syaal chor ho, jasle bhete pani sajaaya dinu!’", en: "The villagers took the jackal deep into the forest. There, they tied him tightly with a rope to a big tree branch. On the tree, they hung a wooden sign: ‘This jackal is a thief; whoever finds him may punish him!’", art: "tale-jackal-3", pic: "pandu-think", spot: { ne: "पाटी", en: "the wooden sign", x: 66, y: 42, r: 7 } },
    { ne: "केही बेरपछि त्यहाँ एउटा ठूलो र सोझो भालु आयो। उसले स्याललाई रूखमा बाँधिएको देख्यो। भालुले अचम्म मान्दै सोध्यो, “ए स्याल भाइ! तिमी यहाँ रूखमा किन बाँधिएर बसेको?”", rom: "kehi berpachhi tyahaan euta thulo ra sojho bhaalu aayo. usle syaalalaai rukhmaa baandhieko dekhyo. bhaalule achamma maandai sodhyo, “e syaal bhaai! timi yahaan rukhmaa kina baandhiera baseko?”", en: "A little later, a big and innocent bear came walking by. He saw the jackal tied to the tree. The bear asked in surprise, “Hey brother jackal! Why are you tied to this tree?”", art: "tale-jackal-4", pic: "pandu-listen", spot: { ne: "भालु", en: "the big bear", x: 25, y: 50, r: 11 } },
    { ne: "बाठो स्यालले मनमनै जुक्ति निकाल्यो। उसले हाँस्दै भन्यो, “अरे भालु दाइ! मलाई सजाय दिएको होइन नि! राजाले मलाई मिठो-मिठो खीर र मह खुवाउन यहाँ आसनमा राखेका हुन्!”", rom: "baatho syaalle manmanai jukti nikaalyo. usle haansdai bhanyo, “are bhaalu daai! malaai sajaaya dieko hoina ni! raajaale malaai mitho-mitho khir ra maha khuwaauna yahaan aasanmaa raakheka hun!”", en: "The clever jackal quickly hatched a plan. Smiling, he said, “Oh bear brother! I'm not being punished! The king put me on this royal perch to feed me sweet kheer and fresh honey!”", art: "tale-jackal-5", pic: "pandu-think", spot: { ne: "स्याल", en: "the sly jackal", x: 40, y: 58, r: 8 } },
    { ne: "“खीर र मह?” महको नाम सुन्नेबित्तिकै भालुको मुखमा पानी आयो! भालुले भन्यो, “मलाई पनि साह्रै भोक लागेको छ। त्यो मिठो मह म खान्छु!” स्यालले भन्यो, “त्यसो भए मलाई फुकाइदेऊ र तिमी यहाँ बाँधिएर बस!”", rom: "“khir ra maha?” mahako naam sunnebittikai bhaaluko mukhmaa paani aayo! bhaalule bhanyo, “malaai pani saahrai bhok laageko chha. tyo mitho maha ma khaanchhu!” syaalle bhanyo, “tyaso bhae malaai phukaaideu ra timi yahaan baandhiera basa!”", en: "“Kheer and honey?” At the very mention of honey, the bear's mouth watered! The bear said, “I am terribly hungry too. I want to eat that sweet honey!” The jackal said, “Then untie me, and you sit tied here instead!”", art: "tale-jackal-6", pic: "pandu-cheer", spot: { ne: "मह", en: "sweet honey", x: 43, y: 30, r: 7 } },
    { ne: "सोझो भालुले हतार-हतार स्यालको डोरी फुकाइदियो। स्याल फुत्त भुइँमा झर्यो। अनि भालु खुसी हुँदै रूखको हाँगामा पुग्यो र बाँधिन तयार भयो।", rom: "sojho bhaalule hataar-hataar syaalko dori phukaaidiyo. syaal phutta bhuinmaa jharyo. ani bhaalu khusi hundai rukhko haangaamaa pugyo ra baandhina tayaar bhayo.", en: "The innocent bear hurried and untied the jackal's rope. The jackal slipped freely down to the ground. Then the happy bear climbed onto the branch, ready to be tied up.", art: "tale-jackal-7", pic: "pandu-oops", spot: { ne: "फुत्त", en: "phutta!", x: 78, y: 55, r: 7 } },
    { ne: "स्यालले भालुलाई रूखमा राखेर डोरीले कसि-कसि बाँधिदियो। भालुले सोध्यो, “स्याल भाइ, अब मह कहिले आउँछ त?” स्यालले टाढाबाट मुसुक्क हाँसेर भन्यो, “अब मह होइन, गाउँलेको लौरो आउँछ!”", rom: "syaalle bhaalulaai rukhmaa raakhera dorile kasi-kasi baandhidiyo. bhaalule sodhyo, “syaal bhaai, aba maha kahile aaunchha ta?” syaalle taadhaabaata musukka haansera bhanyo, “aba maha hoina, gaaunleko lauro aaunchha!”", en: "The jackal strapped the bear tightly to the tree with the rope. The bear asked, “Brother jackal, when does the honey arrive?” The jackal grinned from a distance and said, “Not honey, now comes the villagers' stick!”", art: "tale-jackal-8", pic: "pandu-oops", spot: { ne: "डोरी", en: "the rope", x: 47, y: 62, r: 6 } },
    { ne: "यति भनेर स्यालले जङ्गलतिर सुइँकुच्चा ठोक्यो—फरर! ऊ फेरि त्यो जङ्गलमा कहिल्यै फर्किएन। रूखमा बाँधिएको सोझो भालुले बल्ल थाहा पायो—स्यालले त झुक्याएछ!", rom: "yati bhanera syaalle jangaltira suinkuchchaa thokyo: pharara! u pheri tyo jangalmaa kahilyai pharkiena. rukhmaa baandhieko sojho bhaalule balla thaahaa paayo: syaalle ta jhukyaaechha!", en: "Saying this, the jackal took to his heels into the wild forest: whoosh! He was never seen in that forest ever again. Tied to the tree, the innocent bear finally realized the jackal had completely tricked him!", art: "tale-jackal-9", pic: "pandu-oops", spot: { ne: "सुइँकुच्चा", en: "run away fast: suinkuchcha!", x: 81, y: 58, r: 8 } },
    { ne: "भालुले आफ्नै बलले बिस्तारै डोरी फुकायो र घर फर्कियो। कथा सकियो।", rom: "bhaalule aaphnai balale bistaarai dori phukaayo ra ghar pharkiyo. kathaa sakiyo.", en: "The bear used his own great strength to slowly break the rope and head home. The story has ended.", art: "tale-jackal-10", pic: "pandu-cheer", spot: { ne: "कथा", en: "the story", x: 66, y: 60, r: 8 } },
  ], quiz: { ne: "भालु कुन मिठो कुरा खान चाहन्थ्यो?", rom: "bhaalu kun mitho kuraa khaana chaahanthyo?", en: "What sweet food did the bear want to eat?",
    answer: { ne: "मह", rom: "maha", en: "honey", img: "w-honey" }, wrong: [{ ne: "दूध", rom: "doodh", en: "milk", img: "w-milk" }, { ne: "स्याउ", rom: "syaau", en: "apple", img: "w-apple" }] } },
  {"id": "monkey", "ne": "बाँदर र गोही", "rom": "baandar ra gohi", "en": "The Monkey and the Crocodile", "pic": "🐒", "pages": [{"ne": "नदीको किनारमा एउटा ठूलो जामुनको रूख थियो। त्यहाँ एउटा दयालु बाँदर बस्थ्यो। नदीमा एउटा गोही बस्थ्यो। बाँदरले गोहीलाई हरेक दिन मिठो-मिठो जामुन खान दिन्थ्यो। दुवै असल साथी बने।", "rom": "nadiko kinaarmaa euta thulo jaamunko rukh thiyo. tyahaan euta dayaalu baandar basthyo. nadimaa euta gohi basthyo. baandarle gohilaai harek din mitho-mitho jaamun khaana dinthyo. duvai asal saathi bane.", "en": "On the riverbank grew a great jamun tree filled with ripe berries. A kind monkey lived there, and in the river lived a crocodile. Every day, the monkey tossed sweet berries to the crocodile, and the two became close friends.", "pic": "pandu-wave", "spot": {"ne": "ट्वाक्क", "en": "a berry falls in the water: twaakka!", "x": 39, "y": 77, "r": 7}, "art": "tale-monkey-1"}, {"ne": "एक दिन गोहीले केही जामुन आफ्नी श्रीमतीलाई लगिदियो। जामुन खाएर श्रीमतीले भनी—‘दिनहुँ यति मिठो फल खाने बाँदरको मुटु कति मिठो होला! मलाई उसको मुटु खान मन छ।’", "rom": "ek din gohile kehi jaamun aaphni shrimatilaai lagidiyo. jaamun khaaera shrimatile bhani—‘dinahun yati mitho phal khaane baandarko mutu kati mitho holaa! malaai usko mutu khaana man chha.’", "en": "One day, the crocodile brought berries home to his wife. Tasting the sweet fruit, she said, “The monkey who eats this every day must have the sweetest heart! Bring me his heart to eat.”", "pic": "pandu-oops", "art": "tale-monkey-2"}, {"ne": "गोहीले बाँदरकहाँ गएर भन्यो—‘साथी! आज मेरो घरमा तिम्रो लागि मिठो भोज छ, मेरो ढाडमा चढ।’ सोझो बाँदर साथीको कुरा पत्याएर गोहीको ढाडमा बस्यो।", "rom": "gohile baandarkahaan gaera bhanyo—‘saathi! aaja mero gharmaa timro laagi mitho bhoj chha, mero dhaadmaa chadha.’ sojho baandar saathiko kuraa patyaaera gohiko dhaadmaa basyo.", "en": "The crocodile swam back and told the monkey, “Friend! Today my wife has prepared a feast for you. Climb onto my back.” Trusting his friend, the innocent monkey climbed aboard.", "pic": "pandu-think", "art": "tale-monkey-3"}, {"ne": "नदीको बीचमा पुगेपछि गोहीले भन्यो—‘माफ गर साथी! मेरी श्रीमती तिम्रो मुटु खान चाहन्छिन्, त्यसैले मैले तिमीलाई झुक्याएँ।’ बाँदर निकै डरायो, तर उसले आफ्नो बुद्धि गुमाएन।", "rom": "nadiko beechmaa pugepachhi gohile bhanyo—‘maaph gara saathi! meri shrimati timro mutu khaana chaahanchhin, tyasaile maile timilaai jhukyaaen.’ baandar nikai daraayo, tara usle aaphno buddhi gumaaena.", "en": "Once in the middle of the deep river, the crocodile confessed, “Forgive me, friend! My wife wants to eat your heart, so I tricked you.” The monkey was frightened, but he kept his cool.", "pic": "pandu-oops", "art": "tale-monkey-4"}, {"ne": "बाँदरले हाँस्दै भन्यो—‘अरे साथी! मुटु त मैले जामुनको रूखको टोड्कामै छोडेर आएँ नि! तिमीले पहिल्यै किन भनेनौ? ल हिँड, फर्केर लिएर आऊँ।’", "rom": "baandarle haansdai bhanyo—‘are saathi! mutu ta maile jaamunko rukhko todkaamai chhodera aaen ni! timile pahilyai kina bhanenau? la hinda, pharkera liera aaun.’", "en": "The monkey laughed and said, “Oh dear friend! I left my heart safely tucked in the hollow of the jamun tree! Why didn’t you tell me sooner? Turn around, let’s go get it!”", "pic": "pandu-think", "art": "tale-monkey-5"}, {"ne": "मूर्ख गोही तुरुन्तै किनारतिर फर्कियो। किनार पुग्नेबित्तिकै बाँदर गोहीको ढाडबाट फुत्त उफ्रिएर अग्लो हाँगामा चढीहाल्यो!", "rom": "moorkha gohi turuntai kinaartira pharkiyo. kinaar pugnebittikai baandar gohiko dhaadbaata phutta uphriera aglo haangaamaa chadhihaalyo!", "en": "The foolish crocodile quickly paddled back toward the bank. The instant they reached shore, the monkey leaped off his back (phutta!) straight into the safety of the high branches!", "pic": "pandu-cheer", "spot": {"ne": "फुत्त", "en": "the monkey jumps: phutta!", "x": 60, "y": 28, "r": 9}, "art": "tale-monkey-6"}, {"ne": "बाँदरले माथिबाट भन्यो—‘मूर्ख गोही! मुटु पनि कतै जिउबाट निकालेर रूखमा राखिन्छ? तिमीले विश्वासघात गर्‍यौ, आजदेखि हाम्रो मित्रता सकियो!’ बुद्धिले गर्दा बाँदरको ज्यान बच्यो।", "rom": "baandarle maathibaata bhanyo—‘moorkha gohi! mutu pani katai jiubaata nikaalera rukhmaa raakhinchha? timile vishwaasghaat garyau, aajadekhi haamro mitrataa sakiyo!’ buddhile gardaa baandarko jyaan bachyo.", "en": "From high above, the monkey called down, “Foolish crocodile! Can anyone ever take out their heart and leave it on a tree? You betrayed my trust, and our friendship is over!” By using his wits, the monkey saved his life.", "pic": "pandu-cheer", "art": "tale-monkey-7"}], "quiz": {"ne": "बाँदरले आफ्नो ज्यान कसरी बचायो?", "rom": "baandarle aaphno jyaan kasari bachaayo?", "en": "How did the monkey save his life?", "answer": {"ne": "आफ्नो चलाख बुद्धिले", "rom": "aaphno chalaakh buddhile", "en": "with his clever wit"}, "wrong": [{"ne": "नदीमा पौडी खेलेर", "rom": "nadimaa paudi khelera", "en": "by swimming in the river"}]}, "art": "tale-monkey-1"},
  {"id": "lion", "ne": "सानो मुसो र ठूलो सिंह", "rom": "saano muso ra thulo singha", "en": "The Little Mouse and the Big Lion", "pic": "🦁", "pages": [{"ne": "एउटा ठूलो जङ्गलमा भाले सिंह पीपलको रूखको छहारीमा गहिरो निद्रामा सुतिरहेको थियो। हावा चिसो-चिसो चलिरहेको थियो।", "rom": "euta thulo jangalmaa bhaale singha peepalko rukhko chhahaarimaa gahiro nidraamaa sutiraheko thiyo. haawaa chiso-chiso chaliraheko thiyo.", "en": "In a wide forest, a mighty lion was fast asleep under the cool shade of a peepal tree. A gentle breeze was blowing.", "pic": "pandu-listen", "spot": {"ne": "घुर्र घुर्र", "en": "the lion snores: ghurra ghurra", "x": 49, "y": 67, "r": 9}, "art": "tale-lion-1"}, {"ne": "एउटा सानो चकचके मुसो खेल्दै त्यहाँ आइपुग्यो। उसले सिंहलाई सुतिरहेको देख्यो र जिउमाथि चढेर सररर चिप्लेटी खेल्न थाल्यो!", "rom": "euta saano chakchake muso kheldai tyahaan aaipugyo. usle singhalaai sutiraheko dekhyo ra jiumaathi chadhera sararara chipleti khelna thaalyo!", "en": "A tiny, playful mouse came scampering by. Seeing the sleeping lion, he hopped onto his back and began sliding down his fur like a slide!", "pic": "pandu-cheer", "spot": {"ne": "सररर", "en": "whee, down the slide: sararara!", "x": 58, "y": 37, "r": 7}, "art": "tale-lion-2"}, {"ne": "सिंह झस्किएर ब्युँझियो। उसले रिसले आफ्नो ठूलो पञ्जाले मुसालाई च्याप्प समात्यो र गर्जियो—‘घुर्र्र! तँ सानो मुसो, मलाई जगाउने साहस कसरी गरिस्?’", "rom": "singha jhaskiera byunjhiyo. usle risle aaphno thulo panjaale musaalaai chyaappa samaatyo ra garjiyo—‘ghurrr! tan saano muso, malaai jagaaune saahas kasari garis?’", "en": "The lion woke with a start. Furious, he slammed his heavy paw down and trapped the mouse. He roared, “Ghurrr! You tiny mouse, how dare you wake me?”", "pic": "pandu-oops", "spot": {"ne": "घुर्र्र", "en": "the lion roars: ghurrr!", "x": 61, "y": 46, "r": 8}, "art": "tale-lion-3"}, {"ne": "मुसो डराएर काम्यो र हात जोडेर भन्यो—‘महाराज! मलाई माफ गर्नुहोस्। कुनै दिन म हजुरलाई ठूलो मद्दत गर्नेछु!’ सिंह मुसाको कुरा सुनेर जोडले हाँस्यो—‘हा हा हा! यति सानो मुसाले मेरो के मद्दत गर्छ?’ तैपनि दया लागेर उसले मुसालाई छोडिदियो।", "rom": "muso daraaera kaamyo ra haat jodera bhanyo—‘mahaaraaj! malaai maaph garnuhos. kunai din ma hajurlaai thulo maddat garnechhu!’ singha musaako kuraa sunera jodle haansyo—‘haa haa haa! yati saano musaale mero ke maddat garchha?’ taipani dayaa laagera usle musaalaai chhodidiyo.", "en": "Trembling, the mouse folded his paws: “Your Majesty! Please forgive me. One day I will help you in return!” The lion laughed heartily: “Ha ha ha! How could such a tiny mouse ever help me?” Still, feeling kind, he let him go.", "pic": "pandu-listen", "spot": {"ne": "हा हा हा", "en": "the lion laughs: haa haa haa!", "x": 73, "y": 28, "r": 9}, "art": "tale-lion-4"}, {"ne": "केही दिनपछि जङ्गलमा शिकारीहरू आए। उनीहरूले बलियो डोरीको जाल थापेर सिंहलाई समाते। सिंह जालबाट उम्किन सकेन र छटपटाउँदै गर्जियो।", "rom": "kehi dinpachhi jangalmaa shikaariharu aae. uniharule baliyo doriko jaal thaapera singhalaai samaate. singha jaalbaata umkina sakena ra chhatpataaundai garjiyo.", "en": "A few days later, hunters came into the forest. They set a strong rope net and trapped the lion. Tangled in the ropes, the lion could not break free and roared for help.", "pic": "pandu-oops", "art": "tale-lion-5"}, {"ne": "सिंहको गर्जन सुनेर सानो मुसो कुद्दै आयो। उसले भन्यो—‘महाराज नडराउनुहोस्, म छु!’ मुसाले आफ्ना तिखा दाँतले डोरीलाई कुटु-कुटु टोक्न थाल्यो।", "rom": "singhako garjan sunera saano muso kuddai aayo. usle bhanyo—‘mahaaraaj nadaraaunuhos, ma chhu!’ musaale aaphnaa tikhaa daantle dorilaai kutu-kutu tokna thaalyo.", "en": "Hearing the lion’s cries, the little mouse rushed over. He said, “Do not fear, Your Majesty, I am here!” With his sharp teeth, the mouse gnawed the ropes: kutu-kutu!", "pic": "pandu-think", "spot": {"ne": "कुटु-कुटु", "en": "the mouse gnaws the rope: kutu-kutu!", "x": 64, "y": 60, "r": 8}, "art": "tale-lion-6"}, {"ne": "केही बेरमै जाल चुँडियो र सिंह बाहिर निस्कियो! सिंहले कृतज्ञ हुँदै भन्यो—‘स्याबास सानो साथी! आज तिम्रो बुद्धिले मेरो ज्यान बच्यो।’ त्यस दिनदेखि ठूलो सिंह र सानो मुसो असल साथी बने।", "rom": "kehi bermai jaal chundiyo ra singha baahira niskiyo! singhale kritagya hundai bhanyo—‘syaabaas saano saathi! aaja timro buddhile mero jyaan bachyo.’ tyas dindekhi thulo singha ra saano muso asal saathi bane.", "en": "In moments, the ropes snapped and the lion stepped free! Grateful, the lion said, “Well done, little friend! Today your wit saved my life.” From that day on, the big lion and the little mouse were true friends.", "pic": "pandu-cheer", "art": "tale-lion-7"}], "quiz": {"ne": "मुसाले सिंहलाई कसरी बचायो?", "rom": "musaale singhalaai kasari bachaayo?", "en": "How did the mouse save the lion?", "answer": {"ne": "जालको डोरी टोकेर", "rom": "jaalko dori tokera", "en": "by gnawing the net's rope"}, "wrong": [{"ne": "शिकारीलाई लखेटेर", "rom": "shikaarilaai lakhetera", "en": "by chasing away the hunters"}]}, "art": "tale-lion-1"},
];

/* Let's count (गन्ती गरौँ): tap each thing to count it aloud, then pick the number. */
window.COUNT_TITLE = { ne: "गन्ती गरौँ", rom: "ganti garaun", en: "Let's count" };
window.COUNT_ASK = { ne: "कति वटा छन्? गन्ती गरौँ!", rom: "kati wataa chhan? ganti garaun!", en: "How many are there? Let's count!" };
window.COUNT_THINGS = [
  { ne: "स्याउ", en: "apples", img: "w-apple" }, { ne: "सेल रोटी", en: "sel rotis", img: "w-sel-roti" }, { ne: "दियो", en: "oil lamps", img: "w-oil-lamp" },
  { ne: "मोमो", en: "momos", img: "w-momo" }, { ne: "केरा", en: "bananas", img: "w-banana" }, { ne: "चङ्गा", en: "kites", img: "w-kite" }, { ne: "फूल", en: "flowers", img: "w-flower" },
];
/* Everyday phrases for grown-ups who are still learning to say them (all already recorded in the lessons). */
window.PARENT_PHRASES = ["खाना खानुभयो?", "भोक लाग्यो", "मिठो छ", "पुग्यो", "अझै अलिकति", "अघाएँ", "हात धोऊ", "दाँत माझ", "जुत्ता लाऊ", "यता आऊ", "उठ", "सुत",
  "धन्यवाद", "कृपया", "माफ गर्नुहोस्", "ठिक छ", "आउनुहोस्", "बस्नुहोस्", "माया गर्छु", "शुभ बिहानी!", "शुभ रात्रि"];

/* Explore the room: tap things in a big picture. Hotspots (x, y, r in % of the picture) are set once the picture exists. */
window.SCENES = {
  "living-room": { title: "बैठक कोठा", rom: "baithak kothaa", en: "Living room", img: "scene-living-room", unlock: "w-living-room", spots: [
    { ne: "झ्याल", en: "window", x: 48, y: 36, r: 8 }, { ne: "सोफा", en: "sofa", x: 61, y: 58, r: 9 }, { ne: "गलैंचा", en: "rug", x: 31, y: 90, r: 5 },
    { ne: "चिया", en: "milk tea", x: 72, y: 71, r: 5 }, { ne: "बिरालो", en: "cat", x: 48, y: 82, r: 6 }, { ne: "बत्ती", en: "light", x: 69, y: 20, r: 6 },
    { ne: "ढोका", en: "door", x: 6, y: 52, r: 6 }, { ne: "किताब", en: "books", x: 27, y: 60, r: 7 }, { ne: "घडी", en: "clock", x: 24, y: 23, r: 5 }, { ne: "टिभी", en: "TV", x: 93, y: 58, r: 6 } ] },
  "kitchen": { title: "भान्सा", rom: "bhaansaa", en: "Kitchen", img: "scene-kitchen", unlock: "w-kitchen", spots: [
    { ne: "लसुन", en: "garlic", x: 32, y: 15, r: 4 }, { ne: "मकै", en: "corn", x: 39, y: 15, r: 4 }, { ne: "खाना", en: "rice", x: 14, y: 61, r: 6 },
    { ne: "गिलास", en: "glass", x: 12, y: 83, r: 5 }, { ne: "चम्चा", en: "spoon", x: 18, y: 89, r: 4 }, { ne: "आलु", en: "potatoes", x: 71, y: 73, r: 7 },
    { ne: "स्याउ", en: "apples", x: 84, y: 88, r: 4 }, { ne: "केरा", en: "bananas", x: 91, y: 85, r: 4 }, { ne: "झ्याल", en: "window", x: 60, y: 30, r: 8 }, { ne: "ढोका", en: "door", x: 89, y: 47, r: 7 }, { ne: "थाल", en: "plates", x: 15, y: 33, r: 6 }, { ne: "करुवा", en: "water jug", x: 57, y: 54, r: 5 },
    { ne: "चुलो", en: "stove", x: 35, y: 58, r: 4 }, { ne: "कुकर", en: "pressure cooker", x: 43, y: 50, r: 4 } ] },
  "village-kitchen": { title: "हाम्रो भान्सा", rom: "haamro bhaansaa", en: "Village kitchen", img: "scene-village-kitchen", unlock: "w-kitchen", spots: [
    { ne: "चुलो", en: "stove", x: 27, y: 64, r: 6 }, { ne: "कराही", en: "wok", x: 23, y: 46, r: 6 }, { ne: "डाडु", en: "ladle", x: 24.5, y: 30, r: 4 },
    { ne: "पुन्यु", en: "flat rice spatula", x: 33.5, y: 28, r: 4 }, { ne: "सिलौटो", en: "grinding stone", x: 25, y: 86, r: 6 }, { ne: "लोहोरो", en: "grinding pestle", x: 19, y: 79, r: 4 },
    { ne: "करुवा", en: "water jug", x: 82, y: 60, r: 5.5 }, { ne: "अम्खोरा", en: "brass tumbler", x: 90, y: 69, r: 4 }, { ne: "थाली", en: "plate", x: 47, y: 52, r: 6 },
    { ne: "गिलास", en: "glass", x: 58, y: 55, r: 3 }, { ne: "चिया", en: "milk tea", x: 65, y: 56, r: 3.5 } ] },
};

/* Bikram Sambat months (approximate start day in the Gregorian calendar) and a seasonal line for Pandu's card. */
window.BS_MONTHS = [
  { ne: "वैशाख", rom: "baishaakh", start: [4, 14], line: "🌸 Nepali New Year season! Spring flowers everywhere." },
  { ne: "जेठ", rom: "jeth", start: [5, 15], line: "🥭 Hot sunny days. Mango (|आँप|) season is coming!" },
  { ne: "असार", rom: "asaar", start: [6, 15], line: "🌧️ Monsoon rain (|झमझम|) and rice planting in green fields." },
  { ne: "साउन", rom: "saaun", start: [7, 17], line: "🐸 Green monsoon days. The frogs are singing!" },
  { ne: "भदौ", rom: "bhadau", start: [8, 17], line: "⛅ Late monsoon clouds over the hills." },
  { ne: "असोज", rom: "asoj", start: [9, 17], line: "🪁 Clear blue autumn skies: kite (|चङ्गा|) season!" },
  { ne: "कात्तिक", rom: "kaattik", start: [10, 18], line: "🌼 Marigolds bloom and diyo lamps glow." },
  { ne: "मंसिर", rom: "mansir", start: [11, 17], line: "🌾 Golden rice harvest in the villages." },
  { ne: "पुस", rom: "pus", start: [12, 16], line: "🧣 Cold winter mornings. Time for warm |चिया|!" },
  { ne: "माघ", rom: "maagh", start: [1, 15], line: "❄️ Snow on the Himalayas. Stay cosy!" },
  { ne: "फागुन", rom: "phaagun", start: [2, 13], line: "🌺 Rhododendrons (लालीगुराँस) bloom in the hills." },
  { ne: "चैत", rom: "chait", start: [3, 15], line: "💨 Windy spring days before the New Year." },
];
/* Traditional story opening and closing */
window.STORY_OPEN = { ne: "एकादेशमा...", rom: "ekaadeshmaa...", en: "Once upon a time, in a faraway land..." };
window.STORY_CLOSE = { ne: "भन्नेलाई फूलको माला, सुन्नेलाई सुनको माला, यो कथा बैकुण्ठ जाला, फेरि भन्ने बेला खुरुखुरु आउला!", rom: "bhannelaai phoolko maalaa, sunnelaai sunko maalaa, yo kathaa baikuntha jaalaa, pheri bhanne belaa khurukhuru aaulaa!", en: "A flower garland for the teller, a gold garland for the listener! May this story go to heaven, and come running back the next time we tell it." };
/* Phrases a family member can record in their own voice (kept on this device only) */
window.FAMILY_PHRASES = ["नमस्ते!", "शुभ बिहानी!", "शुभ रात्रि!", "स्याबास!", "राम्रो!", "एकदम ठीक!", "फेरि प्रयास गरौँ!"];

/* === Mero Naam: common names in Devanagari (a grown-up can correct any spelling) === */
window.NAME_DICT = {
  "luke": "लुक", "luna": "लुना", "abi": "अबी", "leela": "लीला", "nova": "नोभा", "nehal": "नेहल",
  "aarav": "आरव", "aarya": "आर्या", "aayush": "आयुष", "aditya": "आदित्य", "ananya": "अनन्या",
  "anmol": "अनमोल", "arjun": "अर्जुन", "avani": "अवनी", "bibek": "विवेक", "binod": "बिनोद",
  "diya": "दिया", "eshan": "ईशान", "gaurav": "गौरव", "ishan": "ईशान", "kabir": "कबीर",
  "kavya": "काव्या", "kira": "किरा", "krishna": "कृष्ण", "maya": "माया", "milan": "मिलन",
  "nisha": "निशा", "prisha": "प्रिशा", "priya": "प्रिया", "rahul": "राहुल",
  "rehan": "रेहान", "riya": "रिया", "rohan": "रोहन", "rosy": "रोजी", "saanvi": "सान्वी",
  "samir": "समीर", "sara": "सारा", "shreya": "श्रेया", "siddharth": "सिद्धार्थ", "sita": "सीता",
  "soham": "सोहम", "suhana": "सुहाना", "tara": "तारा", "vihaan": "विहान", "zoya": "जोया",
  "noah": "नोआ", "sarah": "सारा", "max": "म्याक्स", "zara": "जारा", "emma": "एमा", "leo": "लियो", "ethan": "इथान", "isla": "आइला", "liam": "लियाम", "ava": "एभा", "mia": "मिया", "sophia": "सोफिया", "olivia": "ओलिभिया", "kiran": "किरण", "sanjay": "सञ्जय", "jack": "ज्याक", "ella": "एला", "lily": "लिली", "oliver": "ओलिभर", "james": "जेम्स", "grace": "ग्रेस"
};
window.toDevanagariName = function (raw) {
  const clean = String(raw || "").trim().toLowerCase();
  if (!clean) return "";
  if (window.NAME_DICT[clean]) return window.NAME_DICT[clean];
  if (/\s/.test(clean)) return String(raw).trim().split(/\s+/).map(w => window.toDevanagariName(w)).join(" ");   // each word of a full name on its own, so "Luke Smith" uses the dictionary for Luke
  if (/[ऀ-ॿ]/.test(clean)) return String(raw).trim();
  const cons = { ksh: "क्ष", gy: "ज्ञ", chh: "छ", sh: "श", th: "थ", dh: "ध", ph: "फ", bh: "भ", kh: "ख", gh: "घ", ch: "च", jh: "झ", tr: "त्र",
    k: "क", g: "ग", c: "क", j: "ज", t: "ट", d: "ड", n: "न", p: "प", f: "फ", b: "ब", m: "म", y: "य", r: "र", l: "ल", v: "भ", w: "व", s: "स", h: "ह", z: "ज", q: "क", x: "क्स" };
  const V = ["aa", "ee", "oo", "ai", "au", "a", "i", "u", "e", "o", "y"];
  const matra = { aa: "ा", ee: "ी", oo: "ू", ai: "ै", au: "ौ", a: "", i: "ि", u: "ु", e: "े", o: "ो", y: "ी" };
  const fullV = { aa: "आ", ee: "ई", oo: "ऊ", ai: "ऐ", au: "औ", a: "अ", i: "इ", u: "उ", e: "ए", o: "ओ", y: "ई" };
  let i = 0, out = "", prev = "";
  const word = clean.replace(/([aeiou])h\b/g, "$1");   // silent final h: Noah, Sarah
  const fin = j => j >= word.length || !/[a-z]/.test(word[j]);
  while (i < word.length) {
    const clean_ = word; if (!/[a-z]/.test(word[i])) { out += word[i] === " " ? " " : ""; prev = ""; i++; continue; }
    const vKey = V.slice(0, 10).find(v => word.startsWith(v, i));
    if (vKey) {
      if (vKey === "a" && /[iy]$/.test(prev)) out += fin(i + 1) ? "या" : "य";   // Mia → मिया, Olivia → ओलिभिया
      else out += fullV[vKey];
      prev = vKey; i += vKey.length; continue;
    }
    const cKey = Object.keys(cons).find(c => word.startsWith(c, i));
    if (!cKey) { i++; continue; }
    i += cKey.length;
    const end = fin(i);
    const mKey = V.find(v => word.startsWith(v, i) && (v !== "y" || fin(i + 1)));
    if (mKey) { const m = mKey === "a" && fin(i + 1) && out ? "ा" : matra[mKey]; out += cons[cKey] + m; prev = mKey; i += mKey.length; }   // final a is long: Ava → आभा-like
    else { out += cons[cKey] + (end ? "" : "्"); prev = ""; }
  }
  return out || String(raw);
};

/* === Madal rhythms and the village sound map (all words already recorded) === */
window.MADAL_RHYTHMS = [
  { name: "झ्याउरे · Jhyaure", desc: "Hill folk dance beat: dhin, na, dhin, dhin, na", pattern: [1, 0, 1, 1, 0], tempo: 240 },
  { name: "ख्याली · Khyali", desc: "Festive song beat: dhin, dhin, na, na", pattern: [1, 1, 0, 0], tempo: 220 },
  { name: "सोरठी · Sorathi", desc: "Slow storytelling beat: dhin, na, dhin", pattern: [1, 0, 1], tempo: 320 }
];
window.GAUN_SOUNDS = [
  { ne: "मन्दिर", rom: "mandir", en: "temple bell", art: "w-temple", sfx: "bell", line: "🔔 Ting-ting! The temple bell in the morning." },
  { ne: "चिया", rom: "chiyaa", en: "hot milk tea", art: "w-milk-tea", sfx: "pour", line: "☕ Pouring hot chiya into a glass." },
  { ne: "नदी", rom: "nadi", en: "mountain river", art: "w-river", sfx: "river", line: "🏞️ The river flows: kal-kal-kal." },
  { ne: "चरा", rom: "charaa", en: "morning bird", art: "w-bird", sfx: "bird", line: "🐦 Chirbir chirbir! The birds wake up." },
  { ne: "पानी पर्‍यो", rom: "paani paryo", en: "monsoon rain", art: "w-it-is-raining", sfx: "rain", line: "🌧️ Jhamjham! The monsoon rain." },
  { ne: "दियो", rom: "diyo", en: "evening diyo", art: "w-oil-lamp", sfx: "bowl", line: "🪔 Light the diyo in the evening." }
];

/* === Tika and blessing === */
window.TIKA_BLESSING = { ne: "ज्ञानी बन्नू, सधैँ खुसी रहनू!", rom: "gyaani bannu, sadhain khusi rahanu!", en: "Grow up wise, and always stay happy!" };

/* === Family story jar: the child asks, the grown-up tells a story === */
window.DINNER_JAR = [
  { topic: "🪁 Childhood games", ne: "बाबा, आमा, तपाईं सानो हुँदा कुन खेल खेल्नुहुन्थ्यो?", rom: "baabaa, aamaa, tapaain saano hundaa kun khel khelnuhunthyo?", en: "Dad, Mom, what games did you play when you were little?",
    tip: "Tell your child for a minute about chungi, marbles (गुच्चा) or flying kites (चङ्गा) when you were their age.", word: ["चङ्गा", "changa", "kite"] },
  { topic: "🥟 Favourite treat", ne: "तपाईंलाई सानो हुँदा के खान मन पर्थ्यो?", rom: "tapaainlaai saano hundaa ke khaana man parthyo?", en: "What did you love to eat when you were little?",
    tip: "Share a memory of hot momo, sel roti or Hajuraama's dal bhat.", word: ["मोमो", "momo", "momo"] },
  { topic: "🏫 Going to school", ne: "तपाईंको स्कूल र साथी कस्ता थिए?", rom: "tapaainko skool ra saathi kastaa thie?", en: "What were your school and friends like?",
    tip: "Tell them how you walked to school, and about your best friend (साथी).", word: ["साथी", "saathi", "friend"] },
  { topic: "🪔 Festival memories", ne: "दशैँ र तिहारमा तपाईं के गर्नुहुन्थ्यो?", rom: "dashain ra tihaarmaa tapaain ke garnuhunthyo?", en: "What did you do at Dashain and Tihar?",
    tip: "Talk about tika (टीका) from elders, lighting diyo lamps and flower garlands.", word: ["टीका", "tikaa", "tika"] }
];
