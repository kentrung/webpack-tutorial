![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

**Import - Export Module** là một trong những tính năng tuyệt vời của JavaScript, chúng đã được tiêu chuẩn hóa trong ES2015 (ES6) và được hỗ trợ trong hầu hết các trình duyệt tại thời điểm này, tuy nhiên có một số trình duyệt không nhận ra cú pháp mới nhưng không sao đừng lo lắng, Webpack sẽ hỗ trợ bạn. Đằng sau hậu trường, Webpack thực sự "dịch mã" code để các trình duyệt cũ hơn cũng có thể chạy tốt. Bên cạnh import và export, Webpack hỗ trợ tốt các cú pháp module khác nhau, xem phần [Module API](https://webpack.js.org/api/module-methods/) để biết thêm thông tin. Lưu ý rằng Webpack sẽ không thay đổi bất kì đoạn code nào ngoài import và export. Nếu bạn muốn sử dụng các tính năng khác của ES6, hãy sử dụng bộ chuyển mã như [Babel](https://babeljs.io/)

> Version 2 of Webpack supports ES6 module syntax natively, meaning you can use import and export without a tool like Babel to handle this for you. Keep in mind that you will still probably need Babel for other ES6+ features.
> 
> *Từ phiên bản Webpack 2 trở lên đã hỗ trợ cú pháp ES6 module, có nghĩa là bạn có thể sử dụng import và export mà không cần tool như Babel để xử lý việc này. Hãy nhớ rằng bạn vẫn có thể cần Babel cho các tính năng khác của ES6*

## 1. Chuẩn bị file
Các file code  ban đầu:
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

```js:src/test.js
export function sum(x, y) {
  return x + y
}
```

## 2. Import module trong javascript
File `src/index.js` muốn sử dụng hàm sum của `src/test.js` thì ta chỉ việc import function sum vào là có thể sử dụng được.
```js:src/index.js
import { sum } from './test'

const result = sum(1, 2)
console.log('Tổng của 1 + 2 = ' + result)
```
Chạy lại Webpack và xem log có in ra kết quả như này là ok
```js
Tổng của 1 + 2 = 3
```

Bài hôm nay chỉ ngắn vậy thôi, chủ yếu muốn nhắc các bạn rằng **import - export** là một trong những tính năng của (ES6) và không phải mọi trình duyệt đều hỗ trợ, đó là lí do ta sử dụng Webpack để code của chúng ta có thể chạy tốt trên hầu hết các trình duyệt hiện nay từ tân cổ giao duyên cho đến nhạc trẻ REMIX - EDM các thể loại, nhạc nào cũng nhảy. 


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm tại: https://v4.webpack.js.org/api/module-methods/#es6-recommended
* Source code github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
