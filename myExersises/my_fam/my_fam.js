// bassed of the code accademy address book challenge

// delcaring three objects 

var oldest = {
  firstName:"Brent",
  lastName: "White",
  age:24
};

var inbetween = {
  firstName:"Shannon",
  lastName: "White",
  age:21
};

var youngest = {
  firstName:"Murray",
  lastName:"White",
  age:19
};

// assigning each object to an array called `family`

var family = [oldest,inbetween,youngest];

// Looping through each objects property

// declaring a function which accesses my objects and there properties
// There are two parts to this. The first part must allow access to the properties of each object through the `printFamily` function. 

// the second part is to create a function that will loop through my `family` objects

function printFamily(people){
  console.log(people.firstName + " " + people.lastName + "" + people.age);
}
printFamily();

// declaring a function that contains a loop that reconizes our `printFamily` function 

function list (){
  // the loop I have here is accessing my `printFamily` and then `iterating` through each object in the `family array` 
  for (var i = 0; i < family.length; i++){
    printFamily(family[i]);
  }
}

// list();

// implement a search feature
// decare a function that allows me to search for a certain name
// the search function needs to be able to take an argument which will be the name we are searching for from within our objects. 

function search (firstName){
  // declare a for loop that loops through the `family` array
  for (var i = 0; i < family.length; i++){

    // declare an if statement, which will be `true` only if the name we pass in the argument matches a name in our objects
    if (family[i].lastName === lastName) {
      return printFamily(family[i]);
    } 
  }
}
search("Brent");

/*NOTE
If you want to run `newPerson` and be able to get the result of seeing a new person appear in the console then I must comment out `search`
*/

// addding a new family memeber 
// decare a function that allows me to add a new family object to our current family objects.
function newPerson (firstName,lastName,age){
  // adding a new object directly into the array postion `family` is the name of our array 
  // we refferance `family` and then in the brackets [family.length] 
  // family.length is a way to refferance the length of family. 
  family[family.length] = {
    firstName: firstName,
    lastName: lastName,
    age: age,
  };
}

console.log(newPerson("Kathi","White",56));
list();


