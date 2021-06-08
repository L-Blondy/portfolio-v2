module.exports = {
  // mode: 'jit',
  purge: [ './src/**/*.{js,ts,jsx,tsx}' ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#37AFCA',
      },
      maxWidth: {
        '2xs': '16rem',
        '1/2': '50%',
        '3/4': '75%',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
