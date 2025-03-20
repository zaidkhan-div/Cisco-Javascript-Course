// Recursion

// During your math lessons, you probably came across the concept of factorials. A factorial is a function, indicated by an exclamation mark in mathematical notation. We pass an integer to this function and its result is obtained by multiplying all integers from the number 1 to the number given as an argument. Formally, you define a factorial as follows:

// n!=n∙(n-1)∙(n-2)∙... ∙2∙1

// So, for example, the factorial of 6 is:

// 6!=6∙5∙4∙3 ∙2∙1=720

// Let's try to write a function that will calculate the factorial from the given number.

// It will take the parameter n and return the calculated value.

function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}
console.log(factorial(6)); // -> 720

// In this case, we use the iterative approach to calculate the factorial, in other words, we use a loop in which, during each iteration we multiply the previous result by another element of the sequence.

// After the first iteration, the result is 6, after the second, 30, after the third, 120, and so on. The iterations are repeated to the last significant element of the sequence, that is, to the value 2 (hence the condition of ending the loop n > 1).

// However, the definition of a factorial can be written in a slightly different way. It will be the factorial of the previous element n - 1 multiplied by n.

// For example, 6! is 5! multiplied by 6. Such a factorial definition uses the recursion, i.e. referring a function to itself (but with a different argument). A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions and present them in an elegant form. We can also successfully use recursion in programming.

// Let's declare the factorial function again, this time using recursion.

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1; // functions called inside the function
}
console.log(factorial(6)); // -> 720
