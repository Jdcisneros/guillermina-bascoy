/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'font': ["Bebas Neue", "sans-serif"]
      },
        fontSize: {
          'vw-2': '18vw',
          'vw-4': '4vw',
        },
      },
  },
  plugins: [],
}


