const EventEmitter = require('events');

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();
//绑定了一个事件
myEmitter.on('event', () => {
    console.log('触发事件');
});
//触发这个事件
myEmitter.emit('event');