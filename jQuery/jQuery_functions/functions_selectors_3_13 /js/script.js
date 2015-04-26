// Create a variable called `$target` in script.js and use the `=` sign to assign it to the jQuery selector that represents `#4` in the ordered list. When you run your code, it should fade away!

$(document).ready(function(){
  // target is being assigned to the jQuery selector `:last-child` which is then finding the last child within the ordered list.

   // we then use target to call the `fadeOut` function that fades out the entire document.
  var $target = $(':last-child');
  $target.fadeOut('slow');
});