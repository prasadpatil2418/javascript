//Iterating Over Arrays
let arr = [1, 2, 3, 4, 5];

// Using for loop
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//output: 1 2 3 4 5

// Using for...of loop
for (let item of arr) {
    console.log(item);
}
//output: 1 2 3 4 5

// Using forEach
arr.forEach(item => console.log(item));

// Using map
let newArr = arr.map(item => item * 2);
console.log(newArr); // Output: [2, 4, 6, 8, 10]

// Using filter
let evenNumbers = arr.filter(item => item % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

// Using reduce
let sum = arr.reduce((total, current) => total + current, 0);
console.log(sum); // Output: 15

// Using some
let hasNegativeNumbers = arr.some(item => item < 0);
console.log(hasNegativeNumbers); // Output: false

let hasPositiveNumbers = arr.some(item => item > 0);
console.log(hasPositiveNumbers); // Output: true

// Using every
let allPositiveNumbers = arr.every(item => item > 0);
console.log(allPositiveNumbers); // Output: true

let allEvenNumbers = arr.every(item => item % 2 === 0);
console.log(allEvenNumbers); // Output: false

// Using find
let firstEvenNumber = arr.find(item => item % 2 === 0);
console.log(firstEvenNumber); // Output: 2

// Using findIndex
let firstEvenNumberIndex = arr.findIndex(item => item % 2 === 0);
console.log(firstEvenNumberIndex); // Output: 1

// Using includes
let includes = arr.includes(3);
console.log(includes); // Output: true

//sort reverse array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // Output: ["Orange", "Mango", "Banana", "Apple"]

// sort array
let numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// reverse array
let reversed = ["Apple", "Mango", "Cherry", "Dates", "Elderberry"]
reversed.reverse();
console.log(reversed); // Output: ["Elderberry", "Dates", "Cherry", "Mango", "Apple"]

// fill array
let filled = new Array(5).fill(0); // Fill array with 0
console.log(filled); // Output: [0, 0, 0, 0, 0]

// copyWithin array
let copied = [1, 2, 3, 4, 5];
copied.copyWithin(0, 2) // Copy elements from index 2 to the start
console.log(copied); // Output: [3, 4, 5, 4, 5]

// keys array
let fruits1 = ["Apple", "Banana", "Cherry", "Dates"];
let keys = fruits1.keys(); // Get iterator for keys
for (let key of keys) {
    console.log(key); // Output: 0, 1, 2, 3
}

// values array
let values = fruits1.values(); // Get iterator for values
for (let value of values) {
    console.log(value); // Output: Apple, Banana, Cherry, Dates
}

// entries array
let entries = fruits1.entries(); // Get iterator for entries
for (let entry of entries) {
    console.log(entry); // Output: [0, "Apple"], [1, "Banana"], [2, "Cherry"], [3, "Dates"]
}

// from array
let arr1 = Array.from("hello"); // Convert string to array
console.log(arr1); // Output: ["h", "e", "l", "l", "o"]

let arr2 = Array.from([1, 2, 3], x => x * 2); // Apply function to each element
console.log(arr2); // Output: [2, 4, 6]

let arr3 = Array.from({ length: 5 }, (_, index) => index); // Generate array of numbers
console.log(arr3); // Output: [0, 1, 2, 3, 4]



