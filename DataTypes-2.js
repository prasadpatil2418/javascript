/*String → "Hello"
Number → 100, 3.14
Boolean → true, false
Undefined → Variable declared but not assigned.
Null → Intentional empty value.
BigInt → Large integers (e.g., 9007199254740991n).
Symbol → Unique and immutable identifier.*/

let name = "Alice";  // String
let age = 25;        // Number
let isStudent = true;  // Boolean
let score;           // Undefined
let emptyValue = null;  // Null
let bigNumber = 12345678901234567890n;  // BigInt
let id = Symbol("unique");  // Symbol

console.log(typeof name);  // "string"
console.log(typeof age);   // "number"
console.log(typeof isStudent);  // "boolean"
console.log(typeof score);  // "undefined"
console.log(typeof emptyValue);  // "object" (this is a JavaScript bug!)
console.log(typeof bigNumber);  // "bigint"
console.log(typeof id);  // "symbol"

/*Objects → {name: "Alice", age: 25}
Arrays → [1, 2, 3]
Functions → function() */

let person = { name: "Alice", age: 25 };  // Object
let numbers = [10, 20, 30];  // Array
let greet = function() { console.log("Hello!"); };  // Function

console.log(typeof person);  // "object"
console.log(typeof numbers);  // "object"
console.log(typeof greet);  // "function"
