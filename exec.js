
var exec = require("child_process").exec;
var event = require('events').EventEmitter;

var emitter = new event();

function grab(e) {
  var index = process.argv.indexOf(e);
  return (index === -1) ? null : process.argv[index + 1];
}

emitter.on('grab', e => {

  var command = "";

  if(e == "list") {
    command = 'dir';
  } else {
    command = 'cls';
  }

  exec(command, (err, stdout) => {
    if(err) {
      throw err;
    }

    console.log("done logging");
  });
});

let argumentS = grab('--dir');

emitter.emit('grab', argumentS);

exec("cls");
