const mysql = require('mysql');
const db = mysql.createConnection({//配置连接
    host: '123.207.67.21',//数据库地址
    user: "yaojintao",//数据库用户
    password: "yjt19921106@",//数据库密码
    database: "yb_lift_help"//需要连接的数据库
});

function query(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function koa(genFn) {
    var gen = genFn();

    var last_data = null;
    _next();
    function _next() {
        var obj = gen.next(last_data);

        if (!obj.done) {  //没结束
            if (obj.value instanceof Promise) {
                obj.value.then((data) => {
                    last_data = data;
                    _next();
                }, (err) => {
                    throw err;
                });
            } else {
                throw new Error('必须是Promise，你懂不');
            }
        }
    }
}

koa(function* () {
    var list = yield query('SELECT * FROM yb_lift_bill_list');
    console.log('=====列表=====');
    console.log(list);

    var type = yield query('SELECT * FROM yb_lift_bill_type');
    console.log('=====类型=====');
    console.log(type);
});