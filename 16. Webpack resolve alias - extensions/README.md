![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài hôm nay chúng ta sẽ học cách tạo **alias** trong Webpack cùng với cách xử lí đuôi file mở rộng **extensions**

## 1. Alias là gì?
Alias là đường dẫn tuyệt đối thay thế cho đường dẫn tương đối khi import các module. Ví dụ như sau:
```jsx
// thay vì
import Menu from '../../../components/Menu'

// thì dùng
import Menu from '@components/Menu'
```
Cách bên dưới chính là sử dụng `alias`, cách này giúp chúng ta đỡ phải viết đường dẫn dài dòng, phải so sánh vị trí tương đối giữa file đang code với file muốn import. Nói chung người ta hay dùng alias để tạo đường dẫn root cho dự án.

## 2. resolve.alias
```js:webpack.config.js
const path = require('path')

module.exports = {
  ...
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components')
    }
  }
};
```
Lưu ý là khi ta sử dụng `alias` thì trong lúc viết code có thể bị hai vấn đề sau:
* Eslint không hiểu và báo lỗi.
* ![eslint error](https://images.viblo.asia/7f9ce7b3-2808-4c4d-9453-fce4075b15db.png)
* Texteditor cụ thể là mình đang sử dụng là *VSCode* không gợi ý.
* ![](https://images.viblo.asia/5e551f25-d463-45d8-bc8f-905149ff4a31.gif)

### 2-1. Cách fix Eslint
Ta add thêm thư viện sau đây
```
npm install eslint-plugin-import eslint-import-resolver-alias --save-dev
```
Tạo file `.eslintrc.js` tại thư mục root của dự án
```js:.eslintrc.js
module.exports = {
  settings: {
    'import/resolver': {
      alias: [
        ['@components', './src/components'],
      ]
    }
  }
}
```
### 2-2. Cách fix VSCode
Tạo file `jsconfig.json` tại thư mục root của dự án
```json:jsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["src/components/*"]
    }
  },
  "exclude": ["node_modules"]
}
```

## 3. resolve.extensions

Giải quyết các đuôi file mở rộng theo thứ tự.

Code file `webpack.config.js`
```js:webpack.config.js
module.exports = {
  //...
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json']
  }
};
```

> If multiple files share the same name but have different extensions, webpack will resolve the one with the extension listed first in the array and skip the rest.
> 

> Nếu nhiều tệp có cùng tên nhưng có đuôi file khác nhau, Webpack sẽ giải quyết tệp có đuôi file được liệt kê đầu tiên trong mảng và bỏ qua phần còn lại.


Cách sử dụng:
```js
// thay vì
import File from '../path/to/file.js'

// thì dùng
import File from '../path/to/file'
```

-----


Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm các cấu hình khác cho Resolve tại: https://webpack.js.org/configuration/resolve
* Source code github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd