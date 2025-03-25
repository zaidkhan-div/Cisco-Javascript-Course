// A few more details about JavaScript errors and exceptions

// SyntaxError
// As we previously said, a SyntaxError appears when a code is ill-formed, when there are typos in the keywords, unmatching parentheses or brackets, etc. The code can’t even be executed, as JavaScript isn’t able to understand it. The corresponding error is therefore thrown before the program is started.
"use strict";
iff(true) { //-> Uncaught SyntaxError: Unexpected token '{'
    console.log("true");
}
// In the example above, we’ve made a typo in the keyword if, adding an additional letter f. The JavaScript engine treats the unknown name as a function call (it finds the round brackets after iff) and is surprised by the presence of a curly bracket.

// ReferenceError

// We’ve seen this one already. It occurs when we try to access a function or a variable that doesn't exist. The JavaScript engine does not know the meaning of the given name, so it is an error that we will classify as a semantic error. The corresponding exception is thrown at the execution time of the program, when the wrong instruction is reached (i.e. in JavaScript, semantic errors are run-time errors).

let a = b; // -> Uncaught ReferenceError: b is not defined

// The attempt to declare variable a is unsuccessful because at the same time, we want to initialize it with the value of variable b. Variable b has not been declared anywhere before, so the JavaScript engine does not know this name.

fun(); // -> Uncaught ReferenceError: fun is not defined

// TypeError
const someConstValue = 5;
someConstValue = 7; // -> Uncaught TypeError: Assignment to constant variable.


// Trying to store the new value to the constant someConstValue has failed for obvious reasons, resulting in a TypeError.
let someNumber = 10;
someNumber.length(); // -> Uncaught TypeError: someNumber.length is not a function


// RangeError
// This type of error is generated when you pass a value to a function that is outside its acceptable range.
let testArray1 = Array(10);
console.log(testArray1.length); // -> 10
let testArray2 = Array(-1); // -> Uncaught RangeError: Invalid array length
console.log(testArray2.length);
