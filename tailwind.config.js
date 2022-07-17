/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing:{
        "big":"48rem",
        "half":"50%"
      }
    },
    fontFamily:{
      nunito:['Raleway', 'sans-serif']
    }
  },
  plugins: [],
}