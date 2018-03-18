var express = require('express');
var dotenv = require('dotenv').config();

var app = express();

//MODULE: Handles all Google Analytics Integration
var ga_init = require('./utils/ga-init.js')(app);
//MODULE: Handles all AWS Configurations of dynamo DB
var aws_init = require('./utils/aws-init.js');
//MODULE: Handles all express bases routes
var routes = require('./routes')(app);

//Setting 'static' folder to handle all static files like css,js,jpg,png. All static data will be fetched from this folder
app.use(express.static('static'));
//Setting ejs as view engine to render dynamic data into html
app.set('view engine', 'ejs');

//Route to handle 404 
app.get('/*',function(req, res){
  res.send("404 | Page Not Found<br/>This website is still under development")
})

//Spinning our server up
app.listen(process.env.PORT,function(){
  console.log('SERVER LISTENING AT PORT '+process.env.PORT);
})