// Functions as first-class members

// In JavaScript, functions are first-class members. This term means that functions can be treated as any data, which can be stored in variables or passed as arguments to other functions. For example, we can declare the showMessage function and then store it in the variable sm.
function showMessage(message) {
    console.log(`Message: ${message}`);
}
let sm = showMessage;
sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function


// This property is especially useful when passing the function as a call parameter to other functions, which we will soon learn more about. For now, let's test that something like this  is actually feasible.

function add(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function operation(func, first, second) {
    return func(first, second);
}
console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200


