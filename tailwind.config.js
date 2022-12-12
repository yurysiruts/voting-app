/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      green: colors.green,
      orange: colors.orange,
      red: colors.red,
      white: colors.white,
      yellow: colors.yellow,
    },
    extend: {},
  },
  plugins: [],
}
