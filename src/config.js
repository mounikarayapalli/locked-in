// ============================================================
//  CONFIG: ALL PERSONALIZATION DATA
// ============================================================

const files = import.meta.glob('./assets/*.{jpg,jpeg,png,webp,mp4,webm,mov,mp3,m4a,wav}', {
  eager: true, query: '?url', import: 'default',
})
const find = (name) => {
  const key = Object.keys(files).find((p) => p.split('/').pop().replace(/\.[^.]+$/, '') === name)
  return key ? files[key] : null
}
const placeholder = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500"><rect width="400" height="500" fill="#f8d7dc"/><path d="M200 330C120 270 100 220 100 190a50 50 0 0 1 100-10 50 50 0 0 1 100 10c0 30-20 80-100 140z" fill="#c2132f" opacity=".85"/><text x="200" y="420" font-family="sans-serif" font-size="20" text-anchor="middle" fill="#8b0a1f">Add your photo in src/assets</text></svg>`)

export const img = (name) => find(name) || placeholder
export const media = (name) => find(name)

export const CONFIG = {
  name: 'Nanaa',
  password: '2413',

  hero: {
    image: 'hero', // src/assets/hero.jpeg (lady holding baby)
    title: 'Happiest Birthday to my Little kid ❤️',
    subtitle: 'Today is all about you... the most hardworking, kind-hearted man who made my entire world brighter just by being in it.',
    button: 'Open My Heart ❤️',
  },

  counterStartDate: '2022-11-01',

  journey: [
    {
      badge: 'Chapter 1',
      icon: '✨',
      title: 'When Our Paths Crossed',
      description: 'Two separate worlds collided, and before I even knew it, you became the person I looked forward to talking to every single second.'
    },
    {
      badge: 'Chapter 2',
      icon: '🤍',
      title: 'Finding My Safe Haven in You',
      description: 'Your calm voice and gentle reassurance quickly became the only medicine I needed after exhausting days. I realized you are my peace.'
    },
    {
      badge: 'Chapter 3',
      icon: '💪',
      title: 'Standing by My Hardworking Man',
      description: 'Watching you work so hard, never complaining, and giving your all for our future. Seeing your relentless dedication made me fall ten times harder for you.'
    },
    {
      badge: 'Chapter 4',
      icon: '🌸',
      title: 'A Thousand Little Moments',
      description: 'Every quiet ride, every shared laugh, every goofy selfie, and every time you quietly held my hand when things felt heavy.'
    },
    {
      badge: 'Chapter 5',
      icon: '🎂',
      title: 'Celebrating You Today & Forever',
      description: 'Another year of your precious life. You deserve every ounce of happiness, health, and success. I promise to always stand right by your side.'
    }
  ],

  loveReasons: [
    "How you always check on me and ask if I have eaten, even when you are having the busiest, most tiring day.",
    "The way you work so tirelessly and honestly for our future. You inspire me and make me so proud every day.",
    "Your patient and gentle voice that immediately calms my racing thoughts whenever I feel anxious.",
    "How you never hold grudges and always treat me with utmost tenderness, even when I am moody or stubborn.",
    "The pure, selfless heart you have — you care for everyone around you without expecting anything in return.",
    "The adorable way your eyes smile whenever you laugh at my silly jokes. It is my favorite view in the world.",
    "How safe and completely protected I feel the exact second your fingers interlock with mine.",
    "The quiet sacrifices you make without ever showing off. You are truly a real, genuine man.",
    "How you listen to every single word I say, even the random silly stories, as if they are the most important news.",
    "Because you love me simply as I am, making me feel like the most cherished girl alive.",
    "The humble, honest, and truly good-hearted soul you carry in everything you do.",
    "Simply because you are YOU — my hardest worker, my biggest comfort, and the love of my life."
  ],

  memoriesTitle: 'Our Little Memories',
  memories: [
    { image: 'memory1', caption: 'When your gentle hands touch my cheek, the entire world goes quiet. ❤️', note: 'In your gentle touch, I found a peace and safety I had searched for my whole life.' },
    { image: 'memory2', caption: 'My favorite partner-in-crime! You make laughing so easy. 🥰', note: 'Whenever I am with you, my smile is 100% genuine. You make every ordinary second magical.' },
    { image: 'memory3', caption: 'Right here on your shoulder is my safest place in the universe. 🌸', note: 'No matter how chaotic the world gets, leaning against your shoulder makes everything feel right.' },
    { image: 'memory4', caption: 'Every second wrapped up close to you feels like a wish granted. ✨', note: 'Being close to your heart is home. You make me feel so cherished and protected.' },
    { image: 'memory5', caption: 'Through every high and low, you are always my one reason to smile. 💫', note: 'You never let me face difficulties alone. Having you by my side gives me infinite strength.' },
    { image: 'memory6', caption: 'Wrapped in golden sunshine, blossoms, and endless love. 🌺', note: 'One of the prettiest days with the most handsome man. I wish we could freeze this moment forever.' },
    { image: 'memory7', caption: 'Holding on tight to your arm... in this life and the next, I am never letting you go. 💖', note: 'My hand finds yours naturally. Wherever life leads us, I will always be right beside you.' },
    { image: 'memory8', caption: 'Every look from your eyes reminds me how deeply I am loved. 🤍', note: 'The way you look at me with so much care and respect... that is the greatest gift any girl could ask for.' },
    { image: 'memory9', caption: 'You and me against the whole world, always and forever. 🌟', note: 'Two stubborn hearts, but completely crazy about each other. Thank you for always choosing me.' },
    { image: 'memory10', caption: 'The warmth of your smile can cure any bad day. ☀️', note: 'Even when you are exhausted from working, you still smile just to cheer me up. How did I get so lucky?' },
    { image: 'memory11', caption: 'My forever favorite adventure partner. 🚗', note: 'The destination never matters as long as you are the one sitting next to me.' },
    { image: 'memory12', caption: 'Little quiet moments that mean everything to my soul. 🍃', note: 'It is the quiet, unspoken moments between us that I hold closest to my heart.' },
    { image: 'memory13', caption: 'You make everyday life feel like a romantic movie. 🎬', note: 'With you, even waiting around or running simple errands feels like an adventure full of smiles.' },
    { image: 'memory14', caption: 'I could get lost in this sweet moment forever. 💫', note: 'I look at this picture and remember how my heart fluttered. I still get butterflies every time I see you.' },
    { image: 'memory15', caption: 'The proudest girl in the world to call you mine. 👑', note: 'I watch how hard you work and how kind you remain to everyone. You are a king in every way.' },
    { image: 'memory16', caption: 'Your warm embrace is my favorite comfort zone. 🧸', note: 'On chilly days or heavy evenings, being in your embrace is the only medicine I need.' },
    { image: 'memory17', caption: 'A thousand reasons to love you, and this face is one of them. 🌷', note: 'Look at that handsome smile! You are truly beautiful inside and out, my love.' },
    { image: 'memory18', caption: 'Laughing until our stomachs hurt together. 😂', note: 'Nobody understands my silliness like you do. Thank you for laughing with me, always!' },
    { image: 'memory19', caption: 'Just two souls meant to find and heal each other. 🔗', note: 'I do not believe in coincidences anymore. Our story was written so we could love and grow together.' },
    { image: 'memory20', caption: 'Standing tall, hand in hand, through whatever comes. 👣', note: 'Whatever storms come our way, we will walk through them together, never letting go.' },
    { image: 'memory21', caption: 'My sweet comfort, my safe harbor. ⚓', note: 'When the world gets too noisy, coming to you feels like arriving safely back home.' },
    { image: 'memory22', caption: 'Treasuring every heartbeat next to yours. 💓', note: 'Listening to your heartbeat is my favorite lullaby. You make everything peaceful.' },
    { image: 'memory23', caption: 'My hero, my best friend, my whole world. 🌍', note: 'Before you were my partner, you were my best friend. That friendship will keep us strong forever.' },
    { image: 'memory24', caption: 'Sweet simplicity and endless tenderness. 🍯', note: 'No pretending — just pure, honest love between two deeply grateful hearts.' },
    { image: 'memory25', caption: 'Thank you for giving me a million reasons to be happy. 🌈', note: 'You brought colors into my world that I never knew existed. Happy birthday, my angel.' },
    { image: 'memory26', caption: 'Forever your girl, in this lifetime and the next. ♾️', note: 'If I had to choose all over again, I would choose you in every lifetime without a second thought.' },
  ],

  videosTitle: 'Moments I Wish I Could Replay Forever',
  videos: [
    { 
      file: 'video1', 
      thumbnail: 'video1-thumb',
      title: 'To My Hardworking Man',
      caption: 'To my hardworking man — watching your dedication and pure heart inspires me every single day. I am so endlessly proud of you! ❤️',
      downloadName: 'To-My-Hardworking-Man'
    },
    { 
      file: 'video2', 
      thumbnail: 'video2-thumb',
      title: 'Our Special Moments',
      caption: 'Little moments like this with you are my whole heart... I could replay them forever and ever. ❤️',
      downloadName: 'Our-Special-Moments'
    },
  ],

  letter: {
    button: 'Read the little letter I wrote for you 💌',
    greeting: 'To my MAN,',
    paragraphs: [
      'Happy birthday, my love. I wanted to write this myself, because some things are better said from the heart than said out loud.',
      'Thank you for being you. You are kind, you are caring, and you always make me feel safe. Even on your tired days, you still think about me and make time for me. I notice all of it, and it means more to me than you know.',
      'I also see how hard you try. Life is not always easy, and some days it feels heavy, but you never stop trying. I am so proud of you. Please remember, you do not have to be perfect for me. I love you just as you are.',
      'You make me laugh, you make me feel understood, and you make every day better just by being in it. I am really, really happy that you are mine.',
      'I hope this year gives you everything you deserve. And whatever comes, I will be right here, holding your hand.',
    ],
    signoff: 'Forever your girl ❤️',
  },

  final: {
    message: 'If I could choose one person to love in every lifetime, I would still choose you. Happy Birthday, Nanaa. ❤️',
    button: 'One More Hug? ❤️',
    hugMessage: 'Sending you the biggest hug from your girl ❤️',
  },

  music: { 
    file: 'music',
    title: 'Rathinamo (Female Version)',
    artist: 'Tanisha Gnanavel & Saurav Srisan'
  },
}
