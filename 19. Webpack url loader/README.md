![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong bài hướng dẫn này chúng ta sẽ tìm hiểu cách thiết lập Webpack để sử dụng hình ảnh trong ứng dụng của bạn thông qua **url-loader**, nó giúp chúng ta mã hóa hình ảnh thành chuỗi base64 URIs, cùng tìm hiểu xem cách **load hình ảnh vào  Javascript** như thế nào.

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


## 2. Webpack url-loader

**url-loader** giúp chúng ta mã hóa các file thành chuỗi base64. url-loader hoạt động giống với file-loader nhưng có thể trả về DataURL nếu tệp nhỏ hơn giới hạn byte. Để sử dụng chúng ta phải cài đặt nó thông qua npm
```
npm install url-loader --save-dev
```

Sau khi cài đặt xong chúng ta chỉnh sửa lại cấu hình file `webpack.config.js`. Các tài nguyên hình ảnh có đuôi là png | jpg | gif sẽ được load thông qua url-loader. 
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
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader'
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
    <img src="data:image/png;base64,iVBORw0K...uPwIMAMSj2w37VAxPAAAAAElFTkSuQmCC" alt="webpack từ A đến Á cùng kentrung">
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Ta thấy đường dẫn bức ảnh lúc này là một chuỗi base64 rất dài và đó chính là **url-loader**. Nếu bạn muốn tìm hiểu base64 là gì, những điểm lợi và hại khi sử dụng nó thì có thể tham khảo link này để đọc thêm: http://blogchubang.blogspot.com/2016/09/base64-image-o-la-gi-va-can-luu-y-nhung.html

## 3. Option limit
Giới hạn dung lượng file, mặc định là no limit. Nếu kích thước tệp bằng hoặc lớn hơn giới hạn, wepack sử dụng `file-loader` (theo mặc định) và tất cả các tham số truy vấn được chuyển cho nó. Ví dụ dưới đây giới hạn dung lượng tối đa là 8KB
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 8*1024
            },
          },
        ],
      },
    ],
  },
};
```


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho url-loader: https://webpack.js.org/loaders/url-loader/
* Source code github: https://github.com/kentrung/webpack-tutorial