import './style.css';

const STORAGE_KEY = 'rozat-alzahra-save-v1';

const ageGroups = [
  { id: '4-6', label: '٤–٦ سنوات' },
  { id: '7-8', label: '٧–٨ سنوات' },
  { id: '9-11', label: '٩–١١ سنة' },
];

const lessonCatalog = [
  {
    id: 'quran',
    title: 'القرآن الكريم',
    icon: '📖',
    accent: '#0b7a7c',
    intro: 'سورة الإخلاص تُعرّفنا بربّنا: الله واحد، وكل المخلوقات تحتاج إليه وهو لا يحتاج إلى أحد.',
    source: 'القرآن الكريم، سورة الإخلاص',
    questions: [
      { q: 'نبدأ قراءة القرآن بقول:', options: ['أعوذ بالله من الشيطان الرجيم', 'سبحان الله', 'الله أكبر'], answer: 0 },
      { q: 'كم عدد آيات سورة الإخلاص؟', options: ['٣', '٤', '٥'], answer: 1 },
      { q: 'ما أول سورة في المصحف؟', options: ['البقرة', 'الفاتحة', 'الناس'], answer: 1 },
      { q: 'معنى «أحد» في السورة هو:', options: ['كثير', 'واحد لا شريك له', 'قوي'], answer: 1 },
      { q: 'ما آخر سورة في المصحف؟', options: ['الفلق', 'الناس', 'الإخلاص'], answer: 1 },
    ],
  },
  {
    id: 'adhkar',
    title: 'الأذكار',
    icon: '🤲',
    accent: '#4a3fb0',
    intro: 'نبدأ يومنا وننهيه بذكر الله، ونقول عند الاستيقاظ من النوم.',
    source: 'صحيح البخاري',
    questions: [
      { q: 'نقول بعد الانتهاء من الأكل:', options: ['الحمد لله', 'بسم الله', 'لا شيء'], answer: 0 },
      { q: 'ماذا نقول قبل الأكل؟', options: ['بسم الله', 'سبحان الله', 'لا إله إلا الله'], answer: 0 },
      { q: 'ماذا نقول عند الاستيقاظ؟', options: ['الحمد لله الذي أحيانا بعد ما أماتنا', 'بسم الله الرحمن الرحيم', 'أستغفر الله'], answer: 0 },
      { q: 'إذا عطسنا نقول:', options: ['الحمد لله', 'بسم الله', 'سبحان الله'], answer: 0 },
      { q: 'ماذا نقول عند النوم؟', options: ['باسمك اللهم أموت وأحيا', 'الحمد لله على الطعام', 'أعوذ بالله'], answer: 0 },
    ],
  },
  {
    id: 'fiqh',
    title: 'الفقه والعبادات',
    icon: '🕌',
    accent: '#2e7d4f',
    intro: 'أركان الإسلام خمسة: الشهادتان، والصلاة، والزكاة، وصوم رمضان، وحجّ البيت لمن استطاع.',
    source: 'متفق عليه',
    questions: [
      { q: 'كم صلاة نصلّي في اليوم والليلة؟', options: ['٣', '٥', '٧'], answer: 1 },
      { q: 'أول أركان الإسلام:', options: ['الصيام', 'الشهادتان', 'الحج'], answer: 1 },
      { q: 'نصوم في شهر:', options: ['شعبان', 'رمضان', 'محرم'], answer: 1 },
      { q: 'كم ركعة في صلاة المغرب؟', options: ['٢', '٣', '٤'], answer: 1 },
      { q: 'نصلّي متجهين إلى:', options: ['الكعبة المشرفة', 'الشمس', 'القمر'], answer: 0 },
    ],
  },
  {
    id: 'ethics',
    title: 'الأخلاق والسنة',
    icon: '❤️',
    accent: '#b03a6e',
    intro: 'ديننا يعلّمنا الرحمة وحسن الكلام. الكلمة الطيبة تُفرح القلب ولها أجر.',
    source: 'متفق عليه',
    questions: [
      { q: 'الكلمة الطيبة …', options: ['صدقة', 'مزاح', 'ضع��'], answer: 0 },
      { q: 'نأكل باليد:', options: ['اليمنى', 'اليسرى', 'أي يد'], answer: 0 },
      { q: 'الابتسامة في وجه أخيك …', options: ['صدقة', 'مضيعة للوقت', 'لا قيمة لها'], answer: 0 },
      { q: 'رأيت زميلًا حزينًا في المدرسة، ماذا تفعل؟', options: ['أتجاهله', 'أواسيه بكلمة طيبة', 'أضحك عليه'], answer: 1 },
      { q: 'نقول عند اللقاء:', options: ['السلام عليكم', 'أهلاً فقط', 'لا شيء'], answer: 0 },
    ],
  },
  {
    id: 'health',
    title: 'الصحة والنظافة',
    icon: '💧',
    accent: '#2270c0',
    intro: 'جسمك أمانة: اغسل يديك، نظّف أسنانك، اشرب الماء، ونم مبكرًا.',
    source: 'منظمة الصحة العالمية',
    questions: [
      { q: 'نفرش أسناننا في اليوم:', options: ['مرتين', 'مرة كل أسبوع', 'لا نفرشها'], answer: 0 },
      { q: 'متى نغسل أيدينا؟', options: ['قبل الأكل وبعد دخول الحمام', 'عند النوم فقط', 'لا حاجة لذلك'], answer: 0 },
      { q: 'نغسل اليدين بالماء والصابون مدة لا تقل عن:', options: ['٥ ثوانٍ', '٢٠ ثانية', 'دقيقتين'], answer: 1 },
      { q: 'يحتاج الطفل من ٦ إلى ١٢ سنة إلى نحو… ساعة نوم:', options: ['٦', '٩–١٢', '١٥'], answer: 1 },
    ],
  },
  {
    id: 'science',
    title: 'المدرسة والعلوم',
    icon: '🧮',
    accent: '#b5541c',
    intro: 'تعلم الرياضيات والعلوم بطريقة ممتعة تجعل العقل أقوى.',
    source: 'المحتوى التربوي المساند',
    questions: [
      { q: 'كم يومًا في الأسبوع؟', options: ['٥', '٧', '١٠'], answer: 1 },
      { q: 'ضد كلمة كبير:', options: ['صغير', 'طويل', 'قوي'], answer: 0 },
      { q: 'كم ضلعًا في المثلث؟', options: ['٣', '٤', '٥'], answer: 0 },
      { q: 'ما الكوكب الذي نعيش عليه؟', options: ['المريخ', 'الأرض', 'الزهرة'], answer: 1 },
      { q: 'ما أقرب نجم إلى الأرض؟', options: ['الشمس', 'القمر', 'المريخ'], answer: 0 },
    ],
  },
  {
    id: 'history',
    title: 'السيرة النبوية',
    icon: '🕋',
    accent: '#a1621b',
    intro: 'وُلد النبي محمد صلى الله عليه وسلم في مكة المكرمة، وأول ما نزل عليه من القرآن في غار حراء أمرٌ بالعلم: القراءة.',
    source: 'القرآن والسيرة',
    questions: [
      { q: 'في أي مدينة وُلد النبي صلى الله عليه وسلم؟', options: ['مكة المكرمة', 'المدينة المنورة', 'القدس'], answer: 0 },
      { q: 'أول كلمة نزلت من القرآن الكريم:', options: ['اقرأ', 'قل', 'يا أيها'], answer: 0 },
      { q: 'إلى أي مدينة هاجر النبي صلى الله عليه وسلم؟', options: ['المدينة المنورة', 'الطائف', 'دمشق'], answer: 0 },
      { q: 'ما اسم أم النبي صلى الله عليه وسلم؟', options: ['آمنة بنت وهب', 'خديجة بنت خويلد', 'فاطمة بنت أسد'], answer: 0 },
      { q: 'في أي غار نزل الوحي أول مرة؟', options: ['غار حراء', 'غار ثور', 'غار أحد'], answer: 0 },
    ],
  },
];

const defaultState = {
  ageGroup: '7-8',
  name: '',
  stars: 0,
  streak: 0,
  mood: '😊',
  completed: {},
  best: {},
  settings: {
    voice: true,
    sound: true,
    quietMode: false,
  },
  lastDate: '',
  lastTipIndex: 0,
};

const tips = [
  '«الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ» متفق عليه',
  '«الطُّهُورُ شَطْرُ الْإِيمَانِ» رواه مسلم',
  '«خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ» رواه البخاري',
  'اشرب الماء، وتحرّك قليلًا، ولا تنسَ أن تبتسم 😊',
  'كل محاولة جديدة هي خطوة نحو التقدم 🌱',
];

const app = document.querySelector('#app');
let state = loadState();
let view = 'home';
let currentLesson = null;
let quizState = null;
let currentTip = 0;

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return { ...defaultState };
  try {
    const parsed = JSON.parse(saved);
    return { ...defaultState, ...parsed, settings: { ...defaultState.settings, ...parsed.settings } };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastDate !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (state.lastDate === yesterday) {
      state.streak += 1;
    } else {
      state.streak = 1;
    }
    state.lastDate = today;
    saveState();
  }
}

function speak(text) {
  if (!state.settings.voice || !('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'ar-SA';
  utter.rate = 0.9;
  utter.pitch = 1.05;
  speechSynthesis.speak(utter);
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2600);
}

function setView(next) {
  view = next;
  render();
}

function getLevelLabel(level) {
  const map = { 1: '🌱 المرحلة ١', 2: '🌿 المرحلة ٢', 3: '🌳 المرحلة ٣' };
  return map[level] || '🌱';
}

function getAgeIndex() {
  return ageGroups.findIndex((group) => group.id === state.ageGroup);
}

function getReadyLessonsCount() {
  return Object.keys(state.completed).length;
}

function toArabic(number) {
  return String(number).replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[Number(d)]);
}

function render() {
  const allViews = {
    home: renderHome,
    lesson: renderLesson,
    quiz: renderQuiz,
    result: renderResult,
    garden: renderGarden,
    activity: renderActivity,
    memory: renderMemory,
    parent: renderParent,
  };

  app.innerHTML = allViews[view]?.() ?? renderHome();
  const nav = document.querySelector('.bottom-nav');
  if (nav) {
    nav.querySelectorAll('button').forEach((button) => {
      button.classList.toggle('active', button.dataset.view === view);
    });
  }
}

function renderHome() {
  const completedCount = getReadyLessonsCount();
  const progress = Math.min(100, (completedCount / lessonCatalog.length) * 100);

  return `
    <div class="page-shell">
      <header class="topbar">
        <div class="brand-wrap">
          <div class="brand-badge">ز</div>
          <div class="brand-text">روضة الزهراء العلمية</div>
        </div>
        <div class="star-pill">⭐ ${toArabic(state.stars)}</div>
      </header>

      <main>
        <section class="welcome card hero-card">
          <div class="hero-orb">🌸</div>
          <h1>أهلاً ${state.name ? state.name : 'بطلنا'}</h1>
          <p>رحلة تعليمية ممتعة ومفيدة لك، مقسمة إلى القرآن، الأذكار، الأخلاق، العلوم، والصحة.</p>
          <div class="moods">
            ${['😊','😐','😢'].map((m) => `
              <button class="mood ${state.mood === m ? 'selected' : ''}" data-mood="${m}">${m}</button>
            `).join('')}
          </div>
          <p class="mood-text">${state.mood === '😊' ? 'يا سلام! لنتعلّم شيئًا جميلًا اليوم 🌟' : state.mood === '😐' ? 'لا بأس، نبدأ بدروس صغيرة ونستمتع 💛' : 'أنا معك 💛 تكلّم مع الوالدين إن احتجت إلى دعم.'}</p>
        </section>

        <section class="card profile-card">
          <label class="field-label">اسم الطفل</label>
          <input id="name-input" class="text-input" value="${state.name}" placeholder="اكتب اسمك" />
          <label class="field-label">العمر</label>
          <div class="segmented">
            ${ageGroups.map((group) => `
              <button class="segment ${state.ageGroup === group.id ? 'active' : ''}" data-age-group="${group.id}">${group.label}</button>
            `).join('')}
          </div>
        </section>

        <section class="card quote-card">
          <div class="quote-box">${tips[currentTip % tips.length]}</div>
          <div class="row-actions">
            <button class="mini-btn" id="read-tip">🔊 استمع</button>
            <button class="mini-btn ghost" id="new-tip">تغيير</button>
          </div>
        </section>

        <section class="card progress-card">
          <div class="section-title">تقدم اليوم</div>
          <div class="progress-bar"><span style="width:${progress}%"></span></div>
          <div class="progress-meta">${toArabic(completedCount)} / ${toArabic(lessonCatalog.length)} درس مكتمل</div>
        </section>

        <section class="grid-card">
          ${lessonCatalog.map((lesson) => `
            <button class="lesson-tile" data-lesson-id="${lesson.id}" style="--tile:${lesson.accent};">
              <span class="tile-emoji">${lesson.icon}</span>
              <span>${lesson.title}</span>
              <small>${state.completed[lesson.id] ? '✅ مكتمل' : 'ابدأ الآن'}</small>
            </button>
          `).join('')}
        </section>

        <div class="cta-stack">
          <button class="primary-btn" id="start-exam">🏁 اختبار شامل</button>
          <button class="secondary-btn" id="open-activity">🎯 نشاطات تطبيقية</button>
          <button class="secondary-btn" id="open-memory">🧠 مختبر الحفظ</button>
        </div>
      </main>

      <nav class="bottom-nav">
        <button data-view="home" class="active">🏠<span>الرئيسية</span></button>
        <button data-view="garden">🌳<span>حديقتي</span></button>
        <button data-view="parent">👨‍👩‍👧<span>الأهل</span></button>
      </nav>
    </div>
  `;
}

function renderLesson() {
  const lesson = currentLesson ?? lessonCatalog[0];
  return `
    <div class="page-shell">
      <header class="topbar compact">
        <button class="back-btn" id="back-home">رجوع</button>
        <div class="brand-small">${lesson.icon} ${lesson.title}</div>
      </header>

      <main>
        <section class="card intro-card">
          <h2>${lesson.icon} ${lesson.title}</h2>
          <p>${lesson.intro}</p>
          <div class="source-tag">📚 المصدر: ${lesson.source}</div>
          <button class="secondary-btn" id="read-lesson">🔊 استمع للشرح</button>
        </section>

        <section class="card stages-card">
          <div class="section-title">اختر المرحلة</div>
          <div class="stage-list">
            ${[1, 2, 3].map((level) => {
              const earned = state.best[lesson.id]?.level ?? 0;
              const unlocked = level === 1 || earned >= level - 1 || state.completed[lesson.id];
              return `
                <button class="stage-item ${unlocked ? 'unlock' : 'locked'}" data-level="${level}">
                  ${['🌱', '🌿', '🌳'][level - 1]} ${getLevelLabel(level)} ${level <= (earned || 1) ? '✅' : unlocked ? 'متاح' : '🔒'}
                </button>
              `;
            }).join('')}
          </div>
        </section>
      </main>
    </div>
  `;
}

function renderQuiz() {
  if (!quizState || !quizState.list.length) {
    return renderHome();
  }

  const current = quizState.list[quizState.index];
  const selected = quizState.selected;
  const answerState = selected !== null ? current.options.map((option, index) => ({ value: option, correct: index === current.answer, selected: index === selected })) : current.options.map((option) => ({ value: option, correct: false, selected: false }));

  return `
    <div class="page-shell">
      <header class="topbar compact">
        <button class="back-btn" id="back-home">رجوع</button>
        <div class="brand-small">${currentLesson?.icon ?? '🏁'} ${currentLesson?.title ?? 'الاختبار'}</div>
      </header>

      <main>
        <section class="card quiz-card">
          <div class="progress-bar small"><span style="width:${((quizState.index + 1) / quizState.list.length) * 100}%"></span></div>
          <div class="question-index">السؤال ${toArabic(quizState.index + 1)} من ${toArabic(quizState.list.length)}</div>
          <h3>${current.q}</h3>
          <button class="mini-btn full" id="read-question">🔊 اسمع السؤال</button>

          <div class="answer-list">
            ${current.options.map((option, index) => {
              const isCorrect = current.answer === index;
              const isSelected = selected === index;
              const className = selected === null ? 'answer-item' : isCorrect ? 'answer-item correct' : isSelected ? 'answer-item wrong' : 'answer-item';
              return `
                <button class="${className}" data-answer-index="${index}">${option}</button>
              `;
            }).join('')}
          </div>

          ${selected !== null ? `
            <div class="result-banner ${current.answer === selected ? 'positive' : 'negative'}">
              ${current.answer === selected ? '✅ أحسنت! اجابة صحيحة.' : '💡 لا يهم، التعلم يكون بالمحاولة.'}
            </div>
            <button class="primary-btn" id="next-question">${quizState.index + 1 < quizState.list.length ? 'السؤال التالي' : 'النتيجة'}</button>
          ` : `
            <button class="secondary-btn" id="show-hint">🌸 تلميح</button>
          `}
        </section>
      </main>
    </div>
  `;
}

function renderResult() {
  const total = quizState?.list.length ?? 0;
  const correct = quizState?.correct ?? 0;
  const percent = total ? (correct / total) * 100 : 0;
  const achieved = percent >= 60;

  if (currentLesson) {
    state.completed[currentLesson.id] = true;
    if (!state.best[currentLesson.id]) state.best[currentLesson.id] = { score: 0, level: 1 };
    const best = state.best[currentLesson.id];
    if (correct > best.score) {
      best.score = correct;
      best.level = Math.min(3, Math.max(1, Math.ceil(percent / 33)));
    }
    saveState();
  }

  return `
    <div class="page-shell">
      <main>
        <section class="card result-card">
          <div class="result-badge">${percent >= 70 ? '🏆' : '🌟'}</div>
          <h2>${currentLesson ? `أتممت درس ${currentLesson.title}` : 'انتهى الاختبار'}</h2>
          <p>أجبت صحيحًا على ${toArabic(correct)} من ${toArabic(total)} سؤال.</p>
          <div class="result-meter"><span style="width:${percent}%"></span></div>
          <div class="result-score">${toArabic(correct)} ⭐</div>
          <div class="cta-stack compact">
            <button class="primary-btn" id="return-home">الرئيسية</button>
            <button class="secondary-btn" id="open-garden">الحديقة 🌳</button>
          </div>
          ${achieved ? '<div class="certificate">🎓 شهادة تقدير</div>' : ''}
        </section>
      </main>
    </div>
  `;
}

function renderGarden() {
  const levelMap = [
    { label: 'بذرة', icon: '🌱', threshold: 0 },
    { label: 'نبتة', icon: '🌿', threshold: 6 },
    { label: 'شجرة', icon: '🌳', threshold: 15 },
    { label: 'حديقة مزهرة', icon: '🌸', threshold: 30 },
  ];

  const currentLevel = levelMap.filter((level) => state.stars >= level.threshold).at(-1) ?? levelMap[0];
  const nextLevel = levelMap.find((level) => state.stars < level.threshold) ?? levelMap[levelMap.length - 1];

  return `
    <div class="page-shell">
      <header class="topbar compact">
        <div class="brand-small">حديقتي 🌱</div>
      </header>

      <main>
        <section class="card garden-card">
          <div class="result-badge large">${currentLevel.icon}</div>
          <h2>${currentLevel.label}</h2>
          <p class="muted">${toArabic(state.stars)} نجمة</p>
          <p class="muted">${state.stars < nextLevel.threshold ? `تبقى ${toArabic(nextLevel.threshold - state.stars)} نجمة للوصول إلى ${nextLevel.label}` : 'لقد وصلت إلى أعلى مستوى!'}</p>
        </section>

        <section class="card garden-grid">
          <div class="section-title">أوسمتي</div>
          <div class="badge-row">
            ${lessonCatalog.map((lesson) => `
              <span class="badge ${state.completed[lesson.id] ? 'done' : 'off'}" title="${lesson.title}">${lesson.icon}</span>
            `).join('')}
          </div>
        </section>
      </main>

      <nav class="bottom-nav">
        <button data-view="home">🏠<span>الرئيسية</span></button>
        <button data-view="garden" class="active">🌳<span>حديقتي</span></button>
        <button data-view="parent">👨‍👩‍👧<span>الأهل</span></button>
      </nav>
    </div>
  `;
}

function renderActivity() {
  const steps = ['النية في القلب', 'غسل الكفين', 'المضمضة والاستنشاق', 'غسل الوجه', 'غسل اليدين إلى المرفقين', 'مسح الرأس', 'غسل الرجلين إلى الكعبين'];
  let doneSteps = state.activityStepOrder ?? [];
  return `
    <div class="page-shell">
      <header class="topbar compact">
        <button class="back-btn" id="back-home">رجوع</button>
        <div class="brand-small">🎯 نشاطات تطبيقية</div>
      </header>

      <main>
        <section class="card activity-card">
          <h3>رتب خطوات الوضوء</h3>
          <div class="step-list">
            ${steps.map((step, index) => `
              <button class="step-button ${doneSteps.includes(index) ? 'done' : ''}" data-step-index="${index}">${index + 1}. ${step}</button>
            `).join('')}
          </div>
          <button class="primary-btn" id="complete-activity">✔ أكملت النشاط (+2 ⭐)</button>
        </section>
      </main>
    </div>
  `;
}

function renderMemory() {
  const verses = [
    'قُلْ هُوَ ٱللّٰهُ أَحَدٌ',
    'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
    'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
  ];
  return `
    <div class="page-shell">
      <header class="topbar compact">
        <button class="back-btn" id="back-home">رجوع</button>
        <div class="brand-small">🧠 مختبر الحفظ</div>
      </header>

      <main>
        <section class="card memory-card">
          <h3>اختر آية للحفظ</h3>
          <div class="verse-items">
            ${verses.map((verse) => `
              <button class="verse-btn" data-verse="${verse}">${verse}</button>
            `).join('')}
          </div>
          <button class="primary-btn" id="remember-verse">✔ حفظت الآية (+1 ⭐)</button>
        </section>
      </main>
    </div>
  `;
}

function renderParent() {
  return `
    <div class="page-shell">
      <header class="topbar compact">
        <div class="brand-small">👨‍👩‍👧 لوحة الأهل</div>
      </header>

      <main>
        <section class="card parent-card">
          <div class="section-title">مستوى التطور</div>
          <ul class="stats-list">
            ${lessonCatalog.map((lesson) => `
              <li>
                <span>${lesson.icon} ${lesson.title}</span>
                <small>${state.completed[lesson.id] ? 'مكتمل' : 'قيد التنفيذ'}</small>
              </li>
            `).join('')}
          </ul>
        </section>

        <section class="card parent-card">
          <div class="section-title">الإعدادات</div>
          <label class="setting-row">
            <input type="checkbox" ${state.settings.voice ? 'checked' : ''} id="toggle-voice" />
            <span>الصوت</span>
          </label>
          <label class="setting-row">
            <input type="checkbox" ${state.settings.sound ? 'checked' : ''} id="toggle-sound" />
            <span>الأصوات التفاعلية</span>
          </label>
          <label class="setting-row">
            <input type="checkbox" ${state.settings.quietMode ? 'checked' : ''} id="toggle-quiet" />
            <span>الوضع الهادئ</span>
          </label>
        </section>
      </main>

      <nav class="bottom-nav">
        <button data-view="home">🏠<span>الرئيسية</span></button>
        <button data-view="garden">🌳<span>حديقتي</span></button>
        <button data-view="parent" class="active">👨‍👩‍👧<span>الأهل</span></button>
      </nav>
    </div>
  `;
}

function bindHomeEvents() {
  app.querySelectorAll('[data-mood]').forEach((button) => {
    button.addEventListener('click', () => {
      state.mood = button.dataset.mood;
      saveState();
      render();
    });
  });

  const nameInput = app.querySelector('#name-input');
  if (nameInput) {
    nameInput.addEventListener('input', (event) => {
      state.name = event.target.value.trim().slice(0, 18);
      saveState();
    });
  }

  app.querySelectorAll('[data-age-group]').forEach((button) => {
    button.addEventListener('click', () => {
      state.ageGroup = button.dataset.ageGroup;
      saveState();
      render();
    });
  });

  app.querySelectorAll('.lesson-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const lesson = lessonCatalog.find((item) => item.id === tile.dataset.lessonId);
      currentLesson = lesson;
      setView('lesson');
    });
  });

  const startExam = document.querySelector('#start-exam');
  startExam?.addEventListener('click', () => {
    const all = lessonCatalog.flatMap((lesson) => lesson.questions.map((q) => ({ ...q, lessonId: lesson.id, lessonTitle: lesson.title })));
    quizState = {
      list: all,
      index: 0,
      selected: null,
      correct: 0,
    };
    currentLesson = null;
    setView('quiz');
  });

  const openActivity = document.querySelector('#open-activity');
  openActivity?.addEventListener('click', () => {
    setView('activity');
  });

  const openMemory = document.querySelector('#open-memory');
  openMemory?.addEventListener('click', () => {
    setView('memory');
  });

  const readTip = document.querySelector('#read-tip');
  readTip?.addEventListener('click', () => speak(tips[currentTip % tips.length]));

  const newTip = document.querySelector('#new-tip');
  newTip?.addEventListener('click', () => {
    currentTip += 1;
    render();
  });

  document.querySelectorAll('.bottom-nav button').forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });
}

function bindLessonEvents() {
  const back = document.querySelector('#back-home');
  back?.addEventListener('click', () => setView('home'));

  const readLesson = document.querySelector('#read-lesson');
  readLesson?.addEventListener('click', () => speak(currentLesson?.intro || ''));

  document.querySelectorAll('.stage-item').forEach((button) => {
    button.addEventListener('click', () => {
      const level = Number(button.dataset.level);
      const lesson = currentLesson;
      if (!lesson) return;

      const filteredQuestions = lesson.questions.filter((_, index) => index < level * 2 + 1 || level === 3).slice(0, 5);
      quizState = {
        list: filteredQuestions,
        index: 0,
        selected: null,
        correct: 0,
      };
      setView('quiz');
    });
  });
}

function bindQuizEvents() {
  const back = document.querySelector('#back-home');
  back?.addEventListener('click', () => setView('home'));

  const readQuestion = document.querySelector('#read-question');
  readQuestion?.addEventListener('click', () => {
    const q = quizState.list[quizState.index];
    speak(`${q.q}. الخيارات: ${q.options.join(', ')}`);
  });

  app.querySelectorAll('[data-answer-index]').forEach((button) => {
    button.addEventListener('click', () => {
      if (quizState.selected !== null) return;
      const index = Number(button.dataset.answerIndex);
      quizState.selected = index;
      if (index === quizState.list[quizState.index].answer) {
        quizState.correct += 1;
        state.stars += 1;
        saveState();
        showToast('أحسنت! +1 ⭐');
      }
      render();
    });
  });

  const next = document.querySelector('#next-question');
  next?.addEventListener('click', () => {
    if (quizState.index + 1 < quizState.list.length) {
      quizState.index += 1;
      quizState.selected = null;
      render();
    } else {
      setView('result');
    }
  });

  const hint = document.querySelector('#show-hint');
  hint?.addEventListener('click', () => {
    showToast('تلميح: راجع النص ثم اختر الإجابة المناسبة.');
  });
}

function bindResultEvents() {
  const returnHome = document.querySelector('#return-home');
  returnHome?.addEventListener('click', () => setView('home'));

  const openGarden = document.querySelector('#open-garden');
  openGarden?.addEventListener('click', () => setView('garden'));
}

function bindGardenEvents() {
  const navButtons = document.querySelectorAll('.bottom-nav button');
  navButtons.forEach((button) => {
    button.addEventListener('click', () => setView(button.dataset.view));
  });
}

function bindActivityEvents() {
  const back = document.querySelector('#back-home');
  back?.addEventListener('click', () => setView('home'));

  const buttons = app.querySelectorAll('.step-button');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const stepIndex = Number(button.dataset.stepIndex);
      const updated = [...(state.activityStepOrder ?? [])];
      if (updated.includes(stepIndex)) {
        state.activityStepOrder = updated.filter((item) => item !== stepIndex);
      } else {
        state.activityStepOrder = [...updated, stepIndex];
      }
      saveState();
      render();
    });
  });

  const complete = document.querySelector('#complete-activity');
  complete?.addEventListener('click', () => {
    const expected = 7;
    const actual = state.activityStepOrder?.length ?? 0;
    if (actual === expected) {
      state.stars += 2;
      showToast('أحسنت! تم إتمام النشاط +2 ⭐');
      saveState();
    } else {
      showToast('حاول ترتيب الخطوات بالترتيب الصحيح.');
    }
    setView('home');
  });
}

function bindMemoryEvents() {
  const back = document.querySelector('#back-home');
  back?.addEventListener('click', () => setView('home'));

  app.querySelectorAll('.verse-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const verse = button.dataset.verse;
      speak(verse);
      button.classList.toggle('selected');
    });
  });

  const remember = document.querySelector('#remember-verse');
  remember?.addEventListener('click', () => {
    state.stars += 1;
    saveState();
    showToast('تم حفظ الآية +1 ⭐');
    setView('home');
  });
}

function bindParentEvents() {
  const voiceToggle = document.querySelector('#toggle-voice');
  voiceToggle?.addEventListener('change', (event) => {
    state.settings.voice = event.target.checked;
    saveState();
  });

  const soundToggle = document.querySelector('#toggle-sound');
  soundToggle?.addEventListener('change', (event) => {
    state.settings.sound = event.target.checked;
    saveState();
  });

  const quietToggle = document.querySelector('#toggle-quiet');
  quietToggle?.addEventListener('change', (event) => {
    state.settings.quietMode = event.target.checked;
    saveState();
  });
}

function attachGlobalEvents() {
  app.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.matches('.back-btn')) {
      setView('home');
      return;
    }

    if (target.matches('#return-home')) {
      setView('home');
      return;
    }

    if (target.matches('[data-view]')) {
      setView(target.dataset.view);
      return;
    }
  });
}

function renderAndBind() {
  render();
  switch (view) {
    case 'home':
      bindHomeEvents();
      break;
    case 'lesson':
      bindLessonEvents();
      break;
    case 'quiz':
      bindQuizEvents();
      break;
    case 'result':
      bindResultEvents();
      break;
    case 'garden':
      bindGardenEvents();
      break;
    case 'activity':
      bindActivityEvents();
      break;
    case 'memory':
      bindMemoryEvents();
      break;
    case 'parent':
      bindParentEvents();
      break;
    default:
      break;
  }
}

attachGlobalEvents();
updateStreak();
renderAndBind();

window.addEventListener('storage', () => {
  state = loadState();
  render();
});
