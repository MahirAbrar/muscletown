/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        background: {
          primary: "#f6f6f6", // background 1
          secondary: "#20211f", // background 2
        },
        text: {
          primary: "#151414", // text1
          secondary: "#ffffff", // text2
        },
        brand: {
          primary: "#990404", // primarycolor
          secondary: "#ff6100", // secondarycolor
          // Adding some variations for hover states and UI elements
          primaryLight: "#b30505",
          primaryDark: "#800303",
          secondaryLight: "#ff7a1f",
          secondaryDark: "#e55600",
        },
      },
    },
  },
  plugins: [],
};
