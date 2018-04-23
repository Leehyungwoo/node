```javascript
app.post('/topic',(req,res)=>{
    var title = req.body.title
    var des = req.body.des
    fs.writeFile('data/'+title,des,(err)=>{
        if(err){
           console.log(err) 
        }
        res.redirect('/topic/'+title);    //redirect  경로로 보내기
    }); 
})

```