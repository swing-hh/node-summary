const fs = require('fs');
const zlib = require('zlib');

var gz = zlib.createGzip();

var rs = fs.createReadStream('test1.txt');
var ws = fs.createWriteStream('test1.txt.gz');

rs.pipe(gz);
gz.pipe(ws);