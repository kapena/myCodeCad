// Give `.ready()` a `function(){}` as an input. Inside your function's `{}`s, call `fadeIn('slow')` on the (currently invisible) div to bring it into view. That's right, there's a fade in, as well!

$(document).ready(function(){
  $('button').click(function(){
     // targeting the `divs` on the page named 'vanish' and asking it to fade in away slowly when the button is clicked.
  $('.vanish').fadeIn('slow');
  });
});
