document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Menu Toggle ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // --- Email Masking ---
    // Official Email
    const officialEmailLink = document.getElementById('email-link-official');
    if (officialEmailLink) {
        officialEmailLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const user = 'rajat.goyal';
            const domain = 'ddn.upes.ac.in';
            window.location.href = `mailto:${user}@${domain}`;
        });
    }

    // Personal Email
    const personalEmailLink = document.getElementById('email-link-personal');
    if (personalEmailLink) {
        personalEmailLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const user = 'rajatiitd';
            const domain = 'gmail.com';
            window.location.href = `mailto:${user}@${domain}`;
        });
    }

    // --- Initialize AOS (Animate on Scroll) Library ---
    // This function is defined by the AOS script loaded in the HTML
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800, // Animation duration in milliseconds
            once: true,    // Whether animation should happen only once
        });
    }

});

