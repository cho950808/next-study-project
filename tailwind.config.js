/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '510px',
      md: '900px',
      lg: '1200px',
    },
    extend: {
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
