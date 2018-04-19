const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hi')
})

app.get('/topic', (req, res) => {
    var topics =[
        'Javascript is...',
        'Nodejs is...',
        'Express is...'
    ];
    var output = `
                <a href="/topic?id=0">Javascript</a><br/>
                <a href="/topic?id=1">Nodejs</a><br/>
                <a href="/topic?id=2">Express</a><br/><br/>
                ${topics[req.query.id]}
    `;
    res.send(output)
})
 
app.listen(3000, function () {
    console.log('sucess')
})