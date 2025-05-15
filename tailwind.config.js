/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        mainBack: '#191919',
        darkgray: '#242424',
        mainText: '#ffffff',
        mainTextLight: '#191919',
        mainRed: '#DF2935',
        grayOpasity: '#D0D5DD',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem',
        'mega': '72rem', // приблизно 8 разів більше за 9xl (~8rem)
      },
    },
  },
  plugins: [],
}
