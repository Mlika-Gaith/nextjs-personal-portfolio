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
        certificate: "url('/assets/img/certificate.png')",
      },
      colors: {
        default: "rgb(235,236,243)",
        brand: "#1f2022",
        "brand-tint": "#bdc8a6",
        "brand-pink": "#ca34e4",
        "brand-bronze": "#e3cbb3",
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
        "bogart-italic": "Bogart Italic",
        "bogart-extralight-italic": "Bogart ExtraLight Italic",
        futura: "Futura",
        "futura-book": "Futura Book",
      },
      gridTemplateColumns: {
        "custom-layout": "1fr 350px",
      },
    },
  },
  plugins: [],
};
export default config;
