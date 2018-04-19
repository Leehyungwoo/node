const express = require('express');
const app = express();

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