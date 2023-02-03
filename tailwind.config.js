/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens:{
      'lg': {"max" : "1050px"},
      'md': {"max" : "800px"},
      'sm': {"max" : "450px"},
    },
    extend: {
    },
  },
  plugins: [],
}
