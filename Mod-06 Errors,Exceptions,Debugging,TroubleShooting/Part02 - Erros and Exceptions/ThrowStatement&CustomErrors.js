// The throw statement and custom errors

// There are several reasons why you generate your own exceptions. Most of them are quite complex and not very useful at this stage of learning. The easiest situation to imagine is when you write a function of your own, which should signal the incorrect data that has been passed to it.

// To throw an exception, we use the throw instruction. It is followed by any value that will be treated as an exception. It can be, for example, a number, or one of the ready-made error objects (e.g. RangeError).

// An exception that we throw will cause the program to react in the same way as the original JavaScript exceptions (i.e. it will stop its execution). That is, unless we throw it inside the try block to handle it. Let's look at a simple example, without trying to find any special meaning in it. This is just an illustration of the use of the throw instruction

console.log("start"); // -> start
throw 100; // -> Uncaught 100
console.log("end");


// Let's close the throw instruction inside the try block:
console.log("start"); // -> start
try {
    throw 100;
} catch (error) {
    console.log(error); // -> 100
}
console.log("end"); // -> end

// This time, our exception is caught and handled in the catch block, and doesn’t interrupt further execution.

// Let's try to write something a little more sensible.

function factorial(n) {
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial(3)); // -> 6
console.log(factorial(5)); // -> 120
console.log(factorial(8)); // -> 40320
console.log(factorial(20)); // -> 2432902008176640000
console.log(factorial(1000)); // -> Infinity
// Factorial

// Let's say that we are a little scared by the large numbers returned by our function, especially the Infinity value, so we decide to limit the maximum range of supported values. We will not accept arguments larger than 20.

function factorial2(n) {
    if (n > 20) {
        throw new RangeError("Max value 20");
    }
    let result = 1;
    for (; n > 1; n--) {
        result = result * n;
    }
    return result;
}

console.log(factorial2(20)); // -> 2432902008176640000
console.log(factorial2(1000)); // -> Uncaught RangeError: Max value 20

