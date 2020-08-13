const express=require('express');
const https=require("https");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
	res.sendfile(__dirname+"/index.html");
});

app.post('/',function(req,res){
	var query=req.body.cityName;
	var apiKey="e1e8c2eceb43f3f58684d4dff2824cf7";
	var unit="metric";	
	const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey+"&units="+unit;
	
	https.get(url,function(response){
		
		response.on("data", function(data) {
			const weatherData=JSON.parse(data);
			const temp=weatherData.main.temp;
			const description=weatherData.weather[0].description;
			const icon=weatherData.weather[0].icon;
			const imgUrl='http://openweathermap.org/img/wn/'+icon+'@2x.png';

			res.write("<h1>Temperature in "+query+" is: "+temp+" deg celcius </h1>");
			res.write("<p>the weather is "+description+"</p>");
			res.write("<img src="+imgUrl+">");
			res.send();
		});
	});
});	
	



app.listen(3000,function(){
	console.log("server started");
});