// { import('tailwindcss').Config }
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#222328',
        'primary-100': '#1b1c20',
        'secondary': '#f1471f'
      },
      gridTemplateColumns: {
        'panel': '1fr 7fr',
        'search': '5fr 1fr',
        'footer': '400px minmax(900px, 1fr) 100px',
      }
    }
  },
  plugins: [],
}