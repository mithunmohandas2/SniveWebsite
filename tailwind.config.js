/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        violetBg: "#7F56D9",
        violetTxt: "#6941C6",
        violetFooter: "#AF92EF",
      },
    },
  },
  plugins: [],
}

