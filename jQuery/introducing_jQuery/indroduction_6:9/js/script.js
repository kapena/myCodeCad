
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 

// add the missing pieces on line 2 so that your jQuery code calls fadeOut on the div with the ID #notready
$(document).ready(function(){
  // fades out the green square
  $('#notready').fadeOut(1000);
});