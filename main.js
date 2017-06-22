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

var main = function(){
  var colorClass = '';
  var blink;
  var toggleBlink = function(){
  if (!blink){
    // a set interval function changes the colours by interval
    blink = setInterval(function(){
      // a query selector targets class box.magenta and toggles class blink
      // 1. making 3 classes for spans
      // 2. creating class blink
      $('.box.magenta').css('color', 'red');
      $('.box.yellow').toggleClass('blink');
      $('.box.cyan').toggleClass('blink');
      // setting the interval
    }, 350);
  } else {
    // not sure whether we should put it in an if else statement
    window.clearInterval(blink);
    blink = null;
  }
};

  $('.container').on('mouseenter', function(){
    if (colorClass){
      $('.toggle-blink').toggleClass('opacity');
      toggleBlink();
    } 
  });
}

$(document).ready(main);

	}); 
