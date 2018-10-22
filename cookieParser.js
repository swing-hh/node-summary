var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

app.use(cookieParser());

app.use(function (req, res, next) {
  console.log(req.cookies); // 第二次访问，输出chyingp
  next();
});

app.use(function (req, res, next) {
  res.cookie('nick', 'chyingp');
  res.end('ok');
});

app.listen(3000);
console.log('访问http://127.0.0.1:3000');