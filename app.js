var express = require('express'); //express return값을 담음
var app = express(); // var express는 사실 함수라서 함수(application을 리턴) app에 담음 
//express에서 만든 약속
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.static('public'));
//정적인 파일이 위치하는 디렉토리
//관습적으로 public이라고 사용
app.get('/template',function(req,res){
    res.render('temp',{
        time:new Date(),
        titleS:'타이틀'
    });
})

app.get('/',function(req,res){
    res.send('Hello home page')
}) 
//url을 치는것은 get방식

app.get('/route',function(rep,res){
    res.send('Hello Router, <img src="/router.gif">')
})

app.get('/dynamic',function(req,res){
    var lis = '';
    for(var i =0; i < 5; i++){
        lis += '<li>coding</li>'
    }
    var time = Date()
    var output = `
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        Hello, dynamic!
        <ul>
            ${lis}
        </ul>
        ${time}
    </body>
    </html>`
    res.send(output)
})

app.get('/login',function(req,res){
    res.send('<H1>login plz</H1>')
}) 
//url을 치는것은 get방식
// get이 하는일은 router

app.listen(3000,function(){
    console.log('Conneted 3000 port')
});
// 3000번 포트를 리스닝하면 콜백함수 실행
