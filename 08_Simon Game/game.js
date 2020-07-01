var gamePattern=[];
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];

var started=false;

var level=0;

$(document).keypress(function(){
	if(!started){
		nextSequence();
		started=true;
	}
});

function nextSequence() {
	userClickedPattern=[];
	level++;
	$("#level-title").text("Level "+level);
	var randomNumber=Math.floor(Math.random()*4);
	
	var randomChosenColor=buttonColours[randomNumber];
	
	gamePattern.push(randomChosenColor);

	animatePress(randomChosenColor);

	playSound(randomChosenColor);

	
}

$(".btn").click(function(){

	var userChosenColor= $(this).attr("id") ;
	userClickedPattern.push(userChosenColor);
	playSound(userChosenColor);
	
	animatePress(userChosenColor);
	
	checkAnswer(userClickedPattern.length-1);

});


function playSound(name){
	var audio= new Audio("sounds/"+name+".mp3");
	audio.play();
}

function animatePress(currentColor){
	$("#"+currentColor).addClass("pressed");
	$("#"+currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
	setTimeout(function(){
		$("#"+currentColor).removeClass("pressed");
	},200);
}

function checkAnswer(currentLevel){
	
	if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
		if(gamePattern.length === userClickedPattern.length){
			setTimeout(function(){
				nextSequence();
			},1000);
		}
		
	}
	
	else{
		$("#level-title").text("Game Over, Press Any Key to Start");
		$("body").addClass("game-over");
		playSound("wrong");
		setTimeout(function(){
			$("body").removeClass("game-over");
		},200);
		startOver();
		
	}
}

function startOver(){
	level=0;
	userClickedPattern=[];
	gamePattern=[];
	started=false;
}
	



