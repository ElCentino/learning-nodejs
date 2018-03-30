var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    console.log(`${req.method} for ${req.url}`);

    if(req.method === 'GET') {
        res.writeHead(200, {"Content-Type" : "text/html"}); 
        fs.createReadStream("./lib/post.html", "UTF-8").pipe(res);
    } else if(req.method === 'POST') {

        var data = "";

        req.on('data', function(chunk) {
            data += chunk;
        });

        req.on('end', function() {
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.end(`
                <!DOCTYPE html>
                <html>
                    <body>
                        <h1>Your form results</h1>
                        <p>${data}</p>
                    </body>
                </html>
            `);
        });
    }
    

}).listen(3000);

console.log("Server started");