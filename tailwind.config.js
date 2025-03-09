/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          outline_gray: "#98908B",
          text_gray: "#696868",
          bg_white_clr: "#F8F4F0",
          brand_black: "#201F24",
          green: "#277C78",
        },
      },
    },
  },
  plugins: [],
};

