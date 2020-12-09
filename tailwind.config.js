module.exports = {
  purge: ['./src/**/*.js', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1640px' },
      'xl': { 'max': '1366px' },
      'lg': { 'max': '1040px' },
      'md': { 'max': '780px' },
      'sm': { 'max': '440px' },
      'print': { 'raw': 'print' }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
