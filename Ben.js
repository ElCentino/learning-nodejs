
// var event = require('events');
//
// var emitter = new event.EventEmitter();
//
// emitter.on('customEvent', (message, status) => {
//     console.log(`${status} : ${message}`);
// });
//
// status = 200;
//
// setInterval(() => {
//   emitter.emit('customEvent', "Hello world", status+=100);
// }, 2000);

var Person = require("./lib/Person");

var ben = new Person("Darling");

ben.on('Speak', function(message) {
    console.log(`${this.name} said : ${message}`);
});

ben.speak("How are you dear");
