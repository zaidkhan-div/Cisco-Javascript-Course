
// Step-by-step program execution

// One of the main features of the debugger is its ability to execute code on a step-by-step basis. This means that we can stop program execution at any place using a debugger statement, and then continue execution one instruction at a time.

// This is really helpful when we suspect that the program behavior or logic is flawed, and the code goes to an incorrect branch of execution (it goes to the wrong if statement, etc.). In this mode, we can see each line that is executed, and each line that is not. We can easily see if the logic in the flow control statements is valid or not.

// So we know already that the debugger statement, when encountered by JavaScript, will stop code execution at that place. Depending on the browser we’re using, the flow control buttons can look different, and can be located in different places. In general, all modern browsers support the following options to control the execution of the script in debug mode:

// Resume / Continue. This will resume the execution of the script in a normal way, and is used when we’ve checked what we wanted to check, and now we want to continue with the execution of the script.

// Step Into. This executes the next instruction in the code only, and pauses it again, and we use this when we want to analyze the code in detail, or check which exact path the execution takes when complex branching is happening due to cascading if...else statements, or other complicated logic. If the next instruction is a function call, using Step Into will jump inside the code of this function.

// Step Over. This works like Step Into, except that if this is used when the next instruction is a function call, the code will not jump into the function code, but the whole function will be executed, and the program will be paused again after jumping out of this function. This is often used when the next instruction is a call to a function where we don’t know if it will have any impact, or we’re simply not interested in looking.

// Step Out. This allows us to immediately jump out of a function in which the code is paused.
// Let's try to practice some basic actions that can be performed with the debugger.

// The JavaScript program we will be debugging should be rewritten in your local development environment (for some reason, debugging is more readable if we don't use our platform in these exercises).

// Remember how you can do something like this? At the beginning of the course, we ran our code by opening a simple HTML file in the browser, which included a reference to the JavaScript file to be run (the chapter titled "The Hello, World! Program").