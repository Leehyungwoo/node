const express = require('express');
const app = express();

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'));
app.set('views', './views')
app.set('view engine', 'ejs')
app.get('/form',(req,res)=>{
    res.render('form')
})

var formTitleArr = [];
var formDesArr = [];

app.post('/form_recive',(req,res)=>{
    var title = req.body.title;
    var des = req.body.des;
    formTitleArr.push(title)
    formDesArr.push(des)
    res.send('<a href="/list">전송완료</a>')
})

app.get('/list',(req,res)=>{
    res.render('list',{formTitleArr:formTitleArr,formDesArr:formDesArr})
})

app.get('/form_recive/:id',(req,res)=>{
    res.send(formDesArr[req.params.id])
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})