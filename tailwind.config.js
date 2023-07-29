/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // mobile: "0px",
      tablet: "500px",
      desktop: "1024px",
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
      widest: ".25em",
    },
    fontSize: {
      xxs: "9px",
      xs: "12px",
      sm: "15px",
      md: "20px",
      lg: "24px",
      xl: "30px",
      "2xl": "50px",
      "3xl": "60px",
      "4xl": "75px",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        mainGreen: "#0D554A",
        mainGold: "#F2C66D",
        textGrey: "#5A5A5A",
        btnGreen: " #459D7AFF",
        bgGrey: "#F3F4F6FF",
        lightBtnGreen: "#F4FAF8FF",
        white: "white",
        borderGrey: "#B9B9B9",
        borderBlack: "#1B1C1E",
        lightDark: "#393939",
        dark2: "#1F2326",
        dark3: "#262C30",
      },
      fontFamily: {
        main: ["Cormorant Garamond, serif"],
        manrope: ["Manrope, sans-serif"],
        roboto: ["Roboto, sans-serif"],
      },

      spacing: {
        fluidWidth: "20rem",
        fluidWidthSm: "35rem",
        fluidWidthMd: "40rem",
      },
    },
  },
  // plugins: [require("@tailwindcss/forms")],
};
