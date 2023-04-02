/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      blue: {
        100: '#F6F8FF',
        900: '#1E2A47'
      },
      'cyan-blue': {
        500: '#0079FF',
        800: '#4B6A9B',
        900: '#2B3442',
        950: '#141D2F'
      },
      gray: { 
        100: '#FEFEFE',
        500: '#697C9A'
      },
      red: colors.red,
      white: '#ffffff',
    },
    fontSize: {
      xs: ['13px', {
        lineHeight: '20px',
        fontWeight: '400'
      }],
      sm: ['15px', {
        lineHeight: '25px',
        fontWeight: '400'
      }],
      base: ['16px', {
        lineHeight: '24px',
        fontWeight: '400'
      }],
      lg: ['22px', {
        lineHeight: '33px',
        fontWeight: '700'
      }],
      xl: ['26px', {
        lineHeight: '38px',
        fontWeight: '700'
      }],
    },
    extend: {
      screens: {
        'sm': '375px',
    },
    },
  },
  plugins: [],
}

