/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '14.63px'],
      sm: ['16px', '19.5px'],
      md: ['20px', '24.38px'],
      lg: ['35px', '44.5px'],
    },

    colors: {
      black: '#2c2b2b',
      slate: '#787878',
      white: '#ffffff',
      gray: {
        100: '#f1f1f1',
        200: '#7f7f7f',
      },
      blue: {
        100: '#7B91FF',
        200: ' #95BEFF',
        300: '#7e84cc',
        400: '#819dff',
        500: '#101010',
      },
      pink: {
        100: '#D3A4F4',
        200: '#E9B1E0',
      },
    },
    maxWidth: {
      sm: '375px',
    },

    extend: {
      colors: {
        myblue: '#9fb2ff',
      },
      width: {
        44: '44px',
        60: '60px',
        100: '100px',
        20: '20px',
        50: '50px',
        352: '352px',
        343: '343px',
        22: '22px',
        155: '155px',
      },
      height: {
        1: '2px',
        44: '44px',
        60: '60px',
        50: '50px',
        234: '234.61px',
        22: '22px',
        20: '20px',
        75: '75px',
        124: '124px',
        100: '100px',
      },
    },
    plugins: [],
    fontFamily: {
      body: ['Montserrat'],
      heading: ['Roboto'],
      text: ['Montserrat'],
    },
  },
};
