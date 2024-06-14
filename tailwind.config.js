/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }

      'full': '1880px',
      // => @media (min-width: 1880px) { ... }
    },
    extend: {
      colors: {
        'preto': '#1D1D1B',
        'cinza-text': '#F2F3F7',
      },
    },
  },
  plugins: [],
}