function showData(){
    console.log("variable name is" , name)
    console.log("variable name is", age);

    var name = "John";
    let age = 21;

}

showData();
/*
concept:-hoisting in Javascript

Accessing variables , functions even beforethey
are initialized.
This happens beacuse when Global execution context is created,
varaiabe declared using var is moved at the top and 
memory is allocated to it before code execution.And this is not the case with let.

so, output is

variable name is undefined.....for var case

Uncaught ReferenceError: Cannot access 'age' before initialization

*/