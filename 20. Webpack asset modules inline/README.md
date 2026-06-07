![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong bài hướng dẫn này chúng ta sẽ tìm hiểu cách thiết lập Webpack để sử dụng hình ảnh trong ứng dụng của bạn thông qua **url-loader**, nó giúp chúng ta mã hóa hình ảnh thành chuỗi base64 URIs, cùng tìm hiểu xem cách **load hình ảnh vào  Javascript** như thế nào.

## 1. Chuẩn bị file
```html:dist/index.html
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
Trong folder `src` ta để ảnh muốn import bên trong folder `assets` như cấu trúc bên dưới
```
webpack-demo
  ...
  |- src/
  |  |- assets/
  |    |- images/
  |      |- img_webpack.png
  |  |- index.js 
```


## 2. Asset Modules Inline

**Asset Modules Inline** giúp chúng ta mã hóa các file thành chuỗi base64 nếu tệp nhỏ hơn giới hạn byte. Đây là modules có sẵn trong webpack 5


Chỉnh sửa lại cấu hình file `webpack.config.js`, các tài nguyên hình ảnh có đuôi là `png|jpg|gif` sẽ được load thông qua Asset Modules Inline. 
```js:webpack.config.js
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
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      }
    ]
  }
}
```


```js:src/index.js
import imgWebpack from './assets/images/img_webpack.png'

function createImgElement() {
  const imgElement = document.createElement('img')
  imgElement.src = imgWebpack
  imgElement.alt = 'Webpack từ A đến Á cùng kentrung'
  return imgElement
}

document.getElementById('root').appendChild(createImgElement())
```
Ý nghĩa đoạn code trên là tạo ra một thẻ img có `src` là đường dẫn bức ảnh ở phần import, `alt` là mô tả bức ảnh. Sau khi tạo xong thì chèn ảnh này vào trong thẻ HTML có id là `root`

Thế là xong phần cấu hình giờ chúng ta chạy webpack xem thế nào: `npm run dev`

Bây giờ chúng ta chạy file `dist/index.html` và xem code trong F12
```html:dist/index.html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <div id="root">
    <img src="data:image/png;base64,iVBORw0K...uPwIMAMSj2w37VAxPAAAAAElFTkSuQmCC" alt="Webpack từ A đến Á cùng kentrung">
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Ta thấy đường dẫn bức ảnh lúc này là một chuỗi base64 rất dài và đó chính là tác dụng của **Asset Modules Inline**.

## 3. Option limit
Giới hạn dung lượng file, mặc định là no limit. Nếu kích thước tệp bằng hoặc lớn hơn giới hạn, webpack sử dụng `file-loader` (theo mặc định) và tất cả các tham số truy vấn được chuyển cho nó. Ví dụ dưới đây giới hạn dung lượng tối đa là 8KB
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024
          }
        }
      }
    ]
  }
}
```


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo: https://webpack.js.org/loaders/url-loader/
* Source code: https://github.com/kentrung/webpack-tutorial
* Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd