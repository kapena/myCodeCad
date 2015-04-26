
// A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute. 

// Instructions 6 / 13
// Add a $(document).ready(); call in script.js. Remember, the document is special: it's not an HTML element like <p> or <div>, so it doesn't go in quotes.

// 6 / 13 
// $(document).ready();

// Instructions 7 / 13
// Place a function(){} inside your .ready(). You don't need to put anything inside your function's curly braces ({}) yet—we'll get to that in the next exercise.

// $(document).ready(function(){});

// Instructions 8 / 13
// make 'div' into a jQuery object and call the .slideDown() action on it. Inside slideDown()'s parentheses, type 'slow' so jQuery knows how quickly to slide your div down.

$(document).ready(function(){
  $('div').slideDown('slow');
});