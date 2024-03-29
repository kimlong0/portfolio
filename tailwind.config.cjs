/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      },
      borderRadius: {
        '4xl': '48px',
        '5xl': '60px'
      },
      colors: {
        'gray-theme': '#F4F2EE',
        'orange-theme': '#FD8E58',
        'cyan-theme': '#7FD1AE'
      },
      backgroundSize: {
        '400%': '400%'
      },
      animation: {
        'bg-animation': 'bg-animation 1s infinite'
      },
      keyframes: {
        'bg-animation': {
          '0%, 100%': {'transform': 'translate-x-0'},
          '50%': {'transform': 'translate-x-full'}
        }
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
