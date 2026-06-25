/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: "#09090B",
          card: "#111113",
          primary: "#3B82F6",
          secondary: "#A1A1AA",
          border: "#27272A",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
        boxShadow: {
          glow: "0 0 30px rgba(59,130,246,0.25)",
        },
      },
    },
    plugins: [],
  };