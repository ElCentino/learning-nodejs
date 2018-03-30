

var proc = require('child_process').spawn;
var readline = require('readline');
var fs = require('fs');

function argGrab(e) {
    var index = process.argv.indexOf(e);
    return (index === -1) ? null : process.argv[index + 1];
}

var logFile = fs.createWriteStream("./log.txt");
logFile.write("\n------------ Ports LOGS -------------\n");
var port;

function createServer() {

    read.question("What port would you like to start a server on ? : [PORT] ", function(response) {

        port = Number(response);
    
        if(!isNaN(port)) {
    
            var cp = proc("node", ["server", "--port", port]);
    
                cp.stdout.on('data', function(data) {
                    console.log(data.toString());
                });
    
                cp.stderr.on('data', function(data) {
                    console.log(data.toString());
                });
    
        } else {
            process.exit();
        }
    });

}

var read = readline.createInterface(process.stdin, process.stdout);

createServer();

read.on('line', function(data) {

    process.stdout.write(`\nDo you want to add another server ? [YES/NO] : \n`);

    if(data.toString().trim() == "yes") {
        createServer();
    }

    logFile.write(`\n------------ ${port} -------------\n`);
});