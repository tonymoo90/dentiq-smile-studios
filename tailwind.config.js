/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "Georgia", "serif"],
      },
      colors: {
        ivory: "#fbf8f2",
        porcelain: "#fffdf9",
        oat: "#e9decf",
        linen: "#f4ece2",
        clay: "#b89472",
        sage: "#9bac93",
        charcoal: "#27231f",
      },
      boxShadow: {
        soft: "0 24px 80px rgba(39, 35, 31, 0.10)",
      },
    },
  },
  plugins: [],
};
