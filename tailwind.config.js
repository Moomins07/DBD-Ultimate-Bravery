/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', '.src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        lessBounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        fadeInOut: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 9s forwards',
        fadeIn: 'fadeIn 6s forwards',
        lessBounce: 'lessBounce 1s infinite',
      },
      colors: {
        darkGrayishRed: 'hsl(345, 12%, 40%)',
        veryDarkBlue: 'hsl(244, 22%, 12%)',
        veryDarkGrayishBlue: 'hsl(210, 16%, 21%)',
        veryDarkLimeGreen: 'hsl(115, 100%, 3%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
