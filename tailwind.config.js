/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#1E201E',
        'navbar': '#F3C5C5',
        'skill': '#6C4A4A',
        'grid': '#886F6F',
        'grid2': '#6C4A4A',
        'gradient-start': '#FF597B',
        'gradient-middle': '#FF8E9E',
        'gradient-end': '#EEEEEE',
        'gradient-text': 'linear-gradient(45deg, #FF597B, #FF8E9E, #EEEEEE)',
      },
      backgroundImage: {
        'gradient-pink': 'linear-gradient(45deg, #FF597B, #FF8E9E)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'border-glow': 'border-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'border-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(99, 102, 241, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}