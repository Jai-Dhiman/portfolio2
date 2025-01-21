/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FEF3E2",
          200: "#BEC6A0",
          300: "#708871",
          400: "#606676",
        },
        dark: {
          100: "#606676",
          200: "#708871",
          300: "#BEC6A0",
          400: "#FEF3E2",
        },
      },
      fontFamily: {
        author: ["Author-Regular", "Author-Medium", "Author-Bold", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
