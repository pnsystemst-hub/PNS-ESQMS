/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        pns: {
          navy: "#061a35",
          blue: "#0b3f78",
          bright: "#1687ff",
          gold: "#c99527",
          silver: "#e7ebf0",
          ink: "#111827",
          mist: "#f5f8fb"
        }
      },
      boxShadow: {
        premium: "0 28px 90px rgba(6, 26, 53, 0.16)",
        glow: "0 22px 70px rgba(22, 135, 255, 0.22)"
      }
    }
  },
  plugins: []
};
