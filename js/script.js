console.log("I loaded");

$(document).ready(function() {

var images = ["images/steve_zissou.png", "images/clownfish.jpg", "images/dolphin.jpg", "images/jellyfish.jpg", "images/octopus.jpg", "images/pufferfish.jpg", "images/sea_anemone.jpg", "images/seahorse.jpg", "images/starfish.jpg", "images/whaleshark.jpg", "images/steve_zissou.png", "images/clownfish.jpg", "images/dolphin.jpg", "images/jellyfish.jpg", "images/octopus.jpg", "images/pufferfish.jpg", "images/sea_anemone.jpg", "images/seahorse.jpg", "images/starfish.jpg", "images/whaleshark.jpg"];
var divs = $("#gameboard div");

//console.log(divs);
//console.log(images);

$("div .card").flip();
var clickCount = 0;
var clickedFirst;
var clickedSecond;
var turnCounter = 0;
var scoreCounter1 = 0;
var scoreCounter2 = 0;

var shuffle = function(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

var newImages = shuffle(images);
var n = 1;

for (var i = 0; i < newImages.length; i++) {
	$("div .card:nth-child(" + n +") .back").css("background-image", "url(" + newImages[i] + ")");
	n++;
};


var whichPlayer = function() {
		var playerTurn = document.getElementById('turn');
		if (turnCounter % 2 !== 0) {
		//	setTimeout(function(){
			playerTurn.innerHTML="Turn: Player 2"} 
			else {playerTurn.innerHTML = "Turn: Player 1"}		
		//}
	}	
// var whatScore = function() {
// 		var playerTurn = document.getElementById('turn');
// 		if (turnCounter % 2 !== 0) && {
		
// 			playerTurn.innerHTML="Turn: Player 1"} 
// 			else {playerTurn.innerHTML = "Turn: Player 2"}		
// 		//}
// 	}
var whatScore = function() {
	var player1Score = document.getElementById('player1');
	var player2Score = document.getElementById('player2');
	player1Score.innerHTML = "Player 1 Score: " + scoreCounter1;
	player2Score.innerHTML = "Player 2 Score: " + scoreCounter2;
}	
var winner = function() {
	if(scoreCounter1+scoreCounter2===10) {
		if(scoreCounter1 > scoreCounter2) 
			swal({
						title: "Player 1 Wins!",
						text: "Player 1 is the winner.",
						type: "success",
						imageUrl: "css/steve_zissou.png",
						confirmButtonText: "word"
					});
		 else if (scoreCounter2 > scoreCounter1) 
			swal({
						title: "Player 2 Wins!",
						text: "Player 2 is the winner.",
						type: "success",
						imageUrl: "css/steve_zissou.png",
						confirmButtonText: "word"
					});
		
		 else swal({
						title: "Tie Game!",
						text: "Everybody wins! Especially Steve Zissou.",
						type: "success",
						imageUrl: "css/steve_zissou.png",
						confirmButtonText: "word"
					});
	}
};		


	$("div .card .front").on("click", function(){
		clickCount++;
		if(clickCount % 2 !== 0) {
		clickedFirst = $(this);	
		clickedFirstImage = $(this).siblings().css("background-image");
		//console.log(clickedFirst + " = odd"); 		
		} else { 
			if (clickCount % 2 ===0) 
				turnCounter++;
				{
				clickedSecond = $(this);
			 	clickedSecondImage = $(this).siblings().css("background-image");
				//console.log(clickedSecond); 
			};
			
				if (clickedSecondImage === clickedFirstImage) {
					//turnCounter++;
					console.log("it's a match");

					clickedFirst.parent().flip(true);
					clickedSecond.parent().flip(true);
					clickedFirst.parent().off('.flip');
					clickedSecond.parent().off('.flip'); 
					//turnCounter++;

					if (turnCounter % 2 !== 0) {
						scoreCounter1++
					} else {
						scoreCounter2++
					}
					console.log(scoreCounter2);
					console.log(scoreCounter1);
					swal({
						title: "Match!",
						text: "Nice work, you got a match!",
						type: "success",
						imageUrl: "css/steve_zissou.png",
						confirmButtonText: "word"
					});
										
				} else {
					setTimeout(function(){
						clickedFirst.parent().flip('toggle');
						clickedSecond.parent().flip('toggle');
						//turnCounter++;
					}, 1200);	
					//console.log("not a match")										
				}
				whichPlayer(); //reorder where the function is being called to ensure that player switch is still taking place after a match
				whatScore();
				console.log(turnCounter);
				winner();
			};
		});			
	//});

//how to get div next to another div in jquery		
	
//after click on image, check to see if two clicks equal each other. If they are equal, declare a match and stay flipped over. If they are not equal, flip back to covered state. 	
$('#newGame').on('click', function(e) {
	 	e.preventDefault();
	 	location.reload();
	 });

});

//use eventlistener to listen for click. When user clicks, store selection (image) in a variable. 