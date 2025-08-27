/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This tells Tailwind to look for class names in all HTML and JS files
    // inside the 'public' directory.
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          '50': '#fdf2f2',
          '100': '#fbe7e7',
          '200': '#f8dədə',
          '300': '#f2caca',
          '400': '#e9abab',
          '500': '#dd8787',
          '600': '#c96262',
          '700': '#a84747',
          '800': '#8a3d3d',
          '900': '#703535',
          '950': '#4b1d1d',
        },
      },
      fontFamily: {
        // This sets up 'Inter' as a custom font family, matching the original design.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
