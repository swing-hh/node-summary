const http = require('http');

var server = http.createServer(function (req, res) {
  switch (req.url) {
    case '/index':
      res.write("index");
      break;
    case '/home':
      res.write("home");
      break;
    default:
      res.write('404');
  }
  res.end();
});

//监听：告诉系统，找这个端口的来我这儿
server.listen(3000);
console.log('访问http://127.0.0.1:3000')