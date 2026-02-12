//function declaration
function greet() {
    console.log("Hello, World!");
}

greet();  // Calling the function // Output: Hello, World!

//function expression
let greet1 = function() {
    console.log("Hello, World!");
};
greet1();   // Output: Hello, World!

//function with parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3));  // Output: 8

//function with default parameters
function greet2(name = "Alice") {
    console.log("Hello, " + name);
}
greet2();  // Output: Hello, Alice
greet2("Bob");  // Output: Hello, Bob

//function with rest parameters
function sum(...args) {
    let total = 0;
    for (let i of args) {
        total += i;
    }
    return total;
}
console.log(sum(1, 2, 3));  // Output: 6

//function with spread operator
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));  // Output: 6

//function with return statement
function multiply(x, y) {
    return x * y;
}

let result = multiply(4, 5);
console.log(result); // Output: 20

//function with arrow function
const square = (num) => num * num;
console.log(square(6)); // Output: 36

//function with arrow function and return statement
const greet3 = (name) => {
    return `Hello, ${name}!`;
};
console.log(greet3("Bob")); // Output: Hello, Bob!

//higher order function
function greet4() {
    return function() {
        console.log("Hello!");
    };
}
const greeter = greet4();
greeter(); // Output: Hello!


