const express = require('express');
var bodyParser = require('body-parser')

const fs = require('fs')
const app = express();


app.use(bodyParser.urlencoded({ extended: false }))
app.set('views', './views');
app.set('view engine', 'ejs');
app.get('/topic/new',(req,res)=>{
 res.render('new')
})

app.get(['/topic','/topic/:id'],(req,res)=>{
    fs.readdir('data/', (err, files) => {
        if(err){
            console.log(err) 
         }  
         var id = req.params.id;
         if(id){
            fs.readFile('data/'+id, 'utf8',(err,data)=>{
                if(err){
                    console.log(err) 
                }     
                res.render('view',{topics:files,title:id,data:data})        
            })
         } else{ 
         res.render('view',{topics:files,title:'Welcome',data:'Hello, javascipt for Server'})
        }
    })   
})
 

app.post('/topic',(req,res)=>{
    var title = req.body.title
    var des = req.body.des
    fs.writeFile('data/'+title,des,(err)=>{
        if(err){
           console.log(err) 
        }
        res.send('success')
    }); 
})

app.listen(3000,()=>{
    console.log('http://localhost:3000')
})