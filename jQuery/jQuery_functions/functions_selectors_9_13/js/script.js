// Let's use a compound selector to apply a fadeTo() to both the .pink and .red selectors.

$(document).ready(function(){
  // selecting `pink` and `red` css classes and fadding them out slowly. 
  $('.pink ,.red').fadeTo('slow',0);
});