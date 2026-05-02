import { animate, inView, stagger } from 'https://cdn.jsdelivr.net/npm/motion@11/+esm';

// ─── HERO ENTRANCE SEQUENCE ──────────────────────────────────────────────────
(async () => {
    const ease = [0.25, 0.1, 0.25, 1];

    // 1. Avatar: scale + fade
    await animate('#hero-avatar',
        { opacity: [0, 1], scale: [0.78, 1] },
        { duration: 0.65, easing: [0.34, 1.56, 0.64, 1] }
    ).finished;

    // 2. Name
    animate('#hero-name',
        { opacity: [0, 1], y: [22, 0] },
        { duration: 0.5, easing: ease }
    );

    // 3. Title (slight delay)
    await animate('#hero-title',
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.4, delay: 0.1, easing: ease }
    ).finished;

    // 4. Divider line
    animate('#hero-divider',
        { opacity: [0, 1], scaleX: [0, 1] },
        { duration: 0.4, easing: ease }
    );

    // 5. Bio
    await animate('#hero-bio',
        { opacity: [0, 1], y: [16, 0] },
        { duration: 0.5, delay: 0.05, easing: ease }
    ).finished;

    // 6. CTA buttons
    animate('#hero-ctas',
        { opacity: [0, 1], y: [14, 0] },
        { duration: 0.4, easing: ease }
    );
})();

// ─── HERO ORB FLOATING ANIMATIONS ───────────────────────────────────────────
animate('#orb1', { x: [0, 35, -25, 0], y: [0, -45, 20, 0] }, { duration: 14, repeat: Infinity, easing: 'ease-in-out' });
animate('#orb2', { x: [0, -30, 20, 0], y: [0, 32, -22, 0] }, { duration: 18, repeat: Infinity, easing: 'ease-in-out', delay: 2 });
animate('#orb3', { x: [0, 22, -14, 0], y: [0, -24, 32, 0] }, { duration: 11, repeat: Infinity, easing: 'ease-in-out', delay: 4 });

// ─── SCROLL-TRIGGERED ELEMENT ANIMATIONS ────────────────────────────────────
const ease = [0.25, 0.1, 0.25, 1];

document.querySelectorAll('.motion-el').forEach(el => {
    const dir   = el.getAttribute('data-dir') || 'up';
    const delay = parseFloat(el.getAttribute('data-delay') || '0');

    // Build from-state
    const fromState = { opacity: 0 };
    if      (dir === 'up')    fromState.y = 30;
    else if (dir === 'down')  fromState.y = -30;
    else if (dir === 'right') fromState.x = -30;
    else if (dir === 'left')  fromState.x = 30;

    // Set immediately (duration 0)
    animate(el, fromState, { duration: 0 });

    // Animate in when visible (once)
    const stop = inView(el, () => {
        const toState = { opacity: 1 };
        if (dir === 'up' || dir === 'down') toState.y = 0;
        else toState.x = 0;

        animate(el, toState, { duration: 0.6, delay, easing: ease });
        stop(); // fire once
    }, { margin: '-60px 0px -60px 0px' });
});

// Research tags staggered pop-in
const tags = document.querySelectorAll('#research-tags .r-tag');
animate(tags, { opacity: 0, scale: 0.75, y: 14 }, { duration: 0 });

const stopTags = inView('#research-tags', () => {
    animate(
        tags,
        { opacity: 1, scale: 1, y: 0 },
        { delay: stagger(0.08), duration: 0.4, easing: [0.34, 1.56, 0.64, 1] }
    );
    stopTags();
}, { margin: '-60px 0px' });

// ─── NAVIGATION ──────────────────────────────────────────────────────────────
const header     = document.getElementById('main-header');
const menuBtn    = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen   = document.getElementById('icon-open');
const iconClose  = document.getElementById('icon-close');

// Scroll — glass effect
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// Mobile menu toggle
let menuOpen = false;

const openMenu = () => {
    menuOpen = true;
    mobileMenu.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    iconOpen.classList.add('hidden');
    iconClose.classList.remove('hidden');
    animate(mobileMenu, { opacity: [0, 1] }, { duration: 0.22 });
    animate(
        mobileMenu.querySelectorAll('a'),
        { opacity: [0, 1], y: [18, 0] },
        { delay: stagger(0.06), duration: 0.28, easing: ease }
    );
};

const closeMenu = () => {
    menuOpen = false;
    animate(mobileMenu, { opacity: [1, 0] }, { duration: 0.18 })
        .then(() => mobileMenu.classList.add('hidden'));
    document.body.classList.remove('no-scroll');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
};

menuBtn.addEventListener('click', () => (menuOpen ? closeMenu() : openMenu()));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

// Active nav link
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link');

const syncNav = () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
    navLinks.forEach(l => {
        l.classList.toggle('active', l.getAttribute('href') === `#${current}`);
    });
};
window.addEventListener('scroll', syncNav, { passive: true });

// ─── EMAIL MASKING ────────────────────────────────────────────────────────────
document.getElementById('email-link-official')
    ?.addEventListener('click', e => { e.preventDefault(); window.location.href = 'mailto:rajat.goyal@ddn.upes.ac.in'; });

document.getElementById('email-link-personal')
    ?.addEventListener('click', e => { e.preventDefault(); window.location.href = 'mailto:rajatiitd@gmail.com'; });

