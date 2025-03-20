// Alert dialog box


alert("Hello, World!")
window.alert("Hello, World! for the second time");

alert(4 * 7);
alert(true);

alert("text 1", "text 2"); // only "text 1" will be displayed

// Confirm dialog box
let decision = window.confirm("Is it OK?");
console.log(decision);


let name = window.prompt("What is your name?", "John Doe");
name = name ? name : "anonymous";
 
let age = prompt("Hello " + name + " how old are you?");
alert(name + " is " + age + " years old");
