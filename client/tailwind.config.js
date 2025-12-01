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
          100: "#ECEAE6", // Warm off-white text on dark
          200: "#A5A29A", // Warm gray for secondary text
          300: "#2A2A28", // Dark warm gray for borders/cards
          400: "#1C1C1A", // Dark warm gray background
          500: "#141412", // Darkest warm gray
        },
        accent: {
          coral: "#6B7F6B", // Sage green for dark mode highlights
          gold: "#8B6F47", // Cognac for light mode
          sage: "#6B7F6B", // Old sage green for dark mode
          teal: "#6B7F6B", // Sage green accent
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
