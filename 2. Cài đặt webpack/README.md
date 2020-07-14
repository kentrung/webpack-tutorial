![Webpack từ A đến Á cùng kentrung](https://images.viblo.asia/2090b88e-6ec0-49fe-b677-65e927fafc2e.png) 

Ở bài trước chúng ta đã tìm hiểu webpack là gì? Bài hôm nay sẽ học cách cài đặt webpack và thực hành trên hệ điều hành win 10, vì webpack chạy trên môi trường NodeJS nên chúng ta cần cài đặt theo các bước sau:

## 1. Cài đặt NodeJS

* Tùy thuộc vào hệ điều hành (HĐH) các bạn đang sử dụng mà lên trang download của NodeJS tải về bản tương ứng: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
* Các bạn có thể tham khảo cách cài đặt tại: [https://vntalking.com/cai-dat-nodejs-tren-window-ubuntu.html](https://vntalking.com/cai-dat-nodejs-tren-window-ubuntu.html)

## 2. Cài đặt Webpack

### Bước 1: Tạo  folder thực hành
Tạo một folder `webpack-demo` ở ngay desktop để thực hành 

### Bước 2: Mở cmd
Click vào trong folder trên và mở `cmd` lên. Đối với (HĐH) window bạn có thể gõ cmd trên thanh địa chỉ của folder và ấn enter để mở lên

![Hình 1: Cách mở cmd trên HĐH Window](https://images.viblo.asia/d2d53970-6058-4772-934a-c619d464cc92.png)

### Bước 3: Tạo file `package.json` 

Đây là file cấu hình của dự án lưu trữ các thông tin: tên dự án, mô tả dự án, version, tác giả, các packages được sử dụng... Trong cửa sổ cmd ta gõ:
```
npm init
```
Lúc gõ xong trong cmd sẽ hỏi một số thông tin sau:
```
package name: (webpack-demo)
```
**package name**: giá trị mặc định chính là tên folder của mình. Bạn có thể ấn enter để chọn luôn tên này hoặc tự đặt tên khác.
```
version: (1.0.0)
```
**version**: giá trị mặc định là 1.0.0, quy tắc đánh số phiên bản version bạn nên tìm hiểu thêm trên mạng còn hiện tại cứ kệ enter thôi 
```
description: 
```
**description**: mô tả cho dự án, nên ghi ngắn gọn, đơn giản, súc tích, không hư cấu, nếu hiện tại chưa biết chém gió gì thì lại enter thôi
```
entry point: (index.js)
```
**entry point**: giá trị mặc định là index.js Nó hỏi file js chạy chính của dự án là file nào, lại cứ enter next thôi
```
test command:
```
**test command**: khi chạy `npm run test` nó sẽ hiện ra những cái bạn ghi ở đây, nói chung không nên ghi gì cứ enter thôi
```
git repository:
```
**git repository**: cái này là git repository ứng với dự án của bạn, giờ không có cũng cứ enter thôi
```
keywords:
```
**keywords**: các từ khóa của dự án, không biết viết từ khóa nào thì cũng kệ enter thôi
```
author:
```
**author**: tác giả của dự án, điền đại một cái tên như **kentrung** chẳng hạn, không thì thôi lại enter 
```
license: (ISC)
```
**license**: giá trị mặc định là ISC. Đây là giấy phép bản quyền của dự án có ISC với MIT, nói chung mình không tìm hiểu nên không biết, cứ enter next thông tin tiếp theo thôi. <br />
```
About to write to C:\Users\kentrung\Desktop\webpack-demo\package.json:

{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this OK? (yes)
```
Sau khi enter hỏi license xong thì nó show ra cho mình một bản phác thảo với những thông tin mà mình cung cấp. Thú thực là mình có cung cấp cái *** gì đâu toàn ấn enter. Cuối bài văn nó hỏi bản phác thảo này OK không và để giá trị mặc định là yes. Nếu bạn enter là chấp nhận còn chưa chim ưng thì gõ no để không đồng ý và làm lại. Khi gõ no và ấn enter nó sẽ báo `Aborted.` có nghĩa là đã bị hủy bỏ. Đây là bản tham khảo những giá trị mình nhập


![](https://images.viblo.asia/91f14afc-8e42-48e3-b9c8-c130e0f02f63.png)


Có câu nói: **cuộc sống quá ngắn để rút USB đúng cách**. Bạn cảm thấy mệt mỏi khi gõ `npm init` và nhập vào một loạt các thông tin thì đã có một câu lệnh giúp bạn tạo file package.json nhanh chóng và set toàn bộ các giá trị mặc định đó là:
```
npm init -y
```
Quay lại folder `webpack-demo` trên máy tính bạn sẽ thấy có thêm một file `package.json` bên trong đó, ôi magic vl.

### Bước 4. Cài đặt webpack và webpack-cli

Vẫn trong cửa sổ cmd trên sau khi tạo file package.json, bạn ghi câu lệnh này để cài đặt hai thằng trên.
```
npm install webpack webpack-cli --save-dev
```
Tham số `--save-dev` để báo với package.json chỉ cài thư viện này lúc đang code phát triển dự án thôi còn khi triển khai thật ra thị trường thì không cần. Đó là lí do mà phần dependencies của package.json được chia làm 2 phần: "dependencies" và "devDependencies" 


Sau khi đợi chạy xong câu lệnh trên thì quay lại folder `webpack-demo` bạn sẽ thấy có folder node_modules, package.json và package-lock.json theo cấu trúc như sau
```
webpack-demo
  |- node_modules/
  |- package-lock.json
  |- package.json
```
Mình chỉ cần quan tâm đến file `package.json` thôi và code bên trong sẽ như này.
```
{
  "name": "webpack-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" &amp;&amp; exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
  }
}
```
Vậy là xong, cài đặt webpack không quá phức tạp phải không bro? Bài viết đến đây là hết. Hẹn gặp lại các bạn ở bài viết tiếp theo.


* Bài viết tham khảo: [https://webpack.js.org/guides/getting-started/#basic-setup](https://webpack.js.org/guides/getting-started/#basic-setup)
* Sourcode github: [https://github.com/kentrung/webpack-tutorial](https://github.com/kentrung/webpack-tutorial)