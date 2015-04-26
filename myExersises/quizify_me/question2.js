/* Question 2 */

// Iterate through the properties of an `object` with a `for in loop`

// create object literal
// I have declared and object literal named myObject and it has 3 properties which are: name, age and home.
var myObject = {
  name:"Brent",
  age: 24,
  home:"North Shore"
};

// Here a for in loop accesses the properties of myObject. We do this by using the syntax of `for (var key in myObject){}`
// So lets break this down into small bits... When we declare `var key` it's just a placeholder variable name. It can be any name we want but I prefer `key` as it keeps things simple. `in` we cannot change as this is part of the `for in` loop syntax. `myObject` is the object that we want to access the properties of.  
for (var key in myObject){
  // we use the console.log function to execute our `for in loop`. Then we concatenate two strings and call myObject[key]. myObject[key] is saying look for myObject then access each of `key` of myObject and print it to the console.
  console.log("Property of myObject" + " : " + myObject[key]);
}