const fs = require('fs');

var rs = fs.createReadStream('./test1.txt');
var ws = fs.createWriteStream('./test2.txt');
rs.pipe(ws);
rs.on('data', function (data) {
    console.log('数据可读')
});
rs.on('end', function () {
    console.log('文件读取完成');
});