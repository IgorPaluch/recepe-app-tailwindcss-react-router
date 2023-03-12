/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(20rem, 1fr))",
      },
    },
  },
  plugins: [],
};
