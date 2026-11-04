/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3F',
          800: '#0d2347',
          700: '#102b55',
        },
        orange: {
          DEFAULT: '#F97316',
          600: '#ea6c0a',
        },
        whatsapp: '#25D366',
        'bg-light': '#F8FAFC',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
