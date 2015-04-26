// Make all four divs of class `'.vanish'` `fadeOut()` 'slowly when the button is .click()ed.

$(document).ready(function () {
  // attching a click function to the button
  $('button').click(function(){
    // when button is clicked all classes named 'vanish' will fadeOut slowly
    $('.vanish').fadeOut('slow');
  });
});