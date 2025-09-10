// --- Mobile Menu Toggle ---
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

// Toggle menu on button click
if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close menu on link click
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});


// --- Email Masking ---
const emailLink = document.getElementById('email-link');
if (emailLink) {
    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        const user = 'rajat.goyal';
        const domain = 'ddn.upes.ac.in';
        window.location.href = `mailto:${user}@${domain}`;
    });
}


// --- Initialize AOS (Animate On Scroll) Library ---
// This should be called after the AOS library script is loaded in the HTML
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800, // values from 0 to 3000, with step 50ms
        once: true,    // whether animation should happen only once - while scrolling down
    });
  }
});

