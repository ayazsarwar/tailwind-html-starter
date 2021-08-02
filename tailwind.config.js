module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    mode: 'all',
    content: [
      './src/**/*.html'
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
