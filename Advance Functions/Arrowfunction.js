// Arrow functions

// An arrow function is a shorter form of a function expression. An arrow function expression is composed of: parentheses containing zero to multiple parameters (if exactly one parameter is present, the parentheses can be omitted); an arrow that looks like this "=>"; and the body of the function, which can be surrounded by curly brackets if the body is longer. If an arrow function has only one statement and returns its value, we can omit the return keyword, as it will be implicitly added.

let add = function (a, b) {
    return a + b;
}
console.log(add(10, 20)); // -> 30

let add = (a, b) => {
    return a + b;
}
console.log(add(10, 20)); // -> 30

let add = (a, b) => a + b;
console.log(add(10, 20)); // -> 30

function factorial(n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // -> 120

let names = ['Alice', 'Eve', 'John'];
function showName(element) {
    console.log(element);
}
names.forEach(showName); // -> Alice, Eve, John
