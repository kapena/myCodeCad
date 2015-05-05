// pass in a .click() event handler on your 'div'. Inside that, call .effect() on your div and give it the input 'explode'

$(document).ready(function() {
  // click event
  $('div').click(function(){
    // effect of explode happens when we click on div
   $('div').effect('explode');
  });
});
