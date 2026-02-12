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

