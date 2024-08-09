/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#085C11",
        secondary:"#475C46",
        tetiary:"#525252"
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        mulish:["Mulish", "sans-serif"],
        roboto:[ "Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
}

