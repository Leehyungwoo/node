const express = require('express');   
var app = express();   
app.use(express.static('public'));


app.get('/dynamic', function (req, res) {
  var lis ='';
  for(var i = 0; i <5; i++){
    lis += '<li>coding</li>'
  }
  var time = Date();
  var output = `
  <!doctype html>
  <html lang="en">
 <head>
  <meta charset="UTF-8">
  <meta name="Generator" content="EditPlus®">
  <meta name="Author" content="">
  <meta name="Keywords" content="">
  <meta name="Description" content="">
  <title>Document</title>
 </head>
 <body>
    Hello, dynamic
    <ul>
      ${lis}
    </ul>
    ${time}
 </body>
</html>

  `
  
  res.send(output);
});


app.get('/route', function (req, res) {
    res.send('Hello Router,<img src="/r.png">!');
});
  
app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.listen(3000, function () {
  console.log('http://localhost:3000/');
});
