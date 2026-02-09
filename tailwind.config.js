/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fusione-navy': '#0F172A',
        'fusione-green': '#8FD400',
        'fusione-azure': '#0072CE',
        'fusione-white': '#FFFFFF',
        'fusione-gray-dark': '#2B3A4A',
        'fusione-gray': '#4A5568',
        'fusione-gray-light': '#718096',
        // Backward compatibility
        'fusione-black': '#0F172A',
        'fusione-lime': '#8FD400',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
