const express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs')
app.use(bodyParser.urlencoded({ extended: false }))
app.locals.pretty = true;
app.set('view engine', 'pug');
app.set('views', './views_file');

app.get('/topic/new',(req,res)=>{
    res.render('new');
})

app.get('/topic/:id',(req,res)=>{
var id= req.params.id;
fs.readFile('deta/'+id,'utf8',(err, data)=>{
    if(err){
        res.status(500).send('Internal Server Error')
    }
res.send(data)
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