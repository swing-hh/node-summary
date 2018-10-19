var http = require("http");
var server = new http.Server();

console.log(http.ServerResponse)

server.on("request", function (req, res) {
    console.log('有人访问');
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.write("hello nodejs");
    res.end();
});

server.on("connection", function (req, res) {
    console.log('建立链接');
});

server.on("close", function (req, res) {
    console.log('链接关闭');
});

server.listen(3000);
console.log('访问http://127.0.0.1:3000')
