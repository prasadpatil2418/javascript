// 1. Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Test
console.log(reverseString("QA")); // Output: "AQ"

//Special case
function reverseWords(input) {
  const reversed = input.replace(/[?.,!]/g, '')
                        .split(' ')
                        .reverse()
                        .join(' ') +"?"
    return reversed;
}
// Example usage:
const inputN = "How you are doing today?";
const outputN = reverseWords(input);
console.log(outputN); // Output: "today doing are you How"

//reverse string using for loop
function reverseString(str) {
  let reversed = '';  
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];  
  } 
  return reversed;
}
console.log(reverseString("hello world")); // Output: "dlrow olleh"

//reverse array
function reverseArray(arr) {
  return arr.reverse();
}
// Example usage
const inputArray = [1, 2, 3, 4, 5];
const resultArray = reverseArray(inputArray);
console.log(resultArray); // Output: [5, 4, 3, 2, 1]

// Method 2: Manual reversal using a loop
let originalArray = [10, 20, 30, 40, 50];
let reversedArray = [];
for (let i = originalArray.length - 1; i >= 0; i--) {
    reversedArray.push(originalArray[i]);
}
console.log("Reversed array (manual):", reversedArray);

//Sorting a String Alphabetically
function sortString(str) {
  return str.split("").sort().join("");
}
// Example usage:
let input2 = "javascript langauge";
let sortedString = sortString(input2);
console.log("Sorted String:", sortedString); // Output: "aacijprstv"

// Reverse and Sort a String
function reverseSortString(str){
  
  return str.split('').sort((a,b)=>b.localeCompare(a)).join('')
}
let result1 = reverseSortString('javascript');
console.log(result1);  // Output: "vtsrpjicaa"

//sort array
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([3, 1, 4, 2]));

//program to sort array using for loop
function sortArray(arr) {
  for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] > arr[j]) { // for largest use <
              let temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}
console.log(sortArray([10, 5, 8, 20, 9])); // Output: [5, 8, 9, 10, 20]



/*2. Find Duplicates in an Array
Problem: Identify duplicates in an array.*/

function findDuplicatesN(arr){
    return arr.filter((item, index) => arr.indexOf(item) !== index);

}
let inputArray2 = [1, 2, 3, 4, 5, 6, 1, 2, 3];
console.log(findDuplicatesN(inputArray2))  // Output: [1, 2, 3]

// for string
function findDuplicatesStr(str){
    return [...str].filter((char, index, arr) => arr.indexOf(char) !== index);

}
let inputString = "programming";
console.log(findDuplicatesStr(inputString))
  // Output: ['r', 'g', 'm']

//3. remove duplicate from string

//string
function removeDuplicates(str) {
  // Split the string into an array, create a Set (to remove duplicates), and join it back to a string
  return [...new Set(str)].join('');
}

const input = "javascripot string";
const resultN = removeDuplicates(input);
console.log(resultN); // Output: "abcdef"

//array
function removeDuplicates(arr) {
  // Create a Set from the array, which automatically removes duplicates
  return [...new Set(arr)];
}
// Example usage
const arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 5, 6];
const arrayWithoutDuplicates = removeDuplicates(arrayWithDuplicates);
console.log(arrayWithoutDuplicates); // Output: [ 1, 2, 3, 4, 5, 6 ]

/*4. Generate a Random Number within a Range
Problem: Write a function to generate a random number between two given values.

Math.random() generates a number between 0 and 1.*/

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Test
console.log(getRandomNumber(1, 10)); // Output: A random number between 1 and 10


/*5. FizzBuzz Test
Problem: Print numbers from 1 to 100. For multiples of 3, print "Fizz";
for multiples of 5, print "Buzz"; for multiples of both, print "FizzBuzz." */

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

/* 6. Function to find the smallest and largest numbers
The Math.min(...numbers) finds the smallest number in the array.
The Math.max(...numbers) finds the largest number in the array.
The spread operator (...) expands the array into individual arguments for the Math.min and Math.max functions.*/

function findSmallestAndLargest(numbers) {
  // if (numbers.length === 0) {
  //     return { smallest: null, largest: null };
  // }

  const smallest = Math.min(...numbers);
  const largest = Math.max(...numbers);

  return { smallest, largest };
}
// Example usage
const group = [45, 2, 89, 32, 17, 93, 12];
const result = findSmallestAndLargest(group);

console.log("Smallest number:", result.smallest);
console.log("Largest number:", result.largest);

//using for loop
// Function to find the largest number in an array
function findLargestNumber(arr) {
  let largest = arr[0];  // Assume the first element is the largest initially

  // Loop through the array to compare each number
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {   // for smallest number use <
      largest = arr[i];  // Update largest if a larger number is found
    }
  }

  return largest;
}

// Example usage
const numbers = [12, 45, 7, 32, 89, 21];
const largestNumber = findLargestNumber(numbers);
console.log(`The largest number in the array is: ${largestNumber}`);


//7. program to generate the Fibonacci series up to a given number of terms:
function generateFibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
console.log(generateFibonacci(10));

//8. Program to Print a perticuler value: name in an object
// Object containing employee data with designation as key and name as value
const employees = {
  'Manager': 'John Doe',
  'Developer': 'Jane Smith',
  'Designer': 'Alice Johnson',
  'QA': 'Bob Brown'
};

// Function to get employee name by designation using for loop
function getEmployeeName(designation) {
  for (let key in employees) {
    if (key === designation) {
      console.log(`The name of the ${designation} is: ${employees[key]}`);
      return; // Exit the loop once we find the matching designation
    }
  }
  console.log(`No employee found with the designation: ${designation}`);
}
// Example usage: Print the name of the 'Developer'
getEmployeeName('Developer');  // Output: The name of the Developer is: Jane Smith

//other example using find method 
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 }
];
const bobAge = users.find(user => user.name === "Bob").age;
console.log(bobAge); // 30


//9. Program to find the missing number in an array of numbers
function findMissingNumber(arr, n) {
  const total = (n * (n + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return total - sum;
}
console.log(findMissingNumber([1, 2, 4, 5], 5));// Output: 3

//10. Program to find the second largest number in an array
function findSecondLargest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => b - a); //a-b for smallest
  return unique[1];
}
console.log(findSecondLargest([10, 28, 20, 30, 48])); // Output: 20

//11. Program to find the second smallest number in an array
function findSecondSmallest(arr) {
  const unique = [...new Set(arr)];
  unique.sort((a, b) => a - b);
  return unique[1];
}
console.log(findSecondSmallest([10, 20, 50, 30, 643])); // Output: 20

//12. Program to find the sum of digits of a number
function sumOfDigits(num) {
  return num.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
}
console.log(sumOfDigits(1235789)); // Output: 35

//13. Program to check whether array is sorted or not
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}
console.log(isSorted([1, 2, 3, 4])); // Output: true
console.log(isSorted([4, 3, 2, 1])); // Output: false

//14. Find the Longest Word in a Sentence 
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = '';
  for (let word of words) {
      if (word.length > longest.length) {
          longest = word;
      }
  }
  return longest;
}
console.log(longestWord("JavaScript is amazing")); // Output: JavaScript

// 15. Program to find the prime numbers between 1 to 10

// Program to find prime numbers between 1 and 10 using a function
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 1; i <= 10; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}

// Program to find prime numbers in an array
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
const arr6 = [20, 471, 149, 98, 174, 929, 137, 131];
const primes = arr6.filter(isPrime);
console.log("Prime Numbers:", primes);
console.log("Count:", primes.length);

//16. program to rearrange the words in a string
function rearrange(str){
  let words = str.split(" ");
  let rewords = [words[0],words[3],words[2],words[1]]
  return rewords.join(' ')
}

let input1 = "Welcome to this interview";
let output = rearrange(input1);
console.log(output); 




// Find the first non-repeating character in a string 
function firstNonRepeatingChar(string) {
  const str=string.toLowerCase()
  const charCount = {};

  // Step 1: Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null; // If no non-repeating character found
}

// Test Data
const string = "Welcome to the Michelin interview. Best of luck to you";

console.log(firstNonRepeatingChar(string));

// program to check last repeating character in a string
function lastRepeatingChar(str) {
    let map = {};

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    }

    for (let i = str.length - 1; i >= 0; i--) {
        if (map[str[i]] > 1) {
            return str[i];
        }
    }
    return null;
}
console.log(lastRepeatingChar("abcddcdafgh"))

// Program to reverse only the words in a string, keeping special characters in place
function reverseWordsOnly(str) {
    let words = str.split(/[^a-zA-Z]+/);   // split by special chars
    let reversed = words.reverse();
    
    let i = 0;
    return str.replace(/[a-zA-Z]+/g, () => reversed[i++]);
}

// Test
console.log(reverseWordsOnly("ab@cd!ef")); // Output: "ef@cd!ab"