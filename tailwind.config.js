/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Orelega: ["Orelega One", "serif"],
        Lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
