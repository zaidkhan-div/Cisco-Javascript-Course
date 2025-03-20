// Parameters
function add(first, second) {
    return first + second;
}
let result = add(5, 7);
console.log(result); // -> 12

function getElement(elements, index) {
    return elements[index];
}

let names = ["Alice", "Bob", "Eve", "John"];
let name = getElement(names, 2);
console.log(name); // -> Eve
