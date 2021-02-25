
$( '.cycle-slideshow' ).cycle();

$('.cycle-slideshow').on('cycle-initialized', function(event, opts){
  $('.cycle-slideshow').cycle('pause');
});

$('.cycle-slideshow').cycle('pause');
$('.memberFlex').hover(function () {
    //mouse enter - Resume the slideshow
    $('.cycle-slideshow').cycle('resume');
},
function () {
    //mouse leave - Pause the slideshow
    $('.cycle-slideshow').cycle('pause');
});
