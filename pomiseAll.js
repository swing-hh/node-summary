var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('p1');
    }, 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('p2');
    }, 1000);
});
// 同时执行p1和p2，并在它们都完成后执行then:
Promise.all([p1, p2]).then(function (results) {
    console.log(results); // 获得一个Array: ['P1', 'P2']
});