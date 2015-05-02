// Use the .dblclick() handler to make our 'div' .fadeOut()s 'fast'. Make sure to double-click on your div to see the effect!
$(document).ready(function(){
  // dobble click event
  $('div').dblclick(function(){
    // fadeout effect happens when we click on our div
    $('div').fadeOut('fast');
  });
});
