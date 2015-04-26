// 11 / 13 
// Inside `.ready()`'s parentheses, add your `function(){}`. Your function won't take any inputs between ()s, but between its {}s, it should call the `.click()` event handler on the `.pull-me` jQuery object.


// 12 / 13 
// Inside `.click()`'s parentheses, create a `.panel` jQuery object and call the `.slideToggle()` effect. Give it the input 'slow' for the animation speed.

$(document).ready(function(){
  // `pull-me` is css class
  // creating a `pull-me` object and attching it to a `click` jQuery click handeler function 
  $('.pull-me').click(function(){
    // `panel` is a css class 
    // here we are  creating the `panel` object and calling the method slideToggle on it!
    $('.panel').slideToggle('slow');
  });
});

