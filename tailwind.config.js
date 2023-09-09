/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
          'best-seller': "url('https://official-slipknot.myshopify.com/collections/best-sellers')"
      },
    },
  },
  plugins: [],
}

