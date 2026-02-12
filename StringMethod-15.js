//String Iteration Methods using for...of loop
let str30 = "Hello";
for (let char of str30) {
    console.log(char);
}// Output: H e l l o

// String Iteration Methods using .forEach() method
let str = 'JavaScript';
[...str].forEach(char => console.log(char));
// Output: J, a, v, a, S, c, r, i, p, t


// String Iteration Methods using .map() method
let str32 = "Hello";
let chars = str32.split("").map(function (char) {
    return char;
});
console.log(chars);// Output: [ 'H', 'e', 'l', 'l', 'o' ]

// String Iteration Methods using .filter() method
let str33 = "Hello";
let vowels = str33.split("").filter(function (char) {
    return "aeiou".includes(char);
});
console.log(vowels);// Output: [ 'e', 'o' ]

// String Iteration Methods using .reduce() method
let str34 = "Hello";
let reversed = str34.split("").reduce(function (reversed, char) {
    return char + reversed;
}, "");
console.log(reversed);// Output: olleH

// String Iteration Methods using .every() method
let str35 = "Hello";
let isAlphabet = str35.split("").every(function (char) {
    return /[a-zA-Z]/.test(char);
});
console.log(isAlphabet);// Output: true

// String Iteration Methods using .some() method
let str36 = "Hello";
let hasNumber = str36.split("").some(function (char) {
    return /\e/.test(char);
});
console.log(hasNumber);// Output: true

//string comparison
let str37 = "Hello";
let str38 = "hello";
console.log(str37 === str38);  // Output: false
console.log(str37.toLowerCase() === str38.toLowerCase());  // Output: true
console.log(str37.localeCompare(str38));  // Output: 1 (different)

//String Interpolation
let str42 = "Hello";
let str43 = "World!";
let str44 = `${str42} ${str43}`;
console.log(str44);  // Output: "Hello World!"

//String Methods Chaining
let str45 = "Hello, World!";
let result = str45
    .toLowerCase()
    .split(" ")
    .reverse()
    .join(" ");
console.log(result);  // Output: "world! hello,"







