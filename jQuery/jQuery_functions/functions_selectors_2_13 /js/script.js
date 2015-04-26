// Here we include a new jQuery action, .click(), that we'll learn more about soon!

// See how we pass functions to both .ready() and .click() as inputs? When you're ready, click Save & Submit Code, then click on the orange div in the Result tab to see the fadeOut() effect.

$(document).ready(function(){
  $('div').click(function(){
    $('div').fadeOut('slow');
  });
});

