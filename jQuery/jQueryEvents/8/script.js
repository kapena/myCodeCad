// setting the doucment to ready
$(document).ready(function(){
  // calling the `.keydown()` event on `$(document)`
  $(document).keydown(function(){
    // animateing the div once i press any keydown
    $('div').animate({left:'+=10px'},500);
  });
});
