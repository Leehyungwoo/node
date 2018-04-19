const express = require('express');   
var app = express();   


/* 여기서 */

var ejs = require('ejs');
app.set('view engine', 'ejs');  
app.set('views', './views'); 

app.get('/test',function(req,res){
    res.render('test',{test:5,variable:'변수명'})  
    //res객체가 가지고있는 render가 첫번째 인자를 읽어서 그 템플릿의 문법을 읽어서 줌. 
})

/* 여기까지가 ejs 기본셋팅 , view 파일 디렉터리 확인 */


app.get('/route', function (req, res) {
    res.send('Hello Router,<img src="/r.png">!');
});
  

app.get('/', function (req, res) {
  res.send('Hello World!');
});
 
app.listen(3000, function () {
  console.log('http://localhost:3000/');
});
