/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        rotate: {
            '0%': {
              transform: 'rotate(0deg) translate3d(0, 0, 0)'
            },
            '25%': {
              transform: 'rotate(3deg) translate3d(0, 0, 0)'
            },
            '50%': {
              transform: 'rotate(-3deg) translate3d(0, 0, 0)'
            },
            '75%': {
              transform: 'rotate(1deg) translate3d(0, 0, 0)'
            },
            '100%': {
              transform: 'rotate(0deg) translate3d(0, 0, 0)'
            }
        },
        storm: {
          '0%': {
            transform: 'translate3d(0, 0, 0) translateZ(0)'
          },
          '25%': {
            transform: 'translate3d(4px, 0, 0) translateZ(0)'
          },
          '50%': {
            transform: 'translate3d(-3px, 0, 0) translateZ(0)'
          },
          '75%': {
            transform: 'translate3d(2px, 0, 0) translateZ(0)'
          },
          '100%': {
            transform: 'translate3d(0, 0, 0) translateZ(0)'
          }
        }
      },
      animation: {
        'rotate': 'rotate 0.7s ease-in-out both',
        'storm': 'storm 0.7s ease-in-out both'
      }
    },
  },
  plugins: [],
}

