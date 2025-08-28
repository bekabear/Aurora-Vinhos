/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/views/**/*.html",
    "./src/public/js/**/*.js"
  ],
  theme: {
    extend: {
      colors:{
        brand: {
          bordo: "#6E0B14",
          dourado: "#FFD700"
        }
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

