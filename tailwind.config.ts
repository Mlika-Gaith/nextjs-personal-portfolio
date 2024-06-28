import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        dotGradient: "linear-gradient(180deg,rgb(17,17,17),#A4161A)",
        dotGradientHover: "linear-gradient(180deg,rgb(17,17,17),#A4161A)",
      },
      colors: {
        default: "rgb(235,236,243)",
        brand: "#1f2022",
        "brand-tint": "#bdc8a6",
        "brand-pink": "##ffc1f2",
        "brand-secondary": "#0f0d0a",
        "brand-tertiary": "#615a60",
        background: "#fefaf4",
        "background-secondary": "#ede8e1",
        "background-dark": "rgb(8,8,8)",
        "background-dark-secondary": "rgb(35,35,35)",
      },
      fontSize: {
        xs: "1.6rem",
        sm: "1.8rem",
        md: "2.2rem",
        lg: "3.6rem",
        xl: "5.6rem",
        "2xl": "9.6rem",
      },
      fontFamily: {
        bogart: "Bogart",
        futura: "Futura",
      },
      gridTemplateColumns: {
        "custom-layout": "1fr 350px",
      },
    },
  },
  plugins: [],
};
export default config;
