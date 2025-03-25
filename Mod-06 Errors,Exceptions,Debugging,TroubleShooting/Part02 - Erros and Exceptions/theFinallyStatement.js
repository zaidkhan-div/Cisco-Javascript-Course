// The finally statement
// The last optional block of the try statement is the finally block. It can be used with or without the catch block, and it’s always executed after try and catch blocks, regardless of whether any errors are thrown. The syntax for try...finally looks like this:

try {
    // code to try
} finally {
    // this will be always executed
}

// Let's do a little experiment. We will make a correct substitution to the variable a inside the try block.

let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // -> 5
}
console.log(a); // -> 5

// Let's break down our example by trying to refer to a non-existent variable, b. As you can guess, this will generate a ReferenceError error:

let a = 10;
try {
    a = b;  // ReferenceError
} finally {
    console.log(a); // -> 10
}
console.log(a);

// What’s happening this time? The exception (ReferenceError) interrupts the program in the try block. Because the JavaScript engine cannot find the catch block, it immediately jumps to the finally block, executing its contents and ending its work.

let a = 10;
try {
    a = b;  // ReferenceError
} catch (error) {
    console.log("An Error!"); // -> An Error!
} finally {
    console.log("Finally!"); // -> Finally!
}
console.log(a); // -> 10

// The finally block can also be used together with the catch block, as both of them are optional, but at least one of them is required by the try statement, and if none of them is present, a SyntaxError is thrown.

// In this case, the exception causes a jump to the catch block, then to the finally block. The program then continues to work outside of the try...catch statement.

// Finally
// 6.1.5 Why should we use a finally block?

// Now the last console.log call will never be executed, as another (this time uncaught) error is thrown in the catch block. This won’t happen if we use the finally block like this:

let a = 10;
try {
    a = b;  // First ReferenceError
} catch (error) {
    console.log(b); // Second ReferenceError
 
} finally {
    console.log("Finally!");
}
// Now the console.log call from the finally block will be executed, although this doesn't change the fact that program execution will be stopped at this second ReferenceError, as it isn’t caught.

// Nested Try Catch Blocks is help for multiple Error to occur
let a = 10;
try {
    a = b; // First ReferenceError
} catch (error) {
    try {
        console.log(b); // Second ReferenceError
    } catch {
        console.log("Second catch!"); // -> Second catch!
    }
} finally {
    console.log("Finally!"); // -> Finally!
}
