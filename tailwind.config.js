
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'site-bg': "#FFF3EA",
        'site-theme': '#ff8c00',
            },

      borderWidth: {
        '1': '1.1px',
      },

      transitionDuration: {
        '2sec': '2000ms',
      },
      stroke: theme => ({
        'white': theme('colors.white'),
      }),

      animation: {
        left: 'left 0.3s',
        right: 'right 0.3s',
      },
      keyframes: {

        left: {
          '0%, 100%': {transform: 'translateX(-100%)'},
          '100%': {transform: 'translateX(0)'},
        },
        right: {
          '0%, 100%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0)'},
        },


      }

    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'checked'],
      inset: ['checked'],
      opacity: ['disabled'],
      textColor: ['active'],
    },
  },
  images: {
    domains: ['localhost'],
  },


  plugins: [],
}
