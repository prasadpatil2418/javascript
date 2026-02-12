//Check if a Number is Prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));

//Find Factorial of given No.
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));

//Check if a String is Palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam"));

//find Palindrome in array 
const arr6 = [20, 471, 149, 98, 174, 929, 137, 131];

// Function to check if a number is a palindrome
function isPalindrome(num) {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

// Filter palindromes from the array
const palindromeNumbers = arr6.filter(isPalindrome);

// Print palindromes
console.log("Palindrome Numbers:", palindromeNumbers);

// Print count
console.log("Count:", palindromeNumbers.length);


//Check if Two Strings are Anagrams
function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(isAnagram("listen", "silent"));

//find vowels
function countVowels(str) {
    return str.match(/[aeiou]/gi)?.length || 0;
}
console.log(countVowels("hello world"));

//remove vowels
function removeVowels(str) {
    // Define vowels (both uppercase and lowercase)
    const vowels = 'aeiouAEIOU';
    // Use regex to replace vowels with an empty string
    return str.split('').filter(char => !vowels.includes(char)).join('');
}

// Example usage
let inputString = "Hello, how are you?";
let result = removeVowels(inputString);
console.log("String without vowels:", result);


//sumOfNaturalNumbers
function sumOfNaturalNumbers(n) {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers(5)); // Output: 15

//finding count from string
function countStringComponents(inputString) {
    let numbers = 0, letters = 0, specialCharacters = 0;

    for (let char of inputString) {
        if (/[0-9]/.test(char)) {
            numbers++;
        } else if (/[a-zA-Z]/.test(char)) {
            letters++;
        } else {
            specialCharacters++;
        }
    }

    return {
        numbers: numbers,
        letters: letters,
        specialCharacters: specialCharacters
    };
}
// Example usage
const input = "Hello123!@#";
const resultN = countStringComponents(input);
console.log("Numbers:", resultN.numbers);
console.log("Letters:", resultN.letters);
console.log("Special Characters:", resultN.specialCharacters);

//check array element
let countries = ['india', 'pak', 'nepal'];

function isAustraliaPresent(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].toLowerCase() === 'india') {
            return true;
        }
    }
    return false;
}
console.log(isAustraliaPresent(countries)); // Output: false


//JavaScript Program: Count Occurrences of Characters in a String
function countCharacters(str) {
    let count = {};
    for (let char of str) {
        count[char] = (count[char] || 0) + 1 ;
    }
    return count;
}
// Example usage
let input3 = "hello world";
let resultC = countCharacters(input3);
console.log(resultC); // Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }

//for word count
function countWords(sentence) {
    let words = sentence.split(" ");
    let frequency = {};

    for (let word of words) {
        frequency[word] = (frequency[word] || 0) + 1;
    }

    return frequency;
}

// Example usage:
let text = "welcome to the interview welcome to js";
console.log(countWords(text)); // Output: { welcome: 2, to: 2, the: 1, interview: 1, js: 1 }

//JavaScript Program: Find the total price of available products
const products = [
    { name: "Laptop", price: 1000, available: true },
    { name: "Phone", price: 500, available: false },
    { name: "Tablet", price: 300, available: true }
];
 
const totalAvailablePrice = products
    .filter(product => product.available) // Keep only available products
    .map(product => product.price) // Extract prices
    .reduce((total, price) => total + price, 0); // Sum the prices
 
console.log(totalAvailablePrice); // 1300

//using function
function typeofArr(arr){
    return arr.filter(item=>item.available)
              .map(item=> item.price)
              .reduce((acc,digit)=>acc+ digit,0)
}
let result12 = typeofArr(products);
console.log(result12); // Output: 1300


//JavaScript Program: Find the average age of users
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 28 }
];

//JavaScript Program: Find the average age of users
function avgAge(arr){
    return    arr.map(item=>item.age)
                 .reduce((acc, digit)=> acc+digit,0)/arr.length
   }
let result23 = avgAge(users);
console.log(result23); // Output: 27.666666666666668

//print all emails
const apiResponse = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
    { id: 3, name: "Bob Brown", email: "bob@example.com" }
];


//using function
function allEmail(arr){
    return arr.map(item=>item.email)
}
let result24 = allEmail(apiResponse);
console.log(result24); // Output: [ 'john@example.com', 'jane@example.com', 'bob@example.com' ]

//JavaScript Program: Find the to convert in uppercase
const lowercaseArray = ["apple", "banana", "cherry"];
const uppercaseArray = lowercaseArray.map(str => str.toUpperCase());

console.log(uppercaseArray); // Output: [ 'APPLE', 'BANANA', 'CHERRY' ]

//JavaScript Program: Find the type of each element in an array
function getArrayElementTypes(arr) {
    arr.forEach((element, index) => {
        console.log(`Element at index ${index}: ${typeof element}`);
    });
}

// Example usage:
const arr = [42, 'hello', true, { name: 'John' }, [1, 2, 3], null, undefined];
getArrayElementTypes(arr);

//JavaScript Program: Find the type of each element in an array
function getElementTypes(arr) {
    return arr.map(element => typeof element);
}
// Example usage:
let mixedArray = [10, "hello", true, null, undefined, { key: "value" }, [1, 2, 3], function() {}];
let result2 = getElementTypes(mixedArray);
console.log(result2);// Output: [ 'number', 'string', 'boolean', 'object', 'undefined', 'object', 'object', 'function' ]


let input1 = 'Prasad  is an engineer from Bengaluru';
// Step 1: Replace vowels in "Prasad" with '*'
let name = 'Prasad';
let nameWithAsterisks = name.replace(/[aeiou]/gi, '*');

// Step 2: Extract "from Bengaluru" and convert "Bengaluru" to uppercase
let fromIndex = input1.indexOf('from');
let location = input1.slice(fromIndex + 5).toUpperCase();

// Step 3: Combine the results
let output = `${nameWithAsterisks} from ${location}`;

console.log(output); // Output: Pr*s*d from BENGALURU

//Program to compare arrays
function compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}
console.log(compareArrays([1, 2, 3], [1, 2, 3])); // Output: true
console.log(compareArrays([1, 2, 3], [1, 2, 4])); // Output: false