import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2F6B3F",   // hijau kelapa
        secondary: "#F4C430", // kuning emas
        dark: "#3A2B20",      // coklat kelapa
        light: "#FAFAF7",     // putih santan
      },
    },
  },
  plugins: [],
};

export default config;
