![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Trong một dự án tất cả các ngôn ngữ, kể cả HTML và CSS đều phải tuân theo quy tắc thì mới có thể tạo nên một dự án tốt được. Không có quy tắc, mỗi người code theo những phong cách khác nhau sẽ tạo nên một mớ hỗn độn mà người ngoài nhìn vào sẽ mất nhiều thời gian để hiểu được (thậm chí họ còn chẳng muốn đọc). **ESLint** là công cụ giúp chúng ta phân tích code, từ đó đưa ra các vấn đề mà code đang gặp phải như không tuân thủ coding style, sai coding convention. Ngoài ra, ESLint còn có thể giúp chúng ta tìm ra một số bug tiềm ẩn trong code như gán biến chưa khai báo, có thể gây lỗi runtime hoặc lấy giá trị từ một biến toàn cục khiến cho việc debug trở nên khó khăn... vân vân mây mây

## 1. Cài đặt
```
npm install eslint-loader --save-dev
```

**Note**: You also need to install eslint from npm, if you haven't already:
```
npm install eslint --save-dev
```

## 2. Basic usage
Cấu trúc file và folder như sau
```
webpack-demo
  ...
  |- dist/
    - index.html
  |- src/
    - index.js
  |- webpack.config.js
```

Code file `dist/index.html`  
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack từ A đến Á cùng kentrung</title>
</head>
<body>
  <script src="main.js"></script>
</body>
</html>
```

Code file `src/index.js`
```
var author = 'kentrung'
console.log('Webpack từ A đến Á cùng ' + author)
```

Chúng ta hãy thử một quy tắc mà anh em coder phải tuân theo, ví dụ quy tắc sau yêu cầu **áp dụng double quote** (nháy đôi) `"` cho các string. Giờ ta sửa `webpack.config.js`

```js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
          rules: {
            quotes: ["error", "double"]
          }
        },
      },
    ],
  },
}
```
Giờ chạy lại webpack xem thế nào: `npm run dev`

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
```
var author = "kentrung"
console.log("Webpack từ A đến Á cùng " + author)
```
Chạy lại webpack và kết quả là không còn lỗi lầm gì nữa. Gì chứ zăm ba cái lỗi vặt vãnh này anh sửa tẹo là xong. **MUỖI ^^**

## 3. Cấu hình file ESLint
Ví dụ ở trên mình đã quy định rules trực tiếp vào trong file `webpack.config.js`. Về cơ bản thì vẫn cứ là ok nhưng sau này rules nhiều lên thì không ổn chút nào, file này trông sẽ khủng khiếp lắm. Tốt nhất chúng ta nên tạo một file "Nội Quy Code" cho dễ kiểm soát. Ở ngay thư mục root của dự án chúng ta tạo file `.eslintrc`
```
webpack-demo
  ...
  |- dist/
  |- src/
  |- webpack.config.js
  |- .eslintrc
```

Code file `.eslintrc`
```
{
  rules: {
    quotes: ["error", "double"]
  }
}
```

Giờ file `webpack.config.js` ta bỏ phần options đi là được, tự nó biết đường tìm file cấu hình, kể ra cũng khôn phết ^^

```
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
    ],
  },
}
```
Test thử xem có ok không các bạn nhé!


-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho ESLint loader tại: https://webpack.js.org/loaders/eslint-loader/
* Source code github: https://github.com/kentrung/webpack-tutorial