const path = require('path')

module.exports = {
  entry: "./src/pages/index.js",
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}
