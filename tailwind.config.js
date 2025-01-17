/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lausanne: ['Lausanne', 'sans-serif'], // Adding Lausanne font
      },
    },
  },
  plugins: [],
}
