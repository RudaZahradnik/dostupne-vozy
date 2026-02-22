import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070709",
        surface: "#111114",
        primary: "#DCAC53",
        primaryDark: "#BC873A",
        text: "#F5F5F7",
        border: "#2A2A2E",
        highlight: "#F9E6A8",
      },
    },
  },
  plugins: [],
};

export default config;
