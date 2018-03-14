
var event = require('events').EventEmitter;
var util = require('util');

var Person = function(name) {
  this.name = name;

  this.speak = message => {
    this.emit('Speak', message);
  };
};

util.inherits(Person, event);

module.exports = Person;
