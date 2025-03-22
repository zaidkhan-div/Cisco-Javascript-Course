// setTimeout and setInterval functions

// The setTimeout function is used when you want to cause a delayed action. A similar function is setInterval. This time, the action is also performed with a delay, but periodically, so it is repeated at fixed intervals. In the meantime, the main program is executed, and at every specified time, the callback given as an argument for a setInterval call is called.

// Interestingly, the setInterval function returns an identifier during the call, which can be used to remove the timer used in it (and consequently to stop the cyclical callback function call). We will do this in the next example. First, we run setInterval, which will call the callback function (i.e. the inner function) in one-second intervals. Then we call setTimeout, which will turn off the timer associated with the previously called setInterval after 5.5 seconds. As a result, the inner function should be called five times. In the meantime, the rest of the program will be executed ...

let inner = function () {
    console.log('inner 1');
}
let outer = function (callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000) /*ms*/;
    console.log('outer 2');
    setTimeout(function () {
        clearInterval(timerId);
    }, 5500);
}
console.log('test 1');
outer(inner);
console.log('test 2');


// outer 1
// outer 2
// test 2
// ...
// inner 1
// inner 1
// inner 1
// inner 1
// inner 1