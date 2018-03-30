
var fs = require('fs');
var path = require('path');

var folder = "./lib";
var folderName = folder.substring(2, folder.length);

fs.readdir(folder, function(err, files) {

  for(fileName of files) {
    var file = path.join(__dirname, folderName, fileName);
    var stat = fs.statSync(file);
    if(stat.isFile()) {
      fs.readFile(file, "UTF-8", function(err, data) {
        console.log(data);
      });
    }
  }
});
