// A swtich statement starts with a variable called the switch value.
// Each case indicates a possible value for this var and code that should run
// if the var matches the value

// the var named surfboards is the switch value
// if the value of surfboards var is the string "model1" then the first case is executed
// if it is "model2" then second case is executed
// if none are selected then we hit the deafult and that case is executed.

var surfboards = prompt('Please specify what board you like more, enter Merick or JS to recieve a free surfboard model form the shaper you choose.'); 

switch (surfboards){
  case "Merick":
  console.log("Board Model: Rookie");

  // title = "JS";
  break;

  case "JS":
  console.log("Board Model: LowDown");
  // title = "Lowdown";
  break;

  default:
  console.log("all boards are good");
  // title = "all boards are good";
  break;

}
// Day of the week switch statement
var answer = prompt("What is your fav day of the week?","delete me and type in lowercase");

switch (answer){
    
  case "monday" :
    console.log("you are boring...go live on the moon");
  break;
    
  case "tuesday": 
    console.log("I guess you are better than monday");
    break;
    
  case "wednesday":
    console.log("I love to read the midweek on wednesday");
    break;
            
  case "thursday":
     console.log("Have a beer the week is almost over");
    break;
    
  case "friday":
    console.log("Aloha Friday is Da Best");
    break;
    
  case "saturday" : 
    console.log("Do what matters day");
    break;
    
  case "sunday" : 
    console.log("Relax");
    break;
        
  default:
    console.log("You dont follow directions..So in this case you love mondays!");
    break;
}