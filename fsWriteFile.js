var fs = require('fs'); // 引入fs模块

// 写入文件内容（如果文件不存在会创建一个文件）
// 写入时会先清空文件
fs.writeFile('./test1.txt', 'test test', function (err) {
    if (err) {
        throw err;
    }
    console.log('Saved.');

    // 写入成功后读取测试
    fs.readFile('./test1.txt', 'utf-8', function (err, data) {
        if (err) {
            throw err;
        }
        console.log(data);
    });
});