// 6 / 14 
// add the jQuery code necessary to make your #text div highlighted when clicked!

// 7 / 14
// change your .addClass() to a .toggleClass(). Click on your #text a bunch of times. See how it turns the highlighting on and off?

$(document).ready(function () {
  // adding the click handel and attching it to the #text div
  $('#text').click(function(){
    // using `addingClass` to create a class named highlighted then  using `this` to refferance out click function 

    // $(this).addClass('highlighted');

    // toggleClass() turns the class on and off
    $(this).toggleClass('highlighted');
  });
});

