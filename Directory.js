
var fs = require('fs');

var dir = "./emptyFolder";

if(fs.existsSync(dir)) {
  console.log("File exists");
} else {
  fs.mkdir(dir, function(err) {
    if(err) throw err;

    console.log("File created");
  });
}
