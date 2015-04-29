// 11 / 14 
/*1.create a `.click()` event handler for our `#button` element

2. Make sure you pass it a `function(){}`

3. Inside your `function(){}` create the variable `toAdd` and set it equal to the contents of the input field.*/

// 12 / 14
// Go ahead and `.append()` a `<div>` with `class="item"` to the `.list` div of your HTML document, then MAKE SURE to click your button to add an item—the exercise will wait for you to do so!

// We'll want the contents of our `div` to be the contents of our input field, which we saved in the variable `toAdd`

// 13 / 14 
// Complete your program by adding the .on() event handler as described above. It should go inside your $(document).ready(), but after and outside your `$('#button').click()`.

$(document).ready(function(){
  $('#button').click (function(){
    //  toAdd which is set to the contents of the imput field
    var toAdd = $('input[name=checkListItem]').val(); 
      // appending a div class named `item` to our class `list` we then use `item` div to contain the contents of the input field which is stored in the toAdd variable
  $('.list').append('<div class="item">' + toAdd + '</div>');
  });
  // `on()` is an event handeler called which contains a click method on the `.item` class
  $(document).on('click','.item',function(){
    // here we are using `this` to refferance our `on` event handeler which then removes the item that is clicked upon 
    $(this).remove();
    });
  });