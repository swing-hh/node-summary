var mysql = require('mysql');//引用Mysql

var connection = mysql.createConnection({//配置连接
    host: '123.207.67.21',//数据库地址
    user: "yaojintao",//数据库用户
    password: "yjt19921106@",//数据库密码
    database: "yb_lift_help"//需要连接的数据库
});

connection.connect();//连接数据库

connection.query('select * from yb_lift_user', function (err, rows, fields) {//执行sql语句
    if (err) throw err;
    console.log(rows);
});

connection.end();//断开连接
