/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lightCyan: '#96E7FD',
        darkCyan: '#3ABFF5'
      }
    },
  },
  plugins: [],
}