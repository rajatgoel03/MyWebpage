document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile menu when a link is clicked
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.classList.remove('no-scroll');
        });
    });

    // Email masking
    const officialEmailLink = document.getElementById('email-link-official');
    if (officialEmailLink) {
        officialEmailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'rajat.goyal@ddn.upes.ac.in';
            window.location.href = `mailto:${email}`;
        });
    }
    
    const personalEmailLink = document.getElementById('email-link-personal');
    if (personalEmailLink) {
        personalEmailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const email = 'rajatiitd@gmail.com';
            window.location.href = `mailto:${email}`;
        });
    }

    // Header scroll effect
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    });

    // Active navigation link highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    const activateNavLink = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', activateNavLink);

    // Initialize AOS animations
    AOS.init({
        duration: 800,
        once: true,
    });
});
