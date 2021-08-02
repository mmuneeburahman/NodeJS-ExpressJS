const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
  console.log("Server is running on port 3000.")
});

app.get("/", function(req, res){
  // res.send("Hello");
  res.sendFile(__dirname+"/index.html");
  // console.log(__dirname);
});

// app.post("/", function(req, res){
//   console.log(req.body);
//   var num1 = Number(req.body.num1);
//   var num2 = Number(req.body.num2);
//   var sum = num1+num2;
//   res.send("Thanks for posting that, sum= "+sum);
// });

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname+"/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res){
  // console.log(req.body);
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  console.log(weight+"   "+height);
  var bmi = ((weight/(height*height))).toFixed(2);
  console.log(bmi);
  res.send("Your BMI is <b>"+bmi+"</b>.");
});