
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