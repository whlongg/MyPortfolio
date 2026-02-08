import { beforeEach, describe, expect, it, vi } from 'vitest';

const setBaseDom = () => {
    document.documentElement.setAttribute('lang', 'vi');
    document.body.innerHTML = `
        <button id="theme-toggle"></button>
        <span class="sun-icon"></span>
        <span class="moon-icon"></span>
        <button id="lang-toggle"></button>
        <span class="lang-label-en"></span>
        <span class="lang-label-vi"></span>
        <a href="#section" id="navLink">Go</a>
        <div id="section"></div>
        <button id="playBtn"></button>
        <div id="musicDisc"></div>
        <span class="play-icon"></span>
        <span class="pause-icon"></span>
        <audio id="audioPlayer"></audio>
        <span data-i18n="hero.title"></span>
        <img data-i18n-alt="hero.imageAlt" />
        <span data-i18n-title="hero.tooltip"></span>
    `;
};

const loadApp = async () => {
    vi.resetModules();
    await import('../script.js');
    return globalThis.PortfolioApp;
};

beforeEach(() => {
    const storage = (() => {
        let store = {};
        return {
            getItem: (key) => (key in store ? store[key] : null),
            setItem: (key, value) => {
                store[key] = String(value);
            },
            removeItem: (key) => {
                delete store[key];
            },
            clear: () => {
                store = {};
            }
        };
    })();

    globalThis.localStorage = storage;
    localStorage.clear();
    window.translations = {
        vi: {
            hero: {
                title: 'Xin chào',
                imageAlt: 'Ảnh đại diện',
                tooltip: 'Thông tin'
            }
        },
        en: {
            hero: {
                title: 'Hello',
                imageAlt: 'Avatar',
                tooltip: 'Details'
            }
        }
    };
    setBaseDom();
});

describe('i18n utilities', () => {
    it('resolves nested translations', async () => {
        const app = await loadApp();

        expect(app.getTranslation('vi', 'hero.title')).toBe('Xin chào');
        expect(app.getTranslation('en', 'hero.title')).toBe('Hello');
        expect(app.getTranslation('vi', 'hero.missing')).toBeNull();
    });

    it('applies translation attributes to elements', async () => {
        const app = await loadApp();

        app.applyTranslations('vi');

        const textElement = document.querySelector('[data-i18n="hero.title"]');
        const imageElement = document.querySelector('[data-i18n-alt="hero.imageAlt"]');
        const titleElement = document.querySelector('[data-i18n-title="hero.tooltip"]');

        expect(textElement.textContent).toBe('Xin chào');
        expect(imageElement.getAttribute('alt')).toBe('Ảnh đại diện');
        expect(titleElement.getAttribute('title')).toBe('Thông tin');
    });

    it('updates language labels and document attribute', async () => {
        const app = await loadApp();

        app.setLanguage('en');

        expect(document.documentElement.getAttribute('lang')).toBe('en');
        expect(document.querySelector('.lang-label-en').style.display).toBe('inline');
        expect(document.querySelector('.lang-label-vi').style.display).toBe('none');
    });

    it('handles missing translations gracefully', async () => {
        const app = await loadApp();

        app.setLanguage('fr');

        expect(document.documentElement.getAttribute('lang')).toBe('vi');
    });
});

describe('theme and interaction utilities', () => {
    it('toggles theme when clicking the button', async () => {
        const app = await loadApp();

        const themeButton = document.getElementById('theme-toggle');
        themeButton.dispatchEvent(new Event('click', { bubbles: true }));

        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(document.querySelector('.sun-icon').style.display).toBe('none');
        expect(document.querySelector('.moon-icon').style.display).toBe('block');
    });

    it('updates theme and icon visibility', async () => {
        const app = await loadApp();

        app.setTheme('light');

        expect(document.documentElement.getAttribute('data-theme')).toBe('light');
        expect(document.querySelector('.sun-icon').style.display).toBe('none');
        expect(document.querySelector('.moon-icon').style.display).toBe('block');
    });

    it('initializes smooth scroll when Lenis is available', async () => {
        globalThis.requestAnimationFrame = vi.fn();
        const scrollSpy = vi.fn();
        globalThis.Lenis = class {
            constructor() {
                this.raf = vi.fn();
                this.scrollTo = scrollSpy;
            }
        };

        const app = await loadApp();
        app.initSmoothScroll();

        const navLink = document.getElementById('navLink');
        navLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));

        expect(scrollSpy).toHaveBeenCalled();
        delete globalThis.Lenis;
    });

    it('handles language toggle transitions', async () => {
        vi.useFakeTimers();
        const app = await loadApp();

        const languageButton = document.getElementById('lang-toggle');
        languageButton.dispatchEvent(new Event('click', { bubbles: true }));
        languageButton.dispatchEvent(new Event('click', { bubbles: true }));

        expect(document.body.classList.contains('lang-transition')).toBe(true);
        vi.runAllTimers();
        expect(document.body.classList.contains('lang-transition')).toBe(false);

        vi.useRealTimers();
        app.setLanguage('en');
    });

    it('handles music playback UI updates', async () => {
        const app = await loadApp();

        const audio = document.getElementById('audioPlayer');
        audio.play = vi.fn(() => Promise.resolve());
        audio.pause = vi.fn();

        app.initMusicPlayer();
        document.getElementById('playBtn').dispatchEvent(new Event('click', { bubbles: true }));

        await audio.play.mock.results[0].value;
        await Promise.resolve();

        expect(document.getElementById('musicDisc').classList.contains('playing')).toBe(true);
        expect(document.querySelector('.pause-icon').style.display).toBe('block');
    });

    it('pauses music on second interaction', async () => {
        vi.useFakeTimers();
        const app = await loadApp();

        const audio = document.getElementById('audioPlayer');
        audio.play = vi.fn(() => Promise.resolve());
        audio.pause = vi.fn();

        app.initMusicPlayer();
        const playButton = document.getElementById('playBtn');
        vi.setSystemTime(new Date('2025-01-01T00:00:00Z'));
        playButton.dispatchEvent(new Event('click', { bubbles: true }));
        await audio.play.mock.results[0].value;
        vi.setSystemTime(new Date('2025-01-01T00:00:01Z'));
        playButton.dispatchEvent(new Event('click', { bubbles: true }));

        expect(audio.pause).toHaveBeenCalled();
        expect(document.getElementById('musicDisc').classList.contains('playing')).toBe(false);
        vi.useRealTimers();
    });

    it('reverts UI when audio play fails', async () => {
        const app = await loadApp();

        const audio = document.getElementById('audioPlayer');
        audio.play = vi.fn(() => Promise.reject(new Error('fail')));
        audio.pause = vi.fn();

        app.initMusicPlayer();
        document.getElementById('playBtn').dispatchEvent(new Event('click', { bubbles: true }));

        try {
            await audio.play.mock.results[0].value;
        } catch (error) {
            await Promise.resolve();
        }
        await Promise.resolve();

        expect(document.getElementById('musicDisc').classList.contains('playing')).toBe(false);
        expect(document.querySelector('.pause-icon').style.display).toBe('none');
    });

    it('uses pointer events when supported', async () => {
        const previousPointerEvent = window.PointerEvent;
        window.PointerEvent = function PointerEvent() { };
        const app = await loadApp();

        const audio = document.getElementById('audioPlayer');
        audio.play = vi.fn(() => Promise.resolve());
        audio.pause = vi.fn();

        app.initMusicPlayer();
        document.getElementById('playBtn').dispatchEvent(new Event('pointerup', { bubbles: true }));

        await audio.play.mock.results[0].value;
        await Promise.resolve();

        expect(document.getElementById('musicDisc').classList.contains('playing')).toBe(true);

        window.PointerEvent = previousPointerEvent;
    });
});
