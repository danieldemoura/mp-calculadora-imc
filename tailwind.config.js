/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"index.html",
	"./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Play', 'sans-serif']
      }
    },
  },
  plugins: [],
}

