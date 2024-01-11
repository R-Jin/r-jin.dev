import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        serif: ["var(--font-merriweather)"],
        sans: ["var(--font-inter)"],
      },
      colors: {
        foreground: "rgba(var(--color-foreground))",
        background: "rgba(var(--color-background))",
        accent: "rgba(var(--color-accent))",
        "darkmode-toggle-bg": "rgba(var(--color-darkmode-toggle-bg))",
        "darkmode-toggle-border": "rgba(var(--color-darkmode-toggle-border))",
      },
      screens: {
        "3xl": "1920px",
        "4xl": "4096px",
      },
    },
  },
  plugins: [],
};
export default config;
