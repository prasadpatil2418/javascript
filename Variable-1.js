// var keyword is used to declare a variable in JavaScript.
var x = 10;
console.log(x);  // Output: 10
var x = 20;  // Redeclaration allowed
console.log(x);  // Output: 20

// let keyword is used to declare a block-scoped variable in JavaScript.
let y = 15;
console.log(y);  // Output: 15
y = 25;  // Allowed
console.log(y);  // Output: 25
// let y = 30;  // ❌ Error: Cannot redeclare y

// const keyword is used to declare a block-scoped constant in JavaScript.
const z = 50;
console.log(z);  // Output: 50
// z = 60;  // ❌ Error: Cannot reassign a const variable

//global variable
var a = 10;
function test() {
    console.log(a);  // Output: 10
}
test(); // 10

//local variable
function test() {
    var b = 20;
    console.log(b);  // Output: 20
}
test(); // 20
// console.log(b);  // ❌ Error: b is not defined

//hoisting
console.log(c);  // Output: undefined
var c = 5;
console.log(c);  // Output: 5

//console.log(d);  // ❌ Error: Cannot access 'd' before initialization
//d = 10;
let d = 10;
console.log(d);  // Output: 10

demo () // Output: "Hello, World!"
function demo() {
    console.log("Hello, World!");
}

//greet()  // Output: ❌ Error: Cannot access 'greet' before initialization
var greet = function() {
    console.log("Hello, World!");
}
greet();  // Output: Hello, World!

