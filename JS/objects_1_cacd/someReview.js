#!/usr/bin/env node
// Here is an array of multiples of 8. But is it correct? 
// 8 * 6 is not 58
var multiplesOfEight = [8,16,24,32,40,58];

// Test to see if a number from the array is NOT a true
// multiple of eight. Real multiples will return false.
var answer = multiplesOfEight[48] % 8 !== 0;
console.log(answer);

// Fizz buzz
// We're going to play a game of FizzBuzz. The rules are simple. We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".

// What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

// The instructions:
// Print out the numbers from 1 - 20.
// For numbers divisible by 3, print out "Fizz".
// For numbers divisible by 5, print out "Buzz".
// For numbers divisible by both 3 and 5, print out "FizzBuzz" in the console.
// Otherwise, just print out the number.

for (var i = 1; i < 21; i++ ){

  if(i % 3 === 0  && i % 5 === 0){
    console.log("FizzBuzz");
  }

  else if(i % 3 === 0){
    console.log("Fizz");
  }

  else if (i % 5 === 0){
    console.log("Buzz");
  }
}

// Imagine you have a movie collection, and you want to write code that” returns your review for each one. Here are the movies and your reviews:

// "Toy Story 2" - "Great story. Mean prospector."
// "Finding Nemo" - "Cool animation, and funny turtles."
// "The Lion King" - "Great songs."
// Write a function named getReview that takes in a movie name and returns its review based on the information above. If given a movie name not found just return "I don't know!". Use a structure learned in an earlier lesson (NOT if/else statements) to write this function.


var getReview = function (movie){

  switch(movie){

  case "Toy Story 2":
  title = "Great story. Mean prospector.";
  break;

  case "Lion King":
  title = "Great songs.";
  break;

  case "Finding Memo":
  title = "Cool animation, and funny turtles.";
  break;

  default:
  title = "I dont know";
  }
};

getReview("Toy Story 2");

