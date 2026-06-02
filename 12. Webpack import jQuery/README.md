![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài viết hôm nay mình sẽ hướng dẫn các bạn cách thêm thư viện [jQuery](https://jquery.com/) vào trong webpack theo phong cách load module. Nếu như ngày xưa chúng ta phải thêm jQuery vào trang web theo kiểu này
```html
<script src="jquery.js"></script>
```
Giờ với Webpack chúng tôi không làm như thế vì không hợp với xu thế ^^. Cùng tìm hiểu xem cách làm như nào nhé!

## 1. Chuẩn bị file và tình huống
Các file code ban đầu:
```js:webpack.config.js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src/a.js',
      './src/b.js'
    ]
  },
  output: {
    filename: '[name].js',
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
```js:src/a.js
$('h1').css('color', 'white')
```
```js:src/b.js
$('h1').css('background', 'purple')
```
Đoạn code jQuery trên có tác dụng tìm thẻ `h1` và thêm một ít css vào trong đó cũng khá đơn giản. 

Chưa fix lỗi mà ta cứ chạy webpack `npm run dev` và xem kết quả thế nào

Mở file `dist/index.html` thì thấy thẻ h1 không có css gì cả, mở log ra xem thì báo lỗi
```
Uncaught ReferenceError: $ is not defined at (a.js:1)
```

## 2. Load jQuery theo từng file
Trước tiên mình phải cài đặt jQuery qua npm

Link thư viện: https://www.npmjs.com/package/jquery
```
npm install jquery
```
Ở trường hợp ta chỉ cần file `src/a.js` load jQuery
```js:src/a.js
const $ = require('jquery')

$('h1').css('color', 'white')
```
Chạy lại webpack và ta có log như sau:
```
Uncaught ReferenceError: $ is not defined at (b.js:1)
```
Như vậy ở file `src/a.js` đã chạy code jQuery ngon lành nhưng file `src/b.js` thì không. Vẫn theo cách trên thì file nào cần thì gọi jQuery là xong.
```js:src/b.js
const $ = require('jquery')

$('h1').css('background', 'purple')
```
Chạy lại webpack và kết quả là không còn lỗi nữa, css đã được thêm vào thành công.

## 3. Webpack Provide Plugin
Với cách trên file nào cần thì phải gọi jQuery vào, khá mất công viết. Ta có cách thứ hai dùng provide plugin của Webpack để tự động tải jQuery, chúng ta chỉ cần trỏ cả hai biến mà nó hiển thị vào module tương ứng
```js:webpack.config.js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: [
      './src/a.js',
      './src/b.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
```
Bây giờ hai file js cứ code jQuery ầm ầm mà không cần phải import im-piếc gì nữa
```js:src/a.js
$('h1').css('color', 'white')
```
```js:src/b.js
$('h1').css('background', 'purple')
```
Giờ chạy lại webpack: `npm run dev` và kết quả là css đã được thêm vào đúng theo mong muốn. Vậy là xong chúng ta không còn phải thêm jQuery thủ công như trước nữa, tất cả đã có webpack lo các chú chỉ việc code ^^!


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm tại: https://webpack.js.org/plugins/provide-plugin/#usage-jquery
* Source code Github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
