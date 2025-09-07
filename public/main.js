// --- Mobile Menu Handler ---
// This function handles the toggling of the mobile navigation menu.
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// It's good practice to check if the elements exist before adding event listeners.
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener('click', () => {
    // Toggles the 'hidden' class from Tailwind CSS to show/hide the menu.
    mobileMenu.classList.toggle('hidden');
  });
}

// --- Email Obfuscation/Masking ---
// This script protects the email address from spam bots by constructing
// the mailto: link dynamically when a user clicks it.
const emailLink = document.getElementById('email-link');

if (emailLink) {
  emailLink.addEventListener('click', (event) => {
    // Prevent the default anchor tag behavior.
    event.preventDefault();

    // Define the parts of the email address.
    const user = 'rajat.goyal';
    const domain = 'ddn.upes.ac.in';

    // Construct the full mailto: link and navigate to it.
    window.location.href = 'mailto:' + user + '@' + domain;
  });
}
