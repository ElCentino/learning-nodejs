var fileReader = require("./file-reader");
var http = require('http');
var fs = require('fs');
var path = require('path');

var dir = getArg("--dir");

var index = dir.lastIndexOf("/");
var pub = dir.substring(0, index);

function getArg(args) {
  var index = process.argv.indexOf(args);
  return (index === -1) ? null : process.argv[index + 1];
}

var server = http.createServer(function(req, res) {

    console.log(`${req.port} || ${req.method} request for ${req.url}`);

    if(req.url === "/") {

      fs.readFile(`${dir}/portfolio.html`, "UTF-8", function(err, html) {
        res.writeHead(200, {"Content-Type" : "text/html"});
        res.end(html);
      });

    } else if(req.url.match(/.css$/)) {

      var cssPath = path.join(dir, req.url);
      var cssStream = fs.createReadStream(cssPath, "UTF-8");

      res.writeHead(200, {"Content-Type" : "text/css"});
      cssStream.pipe(res);

    } else if(req.url.match(/.js$/)) {
      var jsPath = path.join(dir, req.url);
      var jsStream = fs.createReadStream(jsPath, "UTF-8");

      res.writeHead(200, {"Content-Type" : "text/javascript"});
      jsStream.pipe(res);

    } else if(req.url.match(/.jpg$/)) {

      var imagePath = path.join(dir, req.url);
      var imageStream = fs.createReadStream(imagePath);

      res.writeHead(200, {"Content-Type" : "image/jpeg"});
      imageStream.pipe(res);

    } else if(req.url.match(/.html$/)) {
      var docPath = path.join(dir, req.url);
      var docStream = fs.createReadStream(docPath, 'UTF-8');

      res.writeHead(200, {"Content-Type" : "text/html"});
      docStream.pipe(res);
    } else if(req.url.match(/.txt$/)) {
      var filePath = path.join(dir, req.url);
      var fileStream = fs.createReadStream(filePath, 'UTF-8');

      res.writeHead(200, {"Content-Type" : "text/plain"});
      fileStream.pipe(res);
    } else {
      res.writeHead(404, {"Content-Type" : "text/plain"});
      res.end(`404 File not found`);
    }
});

server.listen(3000);

console.log("Server started");
