/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'book': "url('./src/assets/book_3.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],
}

