// Limited confidence

// Programs are not run in a vacuum. Usually during their execution, there are interactions with users (e.g. entering data needed to calculate certain values) or other programs or systems (e.g. downloading data from the server). The behavior of both users and other systems should be treated with caution, and we cannot assume that the user will provide data in the format we require, or that the data server will always work. Such unexpected situations will also be sources of errors in our program. And although they are not directly dependent on us, it is our responsibility to anticipate potentially dangerous situations. If, for example, we write a calculator to which the user enters their values, then we should probably check if the divisor is not a zero before we do the division. Theoretically, the user should know that we do not divide by zero, but we are responsible for the stability of the program. Do not believe the user or other systems. Predict what may go wrong, and check the data received before you use it in your program.

// Let's write a piece of code that will ask you to enter two numbers. We then want to display the result of dividing the first number by the second:

let sX = prompt("Enter the first number");
let sY = prompt("Enter the second number");
let x = Number(sX);
let y = Number(sY);
if (Number.isFinite(x) && Number.isFinite(y) && y !== 0) {
    console.log(x / y);
} else {
    console.log("incorrect arguments");
}

// You probably remember the prompt function, which displays a dialog box into which we can enter a value. Prompt will return the entered value, always as a string (even if the user enters a number, e.g. they enter 1024, but we get the string "1024"). We are explicitly converting such a string into a number using the Number constructor (this will be discussed in detail in the next course). Since we disbelieve the user, we predict that instead of a number, they could have given a string such as "abcd", or a second value equal to "0". Therefore, before we perform the division, we check whether we can accept the converted values. We use the Number.isFinite method for this purpose. It returns true if the argument is a correct number, and false if it is, for example Infinity or NaN. Additionally, we check if the divisor is not zero.

