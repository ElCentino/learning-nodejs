var fs = require('fs');

// fs.rename("./emptyFolder/Directorate", "./emptyFolder/Directory", function(err) {
//     if(err) throw err;
//
//     console.log(`Successrully renamed file`);
// });

fs.readdirSync("./emptyFolder").forEach(function(files) {
    fs.unlinkSync("./emptyFolder/" + files);

    console.log(`${files} Removed`);
});

fs.rmdir("./emptyFolder", function(err) {
  if(err) throw err;

  console.log(`Folder removed`);
});
