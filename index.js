const express = require('express');

const app = new express();
app.get('/', (req, res)=>{
    res.send("My first project hosted on AWS");
});

app.get("/health", (req,res)=>{
    res.send("Everything is ok!");
});

app.listen(8080, ()=> console.log("Server is listening on port 8080"));