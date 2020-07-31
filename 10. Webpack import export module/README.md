![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

**Import - Export Module** là một trong những tính năng tuyệt vời của JavaScript, chúng đã được tiêu chuẩn hóa trong ES2015 (ES6) và được hỗ trợ trong hầu hết các trình duyệt tại thời điểm này, tuy nhiên có một số trình duyệt không nhận ra cú pháp mới nhưng không sao đừng lo lắng, webpack sẽ hỗ trợ bạn. Đằng sau hậu trường, webpack thực sự "dịch mã" code để các trình duyệt cũ hơn cũng có thể chạy tốt. Bên cạnh import và export, webpack hỗ trợ tốt các cú pháp module khác nhau, xem phần [Module API](https://webpack.js.org/api/module-methods/) để biết thêm thông tin. Lưu ý rằng webpack sẽ không thay đổi bất kì đoạn code nào ngoài import và export. Nếu bạn muốn sử dụng các tính năng khác của ES6, hãy sử dụng bộ chuyển mã như [Babel](https://babeljs.io/) hoặc [Bublé](https://buble.surge.sh/guide/)

> Version 2 of webpack supports ES6 module syntax natively, meaning you can use import and export without a tool like babel to handle this for you. Keep in mind that you will still probably need babel for other ES6+ features.

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu:
```javascript
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Tạo file `src/test.js`
```javascript
export function sum(x, y) {
  return x + y
}
```

## 2. Import module trong javascript
File `src/index.js` muốn sử dụng hàm sum của `src/test.js` thì ta chỉ việc import function sum vào là có thể sử dụng được. Các bạn có thể tìm hiểu thêm về import và export trong ES6 còn ở đây mình không nói kĩ về nó.
```js
import { sum } from './test'

const result = sum(1, 2)
console.log('Tổng của 1 + 2 = ' + result)
```
Chạy lại webpack và xem log có in ra kết quả như này là ok
```js
Tổng của 1 + 2 = 3
```

Bài hôm nay chỉ ngắn vậy thôi, chủ yếu muốn nhắc các bạn rằng **import - export** là một trong những tính năng của (ES6) và không phải mọi trình duyệt đều hỗ trợ, đó là lí do ta sử dụng webpack để code của chúng ta có thể chạy tốt trên hầu hết các trình duyệt hiện nay từ tân cổ giao duyên cho đến nhạc trẻ REMIX - EDM các thể loại, nhạc nào cũng nhảy. 


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo thêm tại: https://webpack.js.org/api/module-methods/#es6-recommended
* Sourcode github: https://github.com/kentrung/webpack-tutorial
