// 1. .length: The .length property returns the number of characters in a string.
let str1 = "Hello, World!";
console.log(str1.length);  // Output: 13

// 2. .toUpperCase(): The .toUpperCase() method converts a string to uppercase.
let str2 = "hello";
console.log(str2.toUpperCase());  // Output: "HELLO"
let str3 = "HELLO";
console.log(str3.toLowerCase());  // Output: "hello"

// 3. .charAt(): The .charAt() method returns the character at a specified index (position) in a string.
let str4 = "Hello";
console.log(str4.charAt(0));  // Output: "H" (character at index 0)
console.log(str4.charAt(2));  // Output: "l" (character at index 2)

// 4. .indexOf(): The .indexOf() method returns the index of the first occurrence of a specified value in a string.
let str5 = "Hello, World!";
console.log(str5.indexOf("World"));  // Output: 7 (starting index of "World")
console.log(str5.indexOf("JavaScript"));  // Output: -1 (not found)

// 5. .includes(): The .includes() method checks if a string contains a specified value.
let str6 = "Hello, World!";
console.log(str6.includes("World"));  // Output: true
console.log(str6.includes("JavaScript"));  // Output: false

// 6. .slice(): The .slice() method extracts a part of a string and returns a new string without modifying the original string.
let str7 = "Hello, World!";
console.log(str7.slice(0, 5));  // Output: "Hello" (startIndex: 0, endIndex: 5)
console.log(str7.slice(7));  // Output: "World!" (endIndex) (from index 7 to end)
console.log(str7.slice(-6, -1));  // Output: "World" (negative index: from end));


// 7. .substring(): The .substring() method extracts a part of a string and returns a new string without modifying the original string.
let str8 = "Hello, World!";
console.log(str8.substring(0, 5));  // Output: "Hello"
console.log(str8.substring(7));  // Output: "World!"

//8. .replace(): The .replace() method replaces a specified value with another value in a string.
let str9 = "Hello, World!";
console.log(str9.replace("World", "JavaScript"));  // Output: "Hello, JavaScript!"

// To replace all occurrences, use a regular expression with the global flag (g).
let str10 = "Hello, World! World!";
console.log(str10.replace(/World/g, "JavaScript"));  // Output: "Hello, JavaScript! JavaScript!"

// 9. .split(): The .split() method splits a string into an array of substrings based on a specified separator.
let str11 = "apple,orange,banana";
let fruits = str11.split(",");
console.log(fruits);  // Output: ["apple", "orange", "banana"]

let str01 = 'apple,banana,orange';
let fruits01 = str01.split(',', 2);
console.log(fruits01); // Output: ['apple', 'banana']


// 10. .trim(): The .trim() method removes whitespace from both ends of a string.
let str12 = "   Hello, World!   ";
console.log(str12.trim());  // Output: "Hello, World!" (without spaces)

// 11. .repeat(): The .repeat() method returns a new string with a specified number of copies of the original string.
let str13 = "Hi! ";
console.log(str13.repeat(3));  // Output: "Hi! Hi! Hi! "

//12. .startsWith(): The .startsWith() method checks if a string starts with a specified value.
let str14 = "Hello, World!";
console.log(str14.startsWith("Hello"));  // Output: true
console.log(str14.startsWith("World"));  // Output: false

// 13. .endsWith(): The .endsWith() method checks if a string ends with a specified value.
let str15 = "Hello, World!";
console.log(str15.endsWith("World!"));  // Output: true
console.log(str15.endsWith("Hello"));   // Output: false

// 14. .concat(): The .concat() method joins two or more strings and returns a new string.
let str16 = "Hello, ";
let str17 = "World!";
console.log(str16.concat(str17));  // Output: "Hello, World!"

let str39 = "Hello";
let str40 = "World!";
let str41 = str39 + " " + str40;
console.log(str41);  // Output: "Hello World!"

// 15. .padStart(): The .padStart() method pads a string with another string until it reaches a specified length.
let str18 = "5";
console.log(str18.padStart(3, "0"));  // Output: "005"

// 16. .padEnd(): The .padEnd() method pads a string with another string until it reaches a specified length.
let str19 = "5";
console.log(str19.padEnd(3, "0"));  // Output: "500"

// 17. .match(): The .match() method searches a string for a specified value and returns an array of the found value(s).
let str = "The rain in Spain falls mainly on the plain.";
let result = str.match(/[A-Za-z]+/g);  // Find all words
console.log(result);  // Output: ["The", "rain", "in", "Spain", "falls", "mainly", "on", "the", "plain"]

// 18. .search(): The .search() method searches a string for a specified value and returns the position of the match.
let str21 = "Hello, World!";
console.log(str21.search("World"));  // Output: 7 (starting index of "World")
console.log(str21.search("JavaScript"));  // Output: -1 (not found)

//19. .localeCompare(): The .localeCompare() method compares two strings in the current locale.
let str22 = "Hello";
let str23 ="Hello";
console.log(str22.localeCompare(str23));  // Output: 0 (equal)
let str24 = "Hello";
let str25 = "World";
console.log(str24.localeCompare(str25));  // Output: -1 (not equal)

//20. .valueOf(): The .valueOf() method returns the primitive value of a string object.
let str26 = new String("Hello");
console.log(str26.valueOf());  // Output: "Hello"

//21. .toString(): The .toString() method returns a string representing the specified object.
let str27 = new String("Hello");
console.log(str27.toString());  // Output: "Hello"

//22. .trimStart(): The .trimStart() method removes whitespace from the beginning of a string.
let str28 = "   Hello, World!   ";
console.log(str28.trimStart());  // Output: "Hello, World!   " (without spaces)

//23. .trimEnd(): The .trimEnd() method removes whitespace from the end of a string.
let str29 = "   Hello, World!   ";
console.log(str29.trimEnd());  // Output: "   Hello, World!" (without spaces)

//24. .match(), .replace(), .test(), etc.: The .match(), .replace(), .test(), etc. methods are used with regular expressions to search, replace, or test strings.
let str30 = "Hello, World!";
let pattern = /World/;
console.log(str30.match(pattern));  // Output: ["World"] (found)
console.log(str30.replace(pattern, "JavaScript"));  // Output: "Hello, JavaScript!" (replaced)
console.log(pattern.test(str30));  // Output: true (found)



