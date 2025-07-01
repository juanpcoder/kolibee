module.exports = {
  content: ['./views/*.ejs'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
      backgroundImage: (theme) => ({
        'logo-light-mode': "url('/images/logo-light-mode.svg')",
        'logo-dark-mode': "url('/images/logo-dark-mode.svg')",
        'curvy-dark-mode': "url('/images/bg-curvy-dark-mode.svg')",
        'curvy-light-mode': "url('/images/bg-curvy-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ['dark'],
    },
  },
  plugins: [],
}
