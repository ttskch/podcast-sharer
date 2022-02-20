const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // @see https://tailwindcss.com/docs/container#customizing
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          // xs: 0,
          sm: 0,
          md: 0,
          lg: 0,
          xl: 0,
          '2xl': 0,
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // @see https://stefvanlooveren.me/blog/custom-container-width-tailwind-css
    // @see https://tailwindcss.com/docs/plugins
    plugin(({addComponents}) => {
      addComponents({
        '.container': {
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1024px',
          },
          '@screen 2xl': {
            maxWidth: '1024px',
          },
        },
      })
    }),
  ],
}
