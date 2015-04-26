
// sumThing version 1

/*Write a function that takes any number of arguments in the function call and adds each of arguments together*/

// Declare a function named `sumThing`
function sumThing () {
  // Declare a varaible named `sum` and assign `sum` to `0`
  var sum = 0;
  // Now we declare a `for loop` 
  // intialize: `0` is assigned to `var i;
  // condition: `arguments.length` is greater than `i`
  // increment: `alter `i` by incrementing up each time the loop runs with `i++` this eventually causes the condition be false which then ends the loop.`
  for (var i = 0; i < agruments.length; i++){
  // `+=` is the addition assignment operator which is saying sum = sum + arguments [i]
  // `sum +=` is adding up each of the `arguments`
  // `[i]` is the `counter`
  sum += sum = arguments [i];
  }
  return sum;
}

// calling sumThing and passing in are argumetns which in turn are being added up IE : 2 + 5 + 6 
console.log(sumThing(2,5,6));

// sumThing version 2
/*Write a function that takes any number of arguments in the function call and adds each of arguments together*/

// declare a function named sumThing2
function sumThing2 (){
  // varaible `i` and `sum` are assigned to the value of 0; 
  var i, sum = 0;
  // var `numberOfParams` is assigned to `arguments.length`
  var numberOfParams = arguments.length;

  for (i = 0; numberOfParams; i++){
  // `+=` is the addition assignment operator
  // `sum +=` is adding up `arguments` `[i]` is the `counter`
    sum += sum = arguments [i];
  }
  return sum;
}
// calling sumThing2 and passing in are arguments which are the numbers that are being added together which will result in a final sum
console.log(sumThing2(2,8,5));