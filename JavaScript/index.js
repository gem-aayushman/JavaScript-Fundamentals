/*Hoisting in JavaScript: feature where we can access the
variables and functions even before they are defined.
*/
// getName();
// console.log(x);

// var x = 7;
// function getName() {
//     console.log("Aayushman Singh");
// }

/*if we define the above function as an arrow function, then
it will act like a variable.
And this is the reason that if we try to access an array function
before we define it, we get an error, because arrow functions
are treated as variables.*/
// var getName = () => {
//   console.log("Aayushman Singh");
// };

// var x=1;
// a();
// b();
// console.log(x);

// function a()
// {
//   var x=10;
//   console.log(x);
// }

// function b()
// {
//   var x=100;
//   console.log(x);
// }

/*Scope means a place where we can access a specific 
variable within a program*/

// function a()
// {
//   console.log(b);
// }
// var b=10;
// a();
/*b will be printed even if it is defined outside the
      function*/

// function bf()
// {
//   var d=10;
// }
// bf();
// console.log(d);
/*d will not be printed as it is defined
                 inside the function and is being called
                 outside the function*/

/*Lexical environment means the local reference plus the 
reference to lexical memory of parent.*/

//let and const declarations are hoisted
/*if we console log(a) before declaring, we get error
but if we console log(b) before declaring, we don't*/
// let a = 10;
// var b = 100;

/*let and const are also allocated memory but unlike
var they are stored in a different space than global space
and we cannot access them before we have given some
value to them*/

/* this is why hoisting in let and const is different
from hoisting in var*/

/*the phase between initialising a let or const and 
assigning a value to it is called a TEMPORAL DEAD ZONE*/


/*window.a gives undefined because a isn't stored in the
global memory space, window.b gives the value 100 
because it is a var declaration and it is stored in a global
memory space*/







//BLOCK and SCOPE

// {
//   var a=10;
//   let b=20;
//   const c=30;
//   console.log(a);
// console.log(b);
// console.log(c); 
// }

// console.log(a);
// console.log(b);
// console.log(c); 

/*this means that var has global scope whereas
let and const are block scoped*/


//SHADOWING
// var d=100; //gets shadowed by block declaration of d
// {
//   var d=50; //shadower
//   console.log(d);
// }
// console.log(d);


// alert("This is an external JS program!")







//Closures in Javascript
/*A function bundled together with its lexical environment
is called a closure*/
function x(){
      var a=7;
      function y(){
      console.log(a);
}
y();
}
x();

//Uses of closures
/* 1- Module design pattern
   2- Currying
   3- Functions like once
   4- Memoize
   5- Maintaining state in async world
   6- seTimeouts
   7- and many more...
*/





//setTimeout in JS

function x(){
      for(let i=1;i<=5;i++)
      {
            function close(x)
            {
            setTimeout(function () {
                  console.log(x);
            }, x*1000);
      }
      close(i);
}
      console.log("Hello Aayushman");
}
x();





