/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#1C2826',
        'for-text': '#EEF4D4',
        'for-text-white': '#DAEFB3',
        'main-dark': '#EA9E8D',
        'main-danger': '#D64550',
        'dark-blue': '#001529',
      }
  },
  fontFamily: {
    noorehuda: ['noorehuda'],
    mono: ['ui-monospace', 'SFMono-Regular'],
  },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}