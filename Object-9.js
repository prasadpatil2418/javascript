//object methods
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
// Get the keys of the object
const keys = Object.keys(person);
console.log(keys); // Output: ['name', 'age', 'city']
// Get the values of the object
const values = Object.values(person);
console.log(values); // Output: ['John', 30, 'New York']
// Get the entries of the object
const entries = Object.entries(person);
console.log(entries); // Output: [['name', 'John'], ['age', 30], ['city', 'New York']]
// Check if the object has a property
const hasName = person.hasOwnProperty('name');
console.log(hasName); // Output: true
const hasGender = person.hasOwnProperty('gender')
console.log(hasGender); // Output: false
//Accessing Object Properties
console.log(person.name); // Output: Alice
console.log(person.age);  // Output: 25
console.log(person['city']); // Output: New York
//Adding and Updating Properties
person.name = 'Bob';
person['age'] = 26;
person.city = 'California';
console.log(person); // Output: { name: 'Bob', age: 26, city: 'California' }
//Deleting Properties
delete person.age;
console.log(person); // Output: { name: 'Bob', city: 'California' }

// Merge two objects
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 3, c: 4 }    

//function in object
let car = {
    brand: "Toyota",
    start: function() {
        console.log("Car is starting...");
    }
};
car.start(); // Output: Car is starting...

//this keyword
let user = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
user.greet(); // Output: Hello, John

//object destructuring
const person1 = {
    name1: "John",
    age: 30,
    city: "New York"
};
const { name1, age, city } = person1;
console.log(name1); // Output: John
console.log(age);  // Output: 30

//Object Iteration
const person2 = {
    name: "John",
    age: 30,
    city: "New York"
};
// Using for...in loop
for (let key in person2) {
    console.log(key + ": " + person2[key]);
}
// Output:  name: John  age: 30  city: New York    

//using map
const person3 = {
    name: "John",
    age: 30,
    city: "New York"
};
const entries1 = Object.entries(person3);
const personMap = new Map(entries1);
personMap.forEach((value, key) => {
    console.log(key + ": " + value);
});
// Output:  name: John  age: 30  city: New York
