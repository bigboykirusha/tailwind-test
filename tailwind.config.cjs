/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, htm}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'gray': '#808080',
        'black': 'black',
      },
      fontFamily: {
        'roboto': 'Roboto',
      },
      screens: {
        'tablet': {'max': '991.98px'},
        // => @media (min-width: 640px) { ... }
        'mobile': {'max': '767.98px'},
        // => @media (min-width: 767.98px) { ... }
      },
    },
  },
  plugins: [],
}
