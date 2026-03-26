import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          DEFAULT: "#0077BE",
          dark: "#005a8f",
          light: "#1E6BB8",
        },
        sky: {
          DEFAULT: "#E8F4FD",
          light: "#f0f8ff",
        },
        sunset: {
          DEFAULT: "#FF6B35",
          light: "#ff8c5a",
        },
        navy: {
          DEFAULT: "#1A2E44",
          light: "#2a4a6b",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
