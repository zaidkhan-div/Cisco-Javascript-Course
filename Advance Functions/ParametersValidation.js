// Paramter Validation

// Remember how we said that we sometimes use the return keyword to interrupt functions in the case of errors? A good example is the validation of function parameters.

// Let's go back to the example with the getMeanTemp function. The last version we wrote needs an array of numbers as an argument. Before starting the calculation, we can check if the value passed to it is actually an array.

function getMeanTemp(temperatures) {
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}
console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20
