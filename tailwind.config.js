/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./global.css", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "noma-gray": "#5C5C76",
        "noma-black": "#1C1818",
        "noma-light-gray": "#F5F5F5",
        "noma-blue": "#1B68F5",
        "noma-red": "#E93232",
        "noma-critical": "#CF0000",
        "noma-high": "#E93232",
        "noma-medium": "#E99332",
        "noma-low": "#FFE521",
        "noma-green": "#8CE5C3",
      },
    },
  },
  plugins: [],
};
