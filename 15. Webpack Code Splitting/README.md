![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

**Code Splitting** là một trong những tính năng hấp dẫn của Webpack. Tính năng này cho phép bạn chia code của mình thành nhiều gói khác nhau, phân tách đoạn code hoặc thư viện giống nhau ra một file riêng. Nó có thể được sử dụng để tách ra các gói nhỏ hơn và kiểm soát mức độ ưu tiên tải tài nguyên, nếu được sử dụng đúng cách, có thể có tác động lớn đến thời gian tải của trang web.

## 1. Chuẩn bị file
Thêm thư viện [lodash](https://lodash.com/) để tạo ra một thư viện chung, các file nào cần thì gọi vào

Link thư viện: https://www.npmjs.com/package/lodash
```
npm install lodash@4.17.21
```

```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: {
    home: './src/home.js',
    about: './src/about.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

```js:src/home.js
import _ from 'lodash'

console.log('home.js')
```

```js:src/about.js
import _ from 'lodash'

console.log('about.js')
```
Ta thấy cả hai file `home.js` và `about.js` trên đều gọi thư viện lodash để tạo ra sự trùng lặp.

## 2. Webpack Code Splitting
Với setup và cấu hình ở trên khi chưa có **Code Splitting** khi ta chạy `npm run dev` thì được thông số như sau:

![](https://images.viblo.asia/b0226a80-c87e-4f6a-ba5c-fc5baede7aa5.jpg)


Ta có hai file output là `about.js` và `home.js` có dung lượng đều là **72.4 KiB**

Giờ ta thêm **Code Splitting** vào trong file `webpack.config.js` để phân tách code ra nhé
 
```js
const path = require('path')

module.exports = {
  entry: {
  	home: './src/home.js',
  	about: './src/about.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
}
```
Chạy lại `npm run dev` và xem sự khác biệt

![](https://images.viblo.asia/f8eb5bdf-f57f-4090-90ed-1631cb9520d6.jpg)


Lúc này ta thấy có ba file output là `home.js` `about.js` và `vendors~about~home.js`

Hai file output `about.js` và `home.js` lúc trước là **72.4 KiB** giờ chỉ còn tầm **1.5KiB**

Xuất hiện file output  `vendors~about~home.js` điều này có nghĩa webpack đã tối ưu source code, thu gom những thư viện giống nhau ở đây là `lodash`, tên thì được remix giữa vendor (nhà cung cấp) với tên hai file

Lưu ý là khi chạy qua **Code Splitting** thì code đã bị tách ra các file khác nhau, trong file `dist/index.html` muốn chạy được thì phải gọi cả file vendors vào cùng

```html:dist/index.html
<script src="vendors~about~home.js"></script>
<script src="home.js"></script>
```


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm tại: https://webpack.js.org/guides/code-splitting/
* Source code Github: https://github.com/kentrung/webpack-tutorial
* Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
