/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F5F3FF",
          200: "#A5B4FC",
          300: "#818CF8",
          400: "#4338CA",
          500: "#312E81",
        },
        dark: {
          100: "#E2E8F0",
          200: "#94A3B8",
          300: "#475569",
          400: "#1E293B",
          500: "#0F172A",
        },
        accent: {
          coral: "#FF6B6B",
          gold: "#FFD93D",
          sage: "#A8B5A5",
          teal: "#4F9D9D",
        },
      },
      fontFamily: {
        author: ["Author-Regular", "Author-Medium", "Author-Bold", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "continuous-spin": "continuous-spin 1s linear infinite",
        "gradient": "gradient 8s linear infinite",
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
        "continuous-spin": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
