Bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-resolve-alias-extensions-naQZRL4Q5vx) chúng ta đã biết cách tạo **Alias** trong Webpack, bài hôm nay chúng ta sẽ học thêm cách khác thông qua `babel plugin module resolver`
## 1. Alias là gì?
Alias là đường dẫn tuyệt đối thay thế cho đường dẫn tương đối khi import các module. Ví dụ như sau:
```js
// thay vì
import Menu from '../../../src/components/Menu'

// thì dùng
import Menu from '~/components/Menu'
```
Cách bên dưới chính là sử dụng `alias`, cách này giúp chúng ta đỡ phải viết đường dẫn dài dòng, phải so sánh vị trí tương đối giữa file đang code với file muốn import. Nói chung người ta hay dùng alias để tạo đường dẫn root cho dự án.

## 2. Chuẩn bị file
Các file code ban đầu
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

## 3. Cài đặt
Link thư viện: https://www.npmjs.com/package/babel-plugin-module-resolver
```
npm i @babel/core@7.29.7 babel-loader@10.1.1 babel-plugin-module-resolver@5.0.3 --save-dev
```
Tạo file `.babelrc` tại thư mục root của dự án, nó chứa cấu hình cho Babel.
```js:.babelrc
{
  "plugins": [
    ["module-resolver", {
      "root": ["./src"],
      "alias": { "~": "./src" }
    }]
  ]
}
```
Sửa lại file `webpack.config.js`.

Khi nó gặp các file có đuôi `.js` sẽ chạy `babel-loader`, sau đó Babel đọc `.babelrc` và sử dụng `babel-plugin-module-resolver` để chuyển đổi đường dẫn `~/components/Menu` thành `./src/components/Menu`
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/pages/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
```
Tạo file `jsconfig.json` tại thư mục root của dự án để cấu hình gợi ý code trong VSCode
```json:jsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "~/*": ["./src/*"]
    }
  }
}
```


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

Source code Github: https://github.com/kentrung/webpack-tutorial

Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd