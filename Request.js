
var https = require('https');
var fs = require('fs');

let options  = {
  hostname: 'en.wikipedia.org',
  port: 443,
  path: "/wiki/Kwame_Nkrumah",
  method: 'GET'
}

var req = https.request(options, function(res) {
  var responseBody = "";

  console.log("Response from server started");
  console.log(`Server Status : ${res.statusCode}`);
  console.log("Response Headers: %j", res.headers);

  res.setEncoding("UTF-8");

  res.once('data', function(chunk) {
    console.log(chunk);
  });

  res.on('data', function(chunk) {
    console.log(`---- ${chunk.length}`);
    responseBody += chunk;
  });

  res.on('end', function() {
    fs.writeFile("Kwame_Nkrumah.html", responseBody, function(err) {
      if(err) {
        throw err;
      }

      console.log("File downloaded");
    });
  });
});

req.on('error', function(err) {
  console.log(`problem with request: ${err.message}`);
});

req.end();
