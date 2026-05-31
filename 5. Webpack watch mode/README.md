![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [bốn](https://viblo.asia/p/webpack-tu-a-den-a-cau-hinh-webpack-co-ban-LzD5dv6EZjY) chúng ta đã test thành công webpack và kết quả hết sức mĩ mãn. Giờ vấn đề tiếp theo nếu thay đổi code trong file `src/index.js` thì chúng ta sẽ phải chạy lại câu lệnh `npm run dev` để build lại, quả thật là mất thời gian. Webpack thấu hiểu điều đó và đã cung cấp cho chúng ta **option watch mode** (chế độ theo dõi). Watch mode là cách thiết lập để webpack có thể tự động build lại nếu có thay đổi từ các file nguồn. 

## Cách 1. Watch mode trong webpack.config.js
```js:webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true // Thêm mới dòng này
}

```
Khi chúng ta thêm option này vào file config thì khi chạy câu lệnh `npm run dev` webpack sẽ luôn theo dõi các file, bất cứ thay đổi code nào sau khi ấn save sẽ được tự động build lại. Quá tuyệt phải không? 

## Cách 2. Watch mode trong package.json
```json:package.json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack --watch"
  }
}
```
Với cách thứ hai, chúng ta set giá trị `--watch` vào `scripts > dev`. Với cách viết này, chúng ta cũng có được kết quả tương tự như cách 1. Cá nhân mình thì thích viết cách 2 nhưng vẫn thầm yêu cách viết 1, còn bạn thích cái nào thì comment bên dưới cho mình biết nhé.


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo: https://webpack.js.org/configuration/watch/
* Source code: https://github.com/kentrung/webpack-tutorial/tree/master/5.%20Webpack%20watch%20mode
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
