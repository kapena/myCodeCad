// 10 / 13 
// put document into a jQuery object and call .ready().

// 11 / 13 
// Make it so your 'div' fades to 1 (100%) opacity when your mouse enters the 'div'. Make the animation speed 'fast'. (Make sure to give fadeTo() its inputs in order—speed, then opacity.)

// 12 / 13 
// Between the `});` that ends your `mouseenter()` and the `});` that ends your `$(document).ready()`, add a `mouseleave()` that uses fadeTo to return your div's opacity to `0.5.` Like the previous fadeTo, it should have 'fast' as its first input.


$(document).ready(function(){
  // Inside mouseenter(). fadeTo() takes two arguments, or inputs, between its parentheses, separated by a comma: the speed at which to fade, and the opacity (or transparency) to fade to. 
  $('div').mouseenter(function(){
    $('div').fadeTo('fast',1);

    $('div').mouseleave(function(){
      $('div').fadeTo('fast',0.25);
    });
  });
});
