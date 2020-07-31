![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Khi webpack đóng gói mã nguồn của bạn, việc theo dõi lỗi hay cảnh báo có thể trở nên khó khăn. Ví dụ: nếu bạn có ba file nguồn `src/a.js` `src/b.js` và `src/c.js` ghép thành một file `bundle.js` và một trong các file nguồn có lỗi, chỗ thông báo lỗi sẽ chỉ đến bundle.js. Điều này không phải lúc nào cũng hữu ích vì bạn có thể muốn biết chính xác lỗi đến từ đâu, dòng bao nhiêu, file nào bị lỗi. Để cuộc sống dễ thở webpack cung cấp một số option giúp chúng ta dò tìm lỗi một cách dễ dàng đó là `inline source map` hoặc `mode development`

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu:
```javascript
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
```js
function sum(a, b) {
  return a + b
}
console.log(kentrung)
```
Easy ta thấy biến `kentrung` chưa hề được khai báo nên log ra sẽ báo lỗi. Mình cứ kệ và chạy webpack xem sao. 
```
npm run dev
```
Sau khi webpack build xong ta mở file `dist/index.html` và xem log ra sao. Kết quả báo lỗi như sau:
```js
Uncaught ReferenceError: kentrung is not defined at main.js:1
```
Nó thông báo lỗi kiểu này thì bạn rất khó để biết được thực sự lỗi ở file nào, dòng nào luôn. Để dễ fix lỗi thì webpack cung cấp option **inline source map** hoặc **mode development.**

## 2. Chế độ inline source map
Source map là cách thiết lập bản đồ nguồn, ánh xạ mã được biên dịch của bạn trở lại mã nguồn ban đầu. Nếu một lỗi bắt nguồn trong file `src/index.js` thì source map sẽ cho bạn biết chính xác vị trí lỗi. Thêm option này vào `webpack.config.js`
```javascript
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

Khi thêm option này vào chúng ta dễ dàng biết được lỗi ở vị trí nào để mà f*ck lỗi (ý mình là fix lỗi ^^)
```
Uncaught ReferenceError: kentrung is not defined at index.js:4 
```

## 3. Chế độ mode development
Tốt nhất khi chúng ta đang trong quá trình viết code nên chọn chế độ **mode: development** để dễ dàng debug, theo dõi lỗi một cách dễ dàng. Thêm option này vào `webpack.config.js`
```javascript
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
```javascript
Uncaught ReferenceError: kentrung is not defined at index.js:4 
```
Ngoài ra khi ta thêm option này thì ở màn hình `cmd` cũng mất luôn cảnh báo của webpack mà nó cứ nhắc mình suốt ngày
```javascript
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm về chế độ development tại: https://webpack.js.org/guides/development/
* Sourcode github: https://github.com/kentrung/webpack-tutorial