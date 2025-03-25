// Try to remember some basic things:

// While writing and testing the program, carefully read everything that appears on the console. Error information is usually quite precise, so do not try to make corrections blindly.
// Just because you have eliminated all syntax and semantic errors, does not mean that the program is already 100% correct. Logical errors can only occur under certain specific circumstances.
// Anticipate and be distrustful of users, their behavior, and the data they input. You cannot assume that the data you receive will always be correct.
// Check the JavaScript documentation for the behavior of operators and functions in the case of errors. Sometimes exceptions will be thrown, sometimes a specific value will be returned (remember the arithmetic errors). However, always try to be prepared to handle errors.


// Section Summary Practice

// Exercise 1: Write your own div function that will take two call arguments and return the result of dividing the first argument by the second. In JavaScript, the result of dividing by zero is the value Infinity (or -Infinity, if we try to divide a negative number). Change this. If you pass 0 as the second argument, your function should throw a RangeError exception with the appropriate message. Prepare a test call of the function for both valid division and division by zero.

function div(a, b) {
    if (b == 0) {
        throw new RangeError("Can't divide by 0");
    }
    return a / b;
}
console.log(div(4, 2)); // -> 2
console.log(div(4, 0)); // -> Uncaught RangeError: Can’t divide by 0

// Exercise 2: The following array of numbers has been declared:

let numbers = [10, 40, 0, 20, 50];
// Write a program that, in a loop, divides the number 1000 by successive elements of the numbers array, displaying the result of each division. To divide the numbers, use the function from the previous task. Use the try...catch construction to handle an exception thrown in the case of division by zero. If such an exception is caught, the program should print an appropriate message (taken from the exception) and continue its operation (division by successive elements of the array).

for (let i = 0; i < numbers.length; i++) {
    let result;
    try {
        result = div(1000, numbers[i]);
    } catch (e) {
        result = e.message;
    }
    console.log(result);
}