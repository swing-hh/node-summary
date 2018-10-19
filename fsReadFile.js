var fs = require('fs'); // 引入fs模块

fs.readFile('./1.js', function (err, data) {
    // 读取文件失败/错误
    if (err) {
        throw err;
    }
    // 读取文件成功
    console.log(data);
    console.log(data.toString());
});