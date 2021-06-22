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
      // outline: [ 'focus' ],
      // opacity: [ 'disabled' ],
      // textDecoration: [ 'disabled' ],
      // cursor: [ 'disabled' ],
      borderRadius: [ 'focus' ],
      brightness: [ 'hover' ],
      filter: [ 'hover' ],
      // gridColumn: [ 'responsive' ],
      // gridColumnStart: [ 'responsive' ],
      // gridColumnEnd: [ 'responsive' ],
    }
  },
  plugins: [],
};
