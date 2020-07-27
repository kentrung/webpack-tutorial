![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài trước chúng ta đã test thành công webpack và kết quả hết sức mĩ mãn. Giờ vấn đề tiếp theo xảy ra là nếu thay đổi code trong file `src/index.js` như thay đổi chữ đỏ sang xanh thì sao? Chúng ta sẽ phải chạy lại câu lệnh `npm run dev` để build lại, quả thật là mất thời gian. Webpack thấu hiểu điều đó và đã cung cấp cho chúng ta **option watch mode** (chế độ theo dõi). Watch mode là cách thiết lập để webpack có thể tự động build lại nếu có thay đổi từ các file nguồn. 

## Cách 1. Watch mode trong webpack.config.js
```js
module.exports = {
  ...
  watch: true
}
```
Khi chúng ta thêm option này vào file config thì khi chạy câu lệnh `npm run dev` webpack sẽ luôn theo dõi các file, bất cứ thay đổi code nào sau khi ấn save sẽ được tự động build lại. Quá tuyệt phải không? Trong cửa sổ `cmd` sẽ hiện thông báo kiểu như này:
```
...
webpack is watching the files…
```

## Cách 2. Watch mode trong package.json
```json
{
  ...
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1",
    "dev": "webpack --watch"
  }
}
```
Với cách thứ hai chúng ta set giá trị `--watch` vào scripts > dev. Với cách viết này chúng ta cũng có được kết quả tương tự như cách trên. Cá nhân mình thì thích viết cách hai, còn bạn thích cái nào thì comment bên dưới cho mình biết nhé.


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.

* Tham khảo thêm về chế độ **Watch and WatchOptions** tại: https://webpack.js.org/configuration/watch/
* Sourcode github: https://github.com/kentrung/webpack-tutorial
