// Instead of using fadeOut() on all 'div's, we're just using it on this div, where `this` refers to the div you're clicking on. 
$(document).ready(function() {
  // attching a click handeler function to 'div'
  $('div').click(function(){
    // `this` is reffers to 'div' which then has a fadeOut function of slow that is attatched to our 'div'
    $(this).fadeOut('slow');
  });
});