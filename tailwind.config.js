/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'sdi-blue': '#1e3a8a',
        'sdi-orange': '#f94c10',
      },
    },
  },
  plugins: [], // On laisse ce tableau vide !
}