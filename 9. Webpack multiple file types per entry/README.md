![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-multiple-entry-points-Az45bDYzZxY) chúng ta đã học được cách tạo được nhiều output từ nhiều key entry, mỗi key entry là một file. Bài hôm nay sẽ là mỗi key entry nhưng nhiều file. Ví dụ chúng ta có 2 file `home.js` và `slider.js`, ta muốn gộp hai file này làm một file output duy nhất.

## 1. Chuẩn bị file

Các file code như sau:
```js:src/home.js
console.log('home.js')
```

```js:src/slider.js
console.log('slider.js')
```

## 2. Cấu hình Multiple file types per entry
Code file `webpack.config.js` ban đầu
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
Ta thấy với key entry trên chỉ nhận một file đầu vào là `src/index.js`, giờ để key entry này nhận nhiều file thì ta cần chuyển nó sang mảng, output ra sẽ là `main.js`
```js
module.exports = {
  entry: {
    main: [
      './src/home.js',
      './src/slider.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Chạy lại webpack với `npm run dev` để áp dụng cấu hình mới. File output xuất ra `dist/main.js` là gộp của hai file `src/home.js` và `src/slider.js`. Trang `dist/index.html` ta chỉ cần gọi file **main.js** là xong. Mở file html này lên mà thấy 2 log như này là ok
```
home.js
slider.js
```

## 3. Tổng kết file webpack.config.js
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: {
    main: [
      './src/home.js',
      './src/slider.js'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo thêm tại: https://webpack.js.org/guides/entry-advanced/#multiple-file-types-per-entry
* Sourcode github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd