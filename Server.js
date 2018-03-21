var http = require('http');

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

server.listen(3000);
