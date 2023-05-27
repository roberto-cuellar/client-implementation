/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors:{
      background: '#0a192f',
      background_ligth: '#112240',
      primary: '#ccd6f6',
      primary_ligth: '#8892b0',
      secondary: '#64ffda'
    }
  },
  plugins: [
    plugin(function({ addUtilities, theme }) {
      const newUtilities = {
        '.btn-primary': {
          'border': `solid 1px ${theme('colors.secondary')}`,
          'border-radius': '3px',
          'padding':'10px',
          'color': theme('colors.secondary')
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}
