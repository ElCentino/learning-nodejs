var http = require('http');

function argGrab(e) {
  var index = process.argv.indexOf(e);
  return (index === -1) ? null : process.argv[index + 1];
}

var port = Number(argGrab('--port'));

var server = http.createServer(function(req, res) {

  res.writeHead(200, {"Content-Type" : "text/html"});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>

      </head>
      <body>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `);
});

server.listen(port);

console.log("server started");
