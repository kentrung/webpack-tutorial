const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    myTest: './src/my-test.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
