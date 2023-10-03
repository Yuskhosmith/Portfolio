/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        text: '#E5E5E6',
        background: '#020303',
        primary: '#A3A3A3',
        secondary: '#19191A',
        accent: '#7D7E82',
        // primary: "#CCA9F4",
        // green: "#47DF00",
      },
      dropShadow: {
        ds: '0px 8px 8px rgba(125, 126, 130, 0.25)',
      }
    },
  },
  plugins: [],
};
