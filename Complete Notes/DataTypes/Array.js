// Array
// An array, like an object, is a complex data type that can be used to store a data collection. Similar to an object, the stored data (the values) can be of any type. The difference between these structures is that in an array we only store values, without the associated names (i.e. the keys).

// So how do we know which element of the array we are referring to if we cannot point to it by name? We know it because the elements of the array are ordered (but not necessarily sorted) and take up consecutive, numbered positions inside it. The number of the field where a particular value in the array is located is called an index or a position. The index starts from 0.

// The easiest way to create arrays in JavaScript is to use square brackets (it’s an array literal). This way, we can create both an empty array, into which the elements will be inserted later, and an array containing some initial elements (which will be separated by commas). Referring to a particular array element, we use bracket notation – after the name of the array variable, we write a square parenthesis, in which we put the index of the element we are interested in.


let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri

days[0] = "Sunday";
console.log(days[0]);  //  ->  Sunday

let emptyArray = [];
console.log(emptyArray[0]);  //  ->  undefined


let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);  //  ->  Sun
console.log(days[2]);  //  ->  Tue
console.log(days[5]);  //  ->  Fri

days[0] = "Sunday";
console.log(days[0]);  //  ->  Sunday

let emptyArray = [];
console.log(emptyArray[0]);  //  ->  undefined


let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]);  //  ->  ["Olivia",  "Emma",  "Mia",  "Sofia"]
console.log(names[0][1]);  //  ->  Emma
console.log(names[1][1]);  //  ->  James

let femaleNames = names[0];
console.log(femaleNames[0]);  //  ->  Olivia
console.log(femaleNames[2]);  //  ->  Mia


// 2.2.2 What can arrays be useful for in practice?
let users = [
    {
        name: "Calvin",
        surname: "Hart",
        age: 66,
        email: "CalvinMHart@teleworm.us"
    },
    {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
    }
];
users[2] = {
    name: "Irene",
    surname: "Purnell",
    age: 32,
    email: "IreneHPurnell@rhyta.com"

}
console.log(users[0].name);  //  ->  Calvin
console.log(users[1].age);  //  ->  21
