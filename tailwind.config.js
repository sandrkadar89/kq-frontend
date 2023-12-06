/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
      },
      colors: {
        primary: "#003DA6",
        secondary: "#30D8A8",
        shade: {
          100: "#F8F8F8",
          200: "#DCDCDC",
          300: "#A9AAAA",
          900: "#1C1C1C",
        },
        error: "#FF0000",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1920px",
        },
      },
      screens: {
        "3xl": "1800px",
      },
    },
  },
  plugins: [],
};
