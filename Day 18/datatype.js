// primitive data types 
 
/* 7 types of primitive data types 
    1. String
    2. Number
    3. Boolean
    4. Null
    5. Undefined
    6. Symbol
    7. BigInt 
*/

let name = "Hashir";
let Score = 100;
let isLoggedIn = true;
let user = null;
let userName;

let id = Symbol("123");
let AnotherId = Symbol("123");

console.log(id === AnotherId);

console.log(id);
console.log(AnotherId)

let bigIntValue = 1232132132132132132132132131n;



// Reference (non-primitive) data types 

/*  1. Array
    2. Object
    3. Function
*/

const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits)

let myObj = {
    name: "Hashir",
    age: 20,
}

console.log(myObj);

function greet(){
    console.log("Hello, World");
}

greet();
greet();
greet();
greet();
greet();
