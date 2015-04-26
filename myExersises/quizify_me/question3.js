/* Question 3 */
// Count to 100 in multiples of 10 using a `for loop`

// This for loop is quite simple.
// We start out by initializing the loop at 0. Then we give the loop a condition. Remember that we want our loop to count to 100 and for us to achieve that result when counting from 0 we need to stop counting at 101 which will give us the number of 100

// The last part of our loop is a bit different than your average for loop. Here we are saying i is assigned to i then by using the `addition assignment operator` `+=`. Definition from MDN "The addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable. "

// So in this case we are adding onto our variable `i` in multiples of 10 to get to the sum of 100.

for (var i = 0; i < 101; i = i += 10){
  console.log(i);
}