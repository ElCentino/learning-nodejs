
var questions = [
  "What's your name ? ",
  "What's your favorite hobby ? ",
  "what do u wanna do ? "
];

var answers = [];

var ask = function(i) {
  process.stdout.write(`\n\n\n\n${questions[i]} > `);
};


process.stdin.on("data", function(data) {

  answers.push(data.toString().trim());

  if(answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", function() {
  process.stdout.write(`\n\n\n\n`);
  process.stdout.write(`Go ${answers[1]} ${answers[0]}, you can finsh writing ${answers[2]} later :D`);
  process.stdout.write(`\n\n\n\n`);
});

ask(0);
