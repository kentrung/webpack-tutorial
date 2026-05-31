![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài [hai](https://viblo.asia/p/webpack-tu-a-den-a-cai-dat-webpack-jvEla3EzKkw) chúng ta đã cài đặt xong webpack. Trước khi bắt tay vào viết code chúng ta nên hiểu rõ cấu trúc thư mục, cách sắp xếp code của webpack để mọi thứ ngay từ đầu đã rõ ràng, giống như khi chơi đá bóng bạn cũng phải hiểu luật chơi của nó dùng chân chứ không dùng tay, đá phạt, việt vị ra sao đúng không? Viết code cũng vậy, ta sẽ tách ra hai nơi, một nơi viết code phát triển dự án, một nơi chứa code đã hoàn thành.

## 1. Tạo thư mục src
`src` là viết tắt của từ source (nguồn), bạn tạo thư mục này và toàn bộ code lúc viết, chỉnh sửa, phát triển sẽ để trong này.
```
webpack-demo
  |- node_modules/
  |- src/
  |- package-lock.json
  |- package.json
```
## 2. Tạo thư mục dist
`dist` (phân phối) đây là thư mục nơi chứa code đã được tối ưu, hoàn thiện.
```
webpack-demo
  |- dist/
  |- node_modules/
  |- src/
  |- package-lock.json
  |- package.json
```
## 3. Tạo file cấu hình webpack.config.js
Kể từ phiên bản webpack 4 thì không yêu cầu bất kì file cấu hình nào nhưng hầu hết các dự án lớn sẽ cần thiết lập phức tạp, đó là lí do chúng ta nên có một file cấu hình cho webpack. Tạo file `webpack.config.js` tại thư mục root của dự án
```
webpack-demo
  |- dist/
  |- node_modules/
  |- src/
  |- package-lock.json
  |- package.json
  |- webpack.config.js
```
Vậy là cơ bản đã setup xong cấu trúc thư mục của dự án. 

-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo.
* Source code github: https://github.com/kentrung/webpack-tutorial
* Series webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd