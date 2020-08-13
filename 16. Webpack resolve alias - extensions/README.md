![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài hôm nay chúng ta sẽ học cách tạo **alias** trong webpack cùng với cách xử lí đuôi file mở rộng **extensions**

## 1. Alias là gì?
Alias là đường dẫn tuyệt đối thay thế cho đường dẫn tương đối khi import các module. Ví dụ như sau:
```
// thay vì  dùng
import Menu from '../../../components/menu'

// thì dùng
import Menu from 'Templates/menu'
```
Cách bên dưới chính là sử dụng alias. Cách này giúp chúng ta đỡ phải viết đường dẫn dài dòng, phải so sánh vị trí tương đối giữa file này với file kia. Nói chung người ta hay dùng alias để tạo đường dẫn root cho dự án.

## 2. resolve.alias
Code file `webpack.config.js` 
```
const path = require('path')

module.exports = {
  ...
  resolve: {
    alias: {
      Templates: path.resolve(__dirname, 'src/components/')
    }
  }
};
```
Lưu ý là khi ta sử dụng alias thì trong lúc viết code có thể bị hai vấn đề sau:
* *Eslint* không hiểu và báo lỗi.
* Texteditor cụ thể là mình đang sử dụng là *VSCode* không gợi ý.

Để sửa được vấn đề này thì các bạn tham khảo bài viết ở đây để biết cách fix: https://kipalog.com/posts/Config-alias-chuan-trong-webpack

## 3. resolve.extensions

Giải quyết các đuôi file mở rộng theo thứ tự.

Code file `webpack.config.js`
```js
module.exports = {
  //...
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json']
  }
};
```

> If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.

Cách sử dụng:
```
// thay vì  dùng
import File from '../path/to/file.js'

// thì dùng
import File from '../path/to/file'
```

-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho Resolve tại: https://webpack.js.org/configuration/resolve
* Source code github: https://github.com/kentrung/webpack-tutorial