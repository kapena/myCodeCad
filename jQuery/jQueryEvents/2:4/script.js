$(document).ready(function(){
  // click event on the div so when clicked apon the planet dissapears
  $('div').click(function(){
    // finding our div and then applying an effect of fade out to it
    $('div').fadeOut('fast');
  });
  // new event
  $('div').hover(function(){
    // adding a class of red to our div
    $('div').addClass('red');
  });
});
