const express= require("express");
const bodyParser=require('body-parser');

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
	res.sendfile(__dirname + '/index.html');
});

app.get('/bmiCalculator',function(req,res){
	res.sendfile(__dirname + '/bmiCalculator.html')
})

app.post('/', function(req,res){
	
	var num1=Number(req.body.n1);
	
	var num2=Number(req.body.n2);

	var result=num1 + num2; 

	res.send("The result is: " + result);
});

app.post('/bmiCalculator',function(req,res){
	var weight=parseFloat(req.body.weight);
	var height=parseFloat(req.body.height);

	var BMI=weight/(height*height);
	res.send("the calculated BMI is: "+ BMI);
})

app.listen(3000,function(){
	console.log("server started at port 3000");
})