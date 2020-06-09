const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'acumin-pro',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'ch-blue': '#0076D0',
        'ch-blue-slight-dark': '#00a0dd',
        'ch-blue-dark': '#2d78a9',
        'ch-blue-light': '#6abfdf',
        'ch-blue-link': '#00a0dd',
        'ch-grey': '#6d6e71',
        'ch-grey-dark': '#414042',
        'ch-grey-darkest': '#979797',
        'ch-grey-medium': '#BCBEC0',
        'ch-grey-light': '#f5f5f5',
        'ch-grey-lighter': '#f7f7f7',
        'ch-grey-lightest': '#f9f9f9',
        'ch-yellow': '#ffc50a',
      }
    },
  },
  variants: {},
  plugins: [],
}