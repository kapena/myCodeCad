/* Question 8 */
// Write an `if/else statement` within a `function` named `myCoffee`. The `myCoffee` function  **must** `return` how many shots of expresso I had in my americano

// Write the a `function` named `newCoffeeType` that has three `parameters`. 

// The `parameters` are going to be three different coffee choices. In the body of the `newCoffeeType` incorporate and `else/if statement` to perform some basic logic. The result I want is going to be one of the coffee choices.

// First we create a function and give it a name of `myCoffee` 
// We then pass in tow parameters to our `myCoffee` function

// Inside of the `myCoffee` body we write a `if statement`
// if `shot1` is === equal to 1 then return "Today I had  a 1 shot of exppresso." 
// else `return "I am not sure"`

// to finish off we call `myCoffee` and pass in our two arguments which in this case are the coffee sho (0 ,1) 


function myCoffee (shot1,shot2){

  if (shot1 === 1){
    return "Today I had " + shot1 + " shot" + " of exppresso";
  }

  else{
    return "I am not sure";
  }
}

console.log(myCoffee(0,1));


// Part 2
// Write the a function named newCoffeeType that has three parameters. The parameters are going to be three different coffee choices. In the body of the function incorporate and else/if statement to perform logic. The result I get is going to be the coffee I had. 

function newCoffeeType (coffee1,coffee2,coffee3){

  if (coffee1.length < coffee2.length ){
    return "I had a " + coffee1;
  }

  else if (coffee2.length < coffee1.length) {
    return"I had a " + coffee2 + arguments;
  }

  else{
    return "I had " + coffee3;
  }
  
}

console.log(newCoffeeType("brewed","cap","No Coffee"));