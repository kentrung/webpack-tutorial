![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png)

Chào mừng bạn đã đến với series [Webpack từ A đến Á cùng kentrung](https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd). Đây là bài viết đầu tiên chúng ta cùng nhau tìm hiểu Webpack và lí do tại sao nên dùng? OK bắt đầu thôi!

## 1. Webpack là gì?
* Webpack hiểu đơn giản là một công cụ giúp chúng ta đóng gói (bundle) các tài nguyên như js, css, images, fonts... thành một file hoặc nhiều file theo cách có tổ chức, gọn gàng, sạch sẽ, thơm tho... 
* Link trang chủ: https://webpack.js.org/

## 2. Tại sao phải sử dụng Webpack?

* Đóng gói nhiều file JS, CSS thành một file duy nhất, điểm đặc biệt là Webpack sẽ tổ chức nội dung trong các file một cách khoa học hợp lí
* Gói gọn các file JS và CSS thành dạng minify (nội dung file là một dòng duy nhất, loại bỏ các khoảng trống thừa hay comment trong code giúp file nhỏ gọn nhất)
* Thực thi các file SCSS một cách tự động, nếu bạn nào làm việc nhiều với SCSS thì chắc chắn sẽ thích tính năng này
* Tối ưu hóa Images, SVG, nén các file với dung lượng nhỏ nhất, hoặc chuyển đổi file thành URL (Base64) và chèn URL này vào Bundle
* Giúp thao tác local, development hay server một cách thuận tiện như tự động loading (build) khi save, hay kiểm soát quá trình upload file tránh sai sót...
* Cài đặt hàng loạt ứng dụng một cách đơn giản: SCSS, ReactJS...
* Hàng loạt tính năng khác chờ bạn khám phá: biên dịch Babel ES6 sang ES5, biên dịch CoffeeScript sang Javascript, tách nhỏ thành nhiều file...
* Và quan trọng là **webpack hoàn toàn miễn phí**

## 3. Bất lợi khi học Webpack?
* Tài liệu hướng dẫn khá ít
* Việc thiết lập cấu hình cho Webpack khó khăn, cú pháp khó hiểu
* Mất nhiều thời gian cho việc setup Webpack ban đầu
* Ít người hướng dẫn được một cách dễ hiểu, thông suốt, thiếu đầu, thiếu đuôi...

## 4. Ngoài Webpack ra còn có những công cụ nào khác?
* Chúng ta có: [Browserify](https://browserify.org/), [Gulp](https://gulpjs.com/), [Grunt](https://gruntjs.com/)... là những cái tên lớn đáng để bạn quan tâm còn ở đây mình chỉ tập trung hướng dẫn về Webpack.

## 5. Điều kiện học
* Có học lực khá giỏi ở các bộ môn: **HTML - CSS - Javascript**. Trước khi bắt đầu học về Webpack mình khuyên các bạn nên dành thời gian đọc bài viết: [Giải thích về Javascript thời hiện đại cho khủng long](https://viblo.asia/p/giai-thich-ve-javascript-thoi-hien-dai-cho-khung-long-Eb85oBM2l2G)

* Bài viết cung cấp cho người đọc một bối cảnh lịch sử về các công cụ JS đã tiến hoá như thế nào? Chúng ta sẽ bắt đầu bằng việc xây dựng một website giống như những con khủng long - không có tool tiếc gì cả, chỉ dùng HTML - CSS và JS. Sau đó chúng ta sẽ lần lượt điểm qua và áp dụng dần các công cụ để biết được vấn đề mà chúng sẽ giải quyết được là gì. Với bối cảnh lịch sử này, bạn sẽ có khả năng học tập và đáp ứng tốt hơn với sự thay đổi của Javascript ở thời điểm hiện tại và trong cả tương lai nữa. Các bạn nên đọc bài đó trước nhé rồi sẽ hiểu phần nào tác dụng của Webpack mà mình sắp học.

## 6. Kết luận
* Mình cũng chỉ là một người bỏ thời gian ra tìm hiểu về Webpack, trong quá trình tìm hiểu và làm dự án thực tế cũng đúc rút ra được ít kinh nghiệm về nó nên chia sẻ cho anh em. Càng tìm hiểu thì thấy Webpack có khả năng làm được rất rất nhiều việc khá là ôm đồm nên mình cũng không thể hướng dẫn được hết. Hi vọng series [Webpack từ A đến Á cùng kentrung](https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd) này sẽ giúp bạn thêm hiểu biết về nó. Phiên bản tại thời điểm hướng dẫn tháng 06/2022 là [webpack 5](https://webpack.js.org/).
* Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd