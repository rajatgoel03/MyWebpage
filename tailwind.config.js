/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // This tells Tailwind to look for class names in all HTML and JS files
    // inside the 'public' directory and its subdirectories.
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          '50': '#fdf2f2',
          '100': '#fbe7e7',
          '200': '#f8dada',
          '300': '#f2caca',
          '400': '#e9abab',
          '500': '#dd8787',
          '600': '#c96262',
          '700': '#a84747',
          '800': '#8a3d3d',
          '900': '#703535',
          '950': '#4b1d1d',
        },
        slate: {
            '50': '#f8fafc',
            '100': '#f1f5f9',
            '200': '#e2e8f0',
            '300': '#cbd5e1',
            '400': '#94a3b8',
            '500': '#64748b',
            '600': '#475569',
            '700': '#334155',
            '800': '#1e293b',
            '900': '#0f172a',
        },
        gold: {
            '500': '#ca8a04',
        }
      },
      fontFamily: {
        // This sets up 'Inter' as a custom font family.
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
