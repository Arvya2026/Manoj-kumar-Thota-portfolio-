module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        ztnature: ["Ztnature", "ui-sans-serif", "system-ui", "sans-serif"],
        neutralsans: ["Neutralsans", "ui-sans-serif", "system-ui", "sans-serif"],
        neutralsans_medium: ["NeutralsansMedium", "ui-sans-serif", "system-ui", "sans-serif"],
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          black: "#0a0a0a",
          white: "#f5f5f3",
          gray: "#888",
        },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 1.6s ease forwards",
        marquee: "marquee 28s linear infinite",
      },
      container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    },
  },
  plugins: [],
};
