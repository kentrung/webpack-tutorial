const path = require('path')

module.exports = {
  entry: {
    main: [
      './src/home.js',
      './src/slider.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
