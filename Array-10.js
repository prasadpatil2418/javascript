//array
let fruits1 = ["Apple", "Banana", "Cherry", "Dates", "Elderberry"];
console.log(fruits1); // Output: ["Apple", "Banana", "Cherry", "Dates", "Elderberry"]

//length
console.log(fruits1.length); // Output: 5

// isArray
console.log(Array.isArray(fruits1)); // Output: true

// Accessing Elements
console.log(fruits1[0]); // Output: Apple
console.log(fruits1[2]); // Output: Cherry

// Modifying Elements
fruits1[1] = "Blueberry";
console.log(fruits1); // Output: ["Apple", "Blueberry", "Cherry", "Dates", "Elderberry"]

// Adding Elements
fruits1.push("Dates");  // Add to the end
console.log(fruits1); // Output: ["Apple", "Blueberry", "Cherry", "Dates", "Elderberry", "Dates"]

fruits1.unshift("Apricot"); // Add to the front
console.log(fruits1); // Output: ["Apricot", "Apple", "Blueberry", "Cherry", "Dates", "Elderberry", "Dates"]

// Removing Elements
fruits1.pop(); // Remove from the end
console.log(fruits1); // Output: ["Apricot", "Apple", "Blueberry", "Cherry", "Dates", "Elderberry"]

fruits1.shift(); // Remove from the front   
console.log(fruits1); // Output: ["Apple", "Blueberry", "Cherry", "Dates", "Elderberry"]

//Finding Elements in an Array
// indexOf, lastIndexOf, includes
console.log(fruits1.indexOf("Apple")); // Output: 0
console.log(fruits1.indexOf("Banana")); // Output: -1
console.log(fruits1.lastIndexOf("Blueberry")); // Output: 1
console.log(fruits1.includes("Banana")); // Output: false 

// find, findIndex
let found = fruits1.find(fruit => fruit.startsWith("B")); // Find first fruit that starts with "B"
console.log(found); // Output: Blueberry

let foundIndex = fruits1.findIndex(fruit => fruit.startsWith("B")); // Find index of first fruit that starts with "B"
console.log(foundIndex); // Output: 1

// Slicing an Array
let sliced = fruits1.slice(1, 4);
console.log(sliced); // Output: ["Blueberry", "Cherry", "Dates"]

// Splicing an Array
let spliced = fruits1.splice(1, 2, "Banana", "Blackberry");
console.log(spliced); // Output: ["Blueberry", "Cherry"]
console.log(fruits1); // Output: ["Apple", "Banana", "Blackberry", "Dates", "Elderberry"]

// Concatenating Arrays
let vegetables = ["Carrot", "Daikon"];
let fruitsAndVegetables = fruits1.concat(vegetables);
console.log(fruitsAndVegetables); // Output: ["Apple", "Banana", "Blackberry", "Dates", "Elderberry", "Carrot", "Daikon"]









