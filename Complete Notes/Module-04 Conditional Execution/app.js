let isUserReady = confirm("Are you ready?");
console.log(isUserReady);
if (isUserReady) {
    alert("User ready!");
}
let unitPrice = 10;
let pieces = prompt("How many pieces do you order?", 0);
if (pieces > 0) {
    let total = unitPrice * pieces;
    console.log(total);
}
console.log(total); // -> Uncaught ReferenceError: total is not defined
let userAge = 23;
let isFemale = false;
let points = 703;
let cartValue = 299;
let shippingCost = 9.99;
 
if (userAge > 21) {
    if (cartValue >= 300 || points >= 500) {
        shippingCost = 0;
    }
}
 
console.log(shippingCost);
if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
    shippingCost = 0;
}
let isUserReady = confirm("Are you ready?");
 
if (isUserReady) {
    console.log("User ready!");
} else {
    console.log("User not ready!");
}
if (conditions_1) {
    code
  } else if (condition_2) {
    code
  } else if (condition_3) {
    code
  } else {
    code
  }
  let number = prompt("Enter a number", 0);
 
  if (number < 10) {
      alert("<10");
  } else if (number < 30) {
      alert("<30");
  } else if (number < 60) {
      alert("<60");
  } else if (number < 90) {
      alert("<90");
  } else if (number < 100) {
      alert("<100");
  } else if (number == 100) {
      alert("100")
  } else {
      alert(">100")
  }
    