var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        "content-type": "text/plain"
    });
    res.write("hello nodejs");
    res.end();
}).listen(3000);
console.log('访问http://127.0.0.1:3000')