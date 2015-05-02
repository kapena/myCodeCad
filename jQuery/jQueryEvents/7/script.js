// setting the doucment to ready
$(document).ready(function(){
  // event
  // turning `input` box into a jQuery element with `focus`
  var input = $('input[type=text]').focus(function(){
    // effect
    // accessing our input box and assigning it some css properties so when clicked upon it lights up.
    $('input').css('outline-color','FF0000');
  });
});
