
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 

// 2 / 13
// We'll want to target the div element here, so on line 2 inside the $( ), add "div".

// $document.ready(function(){
//   ('div').fadeOut(1000);
// });

// 3 / 13
// Put a selector (remember CSS selectors?) inside $() so instead it points to the ID #green.

$(document).ready(function(){
  // fades out the green square
  $('#green').fadeOut(1000);
});