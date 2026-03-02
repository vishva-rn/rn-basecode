/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C3AED",
        secondary: "#06D6A0",
        dark: "#0A0A0F",
        "dark-card": "#12121A",
      },
    },
  },
  plugins: [],
};
