/* ================================================================
   ANIMAL COMMUNICATOR — script.js
   ================================================================ */


/* ================================================================
   1. ANIMAL DATA
   ================================================================ */

const ANIMALS = {

  dog: {
    name: "ദാമു",
    emoji: "🐶",
    pitch: 220,
    sounds: [
      { text: "wwooo..wo..wo..wooo", sound: "sounds/dog/wwooo.mp3" },
      { text: "BOW BOW!", sound: "sounds/dog/bow.mp3" },
      { text: "AWOOOO!", sound: "sounds/dog/awoooo.mp3" },
      { text: "GRRR... GRR!", sound: "sounds/dog/grr.mp3" }
    ]
  },

  cat: {
    name: "കല്ലു",
    emoji: "🐱",
    pitch: 500,
    sounds: [
      { text: "MEOW.", sound: "sounds/cat/meow.mp3" },
      { text: "MRRRAOW!", sound: "sounds/cat/mrraow.mp3" },
      { text: "MEW?", sound: "sounds/cat/mew.mp3" }
    ]
  },

  cow: {
    name: "അമ്മണി",
    emoji: "🐮",
    pitch: 130,
    sounds: [
      { text: "MOOOO.", sound: "sounds/cow/moo.mp3" },
      { text: "MOOOOOO!", sound: "sounds/cow/moooo.mp3" },
      { text: "HAMMEEEEE!!!", sound: "sounds/cow/hammee.mp3" }
    ]
  },

  chicken: {
    name: "ചിക്കു",
    emoji: "🐔",
    pitch: 600,
    sounds: [
      { text: "BAWK BAWK BAWK BWAK BWAH!", sound: "sounds/chicken/bawk.mp3" },
      { text: "buk buk buk buk buk buk BAWK!", sound: "sounds/chicken/buk.mp3" },
      { text: "BAA BAWKK!", sound: "sounds/chicken/baaawk.mp3" }
    ]
  },

  crow: {
    name: "കുറുമ്പി",
    emoji: "🐦‍⬛",
    pitch: 700,
    sounds: [
      { text: "CAW! CAW!", sound: "sounds/crow/caw caw.mp3" },
      { text: "kaaaw...", sound: "sounds/crow/kaw.mp3" },
      { text: "CRAW CRAW CRAW!", sound: "sounds/crow/craw craw.mp3" }
    ]
  },

  parrot: {
    name: "പാപ്പി",
    emoji: "🦜",
    pitch: 650,
    sounds: [
      { text: "SQUAWK!", sound: "sounds/parrot/squawk.mp3" },
      { text: "SQUAWK SQUAWK SQUAWK SQUAWK!", sound: "sounds/parrot/squawk squawk.mp3" },
      { text: "raaawk raawk raawk!", sound: "sounds/parrot/rawk.mp3" }
    ]
  },

  horse: {
    name: "സുൽത്താൻ",
    emoji: "🐴",
    pitch: 200,
    sounds: [
      { text: "NEIGHHH!", sound: "sounds/horse/neighhh.mp3" },
      { text: "HRMPH!", sound: "sounds/horse/hrmph.mp3" },
      { text: "neeiighh...", sound: "sounds/horse/neeiighh.mp3" }
    ]
  },

  hyena: {
    name: "സുബ്രു",
    emoji: "🐺",
    pitch: 300,
    sounds: [
      { text: "HAHAHAHA!", sound: "sounds/hyena/laugh.mp3" },
      { text: "Hihihihihihihihi!", sound: "sounds/hyena/yip.mp3" },
      { text: "HOOOHIIHIHIII!", sound: "sounds/hyena/o.mp3" },
      { text: "WHUUUWHUUWHU!", sound: "sounds/hyena/whoop.mp3" }
    ]
  },

  sheep: {
    name: "അപ്പു",
    emoji: "🐑",
    pitch: 350,
    sounds: [
      { text: "BEEEEEHHH", sound: "sounds/sheep/baaa.mp3" },
      { text: "meeh meeh meeh!", sound: "sounds/sheep/ma.mp3" },
      { text: "MAAAAAAH?", sound: "sounds/sheep/Maah.mp3" },
      { text: "meeeh...", sound: "sounds/sheep/meeeh.mp3" }
    ]
  },

  pig: {
    name: "ഗിരി",
    emoji: "🐷",
    pitch: 300,
    sounds: [
      { text: "OINK OINK!", sound: "sounds/pig/oink oink.mp3" },
      { text: "SNORT!", sound: "sounds/pig/snort.mp3" },
      { text: "oink?", sound: "sounds/pig/oink.mp3" },
      { text: "OIIINK!", sound: "sounds/pig/oiiink.mp3" }
    ]
  },

  lion: {
    name: "സിംബ",
    emoji: "🦁",
    pitch: 90,
    sounds: [
      { text: "ROOOAR!", sound: "sounds/lion/roaar.mp3" },
      { text: "GRRR GRRR.", sound: "sounds/lion/grr.mp3" },
      { text: "*low growl*", sound: "sounds/lion/low growl.mp3" },
      { text: "ROAR!", sound: "sounds/lion/roar.mp3" }
    ]
  },

  tiger: {
    name: "മാരി",
    emoji: "🐯",
    pitch: 100,
    sounds: [
      { text: "GRRROWL!", sound: "sounds/tiger/grrowl.mp3" },
      { text: "ROAAAR!", sound: "sounds/tiger/rooar.mp3" }
    ]
  },

  monkey: {
    name: "ഗംഗദരൻ",
    emoji: "🐒",
    pitch: 350,
    sounds: [
      { text: "OOH OOH AAH AAH!", sound: "sounds/monkey/oohah.mp3" },
      { text: "Eek eek eek!", sound: "sounds/monkey/eek.mp3" },
      { text: "OOO OOO OOO!", sound: "sounds/monkey/ooooo.mp3" },
      { text: "AH AH AH!", sound: "sounds/monkey/ahah.mp3" }
    ]
  },

  elephant: {
    name: "കുട്ടികൃഷ്ണൻ",
    emoji: "🐘",
    pitch: 70,
    sounds: [
      { text: "PAWOOOO!", sound: "sounds/elephant/pawoo.mp3" },
      { text: "*trumpet blast*", sound: "sounds/elephant/trumpet.mp3" }
    ]
  },

  frog: {
    name: "ശശി",
    emoji: "🐸",
    pitch: 400,
    sounds: [
      { text: "RIBBIT!", sound: "sounds/frog/ribbit.mp3" },
      { text: "croak croak.", sound: "sounds/frog/croak.mp3" }
    ]
  },

  duck: {
    name: "ഗൗരി",
    emoji: "🦆",
    pitch: 450,
    sounds: [
      { text: "QUACK!", sound: "sounds/duck/quack.mp3" },
      { text: "QUACK QUACK QUACK?", sound: "sounds/duck/quack quack quack.mp3" }
    ]
  },

  owl: {
    name: "ഭാഗ്യ",
    emoji: "🦉",
    pitch: 250,
    sounds: [
      { text: "HOOO HOOO.", sound: "sounds/owl/hoot.mp3" },
      { text: "hoot hoot!", sound: "sounds/owl/hoot hoot.mp3" }
    ]
  }

};


/* ================================================================
   2. MOODS
   ================================================================ */

const MOODS = [
  { label: "Happy", emoji: "😄" },
  { label: "Hungry", emoji: "🍖" },
  { label: "Sleepy", emoji: "😴" },
  { label: "Confused", emoji: "🤨" },
  { label: "Angry", emoji: "😤" },
  { label: "Completely Uninterested", emoji: "😐" }
];


/* ================================================================
   3. CURRENT ANIMAL
   ================================================================ */

let currentAnimalKey = null;


/* ================================================================
   4. GET HTML ELEMENTS
   ================================================================ */

const animalGrid = document.getElementById("animal-grid");
const pickScreen = document.getElementById("pick-screen");
const chatScreen = document.getElementById("chat-screen");
const backBtn = document.getElementById("back-btn");

const currentEmojiEl = document.getElementById("current-emoji");
const currentNameEl = document.getElementById("current-name");
const currentMoodEl = document.getElementById("current-mood");

const conversationEl = document.getElementById("conversation");
const thinkingEl = document.getElementById("thinking");
const thinkingEmojiEl = document.getElementById("thinking-emoji");

const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");
const micBtn = document.getElementById("mic-btn");
const micStatus = document.getElementById("mic-status");


/* ================================================================
   5. BUILD ANIMAL BUTTONS
   ================================================================ */

function buildAnimalGrid() {

  if (!animalGrid) return;

  animalGrid.innerHTML = "";

  Object.keys(ANIMALS).forEach((key) => {

    const animal = ANIMALS[key];

    const btn = document.createElement("button");

    btn.className = "animal-btn";
    btn.dataset.animal = key;

    btn.innerHTML = `
      <span class="emoji">${animal.emoji}</span>
      <span>${animal.name}</span>
    `;

    btn.addEventListener("click", () => {
      selectAnimal(key);
    });

    animalGrid.appendChild(btn);

  });

}


/* ================================================================
   6. SELECT ANIMAL
   ================================================================ */

function selectAnimal(key) {

  if (!ANIMALS[key]) return;

  currentAnimalKey = key;

  const animal = ANIMALS[key];

  currentEmojiEl.textContent = animal.emoji;
  currentNameEl.textContent = animal.name;
  thinkingEmojiEl.textContent = animal.emoji;

  setRandomMood();

  conversationEl.innerHTML = "";
  messageInput.value = "";
  micStatus.textContent = "";

  pickScreen.classList.add("hidden");
  chatScreen.classList.remove("hidden");

  messageInput.focus();

}


/* ================================================================
   7. RANDOM MOOD
   ================================================================ */

function setRandomMood() {

  const mood =
    MOODS[Math.floor(Math.random() * MOODS.length)];

  currentMoodEl.textContent =
    `${mood.emoji} ${mood.label}`;

}


/* ================================================================
   8. BACK BUTTON
   ================================================================ */

backBtn.addEventListener("click", () => {

  chatScreen.classList.add("hidden");
  pickScreen.classList.remove("hidden");

  currentAnimalKey = null;

});


/* ================================================================
   9. ADD CHAT BUBBLE
   ================================================================ */

function addBubble(sender, text) {

  const bubble = document.createElement("div");

  bubble.className =
    `bubble ${sender === "user" ? "user" : "animal"}`;

  if (sender !== "user") {

    const who = document.createElement("span");

    who.className = "who";

    who.textContent =
      `${ANIMALS[currentAnimalKey].emoji} ${ANIMALS[currentAnimalKey].name}`;

    bubble.appendChild(who);

  }

  const body = document.createElement("span");

  body.textContent = text;

  bubble.appendChild(body);

  conversationEl.appendChild(bubble);

  conversationEl.scrollTop =
    conversationEl.scrollHeight;

}


/* ================================================================
   10. PICK RANDOM ANIMAL RESPONSE
   THIS WAS MISSING FROM YOUR CODE
   ================================================================ */

function randomAnimalSound(animalKey) {

  const animal = ANIMALS[animalKey];

  if (!animal || !animal.sounds || animal.sounds.length === 0) {

    return {
      text: "...",
      sound: null
    };

  }

  const randomIndex =
    Math.floor(Math.random() * animal.sounds.length);

  return animal.sounds[randomIndex];

}


/* ================================================================
   11. PLAY REAL ANIMAL SOUND
   ================================================================ */

function playAnimalSound(soundPath, fallbackPitch) {

  if (!soundPath) {

    playSynthBlip(fallbackPitch);

    return;

  }

  console.log("Trying to play:", soundPath);

  const audio = new Audio();

  audio.preload = "auto";

  audio.src = soundPath;

  audio.volume = 1.0;

  audio.addEventListener("canplaythrough", () => {

    audio.play()
      .then(() => {

        console.log("Animal sound playing:", soundPath);

      })
      .catch((error) => {

        console.error(
          "Browser blocked audio:",
          error
        );

        playSynthBlip(fallbackPitch);

      });

  }, { once: true });

  audio.addEventListener("error", () => {

    console.error(
      "Animal sound file could not be found:",
      soundPath
    );

    console.error(
      "Check that the MP3 exists at exactly this location."
    );

    playSynthBlip(fallbackPitch);

  }, { once: true });

  audio.load();

}


/* ================================================================
   12. SYNTH FALLBACK
   Plays a small sound if the MP3 cannot be loaded.
   ================================================================ */

let audioCtx = null;

function playSynthBlip(basePitch) {

  try {

    if (!audioCtx) {

      const AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;

      if (!AudioContext) return;

      audioCtx = new AudioContext();

    }

    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    const notes = [
      basePitch,
      basePitch * 1.15
    ];

    notes.forEach((freq, i) => {

      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.value = freq;

      const start = now + i * 0.12;

      gain.gain.setValueAtTime(
        0.0001,
        start
      );

      gain.gain.exponentialRampToValueAtTime(
        0.15,
        start + 0.02
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        start + 0.18
      );

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(start);
      osc.stop(start + 0.2);

    });

  } catch (error) {

    console.error(
      "Synth sound failed:",
      error
    );

  }

}


/* ================================================================
   13. SEND MESSAGE
   ================================================================ */

messageForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const text = messageInput.value.trim();

  if (!text || !currentAnimalKey) return;

  /* User message */
  addBubble("user", text);

  messageInput.value = "";

  messageInput.focus();

  /* Thinking animation */
  thinkingEl.classList.remove("hidden");

  const delay =
    600 + Math.random() * 700;

  setTimeout(() => {

    thinkingEl.classList.add("hidden");

    /* Get random response */
    const reply =
      randomAnimalSound(currentAnimalKey);

    /* Show animal response */
    addBubble(
      "animal",
      reply.text
    );

    /* Play EXACT sound connected to response */
    playAnimalSound(
      reply.sound,
      ANIMALS[currentAnimalKey].pitch
    );

    /* Sometimes change mood */
    if (Math.random() < 0.35) {
      setRandomMood();
    }

  }, delay);

});


/* ================================================================
   14. MICROPHONE INPUT
   ================================================================ */

const SpeechRecognition =
  window.SpeechRecognition ||
  window.webkitSpeechRecognition;

let recognition = null;
let isListening = false;

if (SpeechRecognition) {

  recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;


  recognition.addEventListener(
    "result",
    (event) => {

      const transcript =
        event.results[0][0].transcript;

      messageInput.value = transcript;

      micStatus.textContent =
        "Got it! Press Send (or edit first).";

    }
  );


  recognition.addEventListener(
    "end",
    () => {

      isListening = false;

      micBtn.classList.remove(
        "listening"
      );

    }
  );


  recognition.addEventListener(
    "error",
    (event) => {

      isListening = false;

      micBtn.classList.remove(
        "listening"
      );

      if (event.error === "not-allowed") {

        micStatus.textContent =
          "Microphone permission was blocked.";

      } else {

        micStatus.textContent =
          `Mic error: ${event.error}`;

      }

    }
  );


  micBtn.addEventListener(
    "click",
    () => {

      if (isListening) {

        recognition.stop();

        return;

      }

      isListening = true;

      micBtn.classList.add(
        "listening"
      );

      micStatus.textContent =
        "Listening...";

      recognition.start();

    }
  );

} else {

  micBtn.disabled = true;

  micBtn.title =
    "Speech recognition isn't supported in this browser";

  micStatus.textContent =
    "Tip: microphone input needs Chrome or Edge.";

}


/* ================================================================
   15. START APP
   ================================================================ */

buildAnimalGrid();

console.log(
  "🐾 Animal Communicator loaded successfully!"
);

