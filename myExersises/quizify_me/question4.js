
/*Question 4*/

/*Part 1*/
//Create an empty `object literal` and give it three `properties`, use `dot notation` to assign the properties then print one of the `properties` to the console.

// Here I create an empty object literal by just giving our variable a name of `empty` then I assign our `var empty` to enclosed curly brackets like so `var empty = {};`

// So now that we have our empty object literal we can set our object properties. We do this by calling out object by it's name then placing what we call `dot notation` directly after the our objects name like so `empty.name` we then give our property a unique `name` is called a `key`. Lastly we assign `name` with a string value of "Empty". 

/*Part 2*/
// Assign a new property to our object named `empty` that has a method. 
// This method needs to do 3 things. 

// 1: Print to the console "this is a method". 

// 2: Access the second property of `empty` and log it to console. 

// 3: Print a string that says "Do I own a " then finally access the third property of `empty` and concatenate all the strings we logged earlier together with our third property. 

// The result should print to the console like this: "Do I own a computer? true"

var empty = {};
  // property's of `empty`
empty.name = "Empty is my name";
empty.computer = " Computer?";
empty.own = " Yes I do";
empty.method = true;
  // If we want to get our first property in empty printed to the console all we need to do is `console.log(empty.name);`
console.log(empty.name);


  // we access our object by calling it by its name then we give our method a unqiue name of `accessPropertys` and we then assign that to a function
empty.accessPropertys = function (){
  // to access our object property of `empty.method` we use the keyword `this` and then we use dot notation to call our property name of `method`.
  console.log("Am I a method? " + this.method);
  console.log(this.computer);
  console.log("Do I own a" + this.computer + this.own);
};

empty.accessPropertys();
// here we invoke/call our `empty.accessPropertys()` method