// Use the .dblclick() handler to make our 'div' .fadeOut()s 'fast'. Make sure to double-click on your div to see the effect!
$(document).ready(function(){

  $('div').hover(function(){
    // add class therefor the hover is toggled on
    $(this).addClass('active');
  },

  function (){
    // removeing class therefor the hover effect is toggled off
    $(this).removeClass('active');
  }
);

});
