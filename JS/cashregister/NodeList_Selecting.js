// Perfered Method: Array Snytax (faster)

// select elements that have a class attribute of 'hot'
var elements = document.getElementsByClassName('hot');

// use the length property to check how many elements were found
if (elements.length >= 1){
  // get the first element from the nodelist
  var firstElement = elements[1];
}

// The Item method is almost the same as Array but instead of calling our elements we just call item(0); 
// 0 is used as our parameter to find the item listed at 0 within the nodelist

var elements = document.getElementsByClassName("hot");
if (elements.length >= 1){
  var firstElement = item(0);
}

// Node list looping
