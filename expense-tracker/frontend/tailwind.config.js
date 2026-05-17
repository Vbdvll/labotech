/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#070B13",
        panel: "#0D1421",
        line: "#1E293B",
        mint: "#2EE59D",
        ocean: "#49A6FF",
      },
      boxShadow: {
        glow: "0 20px 80px rgba(46, 229, 157, 0.12)",
      },
    },
  },
  plugins: [],
};
