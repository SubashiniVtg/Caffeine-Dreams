/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customCream: '#FFF0D1', // Add the custom color with a name (e.g., "customCream")
      },
    },
  },
  plugins: [],
}

