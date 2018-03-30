
function grab(flag) {
  var index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index + 1];
}

var user = grab("--user");
var greetings = grab("--greetings");

if(user == null || greetings == null) {
  console.log("You blew it");
} else {
  console.log(`Welcome ${user}, ${greetings}`);
}
