//  Errors without exceptions?

// In JavaScript, not all erroneous situations throw exceptions. Many of them are handled in a slightly different way. The best example are arithmetic errors.

console.log(100 / 0); // -> Infinity
console.log(100 * "2"); // -> 200
console.log(100 * "abc"); // -> NaN

// None of the above commands will generate an exception, although they don't look like the most correct arithmetic. Dividing by zero will result in an Infinity value. Multiplication of a number by a string, which will represent a number, will automatically convert this string to a number (and then perform multiplication). An attempt to perform an arithmetic operation on a string that does not represent a number (i.e. that cannot be converted) will result in NaN (not a number). At least two of these cases are clearly wrong (the first and the third), but instead of exceptions, the information about the error is the specific value that is returned.

console.log(Math.pow("abc", "def")); // -> NaN

// This time, we use the pow method of Math, which is used to raise a given number to the given power. The Math object will be discussed in the next parts of the course, but at this point it is enough for us to say that Math.pow is simply a function that takes two numbers as arguments and returns the result of their power. However, the two strings of characters we’ve provided to this function are hard to call numbers. The function does not generate an exception, however, but returns the NaN value.

// The conclusion is quite simple – if you are learning about a new function or operator, you have to check in the documentation (e.g. on the MDN page) how they behave in the case of errors. Some of them will generate exceptions, while others will return some specific values. Depending on that, you will be able to properly prepare yourself for handling errors using the try method or simple conditional instructions. By the way, for the examples just shown, the most sensible solution would be to check if the provided values really are numbers (remember the typeof operator?).