/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kinetics: {
          dark: '#111111',
          light: '#F9F9F9',
          border: '#E5E5E5',
          gold: '#C59A45',
          goldHover: '#B08632',
          sale: '#DC2626',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
