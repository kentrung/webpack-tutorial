![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài hôm nay, chúng ta tìm hiểu về quản lí output với nhiều file đầu vào entry, tên của các file output sẽ dựa vào tên của các entry.

## 1. Chuẩn bị file
Các file code ban đầu
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

```js:src/index.js
console.log('Hello World!')
```

## 2. Cấu hình multiple entry point 
Trước khi tìm hiểu vấn đề, chúng ta ngó lại một chút file `webpack.config.js` chỗ đoạn entry point
```js:webpack.config.js
module.exports = {
  entry: './src/index.js',
  ...
}
```
Thuộc tính `entry` nhận 3 loại giá trị (String, Arrray hoặc Object). Điều này có thể gây ra một số nhầm lẫn khi sử dụng chúng.
Đây là kiểu viết dưới dạng Object.
```js:webpack.config.js
module.exports = {
  entry: {
    main: './src/index.js'
  }
  ...
}
```
Bây giờ, các bạn tạo thêm file `src/my-test.js` và code bên trong đơn giản thế này
```js:src/my-test.js
console.log('kentrung test')
```
Nếu muốn entry point nhận thêm file js ở trên ta viết thêm cặp key-value với key là tên nào cũng được, value là đường dẫn tới file `src/my-test.js`
```js:webpack.config.js
entry: {
  main: './src/index.js',
  myTest: './src/my-test.js'
}
```

## 3. Cấu hình output
Sau khi sửa lại entry, giờ ta sửa tiếp output
```js:webpack.config.js
module.exports = {
  ...
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
* Nội dung trên cho biết, với 2 file đầu vào entry là **main** và **myTest** sẽ được output ra 2 file với tên tương ứng là **main.js** và **myTest.js** 
* Chạy lại webpack với `npm run dev` để áp dụng cấu hình mới. Bạn vào folder dist nếu thấy đúng là có thêm hai file `main.js` và `myTest.js` thì chúng ta đã test thành công output với nhiều đầu vào entry. 


## 4. Tổng kết file webpack.config.js 
```js:webpack.config.js 
const path = require('path')

module.exports = {
  entry: {
    main: './src/index.js',
    myTest: './src/my-test.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
> Các đồng chí lưu ý là chúng ta mới chỉ output ra hai file `dist/main.js` và `dist/myTest.js` còn các bạn muốn áp dụng vào thì file `dist/index.html` phải gọi nó vào nhé. 


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo thêm tại: https://webpack.js.org/concepts/output/#multiple-entry-points
* Source code github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd