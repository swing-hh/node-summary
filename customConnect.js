var express = require('express');
var app = express();

app.use(function (req, res, next) {
    res.header("lalala", 'balabala');
    next();
});

app.get('/login', function (req, res) {
    res.send('Hello World');
});

app.listen(3000);
console.log('访问http://127.0.0.1:3000');