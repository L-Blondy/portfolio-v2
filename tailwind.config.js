const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // mode: 'jit',
  purge: [ './src/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '4rem',
        md: '3rem',
        lg: '7rem',
        xl: '14rem',
        '2xl': '22rem',
      },
    },
    extend: {
      animation: {
        'fadeout': 'fadeout 1000ms forwards',
        'fadeout-fast': 'fadeout 300ms forwards',
        'fadein': 'fadein 1000ms forwards',
        'fadein-fast': 'fadein 300ms forwards',
        'fadein-xfast': 'fadein 150ms forwards',
        'scalein-fast': 'scalein 150ms forwards',
        'scalein-full': 'scalein-full 1000ms forwards',
        'from-left': 'from-left 1000ms forwards',
        'from-right': 'from-right 1000ms forwards',
        'from-top': 'from-top 1000ms forwards',
        'from-bottom': 'from-bottom 1000ms forwards',
        'from-left-sm': 'from-left-sm 1000ms forwards',
        'from-right-sm': 'from-right-sm 1000ms forwards',
        'from-top-sm': 'from-top-sm 1000ms forwards',
        'from-bottom-sm': 'from-bottom-sm 1000ms forwards',
      },
      colors: {
        primary: '#37AFCA',
        'primary-xdark': '#1a6575',
      },
      boxShadow: {
        'outline-primary': '0 0 0 1px #37AFCA',
      },
      padding: {
        '1.75': '0.4375rem'
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
      maxWidth: {
        '2xs': '16rem',
        '1/2': '50%',
        '3/4': '75%',
      },
      translate: {
        '2/5': '40%',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      scale: {
        '80': '0.8',
        '85': '0.85',
      },
    },
    screens: {
      '2xs': '400px',
      'xs': '500px',
      ...defaultTheme.screens,
    },
  },

  variants: {
    extend: {
      borderRadius: [ 'focus' ],
      brightness: [ 'hover' ],
      filter: [ 'hover' ],
      backgroundColor: [ 'focus-visible' ],
    }
  },
  plugins: [],
};
