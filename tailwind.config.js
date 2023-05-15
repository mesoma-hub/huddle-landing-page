/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Open Sans', 'sans-serif']
      },
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        veryPaleCyan: 'hsl(193, 100%, 96%)',
        veryDarkCyan: 'hsl(192, 100%, 9%)',
        grayishBlue: 'hsl(208, 11%, 55%)',
        white: 'rgb(255, 255, 255)'
      }
    },
  },
  plugins: [],
}
