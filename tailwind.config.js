/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {},
    colors: {
      white: "#FFF",
      blue: "#1DA1F2",
      darkblue: "#2795D9",
      lightblue: "#EFF9FF",
      dark: "#657786",
      light: "#AAB8C2",
      lighter: "#E1E8ED",
      lightest: "#F5F8FA",
    },
  },
  plugins: [],
};
