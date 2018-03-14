
var maxTimeout = 5000;
var counterTimeout = 10;
var counter = 0;
var percentWaited = 0;

var writePercentage = function(p) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`Waiting ${p}%`);
};

var interval = setInterval(function() {
   counter += counterTimeout;
   percentWaited = Math.floor(counter/maxTimeout * 100);
   writePercentage(percentWaited);
}, counterTimeout);

setTimeout(function() {
  clearInterval(interval);
  writePercentage(100);
  process.stdout.write(`\nDone\n`);
}, maxTimeout);

writePercentage(percentWaited);
