![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Bài [trước](https://viblo.asia/p/webpack-tu-a-den-a-webpack-load-jquery-XL6lA94rlek) chúng ta đã biết cách thêm thư viện jQuery vào trong Webpack. Bài hôm nay sẽ tiếp tục học cách thêm thư viện [bootstrap](https://getbootstrap.com/) phiên bản 5.x.x cụ thể ở đây là 5.1.3

## 1. Chuẩn bị file
Các file code ban đầu:
```js:webpack.config.js
const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```

```html:dist/index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Webpack từ A đến Á cùng kentrung</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    .carousel-item {height: 25rem;}
  </style>
</head>
<body>
  <div class="container">
    <div id="myCarousel" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">
            <rect width="100%" height="100%" fill="#777" />
          </svg>
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <script src="main.js"></script>
</body>
</html>
```
Trang html này mình định tạo [Carousel](https://getbootstrap.com/docs/5.1/components/carousel/) của bootstrap 5, vì mình chưa học cách thêm css vào trong Webpack nên tạm thời mình thêm css qua link CDN như này.
```html:dist/index.html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
/>
```


```js:src/index.js
var myCarousel = document.querySelector('#carouselExampleCaptions')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  ride: true
})
```
Đoạn code trên có tác dụng tự động chạy Carousel và thời gian tự động chuyển slide là 1 giây. Mình set thời gian ngắn để test nhìn cho nhanh thôi. Chạy thử Webpack ta có giao diện và log như sau:

![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/8932c500-fe36-4b60-ad39-895473ea3cb7.png)
```
Uncaught ReferenceError: bootstrap is not defined at (index.js:2:16)
```

## 3. Load Bootstrap
Tải boostrap qua npm: https://www.npmjs.com/package/bootstrap/v/5.1.3
```
npm install bootstrap@5.1.3
```
Bootstrap phụ thuộc vào [Popper](https://popper.js.org/) được chỉ định trong thuộc tính `peerDependencies`. Điều đó có nghĩa chúng ta phải thêm nó vào trong `package.json` bằng câu lệnh bên dưới.
```
npm install @popperjs/core@2.11.5
```
File `package.json` sẽ có thông tin như này
```package.json
{
  ...
  "dependencies": {
    "@popperjs/core": "^2.11.5",
    "bootstrap": "^5.1.3"
  }
}
```
Bước tiếp theo là chúng ta load Bootstrap Javascript vào trong file `src/index.js`
```js:src/index.js
const bootstrap = require('bootstrap')

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 1000,
  ride: true
})
```
Chạy lại webpack `npm run dev`  và kết quả carousel đã chạy thành công. **NGON!**

-----

Bài viết đến đây là hết, hi vọng với bài viết này các bạn đã thêm được nhiều kiến thức bổ ích. Hẹn gặp lại các bạn ở bài viết tiếp theo!

* Tham khảo cách cài boostrap cho Webpack tại: https://getbootstrap.com/docs/5.1/getting-started/webpack/
* Source code Github: https://github.com/kentrung/webpack-tutorial
* Series Webpack: https://viblo.asia/s/webpack-tu-a-den-a-cung-kentrung-pmleB8Am5rd
