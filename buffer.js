var buf = new Buffer(10);
console.log(buf);

var buf1 = new Buffer([10, 20, 30, 40, 50]);
console.log(buf1.length);

var buf2 = new Buffer("www.runoob.com", "utf-8");
console.log(buf2.toString());

var buffer1 = new Buffer("好");
var buffer2 = new Buffer("你");
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString()); 