![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài viết hôm nay mình sẽ hướng dẫn các bạn cách load [jQuery](https://jquery.com/) vào trong webpack theo phong cách load module. Nếu như ngày xưa chúng ta phải load jQuery vào trang web theo kiểu này
```
<script src="jquery.js"></script>
```
Giờ với webpack chúng tôi không làm như thế vì không hợp với xu thế ^^. Cùng tìm hiểu xem cách làm như nào nhé!

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu:
```javascript
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

File `dist/index.html` như sau:
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
Ta có hai file `src/a.js` và `src/b.js`. Code hai file js như sau:
```js:src/a.js
 $('h1').css('color', 'white')
```
```js:src/b.js
$('h1').css('background', 'purple')
```
Đoạn code jQuery trên có tác dụng tìm thẻ `h1` và thêm một ít css vào trong đó cũng khá đơn giản. 

Chưa fix lỗi mà ta cứ chạy webpack xem kết quả thế nào `npm run dev`

Mở file `dist/index.html` thì thấy thẻ h1 không có thêm css, mở log ra xem thì báo lỗi
```
Uncaught ReferenceError: $ is not defined at (a.js:1)
```

## 2. Load jQuery theo từng file
Trước tiên mình phải cài đặt jQuery qua npm nhé
```
npm install jquery
```
Ở trường hợp ta chỉ cần file `src/a.js` load jQuery còn file kia thì không. Ta chỉ cần thêm jQuery theo cách sau:
```js:src/a.js
import $ from 'jquery'

$('h1').css('color', 'white')
```
Chạy lại webpack và ta có log như sau:
```
Uncaught ReferenceError: $ is not defined at (b.js:1)
```
Như vậy ở file `src/a.js` đã chạy code jQuery ngon lành nhưng file `src/b.js` thì không. Vẫn theo cách trên thì file nào cần thì gọi jQuery là xong.
```js:src/b.js
import $ from 'jquery'

$('h1').css('background', 'purple')
```
Chạy lại webpack và kết quả là không còn lỗi nữa, css đã được thêm vào thành công.

## 3. Webpack Provide Plugin
Với cách trên file nào cần thì phải gọi jQuery vào, khá mất công viết. Ta có cách thứ hai dùng provide plugin của webpack để tự động tải jQuery, chúng ta chỉ cần trỏ cả hai biến mà nó hiển thị vào mô-đun nút tương ứng:
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
Bây giờ hai file js cứ code jQuery ầm ầm mà không cần phải import gì nữa
```js:src/a.js
$('h1').css('color', 'white')
```
```js:src/b.js
$('h1').css('background', 'purple')
```
Giờ chạy lại webpack: `npm run dev` và kết quả là css đã được thêm vào đúng theo mong muốn. Vậy là xong chúng ta không còn phải load jQuery thủ công như trước nữa, tất cả đã có webpack lo các chú chỉ việc code ^^!


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm về chế độ development tại: https://webpack.js.org/plugins/provide-plugin/#usage-jquery
* Sourcode github: https://github.com/kentrung/webpack-tutorial