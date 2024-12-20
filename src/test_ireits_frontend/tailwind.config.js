/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'poultry-main': '#C36237',
        'poultry-orange': '#C36237',
        'poultry-dark': '#4B0082',
        'poultry-pink': '#E75480',
        'white': '#F5F5F5',
      },
    },
  },
  plugins: [],
}

