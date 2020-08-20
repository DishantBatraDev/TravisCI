const express = require("express")
const app = express()

app.get("/",function(req,res){
  res.send("Hello from Docker !")
})


app.listen(80,function(){
  console.log("Listening on the port 80")
})