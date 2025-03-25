// The try...catch statement
// As we said before, exceptions interrupt the program execution. The try...catch construction, which we also mentioned before, allows you to change this default action. The program will interrupt what it is currently doing, but it will not terminate automatically. The syntax for try...catch looks like this:

try {
    // code to try
} catch (error) {
    // code to run in case of an error, which throw an exception
}

// The basic premise is simple: if we have a piece of code that can possibly go wrong, we can enclose it in the try clause. JavaScript will try to execute this code, and if any error occurs and an exception is thrown, the code inside the catch block will be executed; if the try code is executed without errors, then the catch block is ignored. After executing the commands from the catch block, the program will continue to run from the first instruction outside the try...catch statement.

try {
    let a = b;
} catch (error) {
    console.log("Caught " + error); // -> Caught ReferenceError: b is not defined
}
console.log("We handled the exception!"); // -> we handled the exception!


