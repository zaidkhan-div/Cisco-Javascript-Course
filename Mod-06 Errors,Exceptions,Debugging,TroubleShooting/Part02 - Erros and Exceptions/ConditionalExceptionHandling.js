// Conditional exception handling
// Sometimes we want to be able to react differently to specific types of errors inside the catch block. We can do this by using the operator instanceof. We’ll discuss the operator itself further down the road, because it’s a rather complicated topic. For now, it’s enough to know how we can use it when handling errors.

// The syntax for the instanceof operator looks like this:
variable instanceof type

let result = error instanceof ReferenceError;

let a = -2;
try {
    a = b;
} catch (error) {
    if (error instanceof ReferenceError) {
        console.log("Reference error, reset a to -2"); // -> Reference error, reset a to -2
        a = -2;
    } else {
        console.log("Other error - " + error);
    }
}
console.log(a); // -> -2

// It’s important to know that any variable that gets declared using the let keyword inside a try block is not accessible in the catch block (nor in the finally block, which will be discussed in a moment). If you are not sure why this is the case, go back for a moment to the chapter on variable declarations and their scope of visibility (the block scope topic).



