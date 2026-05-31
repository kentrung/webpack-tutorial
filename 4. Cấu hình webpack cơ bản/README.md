![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [ba](https://viblo.asia/p/webpack-tu-a-den-a-cau-truc-thu-muc-63vKjbmxK2R) chúng ta đã setup xong các thư mục của dự án như thư mục `src` để chứa code lúc phát triển, thư mục `dist` để chứa code lúc hoàn thiện, file `webpack.config.js` để cấu hình chạy webpack. Bài hôm nay chúng ta sẽ bắt tay vào viết những dòng code đầu tiên để test xem nó đã chạy được chưa.

## 1. Cấu hình file webpack.config.js
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

Giải thích code
```js
const path = require('path')
```
* Dòng này chúng ta thêm module `path` từ trong NodeJS vào để xử lí
* Module `path` giúp chúng ta thao tác xử lí với đường dẫn file, tên file, folder...
* Một số module được tích hợp sẵn trong NodeJS (built-in modules) như `http` `https` `fs` `path`... bạn chỉ cần gọi vào mà không cần phải cài đặt
* Quay lại đoạn code trên, mình gọi một module có tên là `path` và gán nó cho biến cũng tên là `path` (mình đặt trùng tên để cho dễ nhận biết biến này là module nào thôi chứ bạn có thể đặt tên nào cũng được) 
```js
entry: './src/index.js'
```
Đầu vào (entry) của webpack sẽ là file `index.js` nằm trong thư mục src. Như mình nói ở bài trước thư mục src chứa code lúc viết, chỉnh sửa, phát triển của dự án.
```js
output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
}
```

Đầu ra (output) của webpack sẽ có hai phần.
* `filename: 'main.js'` Tên file output là main.js
* `path: path.resolve(__dirname, 'dist')` Tên folder chứa file output là dist, ở bài trước đã tạo sẵn folder này rồi 

## 2. Tạo file index.html trong thư mục dist
Trong folder dist ta tạo file `index.html` 
```
webpack-demo
  |- ...
  |- dist/
    |- index.html

```
Và viết code bên trong gọi sẵn `main.js`
```html:dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <h1 id="title">Hello Webpack!</h1>
  <script src="main.js"></script>
</body>
</html>
```
Lưu ý là trong folder `dist` này chúng ta mới chỉ tạo file `index.html` trong đấy gọi sẵn `main.js`. File JS này là do webpack output ra dựa trên cấu hình mà mình đã viết.

## 3. Tạo file index.js trong thư mục src
Trong folder src ta tạo file `index.js` và viết đoạn code sau có tác dụng tìm thẻ html có **id = title** và cho chữ thành màu đỏ
```js:src/index.js
const titleElement = document.querySelector('#title')
titleElement.style.color = 'red'
```

## 4. Test chạy webpack
Mở `cmd` lên và gõ câu lệnh sau để chạy webpack
```
npx webpack
```
Khi có file `webpack.config.js` thì mặc định webpack sẽ chọn file đó, cũng đừng lo lắng khi có cảnh báo như này trên `cmd`

![webpack warning](https://images.viblo.asia/1947ca99-dabd-4136-a3c3-854c394d79ba.jpg)

Chúng ta sẽ giải quyết vấn đề đó sau. Khi chạy lệnh trên xong, bạn quay lại folder dist sẽ thấy có thêm file `main.js` và code bên trong.

```js
document.querySelector("#title").style.color="red";
```

Bây giờ bạn mở file `dist/index.html` lên xem và thật là vi diệu chữ **Hello Webpack!** đã thành màu đỏ đúng như dự đoán. Easy right?

## 5. Cấu hình file package.json
Ở phần trên chúng ta đã test webpack thành công bằng câu lệnh `npx webpack`. Vấn đề đặt ra bây giờ chúng ta có thể nhớ dễ dàng câu lệnh trên nhưng nếu để lâu bạn sẽ không nhớ nổi là chạy câu lệnh gì để chạy webpack. Mỗi thư viện mỗi package lại có những câu lệnh run khác nhau, chính vì vậy chúng ta sẽ thiết lập một lối tắt nhỏ trong file `package.json`
```js:package.json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack"
  }
}
```

Để thay thế cho câu lệnh `npx webpack` giờ chúng ta chỉ cần gõ
```
npm run dev
```

Giờ bạn hãy xóa file `dist/main.js` cũ đi và test thử bằng câu lệnh `npm run dev` xem có output ra file `main.js` không và chữ ở trang html có thành màu đỏ không, nếu mọi chuyện vẫn êm đẹp thì chúng ta đã test thành công webpack. 


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Source code: https://github.com/kentrung/webpack-tutorial/tree/master/4.%20C%E1%BA%A5u%20h%C3%ACnh%20webpack%20c%C6%A1%20b%E1%BA%A3n/webpack-demo
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd