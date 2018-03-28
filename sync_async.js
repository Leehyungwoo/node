var fs = require('fs');

// Sync  
console.log(1)
var data = fs.readFileSync('./data.txt',{encoding:'utf8'});
//만약 fs.readFileSync('./data.txt',{encoding:'utf8'});가 10분짜리 작업이면 10분 후에 console.log(data)가 실행된다
console.log(data)


// Async
console.log(2);
fs.readFile('./data.txt',{encoding:'utf8'},function(err,data){
    console.log(3)
    console.log(data)
})

console.log(4)
// 2 , 4 , 3 , data 실행

//nodeJs는 싱글스레드 사이트다. 만약 사이트를 동기로했는데 data같은파일의 로딩이 10분이라면 계속기다려야한다.