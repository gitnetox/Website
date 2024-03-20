/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'my-blue': '#3490dc',
      },
      animation: {
        typing: 'typing 4s steps(16), blink 0.7s infinite',
        'typing-stop': 'typing-stop 4s steps(16) forwards, blink 0.7s infinite',
      },
      keyframes: {
        typing: {
          '0%': {
            width: '0%',
            visibility: 'hidden',
          },
          '100%': {
            width: '100%',
          },
        },
        'typing-stop': {
          '0%': {
            width: '100%',
          },
          '100%': {
            width: '100%',
          },
        },
        blink: {
          '50%': {
            borderColor: 'transparent',
          },
          '100%': {
            borderColor: 'white',
          },
        },
      },
    },
  },
  plugins: [],
}
