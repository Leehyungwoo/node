const express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs')
var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'o2'
});
con.connect();

app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;

app.set('view engine', 'pug');
app.set('views', './views_mysql');

app.get('/topic/new',(req,res)=>{
    res.render('new');
})
 


app.get(['/topic','/topic/:id'],(req,res)=>{
    var sql = "SELECT id,title FROM topic"
    con.query(sql,function(err,rows,fields){
            res.render('view',{topics:topic})
    })
})


app.post('/topic',(req,res)=>{
    var title= req.body.title;
    var description = req.body.description;
    fs.writeFile('data/'+title,description,(err)=>{
        if(err){
            res.status(500).send('Internal Server Error')
        }
        res.send('Success!')
    });
    
})

app.listen(3000,()=>{
    console.log('connected, 3000 port');
})