// pass in a .click() event handler on your 'div'. Inside that, call .effect() on your div and give it the input 'explode'

$(document).ready(function() {
  // click function
  $('div').click(function(){
    // bounce effect
    $('div').effect('bounce',{times:3},500);
  });
});
