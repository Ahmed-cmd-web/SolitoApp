// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  // edit your tailwind theme here!
  // https://tailwindcss.com/docs/adding-custom-styles
  extend: {
    colors: {
      gray: {
        800: 'rgb(31 41 55)',
        900: 'rgb(17,24,39)',
        200: 'rgb(229,231,235)',
        400: 'rgb(156,163,175)',
        500: 'rgb(107,114,128)',
      },
      darkBg: 'rgb(17,24,39)',
      primary: {
        700: 'rgb(29,78,216)',
        600: 'rgb(37,99,235)',
        500: 'rgb(48,130,246)',
        800: 'rgb(30,64,175)',
        50: '#eff6ff',
        300: '#93c5fd',
      },
    },
  },
}

module.exports = {
  theme,
}
