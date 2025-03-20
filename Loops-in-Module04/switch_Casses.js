let gate = prompt("Choose gate: a, b, or c");
let win = false;
 
switch (gate) {
    case "a":
        alert("Gate A: empty");
    case "b":
        alert("Gate B: main prize");
        win = true;
    case "c":
        alert("Gate C: empty");
    default:
        alert("No gate " + String(gate));
}
 
if (win) {
    alert("Winner!");
}
// We also need to say a few words about the break keyword. In the example, the break keyword is present in all cases except in the default case. In contrast to if statements, switch statements do not execute just one branch, but rather they execute the entire code from the first case that matches until the end of the switch statement. This behavior is called pass-through and has some uses, but most of the time we want to execute only one branch, and for that reason the break keyword is present. When a JavaScript interpreter comes to a break, it will jump out of the current switch statement.

// To understand this better, look at this slightly modified example of a switch statement: