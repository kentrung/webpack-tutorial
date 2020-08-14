![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Khi làm việc cùng Javascript, đôi khi ta cảm thấy thật phiền toái khi áp dụng các cú pháp mới nhất thì code chạy được trên trình duyệt này, lại chết trên trình duyệt khác, hay cùng một trình duyệt version mới nhất thì ok, nhưng lại ngắc ngoải trên version thấp hơn vì chưa được support. Thật may mắn, thay vì phải lo lắng thay đổi code cho phù hợp cho từng trình duyệt, một công cụ được sinh ra để giải quyết vấn đề đó là babel. **Babel** được dùng với mục đích chuyển đổi mã lệnh JavaScript được viết dựa trên tiêu chuẩn ECMAScript phiên bản mới về phiên bản cũ hơn để tương thích với hầu hết các trình duyệt.

## 1. Cài đặt
```
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
Trong đó  
* `babel-loader` là module loader cho webpack
* `@babel/core` là core của babel
* `@babel/preset-env` là babel preset cho mỗi môi trường. Example environments: chrome, opera, edge, firefox, safari, ie, ios, android, node, electron

## 2. Basic usage
Cấu trúc file và folder như sau
```
webpack-demo
  ...
  |- dist/
    - index.html
  |- src/
    - index.js
  |- webpack.config.js
```
Code file `dist/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

Code file `src/index.js`
```js
const author = 'kentrung'
console.log(`Webpack từ A đến Á cùng ${author}`)
```

Chém gió tí là ở trên tuy chỉ có hai dòng nhưng mình đã sử dụng syntax mới của ES6 đó là khai báo biến `const` thay cho **var** và sử dụng `Template Literals` để thực thi biểu thức trong chuỗi. Code ngày xưa thì viết kiểu này

```js
var author = 'kentrung'
console.log('Webpack từ A đến Á cùng ' + author)
```

Chém gió thế thôi, giờ để sử dụng **babel loader** ta sửa lại file `webpack.config.js`

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
```
Giờ chạy lại webpack xem thế nào: `npm run dev`

Ta mở trang **index.html** và thấy log ra đúng câu mong muốn. 
```
Webpack từ A đến Á cùng kentrung     //index.js:2
```
Mình click thử vào dòng 2 xem code thế nào 
```js
var author = 'kentrung';
console.log("Webpack t\u1EEB A \u0111\u1EBFn \xC1 c\xF9ng ".concat(author));
```

**Thật là vi diệu!** Nói chung với dự án còi zư này thì cấu hình này là ok lắm rồi, đối với các dự án lớn siêu to khổng lồ thì các bạn sẽ phải đào sâu thêm vào thư viện để config còn ở đây chỉ mang tính chất giới thiệu mơn trớn thôi.


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!


Tham khảo thêm các cấu hình khác cho Babel loader tại: 
* https://webpack.js.org/loaders/babel-loader
* https://babeljs.io/
* Source code github: https://github.com/kentrung/webpack-tutorial
