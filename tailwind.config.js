/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-sidebar-pattern": "url('/src/assets/images/vecton_bg.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "Sans Serif"],
      },
      colors: {
        primaryOrange: "#FE4101",
        primaryGrey: "#F8F8F8",
        secondaryGrey: "#ABABAB",
        borderGrey: "#DCDCDC",
        inputLabelGrey: "#AAAAAA",
        badgeGrey: "#F7F7F8",
        buttonOutlineGrey: "#B6B6B6",
        primaryWhite: "#FFFFFF",
        primaryBlack: "#2C2C2C",
        primaryBlue: "#1E2B5B",
        primaryGreen: "#28C76F",
      },
    },
  },
  plugins: [require("diagnostics_channel")],
};
