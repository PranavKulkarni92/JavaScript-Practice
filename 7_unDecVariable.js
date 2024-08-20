
"use strict";
let message;

massage ={data : [24] };

console.log(massage);

//console.log(message);

/*
Concept:- 

JavaScript undeclared variable ko khud declare kar ke window scope me add kar ti hai
so we get output.....To avoid this situation you can use "use strict" mode

incase of console.log(message)...undefined as o/p , variable is declared but not assigned any 
value , so JS keeps it as undefined.
*/