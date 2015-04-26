/* Question 6 */
// Write a `function expression` that adds two numbers together.
// This function expression must accept numbers as arguments

// function expressions work by assigning a variable with a name to a function.   
// `addFun` is the name of our function expression
// we then declare a parameter of `sum` 
// parameters are variables that are local to our `addFun` function.
// now that we have our parameter `sum` defined we can put it to use by returning a `string` that says "2 + 2 is " and concatenating it with `sum`.

// the equation will be in argument we pass to when we call `addFun` 
var addFun = function (sum){

  return "2 + 2 is " + sum;
};
// now we call our `addFun` and pass it an argument that says addFun add 2 + 2. 
console.log(addFun(2 + 2));
// > "2 + 2 is 4" 

// addFun function can also be reproduced with a function declaration like so
function addFun (sum){
  return "2 + 2 is " + sum;
}
console.log(addFun(2 + 2));

// Some explanation on function expressions and function declarations.

// Function expressions can be anonymous functions or they can contain names

// function expression with `no name`
// var express = function (){
// // do something
// };

// // function expression with a `name` called `expression`
// var express2 = function expression (){
// // do something
// };

// Referenced from MDN and put in my own words :) 

// there is a slight distinction between the `function name` and the `variable` that the function is assigned to. 
// `function name` cannot be changed but the `variable` the `function` is assigned to can be reassigned. 
// `function name` can only be used within the functions body. If you try to use the name of your function (outside) of your functions body then an error will happen. IE: 

// var nameOut = function name (){};
// prompt(name); // error


// the variable assigned to our function is limited by it's own scope, which going to include the scope from where the function is declared in. 

// Function declaration

// functions defined by function declaration can be accessed by there name in the scope that we were defined in. 

// function hello (){
//   // do something
// }
// prompt(hello());

// read up more here
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions