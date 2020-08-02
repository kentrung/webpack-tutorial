![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài trước chúng ta đã biết cách load jQuery vào trong webpack. Bài hôm nay sẽ tiếp tục học cách load thêm thư viện và ví dụ ở đây là [bootstrap](https://getbootstrap.com/) bản 4x nhé.

## 1. Chuẩn bị file
Code file `webpack.config.js` ban đầu:
```js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```
Code file `dist/index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack từ A đến Á cùng kentrung</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <style>
    .carousel-item {height: 25rem;}
  </style>
</head>
<body>
  <div class="container">
    <div id="myCarousel" class="carousel slide">
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>Example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="container">
            <div class="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="container">
            <div class="carousel-caption text-right">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a class="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Trang html này mình định tạo **Carousel** của bootstrap, vì mình chưa học cách load css vào trong webpack nên tạm thời mình load sẵn css vào trong html chỗ này.
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
<style>
  .carousel-item {height: 25rem;}
</style>
```

Code file `src/index.js`
```js
$(document).ready(function(){
  $('.carousel').carousel({
    interval: 1000,
    ride: 'carousel'
  })
})
```
Đoạn code trên có tác dụng tự động chạy carousel và thời gian tự động chuyển slide tiếp theo là 1 giây. Mình set thời gian ngắn để test nhìn cho nhanh thôi. Chạy thử webpack ta có giao diện và log như sau:

![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/8932c500-fe36-4b60-ad39-895473ea3cb7.png)
```
Uncaught ReferenceError: $ is not defined at (main.js: 1)
```
## 2. Load jQuery
Bài trước đã hướng dẫn cách load jQuery rồi nhưng thôi bài này hướng dẫn lại từ đầu cho dễ theo dõi. Trước tiên mình phải cài đặt jQuery qua npm
```
npm install jquery
```
Sau khi tải xong jQuery tiếp theo ta sửa lại `webpack.config.js` để load jQuery thông qua provide plugin của webpack
```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}
```
Vậy là chúng ta đã giải quyết xong vấn đề load jQuery để hiểu được các kí tự `$` trong code `src/index.js`. Chạy thử webpack và chúng ta có log lỗi như sau:
```
Uncaught TypeError: $(...).carousel is not a function
```

Cái này là do chúng ta chưa load Boostrap Javascript, hàm `carousel` là của boostrap chứ không phải của jQuery  nên nó không hiểu là đúng rồi. 

## 3. Load Bootstrap
Tải boostrap qua npm 
```
npm install bootstrap
```
Khi cài đặt nó thì ở màn `cmd` có cảnh báo sau
```
npm WARN bootstrap@4.5.0 requires a peer of popper.js@^1.16.0 but none is installed. You must install peer dependencies yourself.
```
Ý nó muốn nói thằng bootstrap cần cài thêm [popper.js](https://popper.js.org/) bản từ 1.16.0 trở lên nhưng chưa được cài, bạn phải tự cài bằng tay (handjob), thế thì cài thêm cho đủ bộ.
```
npm install popper.js
```

Bước tiếp theo là chúng ta load Bootstrap Javascript vào trong file `src/index.js`
```js
import 'bootstrap'

$(document).ready(function(){
  $('.carousel').carousel({
    interval: 1000,
    ride: 'carousel'
  })
})
```
Chạy lại webpack `npm run dev`  và kết quả carousel đã chạy thành công. NGON!

![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/68ac4282-b243-48a7-a7b6-052769a1c348.gif)


-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo cách cài boostrap cho webpack tại: https://getbootstrap.com/docs/4.5/getting-started/webpack/
* Sourcode github: https://github.com/kentrung/webpack-tutorial