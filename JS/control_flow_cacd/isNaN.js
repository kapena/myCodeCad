#!/usr/bin/env node

  // 1
  // Write an if / else statement inside the isEven function. 
  // It should return true; if the number it receives is evenly divisible by 2. Otherwise (else), 
  // it should return false;.


var isEven = function(number){
//  number is divisable by 2 which is then equal to 0
  if (number % 2 === 0){
    console.log(false);
  }
  else{
    console.log(true);
  }
};
  // if we pass 2 as our argument then we get `false` because our number is in fact divisable by 2
console.log(isEven(2));

  // if we pass 3 as our arg then we get `true` because we then skip the if statement and run the else
console.log(isEven(3));


  // 2
  // Write an if / else statement inside the isEven function. 
  // It should return true; if the number it receives is evenly divisible by 2. Otherwise (else), 
  // it should return false;.
 
var isEven = function(number) {
if(number % 2){
    return false;
    }

  // if isNaN number is true then long string
    else if (isNaN(number)){
      console.log("this is a number");
    }

  // if not true then log false
    else{
      console.log(false);
    }
};

console.log(isEven());



