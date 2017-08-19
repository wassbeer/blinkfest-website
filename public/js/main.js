$(document).ready(function(){ 


var x = 4; 
var y = 3;

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


	$("#stagetext1").hide();
	$("#stagetext2").hide();
	$("#stagetext3").hide();
	$("#stageP1").hide();
	$("#stageP2").hide();
	$("#stageP3").hide();


	$("#stageimg1").hover(
		function(){
			$("#stagetext1").fadeIn("slow");

			},
		function(){
			$("#stagetext1").fadeOut("slow");

	});




	$("#stageimg2").hover(
		function(){
			$("#stagetext2").fadeIn("slow");

			},
		function(){
			$("#stagetext2").fadeOut("slow");

	});


	$("#stageimg3").hover(
		function(){
			$("#stagetext3").fadeIn("slow");

			},
		function(){
			$("#stagetext3").fadeOut("slow");

	});
	
	$("#stageimg1").hover(
		function(){
			$("#stageP1").fadeIn("slow");

			},
		function(){
			$("#stageP1").fadeOut("slow");

	});

	$("#stageimg2").hover(
		function(){
			$("#stageP2").fadeIn("slow");

			},
		function(){
			$("#stageP2").fadeOut("slow");

	});

	$("#stageimg3").hover(
		function(){
			$("#stageP3").fadeIn("slow");

			},
		function(){
			$("#stageP3").fadeOut("slow");

	});

	
	
});
