/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'primary':'#144B93',
      'secondary':'#DD4006',
      'white': '#FFFFFF',
      'gray': '#333333',
      'yellow': '#FFB224'
    },
    extend: {},
  },
  plugins: [],
}

