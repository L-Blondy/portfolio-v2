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
      colors: {
        primary: '#37AFCA',
      },
      maxWidth: {
        '2xs': '16rem',
        '1/2': '50%',
        '3/4': '75%',
      },
      screens: {
        '2xs': '400px',
        'xs': '500px',
        ...defaultTheme.screens,
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
  },
  variants: {
    extend: {
      // opacity: [ 'disabled' ],
      // textDecoration: [ 'disabled' ],
      // cursor: [ 'disabled' ],
    }
  },
  plugins: [],
};
