var fileReader = require('./file-reader');
var fs = require('fs');
var http = require('http');
var path = require('path');

var filePath = fileReader.getFileArgs("--file");
var port = Number(fileReader.getFileArgs("--port"));
var index =  filePath.lastIndexOf("/");
var targetFolder = filePath.substring(0, index);

let moreFiles = [];
var list = [];


function serverSide() {

  fs.readdir(targetFolder, function(err, files) {
    for(fileName of files) {
      if(err) {
        console.log("Folder does not exist");
        return;
      }

      var file = path.join(targetFolder, fileName);
      var stat = fs.statSync(file);

      if(stat.isFile() && file.endsWith(".js")) {
        moreFiles.push(fileName);
      }
    }
  });

  var server = http.createServer(function(req, res) {

    fs.readFile(filePath, 'UTF-8', function(err, data) {
      if(err) {
        console.log("File not found");
        res.write("<p><h1 style='color:red'>Invalid File My friend</h1></p>");
        res.end();

        return;
      }

      let index = filePath.lastIndexOf("/");

      var file = filePath.substring(index + 1, filePath.lastIndexOf("."));

      console.log(index);

      res.write(`
        <html>
          <head>
            <title>${file.toUpperCase()}</title>
            <link href='https://fonts.googleapis.com/css?family=Quicksand' rel='stylesheet' type='text/css'>

            <script>
              window.onload = fucntion() {

              }

              var lists = document.getElementById("right");
              var files = lists.getElementsByTagName("a");

              for(file of files) {
                var href = file.getAttribute("href");
                file.onclick = ${loadFile(file)};
              }

            </script>
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

              nav {
                font-weight: bold;
                font-size: 20px;
              }

              nav ul li {
                display: inline-block;
                margin: 20px;
              }

              nav ul li a {
                text-decoration: none;
                color: #000;
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

                margin: 100px, 50xp;
              }

              #right ul {

              }

              #right ul li {
                margin: 5px;
                font-weight: bold;
                font-size: 19px;
              }

              #right ul li a {
                text-decoration: none;
                color: #000;
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
              <nav class="menu">
                <ul>
                  <li><a href='#'>Home</a></li>
                  <li><a href='#'>About</a></li>
                  <li><a href='#'>Products</a></li>
                  <li><a href='#'>Pricing</a></li>
                  <li><a href='#'>Contacts</a></li>
                </ul>
              </nav>
            </header>
            <div id="wrapper">
              <section id="left">
                  <h1>${file.toUpperCase()}<br></h1>
                  <p>${data}</p>
              </section>
              <div class"clear"></div>
              <section id="right">
                <h2>Other Files</h2>
                <ul> ${listFiles()}
                  <li>${list}</li>

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
}

serverSide();

function getData(e) {

}

function listFiles() {

  for(var i = 0; i < moreFiles.length; i++) {
    var onePath = "localhost/" +targetFolder + "/" + moreFiles[i];
    if(typeof moreFiles[i] == undefined) {
      continue;
    }

    list[i] = `<li><a href="${onePath}">${moreFiles[i]}</a></li>`;
  }
}
