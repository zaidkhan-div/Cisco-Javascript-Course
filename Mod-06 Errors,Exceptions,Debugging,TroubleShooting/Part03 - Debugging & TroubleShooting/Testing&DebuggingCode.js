// Testing and debugging your code

// As we have already written, errors in programs happen. It is completely normal. At the beginning, you will mostly make errors resulting from a lack of knowledge of the programming language (e.g. syntax errors). They will be easy to correct, because the interpreter will detect them and usually will also suggest what is wrong. Logical errors, however, are a different problem. As we showed earlier, the interpreter has no way of detecting them, so we have to look by ourselves for the answer to the question: why does the program not work as we assumed it would?

// Let’s look at a simple example:
function average(a, b) {
    return a + b / 2;
}

console.log(average(2, 10));   // -> 7 expected: 6
console.log(average(5, 5));    // -> 7.5 expected: 5


// We see a function that calculates the average of two numbers and returns the result. The function looks simple – it adds two given numbers and divides them by 2. This code has valid syntax, there are no formal problems with it, and we expect the results of the two calls in the example to be 6 and 5. But when we run this code, the results are very different. Can you see where the error is?

return a + b / 2;

// This doesn’t work as expected (dividing the sum of two numbers by 2) because of the order of the operations. The division b / 2 is calculated first, then a is added, so this code is the same as this:

return a + (b / 2);

// and to produce the result we expect, the code should look like this:
return (a + b) / 2

// This is a good example of a logical error. The code itself is perfectly valid, nothing to complain about from the JavaScript point of view. But the function doesn't return the values that the programmer intended. Most of the time, these kinds of errors are the hardest to find if the code is not tested properly.

// Here we have another example where the error is not so obvious:

function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

// We see a function that should return the largest of three numbers. The idea of how to solve this problem is simple: when variable a is bigger than b and c, a is the largest number. If this isn’t the case, then if b is bigger than a and c, b is the largest number. If neither is true, that means that c is the largest number.