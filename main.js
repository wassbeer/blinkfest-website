$(document).ready(function(){ 

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

 $("span").hover(
// function 1 of 2 is declared for when mouse enters
	function() {
	// the color property of .nav li will turn red so its text will
	//$(this).fadeOut(100);
	$(this).css("color", "white");
	// a comma indicated the border between the first and the second function
	}, 
	// a second function is declared
	function(){
	// changing the color back to black when mouse leaves
	// $(this).fadeIn(5000);
	$(this).css("color", "#8000ff");
	});



//  $("span").mouseenter(
// // function 1 of 2 is declared for when mouse enters
// 	function() {
// 	// the color property of .nav li will turn red so its text will
// 	//$(this).fadeOut(100);
// 	$(this).css("color", "white");
// 	// a comma indicated the border between the first and the second function
// 	});

	}); 
