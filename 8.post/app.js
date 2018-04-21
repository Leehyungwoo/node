const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine','ejs');
app.set('views','./views');
app.get('/form',(req,res)=>{
    res.render('form')
})
app.post('/form_receiver',(req,res)=>{
    var title = req.body.title; 
    var des = req.body.description; 
    // var des = req 
 
    res.render('test',{title:title,des:des})
 
})

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/topic/:id', (req, res) => {
    var topics =[
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
                <a href="/topic/0">Javascript</a><br/>
                <a href="/topic/1">Nodejs</a><br/>
                <a href="/topic/2">Express</a><br/><br/>
                ${topics[req.params.id]}
    `
    res.send(output)
})
app.get('/topic/:id/:mode',function(req,res){
    console.log(req.params)
    res.send(req.params.id + ','+  req.params.mode)
})
app.listen(3000, function () {
    console.log('sucess')
})