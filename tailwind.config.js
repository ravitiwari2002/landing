export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "-apple-system", 
          "BlinkMacSystemFont", 
          "San Francisco", 
          "Helvetica Neue", 
          "Helvetica", 
          "Ubuntu", 
          "Roboto", 
          "Noto", 
          "Arial", 
          "sans-serif"
        ],
      },
      colors: {
        primary: {
          DEFAULT: '#0077ED',
          dark: '#0066CC',
        },
        apple: {
          gray: {
            50: '#F5F5F7',
            100: '#E8E8ED',
            200: '#D2D2D7',
            300: '#AEAEB2',
            400: '#8E8E93',
            500: '#6E6E73',
            600: '#3F3F42',
            700: '#2C2C2E',
            800: '#1C1C1E',
            900: '#0C0C0E',
          }
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
}