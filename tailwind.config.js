/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: { 50: '#FFFDF9', 100: '#FBF6EE', 200: '#F5EBDD' },
        blush: { 100: '#FBEBEE', 200: '#F5D5DB', 300: '#E8B7C0' },
        rose: { dusty: '#C98B97', deep: '#A8626F' },
        cocoa: { 500: '#8B6F5C', 700: '#5C4638', 900: '#3A2C23' },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Jost', 'system-ui', 'sans-serif'],
      },
      boxShadow: { soft: '0 8px 30px -12px rgba(92,70,56,0.25)' },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(14px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
      animation: { fadeUp: 'fadeUp .6s ease-out both' },
    },
  },
  plugins: [],
}
