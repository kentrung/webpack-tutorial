![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 


Chào mừng bạn đã đến với series **Webpack từ A đến Á cùng kentrung**. Đây là bài viết đầu tiên chúng ta cùng nhau tìm hiểu về Webpack và lí do tại sao nên dùng. Đây dù sao cũng chỉ là những kiến thức trong quá trình tìm hiểu và làm dự án thực tế mà mình đúc rút ra và chia sẻ cho anh em. Nếu có gì thiếu sót hoặc sai sót chỗ nào rất mong nhận được những lời đánh giá sửa sai từ các bạn.
## 1. Webpack là gì?
* Webpack hiểu đơn giản là một công cụ giúp chúng ta đóng gói (bundle) tất cả js, css, image, font... thành một file hoặc nhiều file theo cách có tổ chức, gọn gàng, sạch sẽ, thơm tho.
* Link trang chủ của webpack: [https://webpack.js.org/](https://webpack.js.org/)
## 2. Tại sao phải sử dụng webpack?
Có khá nhiều lí do để bạn quan tâm những lợi ích mà nó mang lại
* Đóng gói nhiều file Javascript, CSS thành một file duy nhất, điểm đặc biệt là webpack sẽ tổ chức nội dung trong các file một cách khoa học hợp lí
* Gói gọn các file Javascript và CSS thành dạng minify (nội dung file là một hàng duy nhất, loại bỏ các khoảng trống thừa, giúp file nhỏ gọn nhất)
* Thực thi các file SCSS một cách tự động, nếu bạn nào làm việc nhiều với SCSS thì chắc chắn sẽ thích tính năng này
* Tối ưu hóa image, SVG, nén các file với dung lượng nhỏ nhất, hoặc chuyển đổi file thành URL (Base64) và chèn URL này vào Bundle
* Giúp thao tác local, development hay server một cách thuận lợi, như tự động loading (build) khi save, hay kiểm soát quá trình upload file tránh sai sót...
* Cài đặt hàng loạt ứng dụng một cách đơn giản: SCSS, ReactJS...
* Hàng loạt tính năng khác chờ bạn khám phá: biên dịch Babel ES6 sang ES5, biên dịch CoffeeScript sang Javascript, tách nhỏ thành nhiều file...
* Và quan trọng là **webpack hoàn toàn miễn phí**
## 3. Bất lợi khi học webpack?
* Tài liệu hướng dẫn rất kém
* Việc thiết lập cấu hình cho Webpack khó khăn, cú pháp khó hiểu
* Mất nhiều thời gian cho việc setup webpack ban đầu
* Ít người hướng dẫn được một cách dễ hiểu, thông suốt, thiếu đầu, thiếu đuôi...
## 4. Ngoài webpack ra còn có những công cụ nào khác?
Chúng ta có: Browserify, Gulp, Grunt... là những cái tên lớn đáng để bạn quan tâm còn ở đây chả care chỉ tập trung hướng dẫn về webpack thôi.
## 5. Điều kiện học
Có học lực khá giỏi ở các môn: **HTML - CSS - Javascript**. Trước khi bắt đầu học về webpack mình khuyên các bạn nên dành thời gian đọc bài viết: [Giải thích về Javascript thời hiện đại cho khủng long](https://viblo.asia/p/giai-thich-ve-javascript-thoi-hien-dai-cho-khung-long-Eb85oBM2l2G) <br />
Bài viết này phải nói là rất hay cung cấp cho người đọc một bối cảnh lịch sử về các công cụ JS đã tiến hoá như thế nào. Chúng ta sẽ bắt đầu bằng việc xây dựng một website ví dụ giống như những con khủng long - ko có tool gì cả, chỉ dùng HTML thuần và Javascript. Sau đó chúng ta sẽ lần lượt điểm qua và áp dụng dần các công cụ để biết được vấn đề mà chúng sẽ giải quyết được là gì. Với bối cảnh lịch sử này, bạn sẽ có khả năng học tập và đáp ứng tốt hơn với sự thay đổi của Javascript ở thời điểm hiện tại và trong cả tương lai nữa. Các bạn nên đọc bài đó trước nhé rồi sẽ hiểu phần nào tác dụng của webpack mà mình sắp học.
## 6. Kết luận
Mình cũng chỉ là một người mới tìm hiểu về webpack, trong quá trình tìm hiểu và làm dự án thực tế cũng đúc rút ra được ít kinh nghiệm về nó nên chia sẻ cho anh em. Càng tìm hiểu thì thấy webpack có khả năng làm được rất rất nhiều việc khá là ôm đồm nên mình cũng không thể hướng dẫn được hết. Hi vọng series **Webpack từ A đến Á cùng kentrung** này sẽ giúp bạn thêm hiểu biết về nó. Phiên bản tại thời điểm hướng dẫn tháng 06/2020 là webpack 4.
