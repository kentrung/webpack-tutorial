![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [năm](https://viblo.asia/p/webpack-tu-a-den-a-webpack-watch-mode-Qbq5Qm1m5D8) chúng ta đã học về chế độ watch mode để webpack có thể tự động build lại nếu có thay đổi code. Bài hôm nay chúng ta sẽ học cách tạo một **web server** đơn giản tại địa chỉ **localhost:8080** và tự động reload thông qua `webpack-dev-server`

## 1. Chuẩn bị file
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

```html:dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <h1>Webpack từ A đến Á cùng kentrung</h1>
  <script src="main.js"></script>
</body>
</html>
``` 

```js:src/index.js
console.log('Hello World!')
```

## 2. webpack-dev-server
`webpack-dev-server` giúp chúng ta tạo một web server đơn giản tại địa chỉ  `http://localhost:8080` và tự động reload lại mỗi khi có thay đổi file. Để sử dụng chúng ta phải cài đặt nó thông qua npm

Link thư viện: https://www.npmjs.com/package/webpack-dev-server

```
npm install webpack-dev-server --save-dev
```
Sau khi cài đặt xong chúng ta thay đổi file cấu hình `webpack.config.js` để báo cho máy chủ dev biết nơi tìm tệp
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist')
    }
  }
}
```
Việc tiếp theo là thiết lập một câu lệnh **npm run serve** để chạy máy chủ dev trong file `package.json`
```json:package.json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack",
    "serve": "webpack serve --open"
  }
}
```
Khi thiết lập xong giờ chúng ta chạy webpack xem thế nào
```
npm run serve
```
Khi chạy xong câu lệnh trên thì tự động trình duyệt được bật lên và mở trang index.html tại địa chỉ  `http://localhost:8080` còn địa chỉ đầy đủ sẽ là `http://localhost:8080/index.html`

## 3. Đổi cổng mặc định
Nếu muốn đổi cổng mặc định sang cổng khác (ví dụ như cổng 9000) và enable [gzip compression](https://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/) thì dùng cấu hình như này:
```js:webpack.config.js
module.exports = {
  ...
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000
  }
}
```


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!
* Tham khảo: 
* https://webpack.js.org/guides/development/#using-webpack-dev-server
* https://webpack.js.org/configuration/dev-server/
*  Source code: https://github.com/kentrung/webpack-tutorial/tree/master/6.%20Webpack%20dev%20server
*  Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
