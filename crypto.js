const crypto = require('crypto');

var md5 = crypto.createHash('md5');
var str = md5.update('123456', 'utf8').digest('hex');
console.log(str)