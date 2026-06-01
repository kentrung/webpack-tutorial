![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Khi Webpack biên dịch và đóng gói code của bạn, việc theo dõi lỗi hay cảnh báo lỗi có thể trở nên khó khăn. Ví dụ: nếu bạn có ba file code `a.js` `b.js` và `c.js` ghép thành một file ouput `bundle.js`, nếu một trong các file đó có lỗi, chỗ thông báo lỗi sẽ chỉ đến `bundle.js`. Điều này không phải lúc nào cũng hữu ích vì bạn có thể muốn biết chính xác lỗi đến từ đâu, dòng bao nhiêu, file nào bị lỗi. Để cuộc sống dễ thở hơn Webpack cung cấp một số options giúp chúng ta dò tìm lỗi một cách dễ dàng đó là `inline source map` hoặc `development mode`

## 1. Chuẩn bị file và tình huống
Các file code ban đầu:
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
File nguồn `src/index.js` mình cố tình code lỗi như này:
```js:src/index.js
function sum(a, b) {
  return a + b
}
console.log(kentrung)
```
Dễ dàng ta thấy biến `kentrung` chưa hề được khai báo nên log ra sẽ báo lỗi ngay nhưng mình cứ kệ và chạy Webpack xem sao. 
```
npm run dev
```
Sau khi Webpack build xong ta mở file `dist/index.html` và xem log ra sao. Kết quả báo lỗi như sau:
```js
Uncaught ReferenceError: kentrung is not defined at main.js:1
```
Nó thông báo lỗi kiểu này thì bạn rất khó để biết được thực sự lỗi ở file nào, dòng nào luôn. Cùng mình tìm hiểu cách dò lỗi bên dưới thôi.

## 2. Chế độ inline source map
Source map là cách thiết lập bản đồ nguồn, code đã được biên dịch sẽ được ánh xạ trở lại code nguồn ban đầu. Nếu có lỗi trong file `src/index.js` thì source map sẽ cho bạn biết chính xác vị trí lỗi. Thêm option này vào `webpack.config.js`
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map'
}
```

Khi thêm option này vào chúng ta dễ dàng biết được lỗi ở dòng nào để mà f*ck lỗi (ý mình là fix lỗi ^^)
```js
Uncaught ReferenceError: kentrung is not defined at index.js:4 
```

## 3. Chế độ development
Tốt nhất khi chúng ta đang trong quá trình viết code nên chọn chế độ **mode: development** để dễ dàng debug, theo dõi lỗi một cách dễ dàng. Thêm option này vào `webpack.config.js`
```js:webpack.config.js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Khi thêm option này chúng ta cũng có kết quả tương tự như dùng **inline source map**
```js
Uncaught ReferenceError: kentrung is not defined at index.js:4 
```
Ngoài ra khi ta thêm option này thì ở màn hình `cmd` cũng mất luôn cảnh báo của webpack mà nó cứ nhắc mình suốt ngày
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm tại: https://webpack.js.org/guides/development/
* Source code github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd