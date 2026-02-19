/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A84C',
        'gold-light': '#E8C97A',
        dark: '#0D0D0D',
        dark2: '#161616',
        dark3: '#1E1E1E',
        cream: '#F5EDD6',
        muted: '#9A8F7A',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
      },
    },
  },
  plugins: [],
}
