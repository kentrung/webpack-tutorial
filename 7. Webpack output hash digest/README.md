![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài hôm nay chúng ta sẽ tìm hiểu về **output hash digest**. Nếu như ở bài trước chúng ta đã output ra được một file `dist/main.js` thì khi thêm giá trị hash output nó sẽ build ra kiểu như `dist/main.f24fea.js` còn code bên trong thì vẫn vậy chẳng khác gì. Tác dụng chính của nó là tránh trình duyệt cache lại file js, khi chúng ta có thay đổi code thì file output sau sẽ khác với file trước. 

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

## 2. Thêm output hash trong webpack config
Các bạn mở file `webpack.config.js` và thêm giá trị hash vào chỗ output như này nhé
```
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Khi chạy lại câu lệnh `npm run dev` chúng ta sẽ thấy file js được build ra trông dạng như này `dist/main.f24fea8f2c0f0b10bbce.js` và lưu ý là code bên trong cũng không khác gì khi chưa có hash.

## 3. Độ dài của chuỗi hash
Mặc định khi thêm hash vào thì độ dài chuỗi này sẽ là **20 kí tự** nếu bạn thấy dài thì có thể thay đổi được bằng cách thêm số đằng sau. Ví dụ dưới đây mình chỉ tạo chuỗi hash dài **6 kí tự**
```
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.[hash:6].js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
File output build ra sẽ trông dạng như thế này `dist/main.f24fea.js` 

> Các đồng chí lưu ý là khi dùng **hash** rồi thì file output sinh ra sẽ khác nhau, điều này làm ảnh hưởng đến file `dist/index.html` chúng ta đã viết lúc trước chỉ gọi `main.js`. Vấn đề này hiện ta chưa giải quyết ngay được, bài hôm nay chủ yếu là giới thiệu về output hash để các bạn biết thôi nhé. 


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.
* Tham khảo thêm về output hash digest tại đây: [https://webpack.js.org/configuration/output/#outputhashdigest](https://webpack.js.org/configuration/output/#outputhashdigest)
* Sourcode github: [https://github.com/kentrung/webpack-tutorial](https://github.com/kentrung/webpack-tutorial)