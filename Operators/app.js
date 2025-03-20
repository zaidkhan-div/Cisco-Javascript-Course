// we have assignment; arithmetic; logical; or conditional operators.

// Assignment operators =
const name = "Alice";

// Arithmetic operators
// Arithmetic operators express mathematical operations, and they accept numerical values and variables.
console.log(2 + 2 * 2); // -> 6

// The basic binary arithmetic operators are the addition +, subtraction -, multiplication *, division /, division remainder % and power **. 

// Unary arithmetic operators
// There are also several unary arithmetic operators (operating on a single operand). Among them there are the plus + and minus - operators.
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number
console.log(`${n2} : ${typeof n2}`); // -> -123 : number
console.log(`${n3} : ${typeof n3}`); // -> 123 : number
console.log(`${n4} : ${typeof n4}`); // -> NaN : number



// Logical operators
// Logical operators work with Boolean type values (true or false). For now, we can assume that they work on operands of this type and return values of this type only. JavaScript provides us with three such operators:

// a conjunction, i.e. logical AND (&& symbol)
// an alternative, i.e. logical OR (symbol ||)
// a negation, i.e. logical NOT (symbol !)

let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0


let names = ["Patti", "Bob"];
let name = names[0];
console.log(names instanceof Array); // -> true
console.log(name instanceof Array); // -> false
// this is to check weather a variable contains an Array or not

let user = {
    name: "Alice",
    age: 38
};
console.log(user.age); // -> 38
delete user.age;
console.log(user.age); 

// ternary
console.log(true ? "Alice" : "Bob"); // -> Alice
console.log(false ? "Alice" : "Bob"); /