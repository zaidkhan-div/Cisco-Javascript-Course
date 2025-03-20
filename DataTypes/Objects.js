// 2.2.1 Complex data types
// We will limit the discussion of complex types to only two of them: objects and arrays. Unfortunately, even these types will have to be presented in a simplified way. This should be enough to use them in their basic scope, but more advanced techniques related to them as well as other complex types will be introduced only in the next parts of the course.

// Object
// Objects have many applications in JavaScript. One of the most basic, and at the same time the only one that we will deal with now, is to use it as a structure known in computer science as a record. A record is a collection of named fields. Each field has its own name (or key) and value assigned to it. In the case of JavaScript objects, these fields are usually called properties. Records, or in our case objects, allow you to store multiple values of different types in one place. In JavaScript, there are a few ways to create objects, but the easiest and fastest is to use the curly bracket literal.


let  testObj  =  {};
console.log(typeof  testObj);  //  ->  object

let  name1  =  "Calvin";
let  surname1  =  "Hart";
let  age1  =  66;
let  email1  =  "CalvinMHart@teleworm.us";
   
let  name2  =  "Mateus";
let  surname2  =  "Pinto";
let  age2  =  21;
let  email2  =  "MateusPinto@dayrep.com";


let  user1  =  {
    name:  "Calvin",
    surname:  "Hart",
    age:  66,
    email:  "CalvinMHart@teleworm.us"
};

let  user2  =  {
    name:  "Mateus",
    surname:  "Pinto",
    age:  21,
    email:  "MateusPinto@dayrep.com"
};



console.log(user1.name);  //  ->  Calvin
console.log(user2.name);  //  ->  Mateus
   
console.log(user1.age);  //  ->  66
user1.age  =  67;
console.log(user1.age);  //  ->  67
   
console.log(user2.phone);  //  ->  undefined
user2.phone  =  "904-399-7557";
console.log(user2.phone);  //  ->  904-399-7557
