#!/usr/bin/env node // 1/17 // Create an array called list in the editor. It can contain any data you want! Make sure it has at least three elements. var list = ["Brent",24,"North Shore",6.2]; // 2/17 Log the second item in our list console.log(list[0]);

// 3/17 How many items do you have in our list
console.log(list.length);

// 4/17 Use a loop to iterate through all the items in our array list array
for (i = 0; i < list.length; i++){
  console.log(list[i]);
}
// 5/17 Create a heterogeneous array called myArray with at least three elements.
var myArray = ["Brent" ,24,true];

// 6/17 Create a two-dimensional array called newArray in the editor. It should have three rows and three columns containing any data you like.

var newArray = [["hello","my age is, ",24],[true,24,"is your age"],["your age is? ",22,true]];

// 7/17 Make a jagged array
var jagged = [["it just happed,",true,"it happens"],[24,"ex girlfriend"],["shes crazy!"]];

// Introduction to Objects
// 9/17

// An example Object

    var phonebookEntry = {};

    phonebookEntry.name = 'Oxnard Montalvo';
    phonebookEntry.number = '(555) 555-5555';
    phonebookEntry.phone = function() {
      console.log('Calling ' + this.name + ' at ' + this.number + '...');
    };

    phonebookEntry.phone();

// The phonebookEntry object handled data *(a name and a telephone number)* as well as a procedure *(the function that printed who it was calling).*

// In that example, we gave the **key name** the **value** 'Oxnard Montalvo' and the **key number** the value '(555) 555-5555'. An object is like an array in this way, except its keys can be *variables and strings,* not just numbers.

// 10/17 
// Create an object named me. It should have a name key with the value of your name (as a string) and an age key with the value of your age (as a number).

var me = {
  name:"brent",
  age:24,
};

// 11/17 
// Recreate your me object in the editor, but this time, use the object constructor. Once you make it, use either the [] notation or the . notation to give it a name property with a string value (your name) and an age property with a number value (your age).

var me = new Object();
me.name = "hello";
me.age = 24;

console.log(me);

// 12/17
// Create three objects called object1, object2, and object3 in the editor. Use either literal notation or the object constructor, and give your objects any properties you like!

// object literal 
var object1 = {
  name: "brent white",
  height: 6.1,
};

// object constructor
var object2 = new Object();
objcet2.cool = "definitely";
objcet2.awesome = true;
object2.value = 1;

// empty object literal
var object3 = {};
object3.name = "object";
object3.alive = true;

// 14/17 Let's warm up with some arrays! Let's make an array that's a veritable potpourri of data types.
// Create an array, myArray. Its first element should be a number, its second should be a boolean, its third should be a string, and its fourth should be... an object! You can add as many elements of any type as you like after these first four.

var myArray = [1,true,"hello",myObj = {}]; 

// 15/17 Create a 2D array thats jagged
// Make an array called newArray. It should be 2D (that is, it should contain two elements that, in turn, are arrays) and jagged (those two arrays should be of different lengths, like in the example above).

// The ultimate kicker? Make one of your inner arrays contain an object!

var newArray = [["hello",obj = {}],["age",24,"Name: Brent White"]];

// 16/17 Editing an existing object
// Add a key called interests to myObject. Give this key an array value (the array can contain whatever you like).

var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests:["surfing"],
  
};

// 17/17
// Create your own object! 

myOwnObject = {
    name: "brent white",
    home: "north shore",
    thankfullFor: ["God", "Family", "Suring"],
};

