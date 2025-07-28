/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F5F3F0", // Warm off-white base
          200: "#D4C4B0", // Light cognac tint
          300: "#B59B7A", // Medium cognac tint
          400: "#8B6F47", // Main brand color - Warm Cognac Brown
          500: "#6B5435", // Darker cognac
        },
        dark: {
          100: "#F5F3F0", // Light text on dark
          200: "#A69080", // Soft taupe for secondary text
          300: "#6B5D52", // Medium dark tone
          400: "#2C241D", // Dark background
          500: "#1A1410", // Darkest background
        },
        accent: {
          coral: "#A69080", // Soft Taupe (replacing coral)
          gold: "#8B6F47", // Using main brand for gold contexts
          sage: "#6B7F6B", // Muted Sage Green
          teal: "#6B7F6B", // Using sage for teal contexts
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
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
