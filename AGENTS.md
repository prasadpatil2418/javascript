# AGENTS.md - JavaScript Learning Repository

## Project Overview

This is a vanilla JavaScript learning repository containing basic JavaScript exercises and practice files. The codebase consists of standalone `.js` and `.html` files without a formal build system, package manager, or testing framework.

---

## Commands

### Running JavaScript Files

```bash
# Run a single JavaScript file with Node.js
node <filename>.js

# Example
node Basics3.js

# Run in REPL mode
node
```

### No Build/Lint/Test Configuration

This repository currently has **no formal build, lint, or test tooling**. Files are standalone JavaScript exercises that can be executed directly with Node.js or opened in a browser (for HTML files).

To add tooling in the future, consider:
- **npm init** - Initialize a package.json
- **ESLint** - For linting: `npm install eslint --save-dev`
- **Jest** or **Vitest** - For testing: `npm install jest --save-dev`
- **Prettier** - For formatting: `npm install prettier --save-dev`

---

## Code Style Guidelines

### General Principles

1. **Keep it simple** - This is a learning repository; prioritize readability over cleverness
2. **Use modern ES6+ features** - `const` by default, `let` when mutation is needed
3. **Avoid `var`** - Use `const` and `let` instead
4. **Use descriptive names** - Variables and functions should have meaningful names

### Naming Conventions

- **Variables/functions**: `camelCase` (e.g., `isPrime`, `factorial`, `countVowels`)
- **Constants**: `UPPER_SNAKE_CASE` for magic numbers that should not change (e.g., `MAX_RETRIES`)
- **Classes**: `PascalCase` (e.g., `StringHelper`)
- **Files**: `kebab-case.js` or descriptive names (e.g., `Array-10.js`)

```javascript
// Good
const isPalindrome = (str) => str === str.split('').reverse().join('');
const MAX_RETRY_COUNT = 3;

// Avoid
const x = ...;  // Too vague
const str = ...;  // Too short
```

### Functions

- Use **arrow functions** for short callbacks
- Use **function declarations** for named functions that may be called before definition
- Keep functions small and focused on a single responsibility

```javascript
// Arrow function for callbacks/short functions
const isEven = (num) => num % 2 === 0;

// Function declaration for reusable logic
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
```

### Arrays and Objects

- Use **array methods** (`map`, `filter`, `reduce`, `forEach`) instead of traditional loops when appropriate
- Use **spread operator** (`...`) for copying arrays/objects
- Prefer **destructuring** for extracting values

```javascript
// Good - using array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

// Good - spread operator
const copy = [...originalArray];
const merged = { ...obj1, ...obj2 };

// Good - destructuring
const { name, age } = user;
const [first, second] = items;
```

### Strings

- Use **template literals** for string interpolation
- Use **const** for string variables

```javascript
// Good
const greeting = `Hello, ${name}!`;
const message = `Count: ${count}`;

// Avoid
const greeting = "Hello, " + name + "!";
```

### Error Handling

- Use **try-catch** for code that may throw errors
- Provide meaningful error messages
- Handle errors gracefully rather than letting them crash the program

```javascript
// Good
function safeParseJSON(json) {
    try {
        return JSON.parse(json);
    } catch (error) {
        console.error(`Failed to parse JSON: ${error.message}`);
        return null;
    }
}
```

### Comments

- Use comments to explain **why**, not **what**
- Avoid obvious comments that describe the code
- Keep comments up-to-date with code changes

```javascript
// Good - explains reasoning
// Using Math.sqrt(n) for O(sqrt(n)) complexity instead of O(n)
for (let i = 2; i <= Math.sqrt(num); i++)

// Avoid - redundant
// Loop from 2 to num
for (let i = 2; i < num; i++)
```

### Formatting

- Use **2 or 4 spaces** for indentation (be consistent within files)
- Use **semicolons** at the end of statements (or none - just be consistent)
- Add **spacing** around operators and after commas

```javascript
// Consistent spacing
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, num) => acc + num, 0);
```

### Imports/Modules

- Currently this repo uses **standalone files** without modules
- If adding modules, use ES6 `import`/`export` syntax

```javascript
// Named exports
export function isPrime(num) { ... }
export const MAX_VALUE = 100;

// Imports
import { isPrime } from './utils.js';
```

---

## Working with This Repository

1. **Test changes** by running `node <filename>.js` to verify behavior
2. **Add new exercises** following the existing naming convention
3. **Keep functions focused** - each file or function should solve one problem
4. **Use console.log()** for debugging and showing output (as this repo currently does)

---

## Future Improvements (Optional)

If this repository grows, consider adding:
- `package.json` with scripts for running tests
- ESLint configuration for code quality
- Jest or Vitest for unit testing
- Prettier for automatic formatting
- TypeScript for type safety (optional)
