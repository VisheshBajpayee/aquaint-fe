/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primaryOrange: "#FE4101",
      primaryGrey: "#F8F8F8",
    },
    extend: {
      backgroundImage: {
        "hero-sidebar-pattern": "url('/src/assets/images/vecton_bg.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Sans Serif"],
      },
    },
  },
  plugins: [require("diagnostics_channel")],
};
