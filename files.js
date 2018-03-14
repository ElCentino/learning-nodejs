
var fs = require("fs");

var x = require('express');

var path = "C:\\Users\\Saryn\\Desktop\\AwesomeBumpV5.0Bin32x64Win7";

fs.readdir(path, function(err, files) {
  if(err) {
    throw err;
  }

  console.log("%j", files);
});


console.log("Done Logging!");
