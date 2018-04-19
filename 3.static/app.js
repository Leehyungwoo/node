const express = require('express');   
var app = express();   
app.use(express.static('public'));


app.get('/route', function (req, res) {
    res.send('Hello Router,<img src="/r.png">!');
});
  

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.listen(3000, function () {
  console.log('http://localhost:3000/');
});
