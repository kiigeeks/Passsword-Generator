/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitePrimary: '#F5F5F7',
        darkPrimary: '#10172a',
        darkSecondary: '#171d39',
        darkThird: '#1a3350',
      },
      fontSize: {
          'xxs': '10px',
      }
    },
  },
  plugins: [],
}

