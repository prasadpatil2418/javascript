//array of objects
let fruits = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
    { name: "Dates", color: "Brown" },
    { name: "Elderberry", color: "Black" }
];

//forEach
fruits.forEach(fruit => console.log(fruit.name));
//output: Apple Banana Cherry Dates Elderberry

//map
let fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames); // Output: ["Apple", "Banana", "Cherry", "Dates", "Elderberry"]

//filter
let redFruits = fruits.filter(fruit => fruit.color === "Red");
console.log(redFruits); // Output: [{ name: "Apple", color: "Red" }, { name: "Cherry", color: "Red" }]

//reduce
let fruitColors = fruits.reduce((colors, fruit) => {
    colors.push(fruit.color);
    return colors;
}, []);
console.log(fruitColors); // Output: ["Red", "Yellow", "Red", "Brown", "Black"]

//some
let hasBlackFruit = fruits.some(fruit => fruit.color === "Black");
console.log(hasBlackFruit); // Output: true

let hasGreenFruit = fruits.some(fruit => fruit.color === "Green");
console.log(hasGreenFruit); // Output: false

//every
let allRedFruits = fruits.every(fruit => fruit.color === "Red");
console.log(allRedFruits); // Output: false

let allFruitsHaveNames = fruits.every(fruit => fruit.name);
console.log(allFruitsHaveNames); // Output: true

//find
let cherry = fruits.find(fruit => fruit.name === "Cherry");
console.log(cherry); // Output: { name: "Cherry", color: "Red" }

//findIndex
let cherryIndex = fruits.findIndex(fruit => fruit.name === "Cherry");
console.log(cherryIndex); // Output: 2

//includes
let includesBanana = fruits.some(fruit => fruit.name === "Banana");
console.log(includesBanana); // Output: true

let includesGrapes = fruits.some(fruit => fruit.name === "Grapes");
console.log(includesGrapes); // Output: false

//sort
fruits.sort((a, b) => a.name.localeCompare(b.name));
console.log(fruits); // Output: [{ name: "Apple", color: "Red" }, { name: "Banana", color: "Yellow" }, { name: "Cherry", color: "Red" }, { name: "Dates", color: "Brown" }, { name: "Elderberry", color: "Black" }]

//reverse
fruits.reverse();
console.log(fruits); // Output: [{ name: "Elderberry", color: "Black" }, { name: "Dates", color: "Brown" }, { name: "Cherry", color: "Red" }, { name: "Banana", color: "Yellow" }, { name: "Apple", color: "Red" }]


