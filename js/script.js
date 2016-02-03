console.log("I loaded");

$(document).ready(function() {

var images = ["images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png", "images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png"];
var divs = $("#gameboard div");

console.log(divs);
console.log(images);

$("div .card").flip();

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
	console.log(n +" and "+ i); 
	console.log(newImages[i]);
	console.log($("div .card:nth-child(" + n +") .back"));
	n++;
};
console.log(newImages);

// 	$(".clas").flip({
// 		axis: "x",
// 		trigger: "click"
		
// });
		$("#gameboard div .back").on("click", function(){
		var clickedImage = $(this);
		console.log(clickedImage);
		});
	
//after click on image, check to see if two clicks equal each other. If they are equal, declare a match and stay flipped over. If they are not equal, flip back to covered state. 	

});

//use eventlistener to listen for click. When user clicks, store selection (image) in a variable. 