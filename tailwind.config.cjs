/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/index.html", "./src/**/*.{jsx,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        robotoMono: ['Roboto Mono', 'monospace']
      }
    },
  },
  plugins: [],
}
