/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        dasar : "#f2f2f2",
        kedua : "#fbfbfb",
        ketiga : "#f5f5f7",
      }
    },
  },
  plugins: [],
}

