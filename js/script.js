console.log("I loaded");

$(document).ready(function() {

var images = ["images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png", "images/hippo.png", "images/taco.png", "images/whitecat.png", "images/jam.png", "images/broccoli.png", "images/plum.png", "images/cat.png", "images/jellyfish.png", "images/sloth.png", "images/penguin.png"];
var divs = $("#gameboard div");

console.log(divs);
console.log(images);

function shuffle(array) {
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
var counter = 1;

for (var i = 0; i < newImages.length; i++) {
	$(".space:nth-child(" + counter +")").css("background-image", "url(" + newImages[i] + ")"); 
	counter++;
}
console.log(newImages);

function clickCard() {
	$(".space div").click(function() {
		var clickedImage = [];
		clickedImage.push($(this));
	})
	console.log(clickedImage);
};

});

//use eventlistener to listen for click. When user clicks, store selection (image) in a variable. 