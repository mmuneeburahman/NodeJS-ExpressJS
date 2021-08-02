const { response } = require("express");
const express = require("express");
const app = express();
app.get("/", function(req, res){
  res.send("<h1>Hello, wold!</h1>");
})

app.get("/contact", function(req, res){
  res.send("contact me at mmuneeburahman@gmail.com");
})

app.get("/help", function(req, res){
  res.send("How can I help you?");
})

app.get("/about", function(req, res){
  res.send("I am muneeb, student at ITU, Lahore. I am currently enrolled in BS Computer Science program.")
})

app.get("/hobbies", function(req, res){
  res.send("I like to read, write, and code");
})
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
