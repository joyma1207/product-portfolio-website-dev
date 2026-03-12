import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine var(--duration, 14s) infinite linear",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      colors: {
        background: "#FAFAFA",
        surface: "#F5F5F5",
        foreground: "#171717",
        muted: "#E8E8E8",
        border: "#E5E5E5",
        primary: "#525252",
        accent: {
          yellow: "#FEF3C7",
          orange: "#FFEDD5",
          lavender: "#E9D5FF",
          blue: "#DBEAFE",
        },
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
