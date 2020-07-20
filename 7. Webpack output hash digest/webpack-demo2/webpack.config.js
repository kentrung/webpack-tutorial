const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash:6].js',
    path: path.resolve(__dirname, 'dist')
  }
}
