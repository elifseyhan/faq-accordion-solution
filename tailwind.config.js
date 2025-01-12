/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      white: "hsl(0, 0%, 100%)",
      primary: "hsl(280.92deg 82.98% 53.92%)",
      "light-pink": "hsl(275, 100%, 97%)",
      "grayish-purple": "hsl(292, 16%, 49%)",
      "dark-purple": "hsl(292, 42%, 14%)",
    },
    fontFamily: {
      workSans: ['Work Sans', 'sans-serif'],
    }
  },
  plugins: [],
};
