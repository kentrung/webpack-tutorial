const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src/a.js',
      './src/b.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}