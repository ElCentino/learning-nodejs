
var sayings = [
  "Alls well that ends well",
  "Life is just a beach",
  "The best Revenge is living a good life",
  "Look before you leap"
];

function randomSay() {
  var i = Math.floor(Math.random() * sayings.length);
  process.stdout.write(`\n${sayings[i]}\n`);
}

var interval = setInterval(randomSay, 2000);

process.stdin.on('data', data => {
  console.log(`STDOUT DATA -> ${data.toString().trim()}`);
  clearInterval(interval);
  process.exit();
});
