/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Pragma Novus Systems brand purple, taken from the PNS logo.
        pns: {
          deep: "#1a1038",
          ink: "#2a1d5c",
          plum: "#43307f",
          violet: "#6b5bb0",
          lilac: "#e3ddf3",
          mist: "#f6f3fc",
          gold: "#c9a96e", // champagne accent, used sparingly for an executive feel
          emerald: "#0f5c4d",
          sage: "#e4f1ec"
        }
      },
      fontFamily: {
        display: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"DM Sans"', "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 10px 30px rgba(42, 29, 92, 0.06)",
        lift: "0 22px 50px rgba(42, 29, 92, 0.14)"
      }
    }
  },
  plugins: []
};
