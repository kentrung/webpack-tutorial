![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài trước chúng ta đã setup xong các thư mục của dự án như thư mục `src` để chứa code lúc phát triển, thư mục `dist` để chứa code lúc hoàn thiện, file `webpack.config.js` để cấu hình chạy webpack. Bài hôm nay sẽ bắt tay vào viết code để test xem nó đã chạy được chưa nhé.

## 1. Cấu hình file webpack.config.js
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
Giải thích code
```
const path = require('path')
```
* Dòng này chúng ta thêm module `path` từ trong NodeJS vào để xử lí
* Module path giúp chúng ta thao tác xử lí với đường dẫn file, tên file, folder...
* NodeJS sử dụng kiến trúc Module để đơn giản hóa việc tạo ra các ứng dụng phức tạp. Mỗi module làm một chức năng nào đó và được giữ tách biệt với nhau, khi nào cần sử dụng thì gọi chúng ra và kết hợp lại tùy theo logic, nghiệp vụ
* Một số module được tích hợp sẵn trong NodeJS (built-in modules) như `http` `https` `fs` `path`... bạn chỉ cần order và choén luôn thôi ^^
* Quay lại đoạn code trên, mình gọi một module có tên là `path` và gán nó cho biến cũng có tên là path (mình đặt trùng để cho dễ nhận biết biến này là module nào thôi chứ bạn có thể đặt tên biến bất kì tên nào bạn muốn) 
```
entry: './src/index.js'
```
Đầu vào (entry) của webpack sẽ là file `index.js` nằm trong thư mục src. Như mình nói ở bài trước thư mục src chứa code lúc viết, chỉnh sửa, phát triển của dự án.
```
output: {
  filename: 'main.js',
  path: path.resolve(__dirname, 'dist'),
}
```
Đầu ra (ouput) của webpack sẽ có hai phần.
* `filename: 'main.js'` Tên file output là main.js bạn có thể đặt tên tùy theo ý bạn 
* `path: path.resolve(__dirname, 'dist')` Tên folder chứa file output là dist, ở bài trước đã tạo sẵn folder này rồi 

## 2. Tạo file index.html trong folder dist
Trong folder dist ta tạo file `index.html` 
```
webpack-demo
  |- ...
  |- dist/
    |- index.html

```
Và viết code bên trong gọi sẵn script `main.js`
```html
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
Lưu ý là trong folder dist này chúng ta mới chỉ tạo file html trong đấy gọi sẵn file main.js. File JS này là do webpack sinh ra dựa trên cấu hình mà mình đã viết.

## 3. Tạo file index.js trong folder src
Trong folder src ta tạo file `index.js` và viết đoạn code sau có tác dụng tìm thẻ html có **id = title** và cho chữ thành màu đỏ
```js
const titleElement = document.querySelector('#title')
titleElement.style.color = 'red'
```

## 4. Test chạy webpack
Mở cmd lên và gõ câu lệnh sau để chạy webpack
```
npx webpack
```
Khi có file `webpack.config.js` thì mặc định webpack sẽ chọn file đó, cũng đừng lo lắng khi có cảnh báo như này.
```
WARNING in configuration 
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```
Chúng ta sẽ giải quyết vấn đề đó sau. Khi chạy lệnh trên xong bạn quay lại folder dist sẽ thấy có thêm file `main.js` và code bên trong quả thật lằng nhằng khó hiểu.
```js
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&amp;&amp;Symbol.toStringTag&amp;&amp;Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&amp;t&amp;&amp;(e=r(e)),8&amp;t)return e;if(4&amp;t&amp;&amp;"object"==typeof e&amp;&amp;e&amp;&amp;e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&amp;t&amp;&amp;"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&amp;&amp;e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){document.querySelector("#title").style.color="red"}]);
```
Bây giờ bạn mở file `index.html` lên xem và thật là vi diệu chữ **Hello Webpack!** đã thành màu đỏ đúng như dự đoán. Easy right?

## 5. Cấu hình file package.json
Ở phần trên chúng ta đã test webpack thành công bằng câu lệnh `npx webpack`. Vấn đề đặt ra là bây giờ chúng ta có thể nhớ dễ dàng câu lệnh trên nhưng nếu để lâu bạn sẽ không nhớ nổi là chạy câu lệnh gì để run webpack. Mỗi thư viện mỗi package lại có những câu lệnh run khác nhau, chính vì vậy chúng ta sẽ thiết lập một lối tắt nhỏ trong file `package.json` chỗ đoạn script > dev > webpack nhé
```js
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
Giờ bạn hãy xóa file main.js cũ đi và test thử bằng câu lệnh `npm run dev` xem có output ra file main.js không và chữ ở trang html có thành màu đỏ không? nếu mọi chuyện vẫn êm đẹp thì chúng ta đã test thành công webpack. 


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Sourcode github: https://github.com/kentrung/webpack-tutorial
