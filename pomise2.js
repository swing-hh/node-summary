// 0.5秒后返回input*input的计算结果:
function multiply(input) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Pomise1');
            resolve('Pomise1');
        }, 1000);
    });
}

// 0.5秒后返回input+input的计算结果:
function add(input) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Pomise2');
            resolve('Pomise2');
        }, 1000);
    });
}

var p = new Promise(function (resolve, reject) {
    console.log('启动 Promise');
    resolve('start');
});

p.then(multiply)
    .then(add)
    .then(multiply)
    .then(add)
    .then(function (suc) {
        console.log('success：' + suc);
    }).catch(function (err) {
        console.log('error:' + err)
    });