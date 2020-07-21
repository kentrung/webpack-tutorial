![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài hôm nay chúng ta tìm hiểu về quản lí output với nhiều file đầu vào entry, tên của các file output sẽ dựa vào tên của các entry.

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu
```
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

Tạo file `src/index.js`
```
console.log('Hello World!')
```

## 2. Cấu hình multiple entry point 
Trước khi tìm hiểu vấn đề chúng ta ngó lại một chút file `webpack.config.js`
```
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Ta thấy entry đang là **Single Entry**, thực ra đây chỉ là kiểu viết shorthand của
```
entry: {
  main: './src/index.js'
}
```
Bây giờ các bạn tạo thêm file `src/my-test.js` và code bên trong đơn giản thế này
```
console.log('kentrung test')
```
Nếu muốn entry point nhận file js ở trên ta viết thêm cặp key-value với key là tên nào cũng được, value là đường dẫn tới file my-test.js
```
entry: {
  main: './src/index.js',
  myTest: './src/my-test.js'
}
```
## 3. Cấu hình output
Sau khi sửa lại entry, giờ ta sửa tiếp output
```
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, 'dist')
}
```
* Nội dung trên cho biết, với hai file đầu vào là index.js và my-test.js sẽ được output ra các file với tên tương ứng lấy từ entry (là **main** và **myTest**), lấy hai tên này đổ vào \[name] tương ứng là <b>main.js</b> và <b>myTest.js</b> <br />
* Chạy lại webpack với `npm run dev` để áp dụng cấu hình mới. Bạn vào folder dist nếu thấy đúng là có thêm hai file main.js và myTest.js thì chúng ta đã test thành công output với nhiều đầu vào entry. 


## 4. Tổng kết file webpack.config.js
```
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
> Lưu ý là chúng ta mới chỉ output ra hai file main.js và myTest.js còn các bạn muốn áp dụng nó vào thì file index.html phải gọi nó vào nhé. 


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo thêm về chế độ output with multiple entry points tại: [https://webpack.js.org/concepts/output/#multiple-entry-points](https://webpack.js.org/concepts/output/#multiple-entry-points)
* Sourcode github: https://github.com/kentrung/webpack-tutorial