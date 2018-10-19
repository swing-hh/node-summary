const path = require('path');

//解析path对象
console.log(path.parse('/home/user/dir/file.txt'));

//返回path的最后一部分
console.log(path.basename('/foo/bar/quux.html'));
console.log(path.basename('/foo/bar/quux.html', '.html'));

//输出当前文件路径
console.log(process.env.PATH);

//特定路径的分隔符
console.log(process.env.PATH.split(path.delimiter));

//返回路径的目录名
console.log(path.dirname('/foo/bar/baz/asdf/quux'));

//返回文件的扩展名
console.log(path.extname('index.html'));
console.log(path.extname('index.coffee.md'));

//对象路径拼合成字符串路径
console.log(path.format({
    root: '/ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
}));

//判断是否为绝对路径
console.log(path.isAbsolute('/foo/bar'));
console.log(path.isAbsolute('../foo/bar'));

//使用特定字符把path片段连接到一期
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'))