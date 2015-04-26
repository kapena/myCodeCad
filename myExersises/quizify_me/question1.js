/* Question 1 */

// Declare an `array` and **iterate** through the `array` with a `while loop`.
var myArray = ["Hello","Goodbye","Hello Goodbye"];
// I will now begin initialize though an array with a while loop.
// First things first I will declare a variable named i and set it to 0
var i = 0;
// setting i to 0 means that we are initializing our count through the loop at 0. 
// Declare while loop.
// Inside of our conditional statement we are saying "i is less than myArray.length" which means we are telling our i to look through myArray because it is less than myArray length.
while (i < myArray.length){
  // we now use the console.log function to access myArray and then log [i] which is our counting variable we declared. 
  console.log(myArray[i]); 
  // our last step is to increment which means count through myArray till we reach the end things we have to count within myArray. Incrementing allows us to count through each item till there are none left to count.
  i++;
}