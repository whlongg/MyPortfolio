const rootElement = document.documentElement;
const themeToggleButton = document.getElementById('theme-toggle');
const languageToggleButton = document.getElementById('lang-toggle');
const themeIcons = {
    sun: document.querySelector('.sun-icon'),
    moon: document.querySelector('.moon-icon')
};
const languageLabels = {
    en: document.querySelector('.lang-label-en'),
    vi: document.querySelector('.lang-label-vi')
};

const STORAGE_KEYS = { theme: 'theme', lang: 'lang' };
const translations = window.translations || {};
let currentLanguage = localStorage.getItem(STORAGE_KEYS.lang) || rootElement.getAttribute('lang') || 'vi';
let languageTransitionTimerId;

function updateThemeIcon(theme) {
    if (!themeIcons.sun || !themeIcons.moon) return;
    const isDark = theme === 'dark';
    themeIcons.sun.style.display = isDark ? 'block' : 'none';
    themeIcons.moon.style.display = isDark ? 'none' : 'block';
}

function setTheme(theme) {
    rootElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
    updateThemeIcon(theme);
}

function initThemeToggle() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.theme) || 'dark';
    setTheme(savedTheme);

    if (!themeToggleButton) return;
    themeToggleButton.addEventListener('click', () => {
        const currentTheme = rootElement.getAttribute('data-theme');
        const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(nextTheme);
    });
}

/**
 * Resolve an i18n key with dot notation from the translation dictionary.
 */
function getTranslation(lang, key) {
    return key.split('.').reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : null), translations[lang]);
}

/**
 * Apply translations to elements that declare i18n data attributes.
 */
function applyTranslations(lang) {
    const translationTargets = [
        {
            key: 'data-i18n',
            apply: (element, value) => {
                const attribute = element.getAttribute('data-i18n-attr');
                if (attribute) element.setAttribute(attribute, value);
                else element.textContent = value;
            }
        },
        { key: 'data-i18n-title', apply: (element, value) => element.setAttribute('title', value) },
        { key: 'data-i18n-alt', apply: (element, value) => element.setAttribute('alt', value) }
    ];

    document.querySelectorAll('[data-i18n],[data-i18n-title],[data-i18n-alt]').forEach((element) => {
        translationTargets.forEach(({ key, apply }) => {
            const translationKey = element.getAttribute(key);
            if (!translationKey) return;
            const value = getTranslation(lang, translationKey);
            if (value !== null) apply(element, value);
        });
    });
}

/**
 * Trigger a brief visual transition when switching languages.
 */
function triggerLanguageTransition() {
    document.body.classList.add('lang-transition');
    if (languageTransitionTimerId) clearTimeout(languageTransitionTimerId);
    languageTransitionTimerId = setTimeout(() => {
        document.body.classList.remove('lang-transition');
    }, 200);
}

function updateLanguageLabel(lang) {
    if (!languageLabels.en || !languageLabels.vi) return;
    const isEnglish = lang === 'en';
    languageLabels.en.style.display = isEnglish ? 'inline' : 'none';
    languageLabels.vi.style.display = isEnglish ? 'none' : 'inline';
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    rootElement.setAttribute('lang', lang);
    localStorage.setItem(STORAGE_KEYS.lang, lang);
    applyTranslations(lang);
    updateLanguageLabel(lang);
    triggerLanguageTransition();
}

function initLanguageToggle() {
    setLanguage(currentLanguage);

    if (!languageToggleButton) return;
    languageToggleButton.addEventListener('click', () => {
        const nextLanguage = currentLanguage === 'vi' ? 'en' : 'vi';
        setLanguage(nextLanguage);
    });
}

/**
 * Initialize smooth scroll with Lenis when the library is available.
 */
function initSmoothScroll() {
    if (typeof Lenis === 'undefined') return;

    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2
    });

    const animate = (time) => {
        lenis.raf(time);
        requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (event) => {
            const target = anchor.getAttribute('href');
            if (!target) return;
            event.preventDefault();
            lenis.scrollTo(target);
        });
    });
}

/**
 * Initialize the music player UI and playback state handling.
 */
function initMusicPlayer() {
    const playButton = document.getElementById('playBtn');
    const audio = document.getElementById('audioPlayer');
    const disc = document.getElementById('musicDisc');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    if (!playButton || !audio || !disc || !playIcon || !pauseIcon) return;

    let isPlaying = false;
    audio.volume = 0.4;

    const updatePlaybackUI = (playing) => {
        disc.classList.toggle('playing', playing);
        playIcon.style.display = playing ? 'none' : 'block';
        pauseIcon.style.display = playing ? 'block' : 'none';
        disc.style.transform = playing ? '' : 'rotate(0deg)';
    };

    let lastInteractionAt = 0;
    const handleToggle = (event) => {
        const now = Date.now();
        if (event && event.type === 'click' && now - lastInteractionAt < 400) return;
        lastInteractionAt = now;
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            updatePlaybackUI(false);
            return;
        }

        const playPromise = audio.play();
        isPlaying = true;
        updatePlaybackUI(true);

        if (!playPromise) return;

        playPromise.catch(() => {
            isPlaying = false;
            updatePlaybackUI(false);
        });
    };

    if (window.PointerEvent) {
        playButton.addEventListener('pointerup', handleToggle);
        playButton.addEventListener('click', handleToggle);
    } else {
        playButton.addEventListener('touchend', handleToggle);
        playButton.addEventListener('click', handleToggle);
    }
}

initThemeToggle();
initLanguageToggle();
initSmoothScroll();

document.addEventListener('DOMContentLoaded', () => {
    initMusicPlayer();
});

const portfolioApp = {
    applyTranslations,
    getTranslation,
    initMusicPlayer,
    initSmoothScroll,
    setLanguage,
    setTheme,
    updateThemeIcon
};

globalThis.PortfolioApp = portfolioApp;
