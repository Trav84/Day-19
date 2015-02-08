var GameView = Backbone.View.extend({
	el: '#game-screen',

	initialize: function(options) {

		this.$document = $(document);

		//$(window).on('keyup', this.onKeyUp);

		// var c = document.getElementById("tutorial");
		

		// var unicornChar = new Image();
  // 		unicornChar.src = "unicorn_aa.png";

  // 		var x = 0;
  // 		var y = 0;

  // 		unicornChar.onload = function() {
  //   	context.drawImage(unicornChar, x, y);
  // 		},

		//BEGIN LIBRARY CODE
		var x = 150;
		var y = 150;
		var dx = 2;
		var dy = 4;
		var WIDTH;
		var HEIGHT;
		var ctx;
		var unicornChar = new Image();
  		unicornChar.src = "unicorn_aa.png";
  		var rightDown = false;
		var leftDown = false;

  		//set rightDown or leftDown if the right or left keys are down
		function onKeyDown(evt) {
			if (evt.keyCode == 39) rightDown = true;
			else if (evt.keyCode == 37) leftDown = true;
		}

		//and unset them when the right or left key is released
		function onKeyUp(evt) {
			if (evt.keyCode == 39) rightDown = false;
			else if (evt.keyCode == 37) leftDown = false;
		}

		this.$document.keydown(onKeyDown);
		this.$document.keyup(onKeyUp);


		function init() {
			ctx = $('#tutorial')[0].getContext("2d");
			WIDTH = $("#tutorial").width();
			HEIGHT = $("#tutorial").height();
			return setInterval(draw, 10);
		}

		function circle(x,y,r) {
			ctx.beginPath();
			ctx.arc(x, y, r, 0, Math.PI*2, true);
			ctx.closePath();
			ctx.fill();
		}

		function rect(x,y,w,h) {
			ctx.beginPath();
			ctx.rect(x,y,w,h);
			ctx.closePath();
			ctx.fill();
		}

		function clear() {
			ctx.clearRect(0, 0, WIDTH, HEIGHT);
		}

		function drawImage(image,x,y) {
			ctx.drawImage(image, x, y);
		}

		//END LIBRARY CODE

		function draw() {
			clear();
			//circle(x, y, 10);
			//drawImage(unicornChar, 150, 150);

			if (rightDown) {
				x += 5;
			}
  		
  			else if (leftDown) {
  				x -= 5;
  			}

  			drawImage(unicornChar, x, y);

		 
			// if (x + dx > WIDTH || x + dx < 0)
			// 	dx = -dx;
			// if (y + dy > HEIGHT || y + dy < 0)
			// 	dy = -dy;
		 
			// x += dx;
			// y += dy;
		}

		init();





		//ctx.strokeRect(335,100,10,100);
		//ctx.strokeRect(300,200,75,75);

		// makeUnicorn = function(x, y, width, height) {
		// 	context.fillStyle = "#0000FF";
		// 	context.fillRect(x, y, width, height);
		// 	x+-1;
		// };

		// unicornCharacter = new makeUnicorn(300, 200, 50, 50);

		// update = function(key) {
		// 	var value = key.which;

	 //    	if(value == 37) { // left arrow
	 //    		unicornCharacter.x -= 5;
	 //    		} else if (value == 39) { // right arrow
	 //    			unicornCharacter.x += 5;
	 //    		} else {
	 //    			console.log('no move');
		// 		}
		// 		makeUnicorn(unicornCharacter);
		// 	};
		
		// function draw() {
	 //  	var canvas = document.getElementById('canvas');
		//   	if (canvas.getContext){
		//      var ctx = canvas.getContext('2d');

		//     ctx.beginPath();
		//     ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
		//     ctx.moveTo(110,75);
		//     ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
		//     ctx.moveTo(65,65);
		//     ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
		//     ctx.moveTo(95,65);
		//     ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
		// 	ctx.stroke();
		//   }
		// }
	},

});