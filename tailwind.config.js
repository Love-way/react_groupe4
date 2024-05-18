module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700: "#ffffff", A700_19: "#ffffff19" },
        gray: {
          50: "#f8f8fd",
          300: "#d6ddeb",
          900: "#202430",
          "900_7f": "#2024307f",
          "900_19": "#20243019",
          "900_e5": "#202430e5",
          "900_b2": "#202430b2",
          "50_01": "#f9fafc",
        },
        blue_gray: {
          200: "#a8adb7",
          400: "#7c8493",
          700: "#515b6f",
          900: "#25324b",
          "700_b2": "#515b6fb2",
          "400_7f": "#7c84937f",
          "900_e5": "#25324be5",
          "700_4c": "#515b6f4c",
        },
        indigo: {
          50: "#e2e7f5",
          A700: "#4640de",
          A700_4c: "#4640de4c",
          A700_0c: "#4640de0c",
          "50_01": "#e9ebfd",
          A700_19: "#4640de19",
          A700_0f: "#4640de0f",
        },
        blue: { 500: "#26a3ff" },
        yellow: { 700: "#feb835", "900_19": "#ea843319" },
        deep_orange: { 400: "#ff6550", "400_19": "#ff655019" },
        teal: { 300: "#56cdad", "300_19": "#56cdad19" },
        black: { 900: "#000000" },
      },
      boxShadow: { xs: "0px 2.71px 4px 0px #c0c0c006" },
      fontFamily: {
        clashdisplayvariable: "Clash Display Variable",
        epilogue: "Epilogue",
        inter: "Inter",
        redhatdisplay: "Red Hat Display",
      },
      opacity: { 0.7: 0.7 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
