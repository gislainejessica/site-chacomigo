const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      '3xl': '100px',
      '4xl': '2rem',
      'full': '350px',
      'large': '12px',
    },
    colors: {
      white: colors.white,
      yellow: colors.yellow,
      purple: colors.purple,
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      black: colors.black,
      lime: colors.orange,
      green: colors.blueGray
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      ara: ['Antic Slab', 'serif                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ']
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    }

  }
}
