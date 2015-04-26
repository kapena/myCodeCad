// Question 10 

// Part 1
// Provide the user with a simple swell for cast using `objects`. The swell forecast that we create will print to the console.

// We start out by creating an object literal named `userSwellForcast`. We then give `userSwellForcast` two properties and a method named `waveLog`.

// waveLog is returning a string that will incorporate waveHeight and wavePeriod properties into a string that prints "The current wave height is 8 feet. The swell current swell period is at 12 seconds." 

// Now we need to add a `tide` object. 
// we can do this by nesting `tide` within our `userSwellForcast`
// To nest all you need to do is put a comma after the last item in `userSwellForcast,` then declare `tide` just like this  `tide :` `{..},`

// Inside our `tide` object we have `highTide` and `lowTide` we assign these properties string values. We then declare a `tideLog` `method` that returns "high tide is at 9 am"  

// Once we have finished the creation of our objects then we must call each of there methods with `console.log();` 

// When you call a method that is inside an object you need to reference the name of the object first then with `dot notation` reference the `method name` like so `userSwellForcast.waveLog();`

// Current Swell Forecast 
var userSwellForcast = {
    waveHeight:8,
    wavePeriod:12,
    waveLog:function(){
      return "The current wave height is "+ this.waveHeight  + "feet." + "\n"+ "The swell period is at " + this.wavePeriod + " seconds";
    },
    tide: {
      highTide:"9 am",
      lowTide: "5 pm",
      tideLog:function(){
       return "High tide is at " + this.highTide;       
      }
    },
};

console.log(userSwellForcast.waveLog());
console.log(user.SwellForcast.tide.tideLog());

// Part 2

/* 1. Write a simple program that tells the user the conditions of the surf spot that they are interested in. */

/*2.  Once the user has found out the surf spot report then `prompt` the user to ask where is the best spot is today. Our program should print out the best spot in the console*/

// To start out I will create a function named `surfSpots` and I give it one parameter named `userImput`. 

// userImput has been assigned to `prompt();` the user to enter one of the surf spots we specify in the switch.

// The first parameter named `userImput` is then used as the `(expression)` in our switch statement.

// inside our switch we have 3 cases. Each of these cases are for the different surf spots.

// Up to this point we have completed step of prompting the user to enter a surf spot and get an answer on the conditions at that spot.

// To finish off the program we need to provide the user with an option to ask "where is the best spot today"
// We can achieve this by adding some simple logic to the `surfSpots` function. 
// To write the logic I will add 2 new parameters to `surfSpots`
// The first parameter I add will be `askWhere`
// `askWhere` is going to be used to prompt("..."); the user to ask where is the best surf spot is?   
// The second parameter is `bestSurfSpot` which we will assign to a string value of "Sunset" IE: bestSurfSpot = "Sunset";. 
// Once we have achieved this then we write the `if statement` the condition of the if statement is (if bestSurfSpot is equal to bestSurfSpot) then return bestSurfSpot + ".."
// Lastly I call our function with console.log();
function surfSpots (userImput,askWhere,bestSurfSpot){

userImput = prompt("Enter one of the following surf spots in the field bellow: V-land, Sunset or Backyards" );
  // Switch
  switch (userImput){
    case "Sunset":
    console.log("Sunset is 10 feet with a NNW swell wrap. Good conditions");
    break;

    case "V-land":
    console.log("V-land is 5-6 feet. Set waves are connecting to the west bowl. Good conditions");
    break;

    case "Backyards":
    console.log("The swell is a little to big for Backyards. Avoid surfing here until the swell drops");
    break;

    default:
    console.log("Please enter one the surf spots that we specify. V-land, Sunset or Backyards");
  }

askWhere = prompt("If you cant decide where to surf then just press ok in the dialog box and we will do our best to tell you where the best spot is!", "Where is the best spot?");
  
  bestSurfSpot = "Sunset";

  if (bestSurfSpot === bestSurfSpot) {
    return bestSurfSpot + " is the best spot";
  }
}

console.log(surfSpots());