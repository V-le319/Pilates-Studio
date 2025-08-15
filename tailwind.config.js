module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // important for Tailwind v2
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textShadow: {
            'sm': '1px 1px 2px rgba(0,0,0,0.5)', // Small white shadow
            'md': '1px 1px 4px rgba(0,0,0,0.5)', // Medium white shadow
            'lg': '1px 1px 6px rgba(0,0,0,0.5)', // Large white shadow
            'white-outline': '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff', // White outline
          },
      colors: {
        'custom-pink': '#F2E6E6',
        'custom-button': '#5C262F',
        'arrow-color': '#1E1E1E',
        'icon-color': '#585050',
        'hover-color': '#A94C4C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities, theme }) {
          const newUtilities = {};
          Object.entries(theme('textShadow')).forEach(([key, value]) => {
            newUtilities[`.text-shadow-${key}`] = {
              'text-shadow': value,
            };
          });
          addUtilities(newUtilities, ['responsive', 'hover']);
        },
  ],
}