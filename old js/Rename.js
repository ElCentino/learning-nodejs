
var fs = require('fs');

fs.renameSync("./lib/names.txt", "./lib/names.txt");

console.log("File renamed");

fs.rename("./lib/names2.txt", ". /names2.txt", function(err) {
    if(err) {
      console.log("ERROR");
    } else {
      console.log("File Moved");
    }
});

//Below is to remove files (deleting)

fs.unlink('names2.txt', function(err) {
  if(err) {
    throw err;
  } else {
    console.log("File deleted");
  }
});
