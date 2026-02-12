//For Loop
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
//output Count: 1   Count: 2   Count: 3   Count: 4   Count: 5

//while loop
let i = 1;
while (i <= 3) {
    console.log("Number:", i);
    i++;
}
//output Number: 1   Number: 2   Number: 3

var b =3;
while(b>=1){
    console.log( "Number:", b);
    b= b - 1;
}
//output Number: 3   Number: 2   Number: 1

//do while loop
let j = 5;
do {
    console.log("Value:", j);
    j++;
} while (j < 8);
//output Value: 5   Value: 6   Value: 7

//for in loop
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key, ":", person[key]);
}
//output name : Alice   age : 25   city : New York

//for of loop
let numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}
//output 10   20   30

//Nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i:", i, "j:", j);
    }
}

//contol statement
//break statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log("Count:", i);
}
//output Count: 1   Count: 2

//continue statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log("Count:", i);
}
//output Count: 1   Count: 2   Count: 4   Count: 5

//return statement
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
