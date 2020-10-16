const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [
          'autoprefixer',
          purgecss({
            content: ['./src/**/*.html'],
          }),
        ]
      : []),
  ],
}
