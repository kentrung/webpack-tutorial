![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-file-loader-3Q75wn9JlWb) chúng ta đã biết cách thiết lập Webpack để load ảnh trong ứng dụng của bạn thông qua url-loader và file-loader. Bài hôm nay chúng ta sẽ học cách load css vào bên trong file javascript thông qua **style-loader**

## 1. Chuẩn bị file
Code file `dist/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JAVASCRIPT</a></li>
    <li><a href="#">WEBPACK</a></li>
  </ul>
  <script src="main.js"></script>
</body>
</html>
```
Tạo file `src/style.css`
```css
ul {list-style: none;}
ul li {display: inline-block; margin: 0 10px;}
ul li a {color: #377ab7; text-decoration: none;}
ul li a:hover {color: red;}
```
Tạo file `src/index.js` và gọi file css ở trên vào
```js
import './style.css'
```
Vậy là xong phần chuẩn bị, phần tiếp theo chúng ta bắt đầu tìm hiểu về **style-loader** là gì?

## 2. Webpack style-loader

`style-loader` giúp chúng ta **Inject CSS into the DOM**. Để sử dụng chúng ta phải cài đặt nó thông qua npm (lưu ý là chúng ta nên kết hợp cùng với `css-loader`)
```
npm install style-loader css-loader --save-dev
```
Sau khi cài đặt xong chúng ta chỉnh sửa lại cấu hình file `webpack.config.js`
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
```
Thế là xong phần cấu hình giờ chúng ta chạy webpack xem thế nào `npm run dev`

Khi chạy xong câu lệnh trên, giờ chúng ta chạy file `dist/index.html` và xem code trong F12
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack từ A đến Á cùng kentrung</title>
  <style>
    ul {list-style: none;}
    ul li {display: inline-block; margin: 0 10px;}
    ul li a {color: #377ab7; text-decoration: none;}
    ul li a:hover {color: red;}
  </style>
</head>
<body>
  <ul>
    <li><a href="#">HOME</a></li>
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JAVASCRIPT</a></li>
    <li><a href="#">WEBPACK</a></li>
  </ul>
  <script src="main.js"></script>
</body>
</html>
```
Ta thấy phần code css giờ đã được tự động thêm vào trang html thông qua thẻ style trong khối head. **Thật là vi diệu!**
##  3. Option injectType
`injectType` cho phép chúng ta thiết lập cách css được thêm vào trong html. Theo mặc định thì webpack sẽ chèn css vào trong thẻ style bên trong khối head cách này gọi là **internal CSS**.

Một trong những cách khác để chèn css là dùng **external CSS** và gọi nó qua thẻ link trong khối head. Lưu ý khi dùng cách này bạn phải chắc chắn là đã có **file-loader**, nếu quên hoặc chưa biết tác dụng của nó thì bạn nên xem lại chút ở [bài trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-file-loader-3Q75wn9JlWb)
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag' } },
          { loader: 'file-loader', options: { name: 'css/[name].[ext]' } },
        ],
      },
    ],
  },
} 
```
Chạy lại webpack thì chúng ta thấy trong folder dist đã tự động thêm folder và file css theo cấu trúc bên dưới
```
webpack-demo
  ...
  |- dist/
    |- css/
      |- style.css
    |- index.html
    |- main.js
```
Giờ chúng ta chạy file `dist/index.html` và xem code trong F12 đã tự động thêm css thông qua thẻ link
```html
<!DOCTYPE html>
<html lang="en">
<head>
  ...
  <link rel="stylesheet" href="css/style.css">
</head>
...
```
## 4. Option insert
Theo mặc định thì webpack sẽ chèn css vào khối **\<head>** nhưng với `insert` chúng ta có thể đặt nó vào vị trí nào mình muốn. Ví dụ với cấu hình này thì css sẽ được đặt ở dưới cùng trong khối **\<body>**
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader', options: { insert: 'body' } },
          'css-loader',
        ],
      },
    ],
  },
}
```
Giờ chúng ta chạy file `dist/index.html` và xem code trong F12
```html
<body>
  ...
  <script src="main.js"></script>
  <style>
    ul {list-style: none;}
    ul li {display: inline-block; margin: 0 10px;}
    ul li a {color: #377ab7; text-decoration: none;}
    ul li a:hover {color: red;}
  </style>
</body>
```

Cứ tự động như này thì quả thật là phê! Ngoài ra còn rất nhiều option khác của **style-loader** mà mình không nói hết được. 


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo thêm các cấu hình khác cho style-loader: https://webpack.js.org/loaders/style-loader/
* Source code github: https://github.com/kentrung/webpack-tutorial