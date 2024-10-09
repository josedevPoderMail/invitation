/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#A54257',
        secondary:'#765628'
      },
      fontFamily:{
        cormorant: ['Cormorant Garamond', 'serif'],
        pinyon: ['Pinyon Script', 'cursive'],
        playfair: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}