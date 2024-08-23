/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#4DC591',
        customPastelGreen: '#DBF3E9',
        customWhite: 'rgba(255, 255, 255, 0.18)',
      }
    },
  },
  plugins: [],
}
