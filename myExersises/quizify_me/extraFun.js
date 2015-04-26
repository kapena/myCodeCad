// Triangles! 

// Return the area of a triangle using Heron's formula. 
// Use an object literal to store the sides of the triangle. Inside or object literal use a method to perform the calculation. 

var triangle = {
  a:4,
  b:12,
  c:16,
  getArea:function(a,b,c){
    var semiperimeter = this.a + this.b + this.c / 2;
    var area = semipermiter * (semipermiter - this.a) * (semipermiter - this.b) * (semipermiter - this.c);
    return Math.sqrt(area);
  }
};

console.log(triangle.getArea());

// So how dose this work..
// Well first I need to explain how  Heron's formula works! 
// We have a triangle and it has three sides. Each side has a value. `a = 4` , `b = 12` and `c = 16`

// Now to explain a bit of  Heron's formula..
// We first need to figure out what variable `semiperimeter` is and to do that we divide the perimeter of our triangle by `2` so it will look like this `a + b + c / 2`

// Once we have `semiperimeter` figured out then we take our `area` variable and assign it to `semiperimeter` and then do the following equation `*` `(semiperimeter - a)` `*` `(semiperimeter - b)` `*` `(semiperimeter - c);`

// Finally we need to return `Math.sqrt (area)` which is going to perform `square root` on our `area` variable. 

