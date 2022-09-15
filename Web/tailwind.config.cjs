/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html' 
  ],
  theme: {
    extend: {
      backgroundImage :{
        galaxy : "url('./background.png')",
        duoGradient : "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)",
      }
    },
  },
  plugins: [],
}
