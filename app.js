var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World from JP!');
});
app.listen(8080, function () {
  console.log('Example "Hello World" app listening on port 8000!');
});
