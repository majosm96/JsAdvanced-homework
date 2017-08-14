// Utility functions
function log(arg){ console.log(arg); }
function out(arg){ document.getElementById("debug").innerHTML = arg; }
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -




// 3D JS,CSS Carousel
var Carousel = function(){
	// Var defs and init
	var me = this; // to scope

	// Configuration variables
	var carouselW = 800;
	var carouselH = 400;
	var itemW = 100;
	var itemH = 200;
	var noOfItemsToAdd = 6;

	// Working variables (DO NOT MODIFY)
	var carousel = document.getElementById("carousel");
	var itemContainer = carousel.getElementsByClassName("item-container")[0];
	var items = [];
	var deg = 0;
	var rangeX = carouselW - itemW;
	var rangeY = carouselH - itemH;
	var itemDegreeSperation = 360 / (noOfItemsToAdd-1);
	var itemCount = 0;

	// Simulate constructor from other languages
	init();
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// Constructor (not a js constructor!);
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function init(){
		//log("Carousel.init()");

		// Add items
		for (var i=0; i < noOfItemsToAdd; i++){
			var imgs = ['./images/img01.png', './images/img02.png', './images/img03.png', './images/img05.png', './images/img06.png', './images/img01.png', './images/img01.png'];
			var img = document.createElement("img");
			img.src = imgs[i];
			var item = document.createElement("div");
			item.classList.add("item");
			item.appendChild(img);
			itemContainer.appendChild(item);

			var itemObject = {
				carouselItem:item
			};

			items.push(itemObject);
		}


		// Start animation
		animate();
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	function animate(){
		log("Carousel.animate()");
		deg += 0.5;

		// Utility functions
		function degToRad(input) { return input * (Math.PI / 180); }

		for (var i=0; i < items.length; i++){

			var itemDeg = deg + (itemDegreeSperation * i);

			var sin = 0.5 + (Math.sin(degToRad(itemDeg)) * 0.5);
			var cos = 0.5 + (Math.cos(degToRad(itemDeg)) * 0.5);

			var itemObject = items[i];
			var posX = sin * rangeX;
			var posY = cos * rangeY;
			itemObject.carouselItem.style.left = posX + "px";
			itemObject.carouselItem.style.top = posY + "px";

			var zIndex = 1 + Math.round(cos * 100);
			itemObject.carouselItem.style.zIndex = zIndex;

			var scale = 0.5 + (cos * 0.5);
			itemObject.carouselItem.style.transform = "scale(" + scale + ")";

			var opacity = 0.3 + (cos * 0.7);
			itemObject.carouselItem.style.opacity = opacity;
		}

		requestAnimationFrame(animate);
	}
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
};
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -





// Init page load
function pageLoadInit(){
	var myCarousel = new Carousel();
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
