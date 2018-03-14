
var fs = require('fs');

function getFileArg(e) {
  var index = process.argv.indexOf(e);
  return (index === -1) ? null : process.argv[index + 1];
}
var filePath = getFileArg("--file");

if(filePath == null) return;

fs.readFile(filePath, "UTF-8", function(err, data) {
  if(err) {
    console.log(`File does not exist!`);
    return;
  }

  console.log(`${data}`);
});


process.on('exit', function() {
  console.log(`Done`);
});
