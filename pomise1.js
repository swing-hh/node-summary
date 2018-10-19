new Promise(function (resolve, reject) {
    console.log('进入Pomise');
    setTimeout(function () {
        if (Math.random() < 0.5) {
            console.log('成功了');
            resolve('200 OK');
        }
        else {
            console.log('失败了');
            reject('500 NO');
        }
    }, 1000);
}).then(function (r) {
    console.log('成功：' + r);
}).catch(function (reason) {
    console.log('失败' + reason);
});
