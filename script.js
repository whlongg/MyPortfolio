// 1. Logic Dark Mode / Light Mode
const btn = document.getElementById('theme-toggle');
const sun = document.querySelector('.sun-icon');
const moon = document.querySelector('.moon-icon');
const html = document.documentElement;
const langBtn = document.getElementById('lang-toggle');
const langLabelEn = document.querySelector('.lang-label-en');
const langLabelVi = document.querySelector('.lang-label-vi');

const STORAGE = { theme: 'theme', lang: 'lang' };
const CONTACT_EMAIL = 'nhl08.contact@gmail.com';
const savedTheme = localStorage.getItem(STORAGE.theme) || 'dark';
html.setAttribute('data-theme', savedTheme);
updateIcon(savedTheme);

btn.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', next);
    localStorage.setItem(STORAGE.theme, next);
    updateIcon(next);
});

function updateIcon(theme) {
    if (theme === 'dark') {
        sun.style.display = 'block';
        moon.style.display = 'none';
    } else {
        sun.style.display = 'none';
        moon.style.display = 'block';
    }
}

const translations = {
    vi: {
        meta: { title: 'Portfolio - AstrelixDev' },
        brand: { logo: 'Portfolio' },
        nav: { home: 'Trang chủ', portfolio: 'Dự án', skills: 'Kỹ năng', contact: 'Liên hệ' },
        hero: {
            title: 'Được tạo nên với sự chính xác',
            desc: 'Thiết kế tối giản, đẹp mắt đi cùng tính năng mạnh mẽ',
            cta: 'Khám phá dự án'
        },
        portfolio: {
            title: 'Dự án nổi bật',
            web: { title: 'Thiết kế web', desc: 'Giao diện tối giản, tinh tế, tập trung vào trải nghiệm và thẩm mỹ.' },
            react: { title: 'Ứng dụng React', desc: 'Ứng dụng React hiện đại với quản lý trạng thái, routing và API mượt mà.' },
            backend: { title: 'Backend API', desc: 'RESTful API vững chắc với xác thực người dùng và quản lý CSDL toàn diện.' },
            mobile: { title: 'Ứng dụng di động', desc: 'Ứng dụng mobile responsive tối ưu cho mọi thiết bị và kích thước màn hình.' },
            ecommerce: { title: 'Thương mại điện tử', desc: 'Nền tảng e-commerce an toàn với thanh toán và quản lý tồn kho.' },
            dashboard: { title: 'Dashboard phân tích', desc: 'Dashboard thời gian thực với biểu đồ tương tác và trực quan dữ liệu.' }
        },
        quote: '"Thiết kế không chỉ là vẻ ngoài hay cảm giác. Thiết kế là cách nó hoạt động."',
        skills: {
            title: 'Kỹ năng cốt lõi',
            uiux: 'Thiết kế UI/UX',
            alt: { css3: 'CSS3', js: 'JavaScript', react: 'React', node: 'Node.js', mongo: 'MongoDB' }
        },
        contact: {
            title: 'Kết nối với tôi',
            desc: 'Hãy cùng tạo ra điều tuyệt vời.',
            email: { placeholder: 'Email của bạn' },
            phone: { placeholder: 'Số điện thoại của bạn', title: 'Vui lòng nhập số điện thoại hợp lệ 10 chữ số' },
            submit: 'Gửi tin nhắn',
            alert: 'Cảm ơn bro! Thông tin đã được gửi (Giả lập).',
            mailSubject: 'Liên hệ từ Portfolio',
            mailBody: 'Email: {{email}}\nSĐT: {{phone}}'
        },
        footer: { copy: '© 2025 Portfolio. Tất cả quyền được bảo lưu.' },
        music: { title: 'Chế độ code: BẬT', artist: 'Chill Lofi Beats' },
        aria: {
            themeToggle: 'Chuyển chế độ sáng/tối',
            langToggle: 'Chuyển ngôn ngữ',
            playPause: 'Phát/Tạm dừng nhạc',
            github: 'GitHub',
            email: 'Email'
        },
        tags: {
            html: 'HTML', css: 'CSS', design: 'Design', react: 'React', javascript: 'JavaScript', api: 'API',
            node: 'Node.js', mongo: 'MongoDB', express: 'Express', reactNative: 'React Native', firebase: 'Firebase',
            mobile: 'Mobile', fullStack: 'Full Stack', payment: 'Thanh toán', security: 'Bảo mật',
            dataViz: 'Data Viz', chartjs: 'Chart.js', analytics: 'Phân tích'
        }
    },
    en: {
        meta: { title: 'Portfolio - AstrelixDev' },
        brand: { logo: 'Portfolio' },
        nav: { home: 'Home', portfolio: 'Projects', skills: 'Skills', contact: 'Contact' },
        hero: {
            title: 'Crafted with Precision',
            desc: 'Beautiful, minimal design meets powerful functionality',
            cta: 'Explore My Work'
        },
        portfolio: {
            title: 'Featured Projects',
            web: { title: 'Web Design', desc: 'Minimal, elegant interfaces with focus on user experience and clean aesthetics.' },
            react: { title: 'React App', desc: 'Modern React applications with state management, routing and seamless API integration.' },
            backend: { title: 'Backend API', desc: 'Robust RESTful APIs with user authentication and comprehensive database management.' },
            mobile: { title: 'Mobile App', desc: 'Responsive mobile applications optimized for all screen sizes and devices.' },
            ecommerce: { title: 'E-Commerce', desc: 'Secure e-commerce platforms with integrated payment systems and inventory management.' },
            dashboard: { title: 'Dashboard Analytics', desc: 'Real-time analytics dashboards with interactive charts and data visualization.' }
        },
        quote: '"Design is not just what it looks like and feels like. Design is how it works."',
        skills: {
            title: 'Core Skills',
            uiux: 'UI/UX Design',
            alt: { css3: 'CSS3', js: 'JS', react: 'React', node: 'Node', mongo: 'Mongo' }
        },
        contact: {
            title: 'Get In Touch',
            desc: "Let's create something amazing together.",
            email: { placeholder: 'Your email' },
            phone: { placeholder: 'Your phone number', title: 'Please enter a valid 10-digit phone number' },
            submit: 'Send Message',
            alert: 'Thanks! Your info has been sent (Simulated).',
            mailSubject: 'Portfolio Contact',
            mailBody: 'Email: {{email}}\nPhone: {{phone}}'
        },
        footer: { copy: '© 2025 Portfolio. All rights reserved.' },
        music: { title: 'Coding Mode: ON', artist: 'Chill Lofi Beats' },
        aria: {
            themeToggle: 'Toggle Dark Mode',
            langToggle: 'Toggle Language',
            playPause: 'Play/Pause Music',
            github: 'GitHub',
            email: 'Email'
        },
        tags: {
            html: 'HTML', css: 'CSS', design: 'Design', react: 'React', javascript: 'JavaScript', api: 'API',
            node: 'Node.js', mongo: 'MongoDB', express: 'Express', reactNative: 'React Native', firebase: 'Firebase',
            mobile: 'Mobile', fullStack: 'Full Stack', payment: 'Payment', security: 'Security',
            dataViz: 'Data Viz', chartjs: 'Chart.js', analytics: 'Analytics'
        }
    }
};

let currentLang = localStorage.getItem(STORAGE.lang) || html.getAttribute('lang') || 'vi';

function getTranslation(lang, key) {
    return key.split('.').reduce((obj, part) => (obj && obj[part] !== undefined ? obj[part] : null), translations[lang]);
}

function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n],[data-i18n-title],[data-i18n-alt]').forEach((el) => {
        const keyText = el.getAttribute('data-i18n');
        if (keyText) {
            const value = getTranslation(lang, keyText);
            if (value !== null) {
                const attr = el.getAttribute('data-i18n-attr');
                if (attr) el.setAttribute(attr, value);
                else el.textContent = value;
            }
        }
        const keyTitle = el.getAttribute('data-i18n-title');
        if (keyTitle) {
            const value = getTranslation(lang, keyTitle);
            if (value !== null) el.setAttribute('title', value);
        }
        const keyAlt = el.getAttribute('data-i18n-alt');
        if (keyAlt) {
            const value = getTranslation(lang, keyAlt);
            if (value !== null) el.setAttribute('alt', value);
        }
    });
}

let langTransitionTimeout;
function triggerLangTransition() {
    document.body.classList.add('lang-transition');
    if (langTransitionTimeout) clearTimeout(langTransitionTimeout);
    langTransitionTimeout = setTimeout(() => {
        document.body.classList.remove('lang-transition');
    }, 200);
}

function updateLangLabel(lang) {
    if (!langLabelEn || !langLabelVi) return;
    if (lang === 'en') {
        langLabelEn.style.display = 'inline';
        langLabelVi.style.display = 'none';
    } else {
        langLabelEn.style.display = 'none';
        langLabelVi.style.display = 'inline';
    }
}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    html.setAttribute('lang', lang);
    localStorage.setItem(STORAGE.lang, lang);
    applyTranslations(lang);
    updateLangLabel(lang);
    triggerLangTransition();
}

setLanguage(currentLang);

if (langBtn) {
    langBtn.addEventListener('click', () => {
        const next = currentLang === 'vi' ? 'en' : 'vi';
        setLanguage(next);
    });
}

window.handleContactSubmit = (event) => {
    event.preventDefault();
    const emailInput = document.getElementById('contactEmail');
    const phoneInput = document.getElementById('contactPhone');
    const email = emailInput ? emailInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const subject = getTranslation(currentLang, 'contact.mailSubject') || 'Portfolio Contact';
    const bodyTemplate = getTranslation(currentLang, 'contact.mailBody') || 'Email: {{email}}\nPhone: {{phone}}';
    const body = bodyTemplate
        .replace('{{email}}', email || '-')
        .replace('{{phone}}', phone || '-');
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
};

// 2. Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        lenis.scrollTo(this.getAttribute('href'));
    });
});

// 3. Robust Music Player Logic
document.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.getElementById('playBtn');
    const audio = document.getElementById('audioPlayer');
    const disc = document.getElementById('musicDisc');
    const playIcon = document.querySelector('.play-icon');
    const pauseIcon = document.querySelector('.pause-icon');

    if (!playBtn || !audio || !disc) {
        console.error("Music Widget elements not found!");
        return;
    }

    let isPlaying = false;
    audio.volume = 0.4;

    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audio.pause();
            disc.classList.remove('playing');
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
            disc.style.transform = 'rotate(0deg)';
            isPlaying = false;
        } else {
            const playPromise = audio.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    disc.classList.add('playing');
                    playIcon.style.display = 'none';
                    pauseIcon.style.display = 'block';
                    isPlaying = true;
                })
                    .catch(error => {
                        console.log("Audio play blocked or failed:", error);
                        alert("Hey Bro, hãy click vào trang web một cái rồi thử lại nhé! (Browser chặn auto-play)");
                    });
            }
        }
    });
});
