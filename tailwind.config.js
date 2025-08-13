module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'custom-pink': '#F2E6E6',
        'custom-button': '#5C262F',
        'arrow-color': '#1E1E1E',
        'icon-color': '#585050',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}