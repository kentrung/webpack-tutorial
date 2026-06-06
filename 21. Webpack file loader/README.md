![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-url-loader-L4x5x3MqlBM) chúng ta đã biết cách thiết lập Webpack để sử dụng hình ảnh trong ứng dụng của bạn thông qua url-loader. Bài hôm nay cũng tương tự như vậy nhưng lại sử dụng **file-loader**, nó giúp chúng ta giải quyết các vấn đề liên quan đến import - require một file, file-loader có nhiệm vụ phân tích và ouput ra trong thư mục dist.

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
  <div id="root"></div>
  <script src="main.js"></script>
</body>
</html>
```
Trong folder `src` ta để ảnh muốn import bên trong folder assets (tài nguyên) như cấu trúc bên dưới
```
webpack-demo
  ...
  |- src/
  |  |- assets/
  |    |- images/
  |      |- img_webpack.png
  |- index.js 
```

## 2. Webpack file-loader

**file-loader** giúp chúng ta giải quyết các vấn đề liên quan đến import - require một file. Nó có nhiệm vụ phân tích và ouput ra trong thư mục dist. Để sử dụng chúng ta phải cài đặt nó thông qua npm
```
npm install file-loader --save-dev
```

Sau khi cài đặt xong chúng ta chỉnh sửa lại cấu hình file `webpack.config.js`
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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
}
```

Code file `src/index.js`
```js
import imgWebpack from './assets/images/img_webpack.png'

function createImgElement() {
  const imgElement = document.createElement('img')
  imgElement.src = imgWebpack
  imgElement.alt = 'webpack từ A đến Á cùng kentrung'
  return imgElement
}

document.getElementById('root').appendChild(createImgElement())
```
Ý nghĩa đoạn code trên là tạo ra một thẻ img có src là đường dẫn bức ảnh ở phần import, alt là mô tả bức ảnh. Sau khi tạo xong thì chèn ảnh này vào trong thẻ HTML có id là root.

Thế là xong phần cấu hình giờ chúng ta chạy webpack xem thế nào: `npm run dev`

Khi chạy xong câu lệnh chúng ta thấy trong folder dist đã tự động có thêm ảnh và file js như cấu trúc bên dưới
```
webpack-demo
  ...
  |- dist/
    |- 5ab50ccadbd858c94b26bfc82375d89d.png
    |- index.html
    |- main.js
```
Bây giờ chúng ta chạy file `dist/index.html` và xem code trong F12
```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <div id="root">
    <img src="5ab50ccadbd858c94b26bfc82375d89d.png" alt="webpack từ A đến Á cùng kentrung">
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Ta thấy đường dẫn bức ảnh lúc này là gọi trực tiếp file ảnh nằm ngang hàng với file html.

## 3. Options Name
Với Option Name  thì chúng ta có thể thay đổi được đường dẫn bức ảnh output. Ví dụ dưới đây chúng ta sẽ gom ảnh và để trong folder `dist/images/`. Cấu hình `webpack.config.js`
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
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
}
```
Khi chạy xong câu lệnh chúng ta thấy trong folder dist đã tự động có thêm ảnh như cấu trúc bên dưới
```
webpack-demo
  ...
  |- dist/
    |- index.html
    |- main.js
    |- images/
      - img_webpack.png
```


-----


Với Option Name thứ hai thì chúng ta có thể thay đổi được đường dẫn bức ảnh dựa theo đúng cấu trúc folder mình đã đặt trong src. Cấu hình `webpack.config.js`
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
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
}
```

Khi chạy xong câu lệnh chúng ta thấy trong folder dist đã tự động có thêm ảnh như cấu trúc bên dưới
```
webpack-demo
  ...
  |- dist/
    |- index.html
    |- main.js
    |- src/
        |- assets/
            |- images/
                |- img_webpack.png
```

Ngoài option này ra thì trong webpack còn nhiều các option khác hay ho lắm mà mình chưa dùng hết được. 


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho file-loader tại: https://webpack.js.org/loaders/file-loader/
* Source code github: https://github.com/kentrung/webpack-tutorial