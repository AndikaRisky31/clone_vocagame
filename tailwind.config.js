
const withMT = require("@material-tailwind/react/utils/withMT");
// tailwind.config.js
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // sesuaikan dengan jalur file proyek Anda
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgba(227, 253, 228, 1)',
          100: 'rgba(187, 247, 208,1)',
          400: 'rgba(22, 200, 41, 1)'
        },
      },
      fontFamily: {
        sans: ['inherit'], // Mengatur font-family default untuk sans ke inherit
        serif: ['inherit'], // Mengatur font-family default untuk serif ke inherit
        mono: ['inherit'], // Mengatur font-family default untuk mono ke inherit
      },
    },
  },
  plugins: [],
})


