// 1 Create an object called friends. Feel free to use either object literal notation or the object constructor. Check the Hint if you need a syntax reminder.

// 2 - 3 Add a few empty objects to your friends object. Make sure you add a friend named 'bill' and a friend named 'steve'. Use your friends' names as the keys for the empty objects.

var friends = {
  bill: {},
  steve: {}
};

// 4 Give each of your friends a firstName, lastName, and number. The value for each of these should be a string (check the Hint if you need help). Make sure bill's first name is "Bill" and steve's first name is "Steve" (again, note the capitalization).

// 5 Add an address property to each of your friends and set that property equal to an array value.

var friends = {};
    friends.bill = {
    firstName:"Bill",
    lastName: "Gates",
    number: "333-333",
    address: ["One Microsoft Way"]
  };
    freinds.steve = {
    firstName: "Steve",
    lastName: "Jobs",
    number: "444-444",
    address: ["1 infinite loop"]
  };

// 6
// Create a function list that takes a single parameter.
// In the body of the function, write a for/in loop.
// In the loop, use console.log to print out the key. (For example, if you only have bill and steve as entries, list should just print out "bill" and "steve".)

// Creating a function named `list` with a param of our object `freinds`
// `for property in friends` describes the iteration through all the keys of our object. 
var list = function(friends){
  // `key` is our placeholder. We then assign the `in` as the keyword to access our object `friends` 
  for (var key in friends){
    // `friends` is the object we are accessing
    // `key` is going search through the objects and give us there exact firstName key
    // log `key`
    console.log(key);
  }
};
  // Define a function named `search` that takes a single param called, `name`. If the param passed to the function matches any of the first names in friends, it should log that friend's contact information to the console and return it.

  // First, create a function named search.

  // Inside the function, we use a `for in loop` to loop over the keys of the friends object. 

  // Inside the for in loop, use an if/else statement to check whether the friends param passed to our `search` function is `===` any of the `first names` in `friends`.

  // NOTE `friends` is the name we gave the param in our `list` function
  // NOTE `name` is the name of our param in our `search` function
  // NOTE `name` is ONLY used when we compare within the if statement
  // We use the same for in loop as we did before 

var search = function(name){
  for (var key in friends){
  // friends[key] is accessing our friends object and then searching for the`firstName` key which is within our nested `friends` object
  // we then compare `===` with `name` 
    if (friends[key].firstName === name){
        console.log(friends[key]);
        return freinds[key];
    }
  }
};
// Calling our functions 
list(friends);
search("steve");

