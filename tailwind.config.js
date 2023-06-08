const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        atlalabs: ["var(--font-saira)", ...fontFamily.serif],
      },
      colors: {
        "atlalabs-primary": "#74A7FF",
        "atlalabs-secondary": "#FFCC74",
      },
    },
  },
};
