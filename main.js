$(document).ready(function(){ 

var x = 4; 
var y = 3;


 $("a").hover(
// function 1 of 2 is declared for when mouse enters
	function() {
	// the color property of .nav li will turn red so its text will
	//$(this).fadeOut(100);
	$(this).css("text-decoration", "underline");
	// a comma indicated the border between the first and the second function
	}, 
	// a second function is declared
	function(){
	// changing the color back to black when mouse leaves
	// $(this).fadeIn(5000);
	$(this).css("text-decoration", "none");
	});

  $(".backgroundother").mouseenter(
	function() {
	x = x + 1;
  	// console.log(x);
  	if(x%5===0){
	$(this).css("background", "url('images/noninvert.png')");
	// }
}else{$(this).css("background", "url('images/invert.png')")}}
	);

  $(".backgroundone").mouseenter(
// function 1 of 2 is declared for when mouse enters
	function() {
	y = y + 1;
  	console.log(y);
  	if(y%5===0){
	$(this).css("background", "url('images/invert.png')");
	// }
}else{$(this).css("background", "url('images/noninvert.png')")}}
	);



	}); 

// (function(){
 
//   $("#cart").on("click", function() {
//     $(".shopping-cart").fadeToggle( "fast");
//   });
  
// })();

// var sourceSwap = function () {
//     var $this = $(this);
//     var newSource = $this.data('alt-src');
//     $this.data('alt-src', $this.attr('src'));
//     $this.attr('src', newSource);
// }

// $(function() {
//     $('img[data-alt-src]').each(function() { 
//         new Image().src = $(this).data('alt-src'); 
//     }).hover(sourceSwap, sourceSwap); 
// });

