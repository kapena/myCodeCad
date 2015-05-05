  // setting the document to ready
  $(document).ready(function(){
    // our keydown function takes `key` as a single imput`
    $(document).keydown(function(key){
      // switch
      switch(parseInt(key.which,10)) {
        // left key pressed
        case 37:
          $('img').animate({left:'-=10px'},'fast');
          break;
        // up key pressed
        case 38:
          $('img').animate({top:'-=10px'},'fast');
          break;
        // right key pressed
        case 39:
          $('img').animate({left:'+=10px'},'fast');
          break;
        // down key pressed
        case 40:
          $('img').animate({top:'+=10px'},'fast');
          break;
      }
    });
  });
