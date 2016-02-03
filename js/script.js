console.log("I loaded");

$(document).ready(function() {

var images = ["images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png", "images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png"];
var divs = $("#gameboard div");

//console.log(divs);
//console.log(images);

$("div .card").flip();
var clickCount = 0;
var clickedFirst;
var clickedSecond;

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
	// console.log(n +" and "+ i); 
	// console.log(newImages[i]);
	// console.log($("div .card:nth-child(" + n +") .back"));
	n++;
};
//console.log(newImages);

// 	$(".clas").flip({
// 		axis: "x",
// 		trigger: "click"
		
// });
	$("div .card .front").on("click", function(){
		clickCount++;
		if(clickCount % 2 !== 0) {
		clickedFirst = $(this);	
		clickedFirstImage = $(this).siblings().css("background-image");
		console.log(clickedFirst + " = odd"); 		
		} else { 
			if (clickCount % 2 ===0) {
				clickedSecond = $(this);
			 	clickedSecondImage = $(this).siblings().css("background-image");
				console.log(clickedSecond); };
			
				if (clickedSecondImage === clickedFirstImage) {
					console.log("it's a match");
					clickedFirst.parent().flip(true);
					clickedSecond.parent().flip(true);
					clickedFirst.parent().off('.flip');
					clickedSecond.parent().off('.flip');
					//alert("It's a match");
					//$('div .card').flip('toggle');
					//leave flipped
					console.log(clickCount);
				} else {
					setTimeout(function(){
						clickedFirst.parent().flip('toggle');
						clickedSecond.parent().flip('toggle');
					}, 1200);	
					console.log("not a match")
					//console.log(clickCount);
					// flip clickedFirst and clickedSecond back 
					//$("div .card").flip('toggle');
					//(clickedSecond).flip(true);
										
				}
				
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