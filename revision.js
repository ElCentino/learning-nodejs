
var readline = require('readline');

var read = readline.createInterface(process.stdin, process.stdout);

var person = {
    name : "",
    school: "",
    age : "",
    favMeal : ""
};

read.question("What is your name ? ", function(answer) {

    process.stdout.write(`\nYour name is ${answer}\n`);
    person.name = answer;

    read.question(`Are you in school ${person.name} ? `, function(answer) {

        read.setPrompt(`\nGood to know ${person.name}\n`);
        read.prompt();
    
        person.school = answer;

        read.question("What is your age ?", function(answer) {
    
            process.stdout.write(`\nYou are ${answer} years old\n`);
            person.age = answer;

            read.question("What is your favourite meal ?", function(answer) {

                process.stdout.write(`\nYour favourite meal is ${answer}`);
                person.favMeal = answer;

                read.close();
                
            });  
        }); 
    });
});

read.on('close', function() {
    process.stdout.write(`\nGoodbye ${person.name}\n`);
});
