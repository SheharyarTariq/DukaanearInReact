/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors:{
        green:'rgb(186,234,112)',
        yellow:'rgb(233, 247, 159)',
        gray:'rgb(249, 249, 249)',
        lightGray:'rgb(130, 136, 141)',
        lightGreen:'rgb(205, 243, 192)',
        darkGray:'rgb(245, 245, 245)',
        darkBlue:'rgb(0, 50, 51)'

      },
      screens: {
        'bmd': '1059px',
        'smd': '943px',
        'bsm': '920px',
      },
        animation:{
            'slowBounce': 'bounce 2s infinite'
        }
    },
  },
  plugins: [],
}