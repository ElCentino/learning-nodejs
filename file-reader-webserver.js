var fileReader = require('./file-reader');
var fs = require('fs');
var http = require('http');
var path = require('path');

var filePath = fileReader.getFileArg("--file");
var port = Number(fileReader.getFileArg("--port"));

var server = http.createServer(function(req, res) {

  fs.readFile(filePath, 'UTF-8', function(err, data) {
    if(err) {
      console.log("File not found");
      res.write("<p><h1 style='color:red'>Invalid File My friend</h1></p>");
      res.end();

      return;
    }

    var index = filePath.lastIndexOf("/");

    var file = filePath.substring(index + 1, filePath.lastIndexOf("."));

    console.log(index);

    res.write(`
      <html>
        <head>
          <title>Lyrics</title>
          <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>
          <style>
            @import url(https://fonts.googleapis.com/css?family=Quicksand);
            body {
              font-family: 'Quicksand', sans-serif;
            }

            h1 {
              text-decoration: underline;
              padding: 20px 0 20px 20px;
            }

            p {
              font-size : 16px;
              font-weight: bold;
            }

            header {
              width: 100%;
              height: 110px;
              background: white;
              margin: 0px;
              padding 10px;
              top: 0;
              left: 0;
              position: fixed;
              z-index: 100;
            }

            .clear {
              clear: both;
            }

            footer {
              clear: both;
              height: auto;
              border-top : 1px solid #000;
              padding: 20px;
              margin: 0px;
              margin-top: 50px;
              text-align: center;
              overflow: hidden;
            }

            #left {
              float: left;
              width: 65%;
              height: auto;
              padding : 20px;
              margin: 10px auto;
              box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }

            #right {
              padding: 10px;
              float: right;
              width: 22%;
              height: auto;
              margin-top: 100px;
            }

            #wrapper {
              width : auto;
              height: auto;
              margin: 50px auto;
              padding: 50px;
              line-height : 1.6;
            }
          </style>
        </head>
        <body>
          <header>

          </header>
          <div id="wrapper">
            <section id="left">
                <h1>${file.toUpperCase()}<br></h1>
                <p>${data}</p>
            </section>
            <div class"clear"></div>
            <section id="right">
              <h2>Other Lyrics</h2>
              <ul>
                <li>Sia - Chandelier</li>
                <li>Sia - Away</li>
                <li>Rihanna - Man Down</li>
                <li>Jonas - Chains</li>
              </ul>
            </section>


          </div>

          <footer>
            <p>&copy;Copyright, Centurion Games &dot; All rights reserved 2018</p>
          </footer>
        </body>
      </html>`);
    res.end();
  })
});

server.listen(port);
