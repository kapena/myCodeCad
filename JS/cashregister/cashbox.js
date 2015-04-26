// 1 / 7 

/*Create a new object called cashRegister with the property total initialized to 0.

Then change the property total to 2.99 using dot notation.*/


// cash register 
var cashRegister = {
  total: 0,
  add: function (itemCost){
    this.total += itemCost; 
  }

};
// 1 / 17
// changing the total to 2.99 
// cashRegister.total = 2.99;

// 2 / 17
/*Use the add method to sum up the cost of the following four items.

Eggs 0.98
Milk 1.23
Magazine 4.99
Chocolate 0.45

If we only call the method once, it will just add the first item. So to add up the cost of four items, how many times will we have to call the method?*/

//calling the add method for all our items listed above
cashRegister.add(09.98 + 1.23 + 4.99 + 0.45);

// 3 / 17 
/**/

// cash register object literal
var cashRegister = {
  total: 0,

  // add method that has a itemCost parameter
  add: function (itemCost){
    // refferancing total with `this` and adding it to the itemCost.
    this.total += itemCost;
 },

  // scan method which contains a `switch` statement within
  scan: function (item){
  // swtich statement
    switch (item) {
      // case of "eggs" that is refferancing the `add` method. We give a value to our eggs by passing in add(0.98)
      case "eggs":
      this.add(0.98);
      break;

      case "milk" : 
      this.add(1.23);
      break;

      case "magazine" :
      this.add(4.99);
      break;

      case "chocolate":
      this.add(0.45);
    }
  return true;
  }
};

// Use the scan method to buy eggs twice and a magazine three times

// I am accessing the `scan` method from the `cashRegister` object. the item that we then pass in is "eggs" which we defined inside of the case within the swtich. 

// How this works
// Scan method to swtich statement

// "eggs" gets placed into the `scan` method through the parameter `item` inside of our `scan` method. 

// `item` acesses "eggs" 

// when I call `scan` "eggs" then becomes a value of the parameter `item`

// switch switches the case "eggs" to be a true value which then runs the `add` method which then adds the amount of 0.98 to the amount of things we have colleceted.

cashRegister.scan("eggs");
cashRegister.scan("eggs");
cashRegister.scan("magazine");
cashRegister.scan("magazine");
cashRegister.scan("magazine");


// 4 / 7 
/*Modify the scan method such that if we tell it the quantity of each item, it will be able to add the right amount to the total. Since you currently tell scan nothing about quantity, it may be useful to create another parameter.

Scan 4 of each item using your improved scan method. Previously we would have needed to call scan 16 times! Now it is down to 4.*/

var cashRegister = {
  total: 0,
  // add method 
  add: function (itemCost){
    this.total += itemCost;
   },

  // scan method
  scan: function (item,quantity){
    switch (item) {
      // multiplying eggs by the quantity of eggs we wish to purchase
      case "eggs": this.add(0.98 * quantity); break;
      case "milk": this.add(1.23 * quantity); break;
      case "magazine": this.add(4.99 * quantity); break;
      case "chocolate": this.add(0.45 * quantity); break;
    }
  }
};

// calling the `scan` method and passing in an item and the quantity of how many items we are purchasing which is 4

cashRegister.scan("eggs",4);
cashRegister.scan("milk",4);
cashRegister.scan("magazine",4);
cashRegister.scan("chocolate",4);

// logging a string and then calling `total` method 
console.log("Your total is " + cashRegister.total);

// 5 / 7 

/*We need to keep track of how much the last transaction was. Modify the `add` method to keep track of the amount of the last transaction. This should be tracked in a new property, `lastTransactionAmount`.

Add a method called `voidLastTransaction` that subtracts the last amount transacted from total.

Then use the new method to void the last item we scanned which is chocolate. 

Finally, scan only 3 of the same item instead (chocolate).
*/

var cashRegister = {
  total: 0,
  // the add method adds all of our items up
  add: function (itemCost){
    this.total += itemCost;
    // assigning `lastTransactionAmount` to `itemCost`. 
    this.lastTransactionAmount = itemCost;
  },

  // the scan method scans our items
  scan: function (item,quantity){
    // switch state is all of our items. 
    switch (item){
      case "eggs": this.add(0.98 * quantity); break;
      case "milk": this.add(1.23 * quantity); break;
      case "magazine": this.add(4.99 * quantity); break;
      case "chocolate": this.add(0.45 * quantity); break;
    }
    return true;
  },
  // Adding a method called `voidLastTransaction` that subtracts the last amount transacted from total. 
  voidLastTransaction: function (){
    // lastTransactionAmount knows exatctly what our lastTransactionAmount was due to it's nature of being within our `add` method which is where it is being assigned to the `itemCost`  
    this.total -= this.lastTransactionAmount;
  }
};

// all the items we have selected to purchase. 

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',1);
cashRegister.scan('chocolate',4);

// using the voidLastTransaction to void the last item we scan by calling voidLastTransaction. 
cashRegister.voidLastTransaction();

// scaning only 3 of chocolate. BTW..chocolate is in fact our last item!!
cashRegister.scan("chocolate",3);

console.log("Your subtotal is " + cashRegister.total);

// 6 / 7 
/*Create an object constructor called `StaffMember` which takes two parameters—`name` and `discountPercent`. And then have the **(public)** properties `name` and `discountPercent` equal the parameters.

To help, we have already created two employees using this constructor. `Sally` and `Bob` already have their staff discount set up: Sally getting 5% off and Bob getting 10%.

Create a new instance of the object for yourself called `me` with your massive staff discount bonus of 20%.
*/


// constructor named StaffMember
function StaffMember (name,discountPercent){
  this.name = name;
  this.discountPercent = discountPercent;
}

// instance named me of StaffMember 
var me = new StaffMember ("Brent",20);

// 7 / 7 
/*Create a new object called me of type StaffMember for yourself with a staff discount of 20%

Create a new method called applyStaffDiscount in the cashRegister object which accepts a parameter employee. When this method is called, cashRegister should apply the staff member's discountPercent to total.

Under the comment, 'Apply your staff discount by passing the me object, call your new applyStaffDiscount and pass the object me.

*/

var cashRegister = {
  total: 0,
  // add method
  add: function (itemCost){
    // logical or is going to return `itemCost` if it can be converted to `true`. If it can't be converted to true then we will return `0` 
    this.total += (itemCost || 0);
    this.lastTransactionAmount = itemCost;
  },
  // scan method
  scan: function (item,quantity){
    switch (item) {
      case "eggs" : add(0.98 * quantity); break;
      case "milk" : add(1.23 * quantity); break;
      case "magazine" : add(4.99 * quantity); break;
      case "chocolate": add(0.45 * quantity); break;
    }
  },

  // void method 
  void: function (){
   this.total -= this.lastTransactionAmount;
   this.lastTransactionAmount = 0; 
  },

  // When this method is called, cashRegister should apply the staff member's discountPercent to total.

  // applyStaffDiscount method
  applyStaffDiscount: function (employee){
    // - `total` then * it by employee.(which is our placeholder)discountPercent and divide `/` by 100.

    // we divide by 100 because we need to convert percentange into decimal fraction! 
    this.total -= this.total * (employee.discountPercent / 100);
  
  }

};

cashRegister.scan("eggs",1);
cashRegister.scan("milk",1);
cashRegister.scan("magazine",3);

// calling our cashRegister object then applying the staff discount by passing the `me` object to our applyStaffDiscount method. 

// It's importaint to rememeber that `employee` is just a placeholder for who ever we want to pass into our applyStaffDiscount(..) method 

// When I pass `me` as the `employee` `me` is an object with a `discountPercent` property which was defined by the `StaffMember` constructor! 
cashRegister.applyStaffDiscount(me);

// cashRegister.applyStaffDiscount(me); 
// is treated as

/*
applyStaffDiscount: function (me){
  this.total *= (100-me.discountPercent) / 100;
}
*/

// This explanation from @Roy 
// http://www.codecademy.com/forum_questions/54eac93676b8fe5ae2004ff9


