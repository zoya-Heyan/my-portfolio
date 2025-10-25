/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fall: {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(600px) rotate(360deg)", opacity: "0" },
        },
      },
      animation: {
        fall: "fall linear forwards",
      },
    },
  },
  plugins: [],
}