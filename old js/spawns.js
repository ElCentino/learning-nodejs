
var spawn = require('child_process').spawn;

var cp = spawn("node", ["AlwaysTalking"]);

cp.stdout.on('data', function(data) {
  console.log(`STDOUT DATA -> ${data.toString().trim()}`);
});

cp.on('close', function() {
  console.log("Child Process ended");
  process.exit();
});

setTimeout(() => {
  cp.stdin.write("stop");
}, 4000);
