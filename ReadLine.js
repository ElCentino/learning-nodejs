
var readLine = require('readline');

var rl = readLine.createInterface(process.stdin, process.stdout);

var person = {
  name : '',
  sayings : []
};

rl.question("What is your name ? ", answer => {
  person.name = answer;

  rl.setPrompt(`\nWhat would ${person.name} say ? `);
  rl.prompt();

});

rl.on('line', saying => {

  if(saying.toLowerCase().trim() === 'exit') {
    rl.close();
  } else {
    person.sayings.push(saying.trim());
    rl.setPrompt(`\nWhatelse does ${person.name} says ? ('Exit to leave')`);
    rl.prompt();
  }
});

rl.on('close', () => {
  console.log("%s Says : %j", person.name, person.sayings);
  process.exit();
});
