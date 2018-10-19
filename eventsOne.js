const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();

//绑定一次事件
myEmitter.once('one', function () {
    console.log('执行了');
});
//第一次触发
myEmitter.emit('one');
//第二次不触发
myEmitter.emit('one');