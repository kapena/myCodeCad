// 3 / 14 
// Go ahead and add a <p> tag .after() the <div> with the ID #one. You can place any text you like in your <p> tag.

// 4 / 14 
/* 
1. move your <p> tag after the <div> with id #one

2. create a new jQuery selector that targets the <div> with the id #two

3. Using after again, select the <p> tag you created and move it after the <div> with id #two
*/

$(document).ready(function () {
  //  inserting a paragraph of text after the <div> with the id of `#one`
  $('#one').after('<p>Dusty is a good dog!</p>');
  $('#one').after($('p')); // Moving our paragraph under <div> `one` 
  $('#two').after($('p')); // Moving our paragraph under <div> `two` 
});
