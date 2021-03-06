const express = require('express');
const fs = require('fs');
const app = express();
const port = process.env.PORT||8000;

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/sumarize",(req,res)=>{
    data = {}
    fs.readFile('data.json',(err,fd)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send(fd);
        }
    })
})

app.listen(port,()=>{
    console.log("Server is running on port 8000");
})

// 155c1629e9894008b694cc584a348551