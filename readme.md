
# port

+ http://a.com = 도메인
+ 도메인으로 서버 컴퓨터 접속시 컴퓨터에는 다양한 서버 애플리케이션들이 있는데, 웹서버를 찾아 들어가려면 http://a.com:포트번호
+ http를통해서 접속한 경우에는 80번 포트를 쓰자는 약속(listening)
+ http://a.com:80
+ 따라서 80은 생략 가능

# 웹서버만들기

```javascript
const http = require('http');  

const hostname = '127.0.0.1';  //
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```

# npm

+ npm init
+ npm 사이트 가서 설치할것 찾기
+ npm install underscore --save
    + --save를 붙이는이유는, 이 프로젝트에 반드시 포함되어야 할 경우
    + --save를 뺄는때는, 일시적으로 테스트할때


+ 터미널에서 즉시실행 할수 있다.

```
 C:\Users\dlgud\Desktop\js\server_side_javascript> node 
 > console.log(1+1)
  2
  undefined
 
 ```


 # 동기 비동기

+ Sunchronous == 동기   
+ ASunchronous == 비동기

[예제](./sync_async.js)


# express

+ http://expressjs.com/ko/
+ npm i express --save


# main파일, entry 파일, main application, entry application

app.js는 관습적인 진입점

# express 진입

```javascript

var express = require('express'); //express return값을 담음
var app = express(); // var express는 사실 함수라서 함수(application을 리턴) app에 담음 
//express에서 만든 약속
 
app.listen(3000,function(){
    console.log('Conneted 3000 port')
});
// 3000번 포트를 리스닝하면 콜백함수 실행

```

+ 서버는 reload 해야한다. (node 파일명.js)

```javascript

var express = require('express'); //express return값을 담음
var app = express(); // var express는 사실 함수라서 함수(application을 리턴) app에 담음 
//express에서 만든 약속
app.get() //url을 치는것은 get방식
app.listen(3000,function(){
    console.log('Conneted 3000 port')
});
// 3000번 포트를 리스닝하면 콜백함수 실행

```

+ express의 listen 메소드는 어느 포트에 리스닝할지 설정할수있고
+ get이 하는일은 router의 역할을 수행한다.


```javascript
var express = require('express'); //express return값을 담음
var app = express(); // var express는 사실 함수라서 함수(application을 리턴) app에 담음 
//express에서 만든 약속
app.get('/',function(req,res){
    res.send('Hello home page')
}) //url을 치는것은 get방식

app.get('/login',function(req,res){
    res.send('login plz')
}) //url을 치는것은 get방식

// get이 하는일은 router

app.listen(3000,function(){
    console.log('Conneted 3000 port')
});
// 3000번 포트를 리스닝하면 콜백함수 실행

```



# public


 ```javascript
app.use(express.static('public')); 
 ```

public 디렉터리는 정적디렉터리이다.
+ 정적이다 : 한번만들면 항상 같다.
+ express 전역에서 쓸수있다.
+ 정적인 파일 수정은 서버를 껐다가 킬필요없이 브라우저 새로고침으로 바로반영된다. 



# query string

``` javascript

app.get('/topic',function(req,res){
    res.send(req.query)
})
/*
하고
http://localhost:3000/topic?id=1000000

쳐본다.
*/
```


``` javascript

app.get('/topic',function(req,res){
    res.send(req.query.name)
})
/*
하고
http://localhost:3000/topic?name=1000000

쳐본다.
*/
```


``` javascript

app.get('/topic',function(req,res){
    res.send(req.query.id+','+req.query.name)
})

/*
하고
http://localhost:3000/topic?id=100&name=test

쳐본다.
*/
```


# Post 사용시 bodyParser 미들웨어 설치

+ form method="post" 사용시

+ npm install body-parser --save

```javascript
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/form_receiver',function(req,res){
    var title= req.body.title;
    var description= req.body.description;
    res.send(title+','+description)
})
```

## get, post 차이점

+ get은 url에 포함된다
    + 보통 유저에게 url복사기능을제공할때
    + 쿼리스트링 전송시 데이터가 너무길면 브라우저가 자른다.

+ post는 포함되지않는다.
    + form 태그 내부에써는것 권장


# template engin

http://expressjs.com/en/guide/using-template-engines.html

+ npm install pug --save

+ api
    + https://pugjs.org/api/getting-started.html

```javascript
/*템플릿 엔진이 pretty. 정렬되서 보이게*/
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}   

app.set('view engine', 'pug');  /*템플릿엔진을 쓰겠다는 약속*/
app.set('views', './views'); /* ./views 디렉터리를 express에게 알려주는 코드. 
관습적으롤 views 폴더를 사용. 이 코드 사용 안하면 default값이 그대로 적용됨
*/
app.get('/form',function(req,res){
    res.render('form',{form파일 에서 사용할 객체 전달 가능})  
    //res객체가 가지고있는 render가 첫번째 인자를 읽어서 그 템플릿의 문법을 읽어서 줌. 
})
```

```javascript
app.get('/form_receiver',function(req, res){
    res.send(req.query.title+','+req.query.description)
})

```

# 파일 업로드 API multer 

https://github.com/expressjs/multer



```html
    <form action="upload" method="post" enctype="multipart/form-data">
      <input type="file" name="userfile">
      <input type="submit">
    </form>

```

```javascript
var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })          dest:'경로'
var app = express()

app.post('/profile', upload.single('파일명'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})

```


# mysql APT node-mysql 

https://www.npmjs.com/package/mysql

```javascript

var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'o2'
});

con.connect();
 

var sql = 'INSERT INTO topic (title,description,author) VALUES(?,?,?)'
var params = ['supervisor','watcher','grahittie'];
con.query(sql,params,function(err,rows,fields){
    if(err){
        console.log(err)
    }else{
        console.log(rows)
    }
})

var sql = 'DELETE FROM topic SET title=?, description=?, author=? WHERE id=?';
var params = ['a','b','c',9];
con.query(sql,params,function(err,rows,fields){
    if(err){
        console.log(err)
    }else{
        console.log(rows)
    }
})
con.end();

```