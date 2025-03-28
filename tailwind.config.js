/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "bootFont": ["bootFont"]
      },
      screens:{
        "xs": "450px",
      }
    },
  },
  plugins: [],
}