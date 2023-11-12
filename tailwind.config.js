/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,ts,,tsx}'],
  theme: {
    extend: {
      colors: {
        'VeryDarkCyan': '#00494d',
        'DarkGrayishCyan': '#5e7a7d',
        'GrayishCyan': '#7f9c9f',
        'LightGrayishCyan': '#c5e4e7',
        'VeryLightGrayishCyan': '#f4fafa',
        'White': '#ffffff',
        'ErrorRed': '#FF4500',
        'HoverCyan': '#1ebda7'
      },
    },
  },
  plugins: [],
}

