![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài trước chúng ta đã học về chế độ watch mode để webpack có thể tự động build lại nếu có thay đổi code. Bài hôm nay chúng ta sẽ học cách tạo một **web server** đơn giản tại địa chỉ **localhost:8080** và tự động reload thông qua `webpack-dev-server`

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Tạo file `dist/index.html`
```html
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
Tạo file `src/index.js`
```js
console.log('Hello World!')
```
Vậy là xong phần chuẩn bị, phần tiếp theo chúng ta bắt đầu tìm hiểu về **webpack-dev-server** là gì?

## 2. webpack-dev-server
`webpack-dev-server` giúp chúng ta tạo một web server đơn giản tại địa chỉ  `http://localhost:8080` và tự động reload lại mỗi khi có thay đổi file. Để sử dụng chúng ta phải cài đặt nó thông qua npm
```
npm install webpack-dev-server --save-dev
```
Sau khi cài đặt xong chúng ta thay đổi file cấu hình `webpack.config.js` để báo cho máy chủ dev biết nơi tìm tệp
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: './dist'
  }
}
```
Việc tiếp theo là thiết lập một câu lệnh **npm run start** để chạy máy chủ dev trong file `package.json`
```
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack",
    "start": "webpack-dev-server --open"
  }
}
```
Khi thiết lập xong giờ chúng ta chạy webpack xem thế nào, riêng với **npm run start** thì chúng ta có thể viết tắt thành **npm start**
```
npm start
```
Khi chạy xong câu lệnh trên thì tự động trình duyệt được bật lên và mở trang index.html tại địa chỉ  `http://localhost:8080` còn địa chỉ đầy đủ sẽ là `http://localhost:8080/index.html`


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!
* Tham khảo thêm các cấu hình khác cho webpack-dev-server tại: https://webpack.js.org/guides/development/#using-webpack-dev-server
*  Source code github: https://github.com/kentrung/webpack-tutorial
