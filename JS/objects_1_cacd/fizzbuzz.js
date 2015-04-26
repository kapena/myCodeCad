#!/usr/bin/env node
//  Fizz buzz
// We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

// The instructions:
// Print out the numbers from 1 - 20.
// For numbers divisible by 3, print out "Fizz".
// For numbers divisible by 5, print out "Buzz".
// For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
// Otherwise, just print out the number.
for (var i = 0; i < 21; i++){

  if (i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz");
  }

  else if (i % 5 === 0){
    console.log("Buzz");
  }  

  else if (i % 3 ===0){
    console.log("Fizz");
  }

  else{
    console.log(i);
  }
}



