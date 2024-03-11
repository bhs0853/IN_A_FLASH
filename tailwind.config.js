/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {    
    extend: {
      colors: {
        'navy' : '#4E598C',
        'white' : '#FFFFFF',
        'lightorg' : '#F9C784',
        'medorg' : '#FCAF58',
        'orange' : '#FF8C42',
        'black' : '#000000',
        'desert' : '#FAD5A5',
      },
    },
  },
  plugins: [],
}

