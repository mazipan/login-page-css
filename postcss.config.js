const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production'
      ? [
        purgecss({
          content: ['./src/**/*.html'],
        }),
      ]
      : []),
  ],
}
