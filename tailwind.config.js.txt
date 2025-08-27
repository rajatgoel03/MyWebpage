/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This tells Tailwind to look for class names in all HTML and JS files
    // inside the 'public' directory.
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // This sets up 'Inter' as a custom font family, matching the original design.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
