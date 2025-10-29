/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        accent: "#1D8382",
        background: "#F5F5F7",
      },
    },
  },
  plugins: [],
};
