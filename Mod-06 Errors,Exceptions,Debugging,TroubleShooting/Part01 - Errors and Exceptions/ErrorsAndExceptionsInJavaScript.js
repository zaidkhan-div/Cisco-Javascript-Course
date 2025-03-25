// / Errors and exceptions in JavaScript

// Let's try to generate syntax, semantic, and logical errors in JavaScript, for tests in a controlled way. Let's say we want to write a simple arrow function called multiply, which will multiply the two provided arguments:

let multiply = (a b) => a + b; // -> Uncaught SyntaxError: Unexpected identifier
let result = multiply(10, 20);
console.log(result);

// In the example, there is a typical syntax error: we’ve forgotten about the comma between the parameters of the multiply function. The error is detected by the JavaScript engine, which does not allow us to execute the program. We correct it, but we also make another error:


let multipl = (a, b) => a + b;
let result = multiply(10, 20); // -> Uncaught ReferenceError: multiply is not defined
console.log(result);

// This time, we have a typo in the name of the declared function: instead of multiply, we’ve written multipl. In the call, we use a multiply name, which does not exist. This is a semantic error, in this case easy to detect, because there is no function with this name. The execution of the program is interrupted at the line of the error. Pay attention to two things. First of all, the error messages displayed in the console quite precisely determine what and where something goes wrong – read this information carefully, as it will help to get rid of the error. The second thing is the beginning of the message – Uncaught .... If an error can be uncaught, it can probably be caught. And indeed it is, as we will see in a moment.

// First, however, let's correct the error and run the program again:

let multiply = (a, b) => a + b;
let result = multiply(10, 20);
console.log(result); // -> 30 ?

// Success, no mistakes have been made! But ... the result is slightly suspicious: 30 is certainly not the result of multiplying 10 by 20. Of course, the code is still not correct, as the function is supposed to be used for multiplication, but by mistake we have inserted an addition sign instead of multiplication. This is a typical logical error, impossible to detect automatically. From a formal point of view, everything is constructed correctly, but the logic of our function is incorrect (we’re making it do something different to what we intended). The JavaScript interpreter is not able to detect such errors, because it cannot know what we plan to achieve by writing such a function.

console.log('abc'); // -> abc
conole.log('def'); // -> Uncaught ReferenceError: conole is not defined
console.log('ghi');

// The typo in the word console is a semantic error, in JavaScript called a ReferenceError. JavaScript does not know a word like conole. As you can see, the program will stop working only at the second line, and it will still be able to execute the first line correctly. It is possible to prevent the program from stopping in such a situation. This is called exception handling (or more generally, error handling). To handle exceptions generated in JavaScript (as in many other languages) we use the try...catch statement.

try {
    console.log('abc'); // -> abc
    conole.log('abc');
} catch (error) {
    console.log(error.message); // -> conole is not defined 
}
