/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        league: ['League Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [require('@designbycode/tailwindcss-text-stroke')],
}
