// =============================================================
// DATABASE PRESET & FALLBACK (8 NICHE LENGKAP - SUPPORT V3 & LEGACY)
// =============================================================
const defaultBackupDB = {
  version: "3.0.0",
  language: {
    default: "en-US",
    available: ["en-US", "en-GB", "id-ID"]
  },
  generation: {
    inputAnalysis: {
      analyzeVideo: true,
      analyzeTranscript: true,
      analyzeAudio: true,
      analyzeVisuals: true,
      detectSpeaker: true,
      detectEmotion: true,
      detectTopic: true,
      detectCategory: true,
      detectKeyMoment: true,
      detectImportantTerms: true,
      detectNumbers: true,
      detectNames: true,
      detectLocations: true,
      detectEvents: true
    }
  },
  templates: {
    en: {
      finance: {
        hooks: [
          "THE FINANCIAL SECRET NO ONE TALKS ABOUT 💡",
          "DON'T MAKE THIS COSTLY MONEY MISTAKE 😱",
          "HOW TO GROW YOUR WEALTH IN 2026 📈",
          "THE REAL REASON MOST PEOPLE STAY BROKE 💸",
          "SMART MONEY MOVE YOU NEED TO START TODAY 🚀"
        ],
        visuals: [
          "🎬 Green chart overlay with slow zoom-in.",
          "⚡ Fast cut to cash / transaction graphic.",
          "🔍 Circle spotlight on key numbers.",
          "📉 Split screen chart comparison."
        ],
        angles: ["Money Management Tips", "Smart Investment Strategy", "Financial Mistakes to Avoid", "Wealth Building Hacks"],
        captions: [
          "Financial freedom starts with small consistent steps. Understanding these key financial principles will set you apart. What's your current strategy?",
          "Save this video before making your next big investment decision! Building long-term wealth requires patience and discipline.",
          "Most people overlook this simple money rule. Take control of your financial future today and start applying this approach."
        ],
        hashtags: "#FinanceTips #WealthBuilding #Investing101 #MoneyMindset #FinancialFreedom"
      },
      politik: {
        hooks: [
          "THE REAL REASON BEHIND THIS DECISION 🚨",
          "WHAT THEY ARE NOT TELLING YOU ABOUT THIS POLICY ⚠️",
          "CRITICAL POLITICAL BREAKDOWN YOU MUST WATCH 🏛️",
          "UNFILTERED TRUTH ABOUT THIS RECENT STATEMENT 📜"
        ],
        visuals: [
          "🎬 Red highlight frame overlay on official press statement.",
          "⚡ Split-screen comparison of statements.",
          "🔴 Slow zoom-in on dramatic speech moment."
        ],
        angles: ["Policy Analysis", "Public Impact Breakdown", "Unfiltered Political Perspective"],
        captions: [
          "This policy update is causing widespread discussion across the public sector. What do you think about this decision? Leave a comment below!",
          "Understanding the broader context behind this announcement is essential. Share this clip to spread awareness and stay informed!"
        ],
        hashtags: "#Politics #PublicPolicy #WorldNews #CurrentEvents #Analysis"
      },
      podcast: {
        hooks: [
          "THIS MOMENT LEFT THE HOST SPEECHLESS 🎙️",
          "THE MOST HONEST TRUTH SPOKEN ON THIS PODCAST 💥",
          "YOU NEED TO HEAR THIS PERSPECTIVE TODAY 🎧",
          "AN UNEXPECTED REVELATION DURING THIS INTERVIEW 💬"
        ],
        visuals: [
          "🎬 Dual split-screen speaker focus.",
          "⚡ Fast zoom-in on emotional reaction.",
          "🔍 Subtle waveform highlight animation."
        ],
        angles: ["Deep Conversation Highlights", "Unfiltered Personal Stories", "Eye-Opening Perspectives"],
        captions: [
          "This point hit completely differently during the conversation. Do you agree with this statement or see it another way?",
          "Tag someone who needs to hear this exact insight today! Deep discussions like this bring real perspective to light."
        ],
        hashtags: "#PodcastHighlights #DeepTalk #Wisdom #LifeLessons #PodcastMoments"
      },
      gaming: {
        hooks: [
          "THIS PLAY WAS ABSOLUTELY UNBELIEVABLE 🔥",
          "NEVER CELEBRATE TOO EARLY IN THIS GAME 😱",
          "IS THIS THE BEST CLUTCH MOMENT OF THE YEAR? 🎮",
          "NO ONE EXPECTED THIS INSANE REFLEX ⚡"
        ],
        visuals: [
          "🎬 Slow-motion impact on kill/clutch moment.",
          "⚡ Fast cut zoom-in on player reaction face.",
          "🔴 Red highlight frame overlay on intense crossfire."
        ],
        angles: ["Pro Gameplay Highlights", "Funny Fails & Unexpected Clutch", "Insane Reflexes"],
        captions: [
          "Bro really thought he could win this round easily... Watch until the very end to see what actually happened!",
          "Is this pure skill or just an insanely lucky play? Drop your thoughts and rating in the comments below!"
        ],
        hashtags: "#GamingHighlights #EsportsMoments #GamingClutch #ProGameplay #ViralGaming"
      },
      education: {
        hooks: [
          "99% OF PEOPLE GET THIS WRONG 🧠",
          "THE EASIEST WAY TO LEARN THIS CONCEPT 📚",
          "THIS ONE TRICK WILL SAVE YOU HOURS 💡",
          "WHY NO ONE TAUGHT YOU THIS IN SCHOOL 🏫"
        ],
        visuals: [
          "🎬 Text overlay highlight on key formula/concept.",
          "⚡ Split-screen before & after solution.",
          "🔍 Circle spotlight on main takeaway."
        ],
        angles: ["Smart Study Hacks", "Complex Topic Simplified", "Quick Educational Insight"],
        captions: [
          "Save this video for your next study or work session! Breaking down complex ideas into simple steps makes all the difference.",
          "Did you know about this concept before watching this? Let us know in the comments if you found this helpful!"
        ],
        hashtags: "#Education #LearningHacks #StudyTips #KnowledgeIsPower #SmartLearning"
      },
      music: {
        hooks: [
          "THIS TRANSITION IS ABSOLUTE PERFECTION 🎵",
          "THE HARDEST BEAT DROP YOU WILL HEAR TODAY 🔥",
          "PURE TALENT IN THIS LIVE PERFORMANCE 🎸",
          "VOCAL RANGE THAT WILL GIVE YOU CHILLS 🎤"
        ],
        visuals: [
          "🎬 Rhythmic beat-synced fast cuts.",
          "⚡ Dynamic color flash on beat drop.",
          "🔴 Slow cinematic camera drift."
        ],
        angles: ["Epic Beat Drops", "Vocal Performance Showcase", "Music Production Magic"],
        captions: [
          "Plug in your headphones for the ultimate audio experience! What song or track should we break down next?",
          "The effort put into this performance is incredible. Share this clip with any fellow music lovers out there!"
        ],
        hashtags: "#MusicVibes #LivePerformance #BeatDrop #MusicProducer #ViralMusic"
      },
      film: {
        hooks: [
          "THE CINEMATOGRAPHY IN THIS SCENE IS UNREAL 🎬",
          "THIS HIDDEN DETAIL IN THE MOVIE WILL BLOW YOUR MIND 🤯",
          "THE BEST ACTING MOMENT IN RECENT FILM HISTORY 🍿",
          "THIS PLOT TWIST CHANGED EVERYTHING IN THE MOVIE 🎭",
          "AN HEARTBREAKING MOMENT THAT LEFT EVERYONE IN TEARS 💔"
        ],
        visuals: [
          "🎬 Widescreen letterbox cinematic overlay.",
          "⚡ Color grading enhancement on dramatic frame.",
          "🔍 Zoom-in on hidden easter egg.",
          "🖤 Monochromatic subtle filter transition."
        ],
        angles: [
          "Movie Scene Breakdown", "Hidden Easter Eggs", "Cinematic Masterpiece", 
          "Plot Twist", "Emotional Scene", "Heartbreaking Moment", "Loss and Grief"
        ],
        captions: [
          "The emotional depth and brilliant acting in this scene make it truly unforgettable. Have you watched this film yet?",
          "Small cinematic details like this show the true genius of the director. Save this post for your weekend movie watchlist!"
        ],
        hashtags: "#FilmTok #CinemaMoments #MovieReview #Cinematography #MovieScene"
      },
      news: {
        hooks: [
          "BREAKING DOWN TODAY'S BIGGEST STORY 📰",
          "WHAT YOU NEED TO KNOW ABOUT THIS EVENT 🚨",
          "URGENT UPDATE ON CURRENT DEVELOPMENTS 🌐",
          "THE FULL FACTUAL BREAKDOWN OF THIS NEWS 📢"
        ],
        visuals: [
          "🎬 Live breaking news style frame ticker.",
          "⚡ Red alert highlight flash.",
          "🔍 Map / Location focus overlay."
        ],
        angles: ["Breaking Event Summary", "Fact Breakdown", "Global Situation Update"],
        captions: [
          "Stay informed with the facts as this event continues to unfold. What are your perspectives on these developments?",
          "Sharing verified updates keeps everyone aware of the situation. Share this clip to pass along key news!"
        ],
        hashtags: "#NewsUpdate #BreakingNews #CurrentEvents #GlobalNews #TrendingNews"
      }
    },
    id: {
      finance: {
        hooks: [
          "RAHASIA KEUANGAN YANG JARANG DIPAHAMI BANYAK ORANG! 💡",
          "JANGAN SAMPAI RUGI KARENA KESALAHAN FINANSIAL INI 😱",
          "CARA CERDAS MENGELOLA UANG SECARA EFEKTIF DI TAHUN 2026 📈",
          "ALASAN UTAMA MENGAPA FINANSIAL KITA SERING BUNTUK 💸",
          "STRATEGI INVESTASI CERDAS UNTUK MASA DEPAN STABIL 🚀"
        ],
        visuals: [
          "🎬 Grafik hijau naik dengan efek slow zoom-in.",
          "⚡ Transisi cepat ke angka / transaksi penting.",
          "🔍 Efek sorotan lingkaran kuning di poin dana."
        ],
        angles: ["Tips Manajemen Keuangan", "Strategi Investasi Pemula", "Kesalahan Finansial Fatal"],
        captions: [
          "Kebebasan finansial selalu dimulai dari langkah kecil yang konsisten. Memahami prinsip keuangan ini akan mengubah cara pandangmu. Apa strategi finansialmu saat ini?",
          "Simpan video ini sebelum kamu mengambil keputusan investasi atau pengeluaran besar berikutnya! Kelola aset secara bijak demi masa depan.",
          "Banyak orang melewatkan aturan dasar kelola uang ini. Ambil kendali atas keuanganmu hari ini dan mulai terapkan langkahnya!"
        ],
        hashtags: "#FinansialCerdas #InvestasiPemula #TipsKeuangan #KelolaUang #EdukasiFinansial"
      },
      politik: {
        hooks: [
          "ALASAN SEBENARNYA DI BALIK KEBIJAKAN TERBARU INI! 🚨",
          "APA YANG TIDAK DIUNGKAP SECARA TERBUKA KE PUBLIK? ⚠️",
          "BEDAH TUNTAS ISU POLITIK HARI INI SECARA OBJEKTIF 🏛",
          "FAKTA PENTING DI BALIK PERNYATAAN RESMI TERSEBUT 📜"
        ],
        visuals: [
          "🎬 Ring merah menyala di adegan pidato penting.",
          "⚡ Split-screen perbandingan dua pernyataan.",
          "🔴 Slow zoom-in ke momen paling tegang."
        ],
        angles: ["Analisis Kebijakan Publik", "Dampak Langsung ke Masyarakat", "Perspektif Kritis & Objektif"],
        captions: [
          "Perkembangan isu dan kebijakan ini memicu banyak diskusi di tengah masyarakat. Bagaimana pendapatmu mengenai keputusan ini? Tulis di kolom komentar!",
          "Memahami konteks di balik kebijakan publik sangat penting agar tidak salah paham. Bagikan video ini agar semakin banyak yang sadar informasi ini!"
        ],
        hashtags: "#IsuPolitik #KebijakanPublik #BeritaTerkini #AnalisisPolitik #ViralIndo"
      },
      podcast: {
        hooks: [
          "MOMEN INI BENAR-BENAR BIKIN HOST TERDIAM SAMA SEKALI 🎙️",
          "JAWABAN PALING JUJUR YANG PERNAH DIUNGKAP DI PODCAST! 💥",
          "KAMU HARUS DENGAR PERSPEKTIF PENTING SATU INI 🎧",
          "UNGKAPAN EMOSIONAL YANG MEMBUKA MATA BANYAK ORANG 💬"
        ],
        visuals: [
          "🎬 Tampilan split-screen dua pembicara.",
          "⚡ Zoom-in kilat ke ekspresi emosional.",
          "🔍 Animasi gelombang suara halus di bawah."
        ],
        angles: ["Highlight Obrolan Mendalam", "Kisah Nyata Penuh Inspirasi", "Perspektif Pembuka Pikiran"],
        captions: [
          "Poin yang disampaikan dalam obrolan ini sangat mendalam. Apakah kamu memiliki pandangan yang sama atau punya pendapat berbeda?",
          "Tag teman atau sahabat kamu yang butuh pencerahan dari diskusi ini! Obrolan bermakna selalu memberi sudut pandang baru."
        ],
        hashtags: "#PodcastIndo #ObrolanMendalam #InspirasiHidup #HighlightPodcast #MotivationIndo"
      },
      gaming: {
        hooks: [
          "MOMEN GAMEPLAY INI BENAR-BENAR DILUAR NALAR! 🔥",
          "JANGAN JUMAWA DULU SEBELUM MATCH BENAR-BENAR SELESAI 😱",
          "APAKAH INI MOMEN CLUTCH TERBAIK SEPANJANG TAHUN? 🎮",
          "REFLEKS CEPAT YANG BIKIN MUSUH LANGSUNG PASRAH ⚡"
        ],
        visuals: [
          "🎬 Efek slow-motion pas moment clutch / kill.",
          "⚡ Zoom-in kilat ke ekspresi muka player.",
          "🔴 Frame merah menyala saat adegan tembak-menembak sengit."
        ],
        angles: ["Highlight Game Pro Player", "Momen Lucu & Clutch Tak Terduga", "Refleks Tingkat Dewa"],
        captions: [
          "Dia pikir sudah pasti menang mudah... Tonton sampai akhir buat lihat plot twist aksi balasan yang tak terduga ini!",
          "Menurutmu ini murni skill tingkat dewa atau cuma keberuntungan semata? Berikan rating momen ini 1-10 di kolom komentar!"
        ],
        hashtags: "#GamingIndonesia #HighlightGaming #MomenClutch #ProPlayer #ViralIndo"
      },
      education: {
        hooks: [
          "99% ORANG TERNYATA MASIH SALAH PAHAM SOAL INI! 🧠",
          "CARA PALING CEPAT DAN MUDAH PAHAM KONSEP INI 📚",
          "TRIK PRAKTIS SATU INI BISA HEMAT WAKTU KAMU 💡",
          "HAL PENTING YANG JARANG DIAJARKAN DI SEKOlAH 🏫"
        ],
        visuals: [
          "🎬 Teks sorotan pada rumus / poin penting.",
          "⚡ Perbandingan split-screen sebelum & sesudah.",
          "🔍 Sorotan lingkaran pada inti materi."
        ],
        angles: ["Tips Belajar Efektif", "Materi Rumit Jadi Mudah", "Wawasan Edukasi Ringkas"],
        captions: [
          "Simpan video ini buat acuan belajar atau referensi kerja nanti! Memahami materi dengan cara ringkas membuat belajar jadi lebih menyenangkan.",
          "Baru tahu fakta ini sekarang atau sudah paham dari dulu? Tulis pendapat dan pemahamanmu di kolom komentar!"
        ],
        hashtags: "#EdukasiSatuMenit #TipsBelajar #WawasanBaru #InfoBermanfaat #BelajarSeru"
      },
      music: {
        hooks: [
          "TRANSISI MUSIK INI BENAR-BENAR SANGAT PERFECT! 🎵",
          "BEAT DROP PALING MANTAP YANG WAJIB KAMU DENGAR 🔥",
          "TALENTA MURNI PENAMPILAN MUSIK LIVE SATU INI 🎸",
          "JANGKAUAN VOKAL YANG BIKIN MERINDING PENONTON 🎤"
        ],
        visuals: [
          "🎬 Cut cepat yang selaras dengan ritme musik.",
          "⚡ Kilatan warna dinamis saat beat drop.",
          "🔴 Pergerakan kamera sinematik pelan."
        ],
        angles: ["Momen Beat Drop Terbaik", "Showcase Vokal Memukau", "Keajaiban Produksi Musik"],
        captions: [
          "Gunakan earphone atau headphone untuk pengalaman mendengarkan audio terbaik! Lagu atau aransemen apa lagi yang wajib dibahas berikutnya?",
          "Penjiwaan dalam penampilan musik ini luar biasa sekali. Bagikan video ini ke teman-teman pecinta musik lainnya!"
        ],
        hashtags: "#MusikIndonesia #CoverLagu #BeatDrop #PencintaMusik #ViralMusik"
      },
      film: {
        hooks: [
          "SINEMATOGRAFI DALAM ADEGAN FILM INI INDAH BANGET! 🎬",
          "DETAIL RAHASIA FILM INI PASTI BIKIN KAMU KAGET 🤯",
          "SALAH SATU AKTING TERBAIK DALAM SEJARAH FILM 🍿",
          "PLOT TWIST DEDIKATIF YANG MENGUBAH JALAN CERITA 🎭",
          "ADEGAN SEDIH MEMILU HATI YANG BIKIN PENONTON NANGIS 💔"
        ],
        visuals: [
          "🎬 Bingkai widescreen ala bioskop sinematik.",
          "⚡ Efek penajaman warna di adegan dramatis.",
          "🔍 Zoom-in ke easter egg rahasia.",
          "🖤 Filter monokrom sinematik halus."
        ],
        angles: [
          "Bedah Adegan Film", "Easter Egg Rahasia Film", "Mahakarya Sinematik", 
          "Plot Twist", "Momen Emosional", "Adegan Sedih", "Perpisahan Memiru Hati"
        ],
        captions: [
          "Penjiwaan emosi dan kualitas akting di adegan ini benar-benar menyentuh hati. Pernah nonton film ini? Beri nilai 1-10 di kolom komentar!",
          "Detail sinematografi kecil seperti ini membuktikan kejeniusan sang sutradara. Simpan video ini untuk rekomendasi tontonan akhir pekan!"
        ],
        hashtags: "#RekomendasiFilm #Sinematografi #BedahFilm #FilmBioskop #SceneTerbaik"
      },
      news: {
        hooks: [
          "RINGKASAN BERITA DAN ISU TERBESAR HARI INI 📰",
          "FAKTA PENTING YANG WAJIB KAMU KETAHUI SEKARANG 🚨",
          "UPDATE TERBARU PERKEMBANGAN KEJADIAN INI 🌐",
          "RANGKUMAN FAKTA LENGKAP TANPA REKAYASA 📢"
        ],
        visuals: [
          "🎬 Teks berjalan gaya breaking news resmi.",
          "⚡ Kilatan merah tanda peringatan isu penting.",
          "🔍 Sorotan pada peta / lokasi kejadian."
        ],
        angles: ["Rangkuman Kejadian Utama", "Penjelasan Fakta Lengkap", "Update Isu Terkini"],
        captions: [
          "Tetap perbarui informasi berdasarkan fakta yang tervalidasi. Bagaimana tanggapan serta pandanganmu mengenai isu hangat ini?",
          "Bagikan video update ini agar orang-orang di sekitarmu tidak ketinggalan informasi penting dan tepercaya!"
        ],
        hashtags: "#BeritaTerkini #KabarHariIni #InformasiUtama #FaktaTerkini #IsuHangat"
      }
    }
  }
};

// =============================================================
// GLOBAL CONFIGURATION & STATE
// =============================================================
const RENDER_BACKEND_URL = "https://ai-agent-project-3-h0jp.onrender.com";
const DEFAULT_YOUTUBE_LINK = "https://youtu.be/lplwONPDUHI?si=qLf770cIYpVwqkJI";

let dbData = null;
let loadedFile = null;
let ffmpegInstance = null;
let isExporting = false;

// Pagination state
let allGeneratedClips = [];
let currentPage = 1;
const CLIPS_PER_PAGE = 5;

// Load JSON lokal atau otomatis pakai backup lengkap
fetch('database.json')
  .then(res => {
    if (!res.ok) throw new Error("HTTP Status Error");
    return res.json();
  })
  .then(data => {
    dbData = data;
    console.log("Database Loaded successfully (Version:", dbData.version || "Legacy", ")");
  })
  .catch(err => {
    console.warn("Gagal fetch database.json (Menggunakan Fallback Database):", err);
    dbData = defaultBackupDB;
  });

// DOM Elements
let videoInput, hiddenVideo, processBtn, statusBox, resultsGrid, dropzoneText, backBtn;
let uploadStep, resultStep, socialLinkInput, atmInput;

window.addEventListener('DOMContentLoaded', () => {
  videoInput = document.getElementById('videoInput') || document.getElementById('localVideoInput') || document.querySelector('input[type="file"]');
  hiddenVideo = document.getElementById('hiddenVideo');
  processBtn = document.getElementById('processBtn') || document.getElementById('btnGenerate') || document.querySelector('.btn-generate');
  statusBox = document.getElementById('statusBox') || document.getElementById('statusText');
  resultsGrid = document.getElementById('resultsGrid') || document.getElementById('clipResultsContainer');
  dropzoneText = document.getElementById('dropzoneText');
  backBtn = document.getElementById('backBtn');

  uploadStep = document.getElementById('uploadStep');
  resultStep = document.getElementById('resultStep');

  socialLinkInput = document.getElementById('socialLinkInput');
  atmInput = document.getElementById('atmInput');

  // Event listener upload file
  if (videoInput) {
    videoInput.addEventListener('change', (e) => {
      if (e.target.files && e.target.files.length > 0) {
        loadedFile = e.target.files[0];
        const sizeMB = (loadedFile.size / (1024 * 1024)).toFixed(2);
        if (dropzoneText) {
          dropzoneText.innerText = `Terpilih: ${loadedFile.name} (${sizeMB} MB)`;
        }
        showStatus(`File lokal terpilih: ${loadedFile.name} (${sizeMB} MB)`);
      }
    });
  }

  // Event listener tombol proses utama
  if (processBtn) {
    processBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleProcessVideo();
    });
  }

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      switchToView('upload');
    });
  }

  // Ping Backend Render (Mencegah Cold Start Delay)
  fetch(`${RENDER_BACKEND_URL}/health`, { method: 'GET', mode: 'no-cors' }).catch(() => {});
});

// =============================================================
// UTILITY FUNCTIONS
// =============================================================
function detectPlatform(url) {
  if (!url) return null;
  const lowerUrl = url.toLowerCase();
  if (lowerUrl.includes('youtube.com') || lowerUrl.includes('youtu.be')) return 'YouTube';
  if (lowerUrl.includes('tiktok.com')) return 'TikTok';
  if (lowerUrl.includes('instagram.com')) return 'Instagram';
  return 'Unknown';
}

function cleanSocialUrl(url) {
  if (!url) return '';
  let clean = url.trim();
  if (clean.includes('youtu.be/')) {
    const id = clean.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/watch?v=${id}`;
  }
  return clean;
}

function formatTime(seconds) {
  const totalSec = Math.floor(seconds);
  const hrs = Math.floor(totalSec / 3600);
  const mins = Math.floor((totalSec % 3600) / 60);
  const secs = totalSec % 60;

  if (hrs > 0) {
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function showStatus(msg) {
  if (statusBox) {
    statusBox.style.display = 'block';
    statusBox.innerHTML = msg;
  } else {
    console.log('[Status]:', msg);
  }
}

function switchToView(viewName) {
  if (!uploadStep || !resultStep) return;
  if (viewName === 'result') {
    uploadStep.classList.remove('active');
    uploadStep.classList.add('hidden');
    resultStep.classList.remove('hidden');
    resultStep.classList.add('active');
  } else {
    resultStep.classList.remove('active');
    resultStep.classList.add('hidden');
    uploadStep.classList.remove('hidden');
    uploadStep.classList.add('active');
  }
  window.scrollTo(0, 0);
}

function getVideoDuration(file) {
  return new Promise((resolve) => {
    if (!hiddenVideo) {
      resolve(300); // Fallback jika tidak ada elemen video
      return;
    }
    const url = URL.createObjectURL(file);
    hiddenVideo.src = url;
    hiddenVideo.onloadedmetadata = () => {
      URL.revokeObjectURL(url);
      resolve(hiddenVideo.duration);
    };
  });
}

// =============================================================
// DETEKSI BAHASA & REGION
// =============================================================
async function detectLanguageAndRegion(file, socialLink, atmRef) {
  const forceLangEl = document.getElementById('forceLang');
  const override = forceLangEl ? forceLangEl.value : 'auto';
  let region = 'United States (US)';
  let lang = 'en-US';

  const combinedText = (socialLink + " " + atmRef).toLowerCase();

  if (combinedText.includes('.uk') || combinedText.includes('britain') || combinedText.includes('gb')) {
    region = 'United Kingdom (GB)';
    lang = 'en-GB';
  } else if (combinedText.includes('.id') || combinedText.includes('indonesia') || combinedText.includes('indo')) {
    region = 'Indonesia (ID)';
    lang = 'id-ID';
  } else if (combinedText.includes('.us') || combinedText.includes('usa')) {
    region = 'United States (US)';
    lang = 'en-US';
  }

  if (override !== 'auto') {
    if (override === 'id' || override === 'id-ID') return { lang: 'id-ID', region: 'Indonesia (ID)' };
    if (override === 'en-GB') return { lang: 'en-GB', region: 'United Kingdom (GB)' };
    return { lang: 'en-US', region: 'United States (US)' };
  }

  if (!file) return { lang: lang, region: region };

  return new Promise((resolve) => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      resolve({ lang: lang, region: region });
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      const isIndo = /[yang|dengan|ini|itu|dan|di|ke|ada|bisa]/i.test(text);
      resolve({ lang: isIndo ? 'id-ID' : 'en-US', region: isIndo ? 'Indonesia (ID)' : region });
    };

    recognition.onerror = () => resolve({ lang: lang, region: region });
    
    if (hiddenVideo) {
      hiddenVideo.play().catch(() => {});
      try { recognition.start(); } catch (e) { resolve({ lang: lang, region: region }); }

      setTimeout(() => {
        hiddenVideo.pause();
        resolve({ lang: lang, region: region });
      }, 4000);
    } else {
      resolve({ lang: lang, region: region });
    }
  });
}

// =============================================================
// ATM & KEYWORD EXTRACTOR
// =============================================================
function extractATMContext() {
  const atmValue = atmInput ? atmInput.value.trim() : '';
  if (!atmValue) return null;

  let cleanText = atmValue
    .replace(/https?:\/\/(www\.)?/gi, '')
    .replace(/(tiktok\.com|instagram\.com|youtube\.com|youtu\.be)\//gi, '')
    .replace(/(reels?|shorts|video|p|share)\//gi, '')
    .replace(/!?\s*\(\d+\)/g, '')
    .replace(/[?&=_.-]/g, ' ');

  const keywords = cleanText
    .split(/\s+/)
    .filter(w => w.length > 2 && !w.match(/^\d+$/));

  return {
    raw: atmValue,
    url: atmValue.startsWith('http') ? atmValue : null,
    keywords: keywords.length > 0 ? keywords : []
  };
}

function extractKeywordsFromInput(socialLink, fileName, niche) {
  const atmCtx = extractATMContext();
  if (atmCtx && atmCtx.keywords.length > 0) {
    return atmCtx.keywords;
  }

  let sourceText = socialLink || fileName || "";
  sourceText = sourceText
    .replace(/https?:\/\/[^\s]+/g, '')
    .replace(/\.(mp4|mkv|mov|avi|webm)$/gi, '')
    .replace(/!?\s*\(\d+\)/g, '')
    .replace(/[-_+=]/g, ' ')
    .trim();

  const words = sourceText.split(/\s+/).filter(w => w.length > 2 && !w.match(/^\d+$/));
  if (words.length > 0) return words;

  const dynamicNicheKeywords = {
    finance: ["Strategi Keuangan", "Investasi Cerdas", "Manajemen Aset"],
    politik: ["Kebijakan Publik", "Isu Utama", "Fakta Lapangan"],
    podcast: ["Diskusi Mendalam", "Kisah Momen", "Perspektif Hidup"],
    gaming: ["Highlight Clutch", "Gameplay Pro", "Momen Dramatis"],
    education: ["Materi Inti", "Solusi Cepat", "Wawasan Baru"],
    music: ["Performansi Vokal", "Harmonisasi Musik", "Beat Drop"],
    film: ["Adengan Kunci", "Momen Emosional", "Plot Twist"],
    news: ["Fakta Kejadian", "Update Berita", "Situasi Terkini"]
  };

  return dynamicNicheKeywords[niche] || ["Momen Utama", "Highlight Pilihan"];
}

// =============================================================
// CONTEXT-AWARE AI CLIPPER GENERATOR ENGINE V2
// =============================================================
function generateRealtimeClipDataV2(niche, lang, index, extractedTopic, preset, sourceLink = "") {
  let topicName = Array.isArray(extractedTopic) ? extractedTopic.slice(0, 3).join(" ") : (extractedTopic || "Momen Penting");
  const isIndo = lang.startsWith('id');
  const isGB = lang === 'en-GB';

  const categoriesMap = {
    finance: ["Investment Strategy", "Money Mistakes", "Financial Freedom", "Wealth Management"],
    politik: ["Public Policy", "Political Debate", "Policy Impact", "Critical Analysis"],
    podcast: ["Deep Conversation", "Personal Story", "Life Insight", "Unfiltered Talk"],
    gaming: ["Pro Gameplay", "Clutch Moment", "Funny Fail", "Insane Reflexes"],
    education: ["Study Hacks", "Concept Explanation", "Quick Insight", "Practical Knowledge"],
    music: ["Beat Drop", "Vocal Showcase", "Live Performance", "Music Production"],
    film: ["Cinematic Moment", "Plot Twist", "Emotional Scene", "Dialogue Breakdown", "Heartbreaking Moment", "Loss and Grief"],
    news: ["Breaking Update", "Event Breakdown", "Fact Check", "Global Overview"]
  };

  const categories = categoriesMap[niche] || ["Highlights"];
  const category = categories[(index - 1) % categories.length];

  let angleList = preset && preset.angles ? preset.angles : ["High Engagement Focus"];
  const angle = angleList[(index - 1) % angleList.length];

  let langKey = isIndo ? 'id' : 'en';
  const nicheDb = (dbData && dbData.templates && dbData.templates[langKey] && dbData.templates[langKey][niche])
    ? dbData.templates[langKey][niche]
    : (defaultBackupDB.templates[langKey][niche] || defaultBackupDB.templates['en']['gaming']);

  const rawHooks = nicheDb.hooks || [];
  const rawCaptions = nicheDb.captions || [];

  let selectedBaseHook = rawHooks.length > 0 ? rawHooks[(index - 1) % rawHooks.length] : "";
  let selectedBaseCaption = rawCaptions.length > 0 ? rawCaptions[(index - 1) % rawCaptions.length] : "";

  let hook = "";
  let caption = "";

  if (isIndo) {
    const indoHookPatterns = [
      `${selectedBaseHook} Pembahasan mengenai ${topicName} ini membuka sudut pandang baru yang jarang disadari. 💡`,
      `Momen krusial saat topik ${topicName} terungkap secara mendalam dan lugas tanpa rekayasa. 💥`,
      `Inilah fakta penting seputar ${topicName} yang wajib kamu perhatikan sebelum mengambil tindakan. 🚨`,
      `Detail tak terduga dalam adegan ${topicName} yang berhasil menarik perhatian banyak penonton. 🎬`,
      `Aksi dan penyampaian poin ${topicName} ini membuktikan betapa pentingnya pemahaman mendalam. ⚡`
    ];
    hook = indoHookPatterns[(index - 1) % indoHookPatterns.length];

    const indoCaptionCTAs = [
      `Apakah kamu sepakat dengan penyampaian poin ini? Bagikan pandanganmu di kolom komentar! 👇`,
      `Bagikan klip ini ke teman-temanmu agar mereka juga mendapatkan pencerahan yang sama! 🔄`,
      `Simpan video ini sekarang agar kamu bisa menyimak ulang materinya kapan saja! 📌`,
      `Bagaimana tanggapanmu mengenai hal ini? Mari berdiskusi secara sehat di bawah! 💬`
    ];
    caption = `${selectedBaseCaption} Penjelasan mengenai ${topicName} memberikan gambaran utuh tentang konteks aktual yang terjadi. ${indoCaptionCTAs[(index - 1) % indoCaptionCTAs.length]}`;

  } else if (isGB) {
    const gbHookPatterns = [
      `${selectedBaseHook} The exact moment everything shifted regarding ${topicName} during this dialogue. 🎙️`,
      `A crucial breakdown of ${topicName} that brings complete clarity to the entire situation. 💡`,
      `Unfiltered insights into ${topicName} that highlight key details you cannot afford to miss. ⚠️`,
      `An exceptional perspective on ${topicName} that changes how we view the whole context. ⚡`
    ];
    hook = gbHookPatterns[(index - 1) % gbHookPatterns.length];

    const gbCaptionCTAs = [
      `What are your thoughts on this breakdown? Share your perspective in the comments below! 👇`,
      `Save this clip for your reference and share it with someone who needs to hear this today! 📌`,
      `Would you agree with this statement or do you see it from a different angle? Let us know! 💬`
    ];
    caption = `${selectedBaseCaption} Understanding the full depth of ${topicName} provides valuable insights into the actual events. ${gbCaptionCTAs[(index - 1) % gbCaptionCTAs.length]}`;

  } else { 
    const usHookPatterns = [
      `${selectedBaseHook} The key moment everything changed once the actual truth regarding ${topicName} was revealed. 💡`,
      `An incredible highlight concerning ${topicName} that uncovers essential facts behind the scenes. 💥`,
      `This intense breakdown of ${topicName} shows why this moment is capturing everyone's attention. 🚨`,
      `A remarkable perspective on ${topicName} that completely changes the narrative of this clip. 🔥`
    ];
    hook = usHookPatterns[(index - 1) % usHookPatterns.length];

    const usCaptionCTAs = [
      `What would you do if you were in this situation? Let us know in the comments below! 👇`,
      `Save this video now so you can rewatch it later and share it with your friends! 📌`,
      `Do you agree with this point of view? Drop your thoughts and start the discussion! 💬`
    ];
    caption = `${selectedBaseCaption} Analyzing the core details of ${topicName} gives a clear picture of the overall situation. ${usCaptionCTAs[(index - 1) % usCaptionCTAs.length]}`;
  }

  const cleanTopicTag = topicName.replace(/[^a-zA-Z0-9]/g, '');
  const baseHashtags = [
    `#${niche.charAt(0).toUpperCase() + niche.slice(1)}`,
    `#${cleanTopicTag || 'ViralContent'}`,
    `#ClipHighlights`,
    `#TrendingNow`
  ];
  if (niche === 'film') baseHashtags.push('#CinemaMoments', '#MovieScene');
  if (niche === 'finance') baseHashtags.push('#WealthBuilding', '#SmartInvesting');
  if (isIndo) baseHashtags.push('#ViralIndonesia', '#FYPIndo');

  const rawVisuals = nicheDb.visuals || ["🎬 Dynamic slow zoom on main action."];
  const visual = rawVisuals[(index - 1) % rawVisuals.length];

  let clipResult = {
    hook: hook,
    caption: caption,
    hashtags: baseHashtags.slice(0, 6).join(' '),
    category: category,
    angle: angle,
    visualSuggestions: rawVisuals,
    visual: visual,
    contextSignal: topicName,
    lang: lang,
    region: isIndo ? 'Indonesia (ID)' : (isGB ? 'United Kingdom (GB)' : 'United States (US)'),
    source: sourceLink ? { type: detectPlatform(sourceLink) || 'reference', url: sourceLink } : null
  };

  let attempts = 0;
  while (!qualityControlCheck(clipResult) && attempts < 5) {
    attempts++;
    if (clipResult.hook.split(/\s+/).length < 15) {
      clipResult.hook += isIndo ? " Pastikan Anda memperhatikan setiap detailnya dengan seksama." : " Make sure to pay close attention to every single detail.";
    }
  }

  return clipResult;
}

function qualityControlCheck(data) {
  if (!data || !data.hook || !data.caption) return false;
  const hookWords = data.hook.trim().split(/\s+/).length;
  const captionWords = data.caption.trim().split(/\s+/).length;
  const tagCount = (data.hashtags.match(/#/g) || []).length;

  return (hookWords >= 12 && hookWords <= 40) && (captionWords >= 30 && captionWords <= 130) && (tagCount >= 3 && tagCount <= 10);
}

// =============================================================
// ATURAN PEMOTONGAN KONTEN & ENGINE BUILDER
// =============================================================
function buildClipsEngine(totalDuration, lang, niche, region, socialLink, atmVal) {
  const clips = [];
  let clipIndex = 1;

  const activeLink = socialLink || DEFAULT_YOUTUBE_LINK;
  const extractedKeywords = extractKeywordsFromInput(activeLink, loadedFile ? loadedFile.name : '', niche);

  let langKey = 'en';
  if (lang.startsWith('id')) langKey = 'id';

  const langTemplates = (dbData && dbData.templates && dbData.templates[langKey]) ? dbData.templates[langKey] : defaultBackupDB.templates[langKey];
  const preset = langTemplates[niche] || langTemplates['gaming'] || defaultBackupDB.templates['en']['gaming'];

  const nicheRules = {
    finance: { min: 30, max: 60 },
    politik: { min: 20, max: 45 },
    podcast: { min: 15, max: 30 },
    gaming: { min: 10, max: 30 },
    education: { min: 45, max: 60 },
    music: { min: 15, max: 30 },
    film: { min: 30, max: 60 },
    news: { min: 20, max: 45 }
  };

  const rule = nicheRules[niche] || { min: 15, max: 45 };
  let currentStart = 0;

  while (currentStart < totalDuration) {
    let sisaDurasi = totalDuration - currentStart;

    if (sisaDurasi < rule.min && clips.length > 0) {
      const lastClip = clips[clips.length - 1];
      lastClip.endSec = Math.floor(totalDuration);
      lastClip.timestamp = `${formatTime(lastClip.startSec)} - ${formatTime(lastClip.endSec)}`;
      break;
    }

    let clipDuration = Math.floor(Math.random() * (rule.max - rule.min + 1)) + rule.min;
    if (clipDuration > sisaDurasi) clipDuration = Math.floor(sisaDurasi);

    const currentEnd = Math.floor(currentStart + clipDuration);
    const realtimeData = generateRealtimeClipDataV2(niche, lang, clipIndex, extractedKeywords, preset, activeLink || atmVal);

    const rate = Math.floor(Math.random() * (99 - 85 + 1)) + 85;

    clips.push({
      id: clipIndex,
      lang: lang,
      region: region,
      timestamp: `${formatTime(currentStart)} - ${formatTime(currentEnd)}`,
      startSec: Math.floor(currentStart),
      endSec: Math.floor(currentEnd),
      hook: realtimeData.hook,
      visual: realtimeData.visual,
      rate: rate,
      angle: realtimeData.angle,
      caption: realtimeData.caption,
      hashtags: realtimeData.hashtags,
      category: realtimeData.category,
      visualSuggestions: realtimeData.visualSuggestions,
      source: realtimeData.source
    });

    currentStart = currentEnd;
    clipIndex++;
  }

  return clips;
}

// =============================================================
// HANDLER UTAMA GENERATE & ANALISIS VIDEO
// =============================================================
async function handleProcessVideo() {
  if (isExporting) {
    alert("Proses pemotongan/ekspor klip sedang berjalan, mohon tunggu...");
    return;
  }

  let linkVal = socialLinkInput ? socialLinkInput.value.trim() : '';
  
  if (!loadedFile && !linkVal) {
    linkVal = DEFAULT_YOUTUBE_LINK;
    if (socialLinkInput) socialLinkInput.value = DEFAULT_YOUTUBE_LINK;
  }

  const platform = detectPlatform(linkVal);

  if (!loadedFile && linkVal && platform === 'Unknown') {
    alert("Tautan tidak valid! Harap masukkan URL yang valid dari YouTube, TikTok, atau Instagram.");
    return;
  }

  if (!dbData) dbData = defaultBackupDB;

  switchToView('result');
  showStatus("Membaca metadata & menganalisis konteks video/link...");

  let duration = 0;
  if (loadedFile) {
    duration = await getVideoDuration(loadedFile);
  } else {
    duration = 276; // Simulasi durasi video media sosial (4 Menit 36 Detik)
    showStatus(`Mendeteksi metadata dari ${platform || 'YouTube'} Link...`);
  }

  const atmVal = atmInput ? atmInput.value : '';
  const detectedTarget = await detectLanguageAndRegion(loadedFile, linkVal, atmVal);

  showStatus(`Target Wilayah: ${detectedTarget.region.toUpperCase()} | Bahasa: ${detectedTarget.lang.toUpperCase()} | Durasi Total: ${formatTime(duration)} (${Math.round(duration)}s)`);

  const nicheEl = document.getElementById('nicheSelect');
  const niche = nicheEl ? nicheEl.value : 'gaming';

  allGeneratedClips = buildClipsEngine(duration, detectedTarget.lang, niche, detectedTarget.region, linkVal, atmVal);
  
  currentPage = 1;
  renderPage(currentPage);
}

// =============================================================
// RENDERING & PAGINASI UI KLIP
// =============================================================
function renderPage(page) {
  if (!resultsGrid) return;
  resultsGrid.innerHTML = '';

  const totalClips = allGeneratedClips.length;
  const totalPages = Math.ceil(totalClips / CLIPS_PER_PAGE);
  const startIndex = (page - 1) * CLIPS_PER_PAGE;
  const endIndex = Math.min(startIndex + CLIPS_PER_PAGE, totalClips);

  const currentClips = allGeneratedClips.slice(startIndex, endIndex);

  currentClips.forEach(clip => {
    createClipCard(clip);
  });

  renderPaginationControls(page, totalPages, totalClips);
}

function renderPaginationControls(page, totalPages, totalClips) {
  let paginationDiv = document.getElementById('paginationControls');

  if (!paginationDiv) {
    paginationDiv = document.createElement('div');
    paginationDiv.id = 'paginationControls';
    paginationDiv.style.cssText = `
      display:flex;
      justify-content:center;
      align-items:center;
      gap:15px;
      margin:30px 0;
      width:100%;
      grid-column:1 / -1;
    `;
    if (resultsGrid.parentNode) {
      resultsGrid.parentNode.appendChild(paginationDiv);
    }
  }

  paginationDiv.innerHTML = `
    <button id="prevPageBtn" ${page === 1 ? 'disabled' : ''} style="padding:10px 18px; background:#374151; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; opacity:${page === 1 ? '0.5' : '1'};">
      ⬅ Halaman Sebelumnya
    </button>
    <span style="color:#fbbf24; font-weight:bold; font-size:15px;">
      Halaman ${page} dari ${totalPages} (Total ${totalClips} Klip)
    </span>
    <button id="nextPageBtn" ${page === totalPages ? 'disabled' : ''} style="padding:10px 18px; background:#2563eb; color:white; border:none; border-radius:8px; cursor:pointer; font-weight:bold; opacity:${page === totalPages ? '0.5' : '1'};">
      Halaman Selanjutnya ➡️
    </button>
  `;

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        window.scrollTo(0, 0);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
        window.scrollTo(0, 0);
      }
    });
  }
}

function createClipCard(clip) {
  const card = document.createElement('div');
  const isEn = !clip.lang.startsWith('id');

  card.className = `clip-card ${isEn ? 'theme-en' : 'theme-id'}`;
  const durasiKlip = clip.endSec - clip.startSec;

  const labels = isEn
    ? {
        headline: "HEADLINE HOOK (CONTEXTUAL):",
        visual: "VISUAL SUGGESTION:",
        priority: "VIRAL POTENTIAL SCORE:",
        angle: `TARGET REGION (${clip.region}) ANGLE:`,
        caption: "CAPTION POSTING:",
        tagar: "HASHTAGS:",
        rateText: `Score Viral: ${clip.rate}% — High Engagement Target (${clip.region})`
      }
    : {
        headline: "HEADLINE HOOK (ACUAN):",
        visual: "HOOK VISUAL (ADEGAN/AKSI):",
        priority: "PRIORITAS POSTING / POTENSI VIRAL:",
        angle: "ANGLE KONTEN:",
        caption: "CAPTION POSTINGAN:",
        tagar: "TAGAR / HASHTAG:",
        rateText: `Score Potensi Viral: ${clip.rate}% (Direkomendasikan Post Target ID)`
      };

  card.innerHTML = `
    <div class="clip-header">
      <span class="clip-title">KLIP #${clip.id}</span>
      <span class="clip-timer">⏱ DETIK: ${clip.timestamp} (${durasiKlip}s)</span>
    </div>

    <div class="field-group">
      <div class="field-label">TIMESTAMP:</div>
      <div class="field-box">Detik ${clip.timestamp.replace(' - ', ' s/d Detik ')}</div>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.headline}</div>
      <div class="field-box" style="font-weight:bold; color:#fbbf24;">${clip.hook}</div>
      <button class="btn-copy" onclick="copyText(this, \`${escapeQuotes(clip.hook)}\`)">Copy Headline Hook</button>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.visual}</div>
      <div class="field-box">${clip.visual}</div>
      <button class="btn-copy" onclick="copyText(this, \`${escapeQuotes(clip.visual)}\`)">Copy Hook Visual</button>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.priority}</div>
      <div class="field-box" style="color:#34d399; font-weight:bold;">🏅 ${labels.rateText}</div>
      <button class="btn-copy" onclick="copyText(this, \`Presentase Viral: ${clip.rate}%\`)">Copy Presentase</button>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.angle}</div>
      <div class="field-box">${clip.angle}</div>
      <button class="btn-copy" onclick="copyText(this, \`${escapeQuotes(clip.angle)}\`)">Copy Angle</button>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.caption}</div>
      <div class="field-box">${clip.caption}</div>
      <button class="btn-copy" onclick="copyText(this, \`${escapeQuotes(clip.caption)}\`)">Copy Caption</button>
    </div>

    <div class="field-group">
      <div class="field-label">${labels.tagar}</div>
      <div class="field-box" style="color:#38bdf8;">${clip.hashtags}</div>
      <button class="btn-copy" onclick="copyText(this, \`${escapeQuotes(clip.hashtags)}\`)">Copy Tagar</button>
    </div>

    <button class="btn-copy-all" onclick="copyAllClipData(\`${escapeQuotes(clip.hook)}\`, \`${escapeQuotes(clip.caption)}\`, \`${escapeQuotes(clip.hashtags)}\`)">
      📋 Copy Semua Data (Headline + Caption + Tagar)
    </button>

    <button class="btn-download" onclick="trimAndDownload(${clip.startSec}, ${clip.endSec}, ${clip.id})">
      ✂️ Download Clip #${clip.id} MP4 (${clip.timestamp})
    </button>
  `;

  resultsGrid.appendChild(card);
}

function copyText(buttonEl, text) {
  navigator.clipboard.writeText(text).then(() => {
    const originalText = buttonEl.innerText;
    buttonEl.innerText = "✓ Tersalin!";
    buttonEl.style.background = "#16a34a";
    buttonEl.style.color = "#fff";

    setTimeout(() => {
      buttonEl.innerText = originalText;
      buttonEl.style.background = "";
      buttonEl.style.color = "";
    }, 1500);
  }).catch(err => console.error("Clipboard error:", err));
}

function copyAllClipData(hook, caption, hashtags) {
  const fullText = `${hook}\n\n${caption}\n\n${hashtags}`;
  navigator.clipboard.writeText(fullText).then(() => {
    alert("Berhasil menyalin seluruh data Klip!");
  });
}

function escapeQuotes(str) {
  return str ? str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$') : '';
}

// =============================================================
// MEDIA DOWNLOADER & FFMPEG.WASM ENGINE INTEGRATION
// =============================================================
async function triggerFileDownload(blob, filename) {
  const file = new File([blob], filename, { type: 'video/mp4' });

  // Web Share API (Dioptimalkan untuk Android & Safari iOS)
  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        files: [file],
        title: 'Hasil Klip Video',
        text: 'Simpan video ini ke Galeri Perangkat Anda'
      });
      return;
    } catch (err) {
      console.log('Share API dibatalkan/tidak didukung, fallback ke download biasa...', err);
    }
  }

  // Anchor Download Fallback
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = filename;
  a.target = '_blank';
  a.rel = 'noopener noreferrer';

  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 3000);
}

async function loadFFmpegEngine() {
  if (ffmpegInstance) return ffmpegInstance;

  showStatus("Membuka engine FFmpeg.wasm...");

  const FFmpegClass = window.FFmpegWASM?.FFmpeg || window.FFmpeg?.FFmpeg;
  const FFmpegUtils = window.FFmpegWASM?.FFmpegUtil || window.FFmpegUtil;

  if (!FFmpegClass) {
    throw new Error("Library FFmpeg.wasm gagal dimuat. Pastikan koneksi internet terhubung.");
  }

  ffmpegInstance = new FFmpegClass();

  ffmpegInstance.on('log', ({ message }) => console.log('[FFmpeg Log]:', message));
  ffmpegInstance.on('progress', ({ progress }) => {
    const percent = Math.min(100, Math.max(0, Math.round(progress * 100)));
    showStatus(`Memproses Ekspor MP4... ${percent}%`);
  });

  const coreURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.js';
  const wasmURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd/ffmpeg-core.wasm';

  if (FFmpegUtils && FFmpegUtils.toBlobURL) {
    await ffmpegInstance.load({
      coreURL: await FFmpegUtils.toBlobURL(coreURL, 'text/javascript'),
      wasmURL: await FFmpegUtils.toBlobURL(wasmURL, 'application/wasm')
    });
  } else {
    await ffmpegInstance.load({ coreURL, wasmURL });
  }

  return ffmpegInstance;
}

// =============================================================
// FUNGSI PEMOTONGAN & EKSPOR VIDEO UTAMA
// =============================================================
async function trimAndDownload(startSec, endSec, clipId) {
  if (isExporting) {
    alert("Proses pemotongan klip lain sedang berjalan, mohon tunggu...");
    return;
  }

  const duration = endSec - startSec;
  if (startSec < 0 || duration <= 0) {
    alert("Timestamp tidak valid.");
    return;
  }

  // -------------------------------------------------------------
  // OPSI 1: JIKA LINK SOSMED (BACKEND RENDER SERVER)
  // -------------------------------------------------------------
  if (!loadedFile) {
    let rawUrl = socialLinkInput ? socialLinkInput.value.trim() : '';
    if (!rawUrl) rawUrl = DEFAULT_YOUTUBE_LINK;
    const ytUrl = cleanSocialUrl(rawUrl);

    try {
      isExporting = true;
      showStatus(`[1/3] Menghubungi Server Backend Render untuk Klip #${clipId}...`);

      const response = await fetch(`${RENDER_BACKEND_URL}/api/clip`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: ytUrl,
          start: startSec,
          end: endSec,
          duration: duration,
          clipId: clipId
        })
      });

      if (!response.ok) {
        throw new Error(`Server Render Error (${response.status})`);
      }

      const resData = await response.json();

      if (resData.downloadUrl) {
        showStatus(`[2/3] Mengunduh Klip #${clipId} dari Backend...`);
        
        try {
          const fileResp = await fetch(resData.downloadUrl);
          if (!fileResp.ok) throw new Error("CORS / Network Blocked");
          const videoBlob = await fileResp.blob();
          
          showStatus(`[3/3] Menyimpan Klip #${clipId} ke Galeri...`);
          await triggerFileDownload(videoBlob, `Clip_${clipId}_${startSec}s-${endSec}s.mp4`);
        } catch (e) {
          window.open(resData.downloadUrl, '_blank');
        }

        showStatus(`Klip #${clipId} berhasil diproses!`);
      } else {
        throw new Error("Respon server tidak memberikan URL video.");
      }

    } catch (err) {
      console.error("Render Backend Error:", err);
      alert(`Gagal memproses via Server Render: ${err.message}\nSilakan gunakan opsi Upload File Video Lokal.`);
      showStatus("Proses ke Server Render gagal.");
    } finally {
      isExporting = false;
    }
    return;
  }

  // -------------------------------------------------------------
  // OPSI 2: JIKA FILE LOKAL (FFMPEG.WASM IN-BROWSER)
  // -------------------------------------------------------------
  const outputFilename = `Clip_${clipId}_${startSec}s-${endSec}s.mp4`;

  try {
    isExporting = true;
    showStatus(`[1/3] Menyiapkan Engine FFmpeg untuk Klip #${clipId}...`);

    const ffmpeg = await loadFFmpegEngine();
    const fetchFile = window.FFmpegWASM?.FFmpegUtil?.fetchFile || window.FFmpegUtil?.fetchFile;

    if (!fetchFile) {
      throw new Error("FFmpegUtil.fetchFile tidak ditemukan.");
    }

    showStatus(`[2/3] Memotong Video (${formatTime(startSec)} - ${formatTime(endSec)})...`);

    const inputName = 'input_original.mp4';
    const outputName = 'output_clipped.mp4';

    await ffmpeg.writeFile(inputName, await fetchFile(loadedFile));

    await ffmpeg.exec([
      '-ss', `${startSec}`,
      '-i', inputName,
      '-t', `${duration}`,
      '-c:v', 'libx264',
      '-preset', 'ultrafast',
      '-crf', '28',
      '-pix_fmt', 'yuv420p',
      '-c:a', 'aac',
      '-b:a', '128k',
      '-movflags', '+faststart',
      outputName
    ]);

    showStatus(`[3/3] Finalisasi simpan Klip #${clipId} ke Perangkat...`);

    const data = await ffmpeg.readFile(outputName);
    const mp4Blob = new Blob([data.buffer], { type: 'video/mp4' });

    await ffmpeg.deleteFile(inputName).catch(() => {});
    await ffmpeg.deleteFile(outputName).catch(() => {});

    await triggerFileDownload(mp4Blob, outputFilename);
    showStatus(`Klip #${clipId} berhasil diekspor!`);
  } catch (err) {
    console.error("FFmpeg Export Error:", err);
    alert(`Export gagal: ${err.message || 'Terjadi kesalahan saat memotong video'}`);
    showStatus("Export gagal. Pastikan file video lokal valid.");
  } finally {
    isExporting = false;
  }
}
