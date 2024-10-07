/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: { xs: "360px" },
      spacing: {
        1200: "1200px",
      },
      textUnderlineOffset: {
        6: "6px",
      },
      margin: {
        22: "88px",
      },
      borderRadius: { "4xl": "32px" },
      colors: {
        white: "#FFFFFF",
        dark: "#19191966",
        success: {
          100: "#D1FADF",
          700: "#027A48",
        },
        error: {
          100: "#FEE4E2",
          500: "#F04438",
        },
        brand: {
          50: "#F9F5FF",
          100: "#F4EBFF",
          200: "#E9D7FE",
          700: "#6941C6",
        },
        gray: {
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          900: "#101828",
        },
        blue: {
          100: "#D1E9FF",
          300: "#84CAFF",
          500: "#2E90FA",
          600: "#1570EF",
        },
      },
      boxShadow: {
        sidebar: "0px 4px 4px 0px #00000040",
        dashboardCard: "0px 4px 8px -2px #1018281A",
        dashboardForm: "0px 1px 3px 0px #1018281A",
        formationStatus: "0px 4px 4px 0px #0000000F",
      },
      fontSize: {
        "4xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
