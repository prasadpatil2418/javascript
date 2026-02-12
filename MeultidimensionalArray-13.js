//multi dimensional array inclding name, age, sex, qualification
let personsbio = [["John", 25, "male", "Bachelors"],
["Jane", 22, " female", "Masters"],
["Jim", 30, "female", "PhD"],
["Jack", 27, "male", "Masters"]];
console.log(personsbio);

//how to access elements
console.log(personsbio[0]); // Output:[ 'John', 25, 'male', 'Bachelors' ]

//accessing elements in the array
console.log(personsbio[0][0]); // Output: John
console.log(personsbio[0][1]); // Output: 25
console.log(personsbio[0][2]); // Output: male
console.log(personsbio[0][3]); // Output: Bachelors

//methods in multi dimensional array
//push() method
personsbio.push(["Jill, 34, male, PhD"]);
console.log(personsbio); 

//pop() method
personsbio.pop();
console.log(personsbio);

//shift() method
