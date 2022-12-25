/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'gray-theme': '#F4F2EE',
        'orange-theme': '#FD8E58',
        'cyan-theme': '#7FD1AE'
      }
    },
  },
  plugins: [],
}
