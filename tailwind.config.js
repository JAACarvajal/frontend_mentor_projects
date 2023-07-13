/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mb': '360px',
        // => @media (min-width: 360px) { ... }

        'tb': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lp': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'pc': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}