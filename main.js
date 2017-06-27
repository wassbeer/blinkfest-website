$(document).ready(function(){ 

var x = 4; 
var y = 3;


 $("a").hover(
	function() {

	$(this).css("text-decoration", "underline");
	}, 
	function(){
	$(this).css("text-decoration", "none");
	});

  $(".backgroundother").mouseenter(
	function() {
	x = x + 1;
  	if(x%5===0){
	$(this).css("background", "url('images/noninvert.png')");
	// }
}else{$(this).css("background", "url('images/invert.png')")}}
	);

  $(".backgroundone").mouseenter(
	function() {
	y = y + 1;
  	console.log(y);
  	if(y%5===0){
	$(this).css("background", "url('images/invert.png')");
}else{$(this).css("background", "url('images/noninvert.png')")}}
	);

$(".nav li").hover(
	function() {
	$(this).css("text-decoration", "underline");
	}, 
	function(){
	$(this).css("text-decoration", "none");
	});


 $("span a").hover(
	function() {
	$(this).css("color", "white");
	}, 
	function(){

	$(this).css("color", "#8000ff");
	});

	}); 


