```javascript
//이런식으로 배열로 2가지 라우터를 넣고, 조건문으로 분기처리할수있다.
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

```