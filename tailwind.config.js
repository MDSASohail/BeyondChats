/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkSelect:"#0e1621",
        darkALLUsers:'#17212b',
        darkSmText:"#3f739f",
        darkInputBG:'#242f3d',
        darkSideBarBG:"#17212b",
        darkSideBarText:'#708499',
        darkToggleBTN:"#5288c1",
        darkSendTextBG:"#182533",
        lightBlack:"#1e2a38",
        darkSelect2:"#2b5278"
      }
    },
  },
  plugins: [],
}