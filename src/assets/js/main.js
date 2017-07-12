$( ".cross" ).hide();
$( ".menu" ).hide();
$( ".hamburger" ).click(function() {
$( ".menu" ).fadeToggle( "slow", function() {
$( ".hamburger" ).hide();
$( ".cross" ).show();
});
});

$( ".cross" ).click(function() {
$( ".menu" ).fadeToggle( "slow", function() {
$( ".cross" ).hide();
$( ".hamburger" ).show();
});
});

$(window).scroll(function(e) {
    const cursorY = $(window).scrollTop();
    console.log(cursorY);
    if (cursorY > 70) {
      $('.fixed').css("background","#6b6a6a");
      $('.logo').show();
    } else {
      $('.fixed').css("background","transparent");
      $('.logo').hide();
    }
  });

$(document).ready(function(){
      $('.parallax').parallax();
      $('section').scrollSpy();
    });
