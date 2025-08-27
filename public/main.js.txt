// This script handles the toggle functionality for the mobile navigation menu.

// Get references to the button and the menu element from the DOM.
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Add a 'click' event listener to the menu button.
mobileMenuButton.addEventListener('click', () => {
    // When the button is clicked, toggle the 'hidden' class on the menu element.
    // This will show or hide the menu.
    mobileMenu.classList.toggle('hidden');
});

// Get all the links within the mobile menu.
const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');

// Add a 'click' event listener to each link.
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // When a link is clicked, add the 'hidden' class to close the menu.
        // This provides a better user experience on mobile devices.
        mobileMenu.classList.add('hidden');
    });
});
