/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif"],
    },
    colors: {
      customColor: "rgb(30, 33, 58)",
      customLetters: "rgb(231,231,235)",
      customBody: "rgb(16,14,29)",
      backHolder: "rgb(110,112,122)",
    },
  },
  plugins: [],
};
