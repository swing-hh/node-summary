const querystring = require("querystring");

//解析请求参数
let qsParse =  querystring.parse("name=whitemu#sex=man#age=20","#");
console.log(qsParse);
//默认参数格式不用第二个参数
let qsParse1 = querystring.parse("name=whitemu&sex=man&age=20");
console.log(qsParse1);

//请求参数拼成字符串
var qsStringify = querystring.stringify({name: 'whitemu', sex: [ 'man', 'women' ] });
console.log(qsStringify);

//对请求字符串进行编码
var qsEscape = querystring.escape('name=慕白');
console.log(qsEscape);

//编码得字符串进行解码
var qsUnescape = querystring.unescape('name%3D%E6%85%95%E7%99%BD');
console.log(qsUnescape);
