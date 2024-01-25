/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'line-gradient': 'repeating-linear-gradient(#ffffff -10px, #ffffff 20px, #E2E8F0 21px, #E2E8F0 20px)'
      }
    },
  },
  plugins: [],
}

