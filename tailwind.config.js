/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["'Noto Sans'", "sans-serif"],
      },
      colors: {
        primary: "#1A1A1A",
        accent: "#1D8382",
        background: "#F5F5F7",
        secondary: "666666",
      },
    },
  },
  plugins: [],
};
