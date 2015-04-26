// only `.fadeOut()`s the div with the ID `#blue`.
$(document).ready(function () {
  // attching a click handeler function to the button on our page 
  $('button').click(function(){
    // targeting the `#blue` id on the page. When the button is clicked the `blue` id will fade out slowly.
    $('#blue').fadeOut('slow');
  });
});