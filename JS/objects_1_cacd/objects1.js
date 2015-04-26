// 6/33 
// Create an object named bob that has no information inside the brackets

var bob = {};


// 7/33
// Create an object called me that describes your age and which country you live in?
var me = {
  age: 24,
  country:"United States"
};

// 8/33
// create two objects with two properties each 
// then access there values with dot notation

var brent = {
  myName: "Brent Matthew White",
  age:24
};
 var futureGf = {
  goodLooking: true,
  typeOfHair: "brunette"
};

// accessing brent values
var name = brent.myName;
var age = brent.age;

//accessing futureGf values
var looks = futureGf.goodLooking;
var hair = futureGf.typeOfHair;

// 9/33
var dog = {
  species: "greyhoud",
  weight:60,
  age:4
};
// Use bracket notation to save the dog's weight and age into variables.

var species = dog["species"];
var weight = dog["weight"];
var age = dog["age"];

// If will I use the console.log function I will get a result in the console ie: 
// console.log(dog["species"]);

// 10/33 
// surfboard1 object created in literal notation
var surfboard1 = {
  shaper:"Al Merick",
  model:"Rookie",
  ageOfBoard:4
};

// Inspect the surfboard1 object carefully and note the use of object literal notation.

// Use constructor notation to create surfboard2, which should have the same properties and values as surfboard1
var surfboard2 = new Object();
surfboard2.name = "forgetmenot";
surfboard2.shaper = "Jason Stevenson";
surfboard2.ageOfBoard = "4 months";

// 11/33 
// Use literal notation to finish the snoopy object. Remember literal notation is the one where we fill in { } with separate properties and values with colons. Each property is separated by a comma.

// snoopy should have two properties, a species of "beagle" and age of 10.

// Then make buddy, a 5 year-old golden retriever, using constructor notation. This notation involves using the key word new to create an empty object. Then we fill it in using dot notation.
var snoopy = {
  species: "beagle",
  age:10
};

var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;

// 12/33 More practice :)  
// *Instructions*
// Create an object named 'bicycle' that has 3 properties:
// a speed of 0
// a gear of 1
// a frame_material of "carbon fiber"

var bicycle = {
  speed: 0,
  gear:1,
  frame_material: "carbon fiber"
};

// 13 / 33 
// Function review

// Define the function multiply. It should take two parameters, x and y, and return the product.

var multiply = function (x,y){
  return x * y;
};
multiply();

// 14 / 33
// Methdos
// Create an object constructor named bob and give it properties of name and age.
// Try it yourself! Use the method setAge to set bob's age to 20.
var bob = new Object();
bob.name = "Bob White";
bob.age = 30;

bob.setAge = function (newAge){
  bob.age = newAge;
};
// setting bobs age to 55
setAge(55);

// 15 / 33 
// Remember when calling methods we need to first refferance the object name ie `bob.setAge()`
var bob = new Object();
bob.age = 17;
// setAge is our first method
bob.setAge = function (newAge){
  bob.age = newAge;
};
bob.setAge();
// getYearOfBirth is our second method
bob.getYearOfBirth = function (){
  // returning 2014 and then subtrackting it by 17 which is bobs age
  return 2014 - bob.age;
};
// Calling our getYearOfBirth
bob.getYearOfBirth();


// 16 / 33
// This keyword

// Here we define our method using `this`, before we even introduce bob
// `this` is a placeholder for what ever object wants to call it

// Method
var setAge = function (newAge){
   // `this` is using our age property as a placeholder and assigning it to newAge 
  this.age = newAge;
};

// Bob Object
var bob = new Object();
bob.age = 30;
// asking bob.setAge go look for the setAge method
bob.setAge = setAge;

// Calling method on bob object 
// Now we need to give bob his age by calling our method! We achieve this by calling bob then adding a dot to associate bob with setAge method. We then pass in the argument of 50 as our bobs age.
bob.setAge(50);

// 17 / 33 
// "This" works for everyone!

// Practice makes perfect so I will start from the begging!
// setAge method
var setAge = function (newAge){
  this.age = newAge;
};

// bob object constructor
var bob = new Object();
// setting bob.age property to have a value of 30
bob.age = 30;
// asking bob.setAge go look for the setAge method
bob.setAge = setAge;
// calling our method and passing the argument of 50 as bobs age
bob.setAge(50);

// Next step
// Make Susan who should initially have an age of 25 and a `susan.setAge method` also equal to setAge.
// Then use susan.setAge(35); to set Susan's age to 35.

// Susan Method
var setAge = function (newAge){
// using this as a placeholder for age property then assigning to newAge
  this.age = newAge;
};

// Susan Object 
var susan = new Object();
susan.age = 25;
susan.setAge = setAge;

// calling Susan method and setting her age to 35
susan.setAge(35);


// 17 / 33 
// Make your own method 

// Here we have defined an object `rectangle`. It has a two properties, `height` and `width`, which represents the height and width of the shape.

var rectangle = new Object();
rectangle.height = 3;
rectangle.width = 4;

// We have written a `setHeight` method which will update `rectangle` `height` to the given parameter. This is very similar to setAge from our person example.

rectangle.setHeight = function (newHeight){
  this.height = newHeight;
};

// help out by writing a method for width
rectangle.setWidth = function (newWidth){
  this.width = newWidth;
};

// call the methods and pass our width and height as arguments.
// change width to 8
// change height to 5
rectangle.setWidth(8);
rectangle.setHeight(5);

// 19 / 33 
// More kinds of methods
// sqaure object represents the length of the squares side
var square = new Object();
square.sideLength = 6;
// calcPerimeter method computes the perimeter of the square
// we make use of the keyword return here 
square.calcPerimeter = function (){
  return this.sideLength * 4;
 };
// define a method called calcArea which then returns the area of sqaure in the terms of sideLength

// in calcArea we are returning this.sideLength back apon it self to get the calculation of the area that square sits within
sqaure.calcArea = function (){
  return this.sideLength * this.sideLength;
};

var p = square.calcPerimeter();
var a = square.calcArea();

// 20 / 33
// Object constructors

var bob = new Object();
bob.name = "Bob Smith";
//add bobs age here and set it to 20 
bob.age = 20;

// Custom constructors

/*To see how this works, look at our Person constructor in lines 1–4. This constructor is used to make Person objects. Notice it uses the keyword this to define the name and age properties and set them equal to the parameters given.

Now we can use this constructor to make our good friends bob and susan in only one line each! Look at lines 7–8: once we have the constructor, it's way easier to make people because we can include their name and age as arguments to their respective constructors.*/

function Person (name,age){
  this.name = name;
  this.age = age;
}

var bob = new Person ("Bob Smith", 25);
var susan = new Person ("Susan Jordan", 30);

// Make a new Person called george, whose full name is "George Washington" and age is 275.

var george = new Person ("George Washington" , 275);

// 22 / 33  
// Try it out! 

// Cat constructor
function Cat (age,color){
  this.age = age;
  this.color = color;
}

// Dog constructor
function Dog (name,breed){
  this.name = name;
  this.breed = breed;
}

// 23 / 33 
// More options

/*Create a new object called sally using the Person constructor. Her name is "Sally Bowles" and she is 39. Create another object called holden. His name is "Holden Caulfield" and he is 16.

Edit the sentence printed out such that it includes the age of sally and holden respectively.*/

// constructor 
// we list name and age as our parameters and refferance them with the keyword `this`
// we lastly are assigning `this.species` as "Homo Sapiens" which means that any person created will have "Homo Sapiens" attched as there species
function Person (name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

// object 
// here we are assinging each Person there name and age
var sally =  new Person();
sally.name = "Sally Bowles";
sally.age = 39;
var holden = new Person();
holden.name = "Holden Caulfield";
holden.age = 14;

// lastly we are logging a few strings while also giving the persons speieces along with there name and age.
console.log("Sally's species is " + sally.species + " and her full name is " + sally.name + " and she is " + sally.age + " years old");

console.log("Holden's species is " + holden.species + " and his fullname is " + holden.name + " and he is " + holden.age + " years old");

// Constructors with Methods
// 24 / 33

/*Here we have a Rectangle constructor, which sets the height and width properties equal to the arguments, just like our Person did with name and age.

Notice we have added a calcArea method. This calculates the area of the rectangle in terms of its height and width.
*/

// Instructions
/* Define a new method named calcPerimeter, which calculates and returns the perimeter for a Rectangle in terms of height and width.*/

// constuctor
function Rectangle (height, width){
  this.height = height;
  this.width = width;
  // method
  this.calcArea = function (){
    return this.height * this.width;
  };

// put perimeter method here
// a reckangles perimeter is 4 sides added together ie; 2 * 2 = 4
this.calcPerimeter = function (){
  return 2 * this.height + 2 * this.width;
  };
}
// object constructor `rex` which calls `calcArea` method
var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
/*You can also see a new object was created called `rex` which makes use of the constructor above. See how `rex` calls the `calcArea` method in and saves the result in a `variable, area`.*/

// 25 / 33
//Constuctors in review

// Constructor
function Rabbit (adjective){
  this.adjective = adjective;
  // Method
  this.describeMySelf = function (){
    // printing to the console each rabbit adjective
    console.log("I am a " + this.adjective + "Rabbit");
    };
  }
  // Objects
  var rabbit1 = new Rabbit();
  rabbit1.adjective = "fluffy";
  var rabbit2 = new Rabbit();
  rabbit2.adjective = "happy";
  var rabbit3 = new Rabbit();
  rabbit3.adjective = "sleepy";

// calling functions
  rabbit1.describeMySelf();
  rabbit2.describeMySelf();
  rabbit3.describeMySelf();

/*Create a new object rabbit1 with the adjective "fluffy", a new object rabbit2 with the adjective "happy", and a new object rabbit3 with the adjective "sleepy".

Use the method describeMyself to print out in the console a sentence about each object you just created!*/

// 26 / 33
// Person `Constructor`
function Person (name,age){
  this.name = name;
  this.age = age;
}
// declaring a variable named `family` then assigning family to an `Array` with the `new` keyword 
// Our `new` `Array` is then attahced to out `Person` constructor by refferanceing it with `new Person` then assgining properties inside (..)
var family = new Array();
family[0] = new Person("Alice",40);
family[1] = new Person("Bob",42);
family[2] = new Person("Michaell",8);
family[3] = new Person("Timmy",6);

// 27 / 33 
// Write a person constructor called Person that has two properties
// Create an empty array called family
// There will be four objects in the array. 
// Using your person constructor, create the four objects and put them in the array. 

function Person (name,age){
  this.name = name;
  this.age = age;
}

// declaring family `array`
var family = new Array ();
// assinging the objects and there properties to `family`
family[0] = new Person("alice",40);
family[1] = new Person ("bob",42);
family[2] = new Person ("michell",8);
family[3] = new Person  ("timmy",6);

// useing `for` loop to run through each object and print them to the console
for (var i = 0; i < family.length; i++){
  console.log(family[i]);
}

// 28/33
/*In addition to making arrays of Objects, we can use objects as parameters for functions as well. That way, these functions can take advantage of the methods and properties that a certain object type provides.*/
function Person (name,age){
  this.name = name;
  this.age = age;
}

// a function that takes persons as arguments
// `ageDifferance` computes the differance in ages between two people

// ageDifference takes two `person` objects and as parameters and returns the differance in age between the two people
var ageDifference = function (person1,person2) {
  return person1.age - person2.age;
};
// two `person` objects 
// we can pass any person into ageDifference
var alice = new Person("Alice",30);
var billy = new Person ("Billy",25);

var diff = ageDifference(alce,billy);

// 29/33
// add in a new function named `olderAge` it should take two person objects as parameters and return the `age` of whatever person is `older`

// IE: 30 year old alice and 25 year old bob `olderAge(alice,bob)` should return 30 beacause alice is older than bob. 

function Person (name,age){
  this.name = name;
  this.age = age;
}

var ageDifferance  = function (person1,person2){
  return person1.age - person2.age;
};
// `olderAge` takes both persons and finds out which one is older. We achive this by using an `if/esle` 
var olderAge = function (person1,person2){
  if (person1.age > person2.age){
    return person1.age;
  }
  else {
    return person2.age;
  }

};
// `person` objects
var alice = new Person ("alice",30);
var billy = new Person ("billy",25);
// logging to the console which person older
console.log("The older person is",olderAge(alice,billy));

// Refer to Objects1.mdown for 30 and 31

// 32 / 33
// Customizing constructors

/*In addition to the basic Object constructor, we can define our own custom constructors. These are helpful for two reasons:

1. We can assign our objects properties through parameters we pass in when the object is created.
2. We can give our objects methods automatically.
*/

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}
// WAY BETTER :) 
// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320,"J.R.R. Tolkien");

// 33/33 

/*Here, we have included a Circle object, with a radius property representing the circle's radius. We have implemented an area function which calculates the circle's area. Notice we have used Math.PI to get the π value.
*/


function Circle (radius){
  this.radius = radius;
  this.area = function(){
    return Math.PI * this.radius * this.radius;
  };
  // define a method `perimeter` of a `circle`
  this.perimeter = function () {
     return 2 * Math.PI * this.radius;
  };
}