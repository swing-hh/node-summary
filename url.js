const url = require("url");
var myUrl = 'http://localhost:8080/home?name=yaobai&age=20';

var urlParse = url.parse(myUrl);
console.log(urlParse)

var urlForMat = url.format({
    protocol: "http:",
    host: "182.163.0:60",
    port: "8080"
});
console.log(urlForMat);

var urlResolve = url.resolve("http://localhost:8080/home", "?name=yaobai&age=20");
console.log(urlResolve)

