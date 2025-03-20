// The break and continue statements

// The break statement is used to terminate the execution of a loop or a switch statement. In each of these contexts, whenever the JavaScript engine encounters a break statement, it exits the whole loop or switch statement, and jumps to the first statement after that loop or switch.

// In the example, we can see an infinite while loop that will be exited using break after the variable i becomes greater than or equal to 5. Such a use of break is only of illustrative importance, because it would make more sense to include this condition directly in the while construction.

let i = 0;
// An infinite loop
while (true) {
    console.log(i);
    i++;
    if (i >= 5) {
        break;
    }
}
alert(`Exited the loop with a break (${i}).`);


// Just like break, continue can be used in loops (but not in the switch statement). When used, it applies to the closest surrounding loop. The continue statement, in contrast to break, does not end the whole loop, but rather starts the next iteration of this loop.

// We can think of it as jumping right to the end of the current iteration.
for (let i = 0; i < 10; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
