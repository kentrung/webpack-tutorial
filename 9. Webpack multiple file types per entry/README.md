![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-multiple-entry-points-Az45bDYzZxY) chúng ta đã học được cách tạo được nhiều output từ nhiều key entry, mỗi key là một file. Bài hôm nay chúng ta sẽ học cách nhập nhiều file cho mỗi key entry. Hãy làm một ví dụ, chúng ta đang code trang chủ và trang này load hai file `home.js` và `slider.js`. Như vậy ta cần tạo một key entry nhận hai file JS này và gộp chúng lại làm một file JS duy nhất.

## 1. Chuẩn bị file

Tạo file `src/home.js` như sau:
```
console.log('home.js')
```
Tạo file `src/slider.js`
```
console.log('slider.js')
```

## 2. Cấu hình Multiple file types per entry
Code file `webpack.config.js` ban đầu
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Ta thấy với key entry ban đầu thì hiện chỉ nhận một file đầu vào, giờ để key entry này nhận nhiều file thì ta cần chuyển nó sang mảng các string là xong
```
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
Chạy lại webpack với `npm run dev` để áp dụng cấu hình mới. File output xuất ra `main.js` là gộp của hai file home và slider. Trang `dist/index.html` ta chỉ cần gọi file main.js là xong. Mở file html này lên mà thấy hai log như này là ok
```
home.js
slider.js
```

## 3. Tổng kết file webpack.config.js
```
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
* Tham khảo thêm về chế độ Multiple file types per entry tại: https://webpack.js.org/guides/entry-advanced/#multiple-file-types-per-entry
* Sourcode github: https://github.com/kentrung/webpack-tutorial