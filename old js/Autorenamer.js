
var fs = require('fs');
var fileReader = require('./file-reader');
var path = require('path');

var dir = getFileArg("--dir");

console.log(dir);

var count = 1;

fs.readdir(dir, function(err, folder){
  folder.forEach(function(fileName){

    var file = path.join(dir, fileName);
    var stat = fs.statSync(file);

    if(stat.isFile() && file.endsWith('jpg')) {
      fs.rename(file, `${dir}/${count}.jpg`, function(err) {
        if(!err)
          console.log("file renamed");
      });
      count++;
    }
  });
});

function getFileArg(e) {
  var index = process.argv.indexOf(e);
  return (index === -1) ? null : process.argv[index + 1];
}
