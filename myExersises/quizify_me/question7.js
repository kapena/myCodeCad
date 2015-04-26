/* Question 7 */
/*Part1*/
// Create a `currentSwell` `object literal` that contains two `properties` `swellHeight` and `swellPeriod` then must have a `methods` that `return` the `swellHeight` and `swellPeriod` in the form of a `string`.

/*Part2*/
// Create a `constructor function` named `newSwell` that contains a `method`. The `method` must `return` our `newSwell`data in the form of a string.

// Create an object literal named `currentSwell` that contains 2 properties. The first property is going to be `swellHeight` the second is going to be `swellPeriod`. 

// Here we have our currentSwell object and it contains two properties which are `swellHeight` and `swellPeriod`
// we also have a method here called `swellLog`
// `swellLog` is logging the values of `swellHeight` and `swellInfo`


// Once we have our `currentSwell` data in place then we can make our `new`  constructor function which will contain the new swell data. 

// The constructor function will create a new object for us to store our new swell data within.

var currentSwell = {
  swellHeight: 4,
  swellPeriod:12,
  swellLog:function(){
    return "the current wave height is " + this.swellHeight + "feet " + "with a swell period of " + this.swellPeriod + " " + " seconds ";  
   }
};

console.log(currentSwell.swellLog());

// constructor function named `newSwell`
function newSwell(height,period){
  this.height = height;
  this.period = period;
  // method named `logUpdate`
  // `this` is used as a reference to our `newSwell` constructor.
  // inside the console.log function we pass in strings that are being concatenated to `this.height` and `this.period`. These are variables that will contain a value that we assign in the object constructor `newSwellData`
  this.logUpdate = function(){
    console.log( "The new incoming swell is " + this.height + " feet" + " with a period of " + this.period + " seconds between wave intervals." );
  };
}

// here we declare an `object constructor` named `newSwellData`
// objects defined using a `constructor` are instantiated with the `new` keyword 
// Within the parameters of newSwell we assign the values to `height` and `period`
var newSwellData =  new newSwell(4,12);
// Here we call the `newSwellData object constructor`
newSwellHeight.newSwell();
