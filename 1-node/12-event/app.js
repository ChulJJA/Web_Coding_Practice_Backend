const EventEmitter = require('events');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback', args);
};

emitter.on('cj', callback1);

emitter.on('cj', (args) => {
  console.log('second callback -', args);
});

emitter.emit('cj', { message: 1 });
emitter.emit('cj', { message: 2 });
emitter.removeAllListeners('cj', callback1);
emitter.emit('cj', { message: 3 });
