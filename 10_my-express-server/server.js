//npm instal express

const express= require('express');

const app=express();

app.get('/',function(req,res){
	res.get('hello world');
});

app.get('/contact',function(req,res){
	res.get('contact me on gmail');
});

app.listen(3000,function(){
	console.log("server started at 3000");
});