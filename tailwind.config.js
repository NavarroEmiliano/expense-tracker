/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
    extend: {},
        "green-pie": "#2ecc71",
        "red-pie": "#e74c3c"
      }
    },
  },
  plugins: [],
};
