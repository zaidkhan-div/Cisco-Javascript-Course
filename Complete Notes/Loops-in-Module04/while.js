// The while loop
// Let's start with an example where we do not use a loop. Our goal is to write out the consecutive numbers 0, 10, 20, 30, 40, 50, 60, 70, 80 and 90 on the console.

console.log(0); // -> 0
console.log(10); // -> 10
console.log(20); // -> 20
console.log(30); // -> 30
console.log(40); // -> 40
console.log(50); // -> 50
console.log(60); // -> 60
console.log(70); // -> 70
console.log(80); // -> 80
console.log(90); // -> 90


// The repeating code fragment is enclosed in a separate code block, and using the word while, we specify that it is to be executed as long as the value of variable n is less than 91.

let n = 0;
while (n < 91) {
    console.log(n); // -> 0, 10, 20, 30, 40, 50, 60, 70, 80, 90
    n += 10;
}


while (condition) {
    // block of code
}

// The while loop is one of the loops that we normally use when we don't know exactly how many times something should be repeated, but we do know when to stop. The syntax of the while loop is as follows:


let isOver = false;
let counter = 1;

while (isOver != true) {
    let continueLoop = confirm(`[${counter}] Continue the loop?`);
    isOver = continueLoop === true ? false : true;
    counter = counter + 1;
}
// The loop will be repeated until the isOver variable is set to true.
// Note that the counter variable is not used in the while condition, as its role is only informative. Clicking on the OK button in the confirm dialog will cause the continueLoop variable to be set to true (otherwise it will be set to false).


let isOver2 = false;
let counter2 = 1;

while (!isOver2) {
    isOver2 = !confirm(`[${counter2++}] Continue the loop?`);
}



