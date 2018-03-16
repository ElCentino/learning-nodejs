
var fs = require('fs');

let list = [];

console.log(`Enter a list of names one by one until its enough`);

fs.writeFileSync('./lib/names.txt', `Names\n==================================\n`);

process.stdin.on('data', function(data) {
  if(String(data).toLowerCase().trim() == "exit") {
    process.exit();
  } else {
    list.push(String(data).trim());
    console.log(`You entered : ${String(data).trim()} enter [exit] to stop`);

    fs.appendFile('./lib/names.txt', `* ${String(data).trim()}\n`, err => {
      if(err) return;
    });
  }
});

process.on('exit', () => {
  console.log(`files added`);


});
