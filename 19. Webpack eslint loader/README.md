![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong một dự án tất cả các ngôn ngữ, kể cả HTML và CSS đều phải tuân theo quy tắc thì mới có thể tạo nên một dự án tốt được. Không có quy tắc, mỗi người code theo những phong cách khác nhau sẽ tạo nên một mớ hỗn độn, đơn cử như người thì khoảng cách 2, người thì khoảng cách 4, người thì dùng chấm phẩy ở cuối, người thì không. **ESLint** là công cụ giúp chúng ta phân tích code, từ đó đưa ra các vấn đề mà code đang gặp phải như không tuân thủ coding style, sai coding convention. Ngoài ra, ESLint còn có thể giúp chúng ta tìm ra một số bug tiềm ẩn trong code như gán biến chưa khai báo, có thể gây lỗi runtime hoặc lấy giá trị từ một biến toàn cục khiến cho việc debug trở nên khó khăn... vân vân và mây mây

## 1. Cài đặt
Link trang chủ ESLint: https://eslint.org/
```
npm install eslint eslint-webpack-plugin --save-dev
```

## 2. Cấu hình cơ bản
Cấu trúc folder và file như sau:
```
webpack-demo
  ...
  |- dist/
    - index.html
  |- src/
    - index.js
  |- webpack.config.js
```

```js:src/index.js
var author = 'kentrung'
console.log('Webpack từ A đến Á cùng ' + author)
```

Chúng ta hãy thử một quy tắc mà anh em coder phải tuân theo, ví dụ quy tắc sau yêu cầu **áp dụng double quote** (nháy đôi) `"` cho các string. Giờ ta sửa `webpack.config.js`

```js:webpack.config.js
const path = require('path')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new ESLintPlugin()],
}
```
Tạo  file `.eslintrc` tại thư mục root của dự án
```js:.eslintrc
{
  "rules": {
    "quotes": ["error", "double"]
  }
}
```
Giờ chạy lại Webpack xem thế nào: `npm run dev`

Khi chạy xong thì ở ngay màn hình cmd báo lỗi đỏ rực (ah thì nhìn trên này ko có màu thôi)
```
...
C:\Users\kentrung\Desktop\webpack-demo\src\index.js
  1:14  error  Strings must use doublequote  quotes
  2:13  error  Strings must use doublequote  quotes

✖ 2 problems (2 errors, 0 warnings)
  2 errors and 0 warnings potentially fixable with the `--fix` option.
```
Phiên bản đã khôi phục màu
![](https://images.viblo.asia/220d0a2f-f75e-41c6-bdd5-1ba20d80fe42.png)


Nhìn thế này thì chán nhờ nhưng thôi không sao quy tắc là quy tắc nên mình phải theo thôi. Giờ mở lại file `src/index.js` sửa lại nháy đơn thành nháy đôi
```js:src/index.js
var author = "kentrung"
console.log("Webpack từ A đến Á cùng " + author)
```
Chạy lại Webpack và kết quả là không còn lỗi lầm gì nữa. Gì chứ zăm ba cái lỗi vặt vãnh này anh sửa tẹo là xong. **MUỖI ^^**


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho ESLint Webpack plugin tại: https://webpack.js.org/plugins/eslint-webpack-plugin/
* Source code Github: https://github.com/kentrung/webpack-tutorial
* Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd