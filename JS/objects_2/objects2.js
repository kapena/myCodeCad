// 1 / 30 
var james = {
  // add properties to james
  job: "Programmer",
  married: false,
};
// Person constructor
function Person (job,married) {
  this.job = job;
  this.married = married;
}

// create a gabby object using constructor using the person constructor. 
// `new` `Person` is our refferance to the person constructor
var gabby = new Person("student",true);

// 2/30
// Add a speak method to the person constructor. Whenever speak is called it should print "hello" to the console.

function Person (job,married) {
    this.job = job;
    this.married = married;
// method `speak`
    this.speak = function (){
      console.log("Hello");
    };
}


var user = new Person ("Student",false);
// calling our method
user.speak();


// 3/ 30 
//  Complete the speak method such that the last two lines in the editor will cause "Hello, I am feeling great" and "Hello, I am feeling just okay" to be printed to the console.
var james = {
  job: "programmer",
  married: false,
  speak: function (mood){
    console.log("Hello, I am feeling " + mood);
  }
};

james.speak("Great");
james.speak("Just Ok");

// 4 / 30 

var james = {
  job : "programmer",
  married : false,
  sayJob: function () {
    console.log ("Hi I work as a " + this.programmer);
  }
};
// calling james first job
james.sayJob();

// change the job for james to supper programmer by accessing james.job `property` and changing the string to "supper programmer"
james.job = "Supper Programmer";
// calling james second job
james.sayJob();

// 5 / 30 
var james = {
  job : "programmer",
  married : false
};

// setting the key named `job` in `james`
var aProperty = "job";

// logging the first property of james 
console.log(james[aProperty]);

// 6 / 30
// figure out what I have by using `typeOf`
var anObj = {job: "I am a object"};
var aNumber = 42;
var aString = "I am a string";

console.log(typeof anObj);
console.log(typeof aNumber);
console.log(typeof aString);

// 7 / 30
// `hasOwnProperty` lets us know if an object has a certain property. 
var myObj = {
  name: "my name is object"
};

// checking to see if myObj has the property of `name`
console.log(myObj.hasOwnProperty ("name")); // true 

// 8 / 10 

var suitcase = {
  shirt : "Hawaiian"
};

// write an if statement that checks to see if `suitcase` has the `shorts` property. 

if (suitcase.hasOwnProperty("shorts")){
  console.log(suitcase.shorts);
}

// If your if statement evaluates to false, set the shorts property to any value you wish using dot notation. Then print the value of the shorts property.

else {
  suitcase.shorts = "boardshorts";
  console.log(suitcase.shorts);
}

// 9 / 30 
// `nyc` object 
var nyc = {
  fullName: "New York City",
  mayor: "Bill de Blasio",
  population: 800000,
  boroughs :5
};

// print out all of the keys in our `nyc` object
for (var key in nyc){
  console.log(key);
}

// 10 / 30 
// print all the `values` in nyc useing a `for in` loop
// nyc object 
var nyc = {
  fullName: "New York City",
  mayor: "Bill de Blasio",
  population: 800000,
  boroughs :5
};
// nyc is our object and value is our place holder!
for (var value in nyc){
  console.log(nyc[value]);
}

// 11 / 20
// OPP Object Orriented programming

/*Take a look at our Person example taken from Introduction to Objects I. In this case bob and susan are two separate objects, but both belong to the class Person.*/
function Person (name,age) {
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob Smith",30);
var susan = new Person ("Susan Jordan",35);

// define my a new class called circle
function Cirlce (radius){
  this.radius = radius;
}
// setting the parameter of `radius` to `3` 
var myCircle = new Circle (3);

// 12 / 30
// constructor Dog

function Dog (breed) {
this.breed = breed;  
}

// assigning buddy and teaching him to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function(){
  console.log("Woof");
};
// calling bark
buddy.bark();


// make snoppy and then ask her bark just like buddy
var snoopy = new Dog ("Beagle");
snoopy.bark = function (){
  console.log("Woof Woof");
};
// calling bark
snoopy.bark();

// 13 / 30 
// How do classes help us? 
/*We know that any Person will have a `name` and `age`, because they are in the constructor. This allows us to create a function like `printPersonName`, which will take a `Person` as an argument and print out their name. We know the function will work on any `Person`, because `name` is a valid property for that class.*/

// Person class which as a name and age as parameters
function Person (name,age){
  this.name = name;
  this.age = age;
}
var printPersonName = function (p){
  console.log(p.name); 
};
// person constructor
var bob = new Person ("Bob Smith",30);
// calling our printPersonName function and passing in `bob` as our argument.
printPersonName(bob);

// make person call me with your own `name` and `age`
// print your `name` using `printPersonName`

var me = new Person ("Brent White",24);
printPersonName(me);

// 14 / 30 
// buddy and snoopy can both bark due to prototype

function Dog (breed){
  this.breed = breed;
}

var buddy = new Dog ("Golden Retriever");
// having `prototype` attched to the `bark` method means that we only need one method in which performs the barking. This is usefull because now we can have any number of dog objects and they all can refer back to one method `bark` 
Dog.prototype.bark = function (){
  console.log("Woof!");
};
buddy.bark();

var snoopy = new Dog ("Beagle");

snoopy.bark();

// 15 / 30
// Prototype practice

// add a `meow` method to the `cat` prototype. should print "meow" to console. 

function Cat(name,breed){
  this.name = name;
  this.breed = breed;
  // meow.prototype = function(){
  //   console.log("Meow!");
  // };
}

// cat 1
var cheshire = new Cat("Cheshire Cat","British Shorthair");
var gary = new Cat ("Gary","Domestic Shorthair");

Cat.prototype.meow = function (){
  console.log("Meow!");
};

// calling our meow method on each cat object
cheshire.meow();
gary.meow();

// 16 / 30 
// adding classes

// Create a class aka (constructor function) named `Animal` with two properties, `name` and `numLegs`.

function Animal (name,numLegs){
  this.name = name;
  this.numLegs = numLegs;
}

// Change the prototype of `Animal` and add a method sayName that prints to the console "Hi my name is [name]", where [name] is the value of name.

// adding prototype to `Animal` and attaching a method of `sayName`
// loging to the console "Hi my name is" then refferancing our parameter of `name` in function Animal" which is attached to our object `penguin`

Animal.prototype.sayName = function (){
  console.log("Hi my name is" + this.name);
};
// penguin object
var penguin = new Animal("Captain Cook", 2);
// calling penguin and sayName method.
penguin.sayName();

// 17 / 30
/*Create a brand new `Penguin` constructor. A penguin is an animal so it should also have the `name` and `numLegs` properties as well as a `sayName` method that prints the same thing as Animal's `sayName` method.*/

function Penguin (name,numLegs){
  this.name = name;
  this.numLegs = numLegs;
}

// create a `sayName` method for `Penguin` 
Penguin.prototype.sayName = function (){
  console.log("Hi my name is " + this.name);
};


var theCaptain = new Penguin("Captain Cook", 2);
// calling our Captain object and sayName method
theCaptain.sayName();

// 18 / 33 
function Animal (name,numLegs){
  this.name = name;
  this.numLegs = numLegs;
}

// `sayName` is our method 
// inheritance allows `Animal` to use the methods of other surrounding constructors. IE: `Animal` is able to use the properties of `Dog` due to the nature of inheritance
Animal.prototype.sayName = function (){
  console.log("Hi my name is " + this.name);
};

// The Penguin constructor can be more unique than Animal. This is because all penguins have 2 legs. Penguin constructor should only take a name parameter, and within the constructor itself, set this.numLegs to 2.

// We are creating Penguin because it is an animal therfore it should have it's own constructor that can then be accessed by `sayName` method

function Penguin (name){
  this.name = name;
  this.numLegs = 2;
}

// setting Penguins prototype to be a new instance of Animal with the following syntax

// new instance which means that Penguin inherits properties and methods from Animal. 
Penguin.prototype = new Animal();

// 19 / 20 

// We never defined a `sayName` method for `Penguin`, but what happens when we try to call it? 

// Create a Penguin object with the variable name penguin and any name you'd like.
var penguin = new Penguin ("Dusty");
// then call `penguin`
penguin.sayName();

// We see here how Penguin inherites the `sayName` method from `Animal`.

// 20 / 30 

// We saw in the last exercise how Penguin inherited the sayName method from Animal. We now explore how classes can inherit properties as well.

// For simplicity, we've defined a new Penguin class that doesn't inherit anything from Animal.

function Penguin (name) {
  this.name = name;
  this.numLegs = 2;
}

// create an Emperor constructor and make it inherit from `Penguin`
function Emperor (name){
  this.name = name;
}
// Emperor inherits from Penguin
Emperor.prototype = new Penguin ();

// penguin object which has an instance of emperor
// printing to the console how many legs the emperor has by accessing the emperor Object which then inherits from penguin numLegs
var emperor = new Emperor ("Master");
console.log(emperor.numLegs);


// 22 / 30

/*Let's see how going up the prototype chain works! We've defined some constructors and inheritance patterns: Wallaby inherits from Kangaroo which inherits from Animal. We've also created an instance of the Kangaroo class.
*/

/*A Kagaroo is an animal and an Wallaby is a type of Kangaroo.*/

// I modified this to my own version of animals

function Animal (name,numLegs) {
 this.name = name;
 this.numLegs = numLegs;
 this.isAlive = true; 
}

function Kangaroo (name){
  this.name = name;
  this.numLegs = 2;
}

function Wallaby (name) {
  this.name = name;
  this.saying = "How you going mate?";
}

// our prototype chain! 
// Kangaroo inherits from Animal
// Wallaby inherits from Kangaroo 
Kangaroo.prototype = new Animal();
Kangaroo.prototype = new Wallaby ();

/*Importaint*/
// myWallaby is an object that is attached to an instance of the Kangaroo constructor which is then used to refferance each of the surronding constructors!  
var myWallaby = new Kangaroo ("Jules");


console.log(myWallaby.saying);  // prints waddle waddle
console.log(myWallaby.numLegs); // prints 2
console.log(myWallaby.isAlive); // true


// 22 / 30 
/*Look at the `Person` constructor. It has 3 `public` properties: `firstName`, `lastName`, and `age`. On lines 8 and 9, we access the `firstName` and `lastName` properties of `john` and assign them to `myFirst` and `myLast`.*/ 

// `Person` constructor
function Person (firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

// `john` object 
var john = new Person ("John","Smith",30);

// Declaring three variables that store `johns` properties.
// myFirstName stores the firstName property of `John` 
// myLastName stores the lastName of property of `John` 
var myFirstName = john.firstName;
var myLastName = john.lastName;
var myAge = john.age;

// 23 / 30 
// Private variables.

function Person (firstName,lastName,age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  // private variable `bankBalence` 
  var bankBalance = 7500;

  // 24 / 33 
  // definine a method called `getBalance` and have it return `bankBalence` 
  this.getBalance = function (){
    return bankBalence;
  };
}

// john object
var john = new Person ("John","Wayne",5);

// create a new variable named `myBalance` and set its value to John's bankBalance. Hint (call `getBalance` method that is inside myBalance) 

// calling getBalance inside of myBalance
var myBalance = john.getBalence();

// log `myBalance` to see our private varaible exposed. 
console.log(myBalance);

// 25 / 30 
/*Create a method called `askTeller` within the `Person` class that returns the `returnBalance` method. This means that it returns the method itself and NOT the result of calling that method. So you should NOT have parentheses after returnBalance.*/

function Person (name,last,age){
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  // private variable
  var bankBalance = 7500;

  // private method
  var returnBalance = function (){
    return bankBalance;
  };

// askTeller is public
// create askTeller 
  this.askTeller = function (){
  // return the method of returnBalance
    return returnBalance;
  };

}

var john = new Person ("John","Wayne",30);
// logging john object and the returnBalance method. 
console.log(john.returnBalance);
// assinging a variable of `myBalanceMethod` to john.askTeller. 

// askTeller is a method
var myBalanceMethod = john.askTeller();
// assinging a variable of `myBalance` myBalanceMethod();

// we are calling `askTeller` method through `myBalanceMethod` 
// NOTE: Ask teller returns a method therefore we must call it to make use of it. The line bellow maskes use of our method `john.askTeller` 
var myBalance = myBalanceMethod();

// logging myBalance to call our method askTeller
console.log(myBalance);

// 26 / 30 

/*The askTeller function has been modified within the Person constructor to directly give you your balance. However, it now needs the account password in order to return the bankBalance.
*/

function Person (first,last,age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  var bankBalence = 7500;

  this.askTeller = function (pass) {
    if (pass === 1234) {
      return bankBalence;
    }

    else {
      return "Wrong password";
    }
  };
}
var john = new Person ("John","Wayne",30);

// Create a new variable called myBalance that calls the askTeller function with a password argument, 1234.
var myBalance = john.askTeller(1234);

// 27 / 30 
/*Use a for-in loop to print out the three ways to say hello. In the loop, you should check to see if the property value is a string so you don't accidentally print a number.
*/

var languages = {
  english: "Hello",
  french: "Bonjour!",
  notALanguage: 4,
  spanish: "Hola",
};

// access the values in languages object using a for-in
for (var value in languages){

// if typeof is checking the values of the languages object to see if they are all strings. If there is a value that is not a string it won't print the value that is not a string and skip over to the next value that is a string. 

  if (typeof languages[value] === "string") {
    console.log(languages[value]);
  }
}

// 28 / 30 
/*
Add the sayHello method to the Dog class by extending its prototype.

sayHello should print to the console: "Hello this is a [breed] dog", where [breed] is the dog's breed.*/

function Dog (breed){
  this.breed = breed;
}

Dog.prototype.sayHello = function (){
  console.log("Hello this is a " + this.breed);
};  

var yourDog = new Dog ("Labrodor");

var myDog = new Dog ("Australian Kelpie");
// calling our sayHello method
myDog.sayHello();

// 29 / 30 
/*Let's first see what type Object.prototype is. Assign Object.prototype to prototypeType*/

// Assigning Object.prototype to prototypeType
var prototypeType = Object.prototype;
console.log(prototypeType);
// returns object {}


// All objects have a `hasOwnProperty` method we can check if hasOwnProperty comes from Object.prototype
var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

// 30 / 30 

/*Modify the StudentReport class so that no grades will be printed to the console in the for-in loop.

However, getGPA should still function properly in the last line.*/

// constructor StudentReport which contains plubic grades.
function StudentReport (){
  var grade1 = 4;
  var grade2 = 2;
  var grade3 = 1;

  // getGPA method
  this.getGPA = function () {
    return (grade1 + grade2 + grade3) / 3;
  };

}

// storeing our `StudentReport()` constructor inside an instance called `myStudnetReport` this allows access the constructor 

var myStudnetReport = new StudentReport();

// for-in loop using the instance of myStudnetReport to access Student Report 
for (value in myStudnetReport){

  // `typeof` is seaching inside myStudnetReport which is accessing the StudentReport constructor. Inside StudentReport we are comparing each of the values with the `strict not equal` !== against a string of "function" 

  // strict not equal returns `true` if data types are not the same.
  // in this case we know that our `grades` are not the same as "function" therefore our if statement is `true` and we log + "Muahahah [myStudnetReport]"
  if(typeof myStudnetReport[value] !== "function"){
    console.log("Muahahah" + myStudnetReport);
  }
}

console.log("Your overall GPA is " + myStudnetReport.getGPA());