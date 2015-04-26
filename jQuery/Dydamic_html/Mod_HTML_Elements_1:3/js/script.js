// 1 / 14 
// Create a variable, $h1, and set it equal to a jQuery object containing an <h1> tag with the text "Hello". The tag should be a stringC

// 2 / 14 
// go ahead and `.append()` a paragraph to the body of your HTML document. Your paragraph should contain the text: "I'm a paragraph!"

// var $h1 = $('<h1>Hello</h1>');
$(document).ready(function(){
  // appending a paragraph to the body
  $('body').append('<p>I\'m a paragraph!</p>');
});