// Function expressions

// To store a function in a variable or pass it as an argument to call a function, you do not necessarily have to declare it previously and use its name.

// Let's go back to our example with the add function:

function add(a, b) {
    return a + b;
}
let myAdd = add;
console.log(myAdd(10, 20)); 	// -> 30
console.log(add(10, 20));	// -> 30

let myAddd = function add(a, b) {
    return a + b;
}
console.log(myAddd(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30


// Here we can call function with variable name also with functions name


// Let's go back to the concept of anonymous functions. It may seem a little incomprehensible when you use a name (although it is a variable name) to refer to a function. In this case, it's about anonymity, i.e. the lack of a name, in the very definition of a function. This will be much more evident when passing a function as a call parameter to another function.


function operation(func, first, second) {
    return func(first, second);
}
let myAdddd = function(a, b) { // anonymous function
    return a + b;
}
console.log(operation(myAdddd, 10, 20)); // -> 30
console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200

