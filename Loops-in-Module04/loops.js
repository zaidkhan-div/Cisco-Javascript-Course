// The for loop
for (initialization; condition; increment) {
    // block of code
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// In both cases (for loop and while loop), we declare and initiate variable i before the loop starts (initially set to 0). Both loops will be executed as long as condition i < 10 is fulfilled.

// In both loops, at the end of each iteration, the value of variable i will be increased by 1. And of course, in both loops in each iteration, the current value of variable i will be printed on the console.

let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) { // i < values.length;
    sum += values[i];
}
console.log(sum); // -> 190


// Loops and arrays
let names = [];
let isOver = false;
while (!isOver) {
    let name = prompt("Enter another name or press cancel.");
    if (name != null) {
        names.push(name);
    } else {
        isOver = true;
    }
}

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}


// for … of
for (variable of array) {
    // block of code
}
// for ... of, is dedicated for use with arrays
let values1 = [10, 30, 50, 100];
let sum1 = 0;
for (let i = 0; i < values1.length; i++) {
    sum1 += values[i];
}
// console.log(sum1); // -> 190

// The version of this program using the loop for ... of will look slightly different:

let values2 = [10, 30, 50, 100];
let sum2 = 0;
for (let number of values2) {
    sum2 += number;
}
// console.log(sum); // -> 190

let cities = [
    { name: "New York", population: 18.65e6 },
    { name: "Cairo", population: 18.82e6 },
    { name: "Mumbai", population: 19.32e6 },
    { name: "São Paulo", population: 20.88e6 },
    { name: "Mexico City", population: 21.34e6 },
    { name: "Shanghai", population: 23.48e6 },
    { name: "Delhi", population: 25.87e6 },
    { name: "Tokyo", population: 37.26e6 }
];

for (let city of cities) {
    if (city.population > 20e6) {
        console.log(`${city.name} (${city.population})`);
    }
}

//  for … in
// There is also a version of the for loop that enables us to walk through object fields.
let user = {
    name: "Calvin",
    surname: "Hart",
    age: 66,
    email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
    console.log(key); // -> name, surname, age, email
};

// Using bracket notation, we improve our example by displaying not only the keys, but also their assigned values.

for (let key in user) {
    console.log(`${key} -> ${user[key]}`);
};