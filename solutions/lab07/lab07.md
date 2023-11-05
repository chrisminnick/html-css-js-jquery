# Lab 07: Variables, Arrays, and Constants in JavaScript

In this lab, we will learn about declaring and initializing variables, arrays, and constants in JavaScript, and how to use them in a program.

## Objective

Understand how to declare, initialize, and use variables, arrays, and constants.

## Prerequisites

- A text editor, such as Visual Studio Code, Sublime Text, or Atom.
- A modern web browser like Chrome, Firefox, or Edge.

## Setup

☐ 1. Create a new directory on your computer for project files.

☐ 2. In this directory, create two new files: `index.html` and `main.js`.

## Steps

### Creating the HTML File

☐ 3. Open the `index.html` file in your text editor and add the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Variables, Arrays, and Constants</title>
    <script src="main.js" defer></script>
  </head>
  <body>
    <h1>JavaScript Variables, Arrays, and Constants</h1>
    <p>Check the JavaScript console for output.</p>
  </body>
</html>
```

### Writing the JavaScript

☐ 4. Open your `main.js` file and add the following JavaScript code:

```javascript
// Declaring and initializing a variable
let userName = 'Alice';

// Declaring and initializing an array
let primeNumbers = [2, 3, 5, 7, 11, 13];

// Declaring and initializing a constant
const GRAVITY = 9.81;

// Using variables
console.log('The user name is:', userName);

// Accessing array elements
console.log('The first prime number is:', primeNumbers[0]);
console.log('The third prime number is:', primeNumbers[2]);

// Using a constant
console.log('The gravity constant is:', GRAVITY);

// Trying to reassign a constant will result in an error
// GRAVITY = 9.8; // This line would cause a TypeError if uncommented
```

### Testing Your Code

☐ 5. Save both the `index.html` and `main.js` files.

☐ 6. Open the `index.html` file in your web browser.

☐ 7. Open the browser's Developer Tools to access the JavaScript console.

☐ 8. Verify that the output matches the expected results from your `main.js` script.

## Tasks

- Modify the `userName` variable and observe the changes in the console.
- Add more elements to the `primeNumbers` array and print the last element to the console.
- Try to reassign the `GRAVITY` constant and observe the error in the console. Understand why constants are useful.

## Conclusion

Through this lab, you have learned how to declare variables with `let`, immutable values with `const`, and how to store a list of items in an array. You've also practiced outputting values to the console and saw how a constant's value cannot be changed once it's set.

```

This markdown serves as a step-by-step guide for students to create a simple web page that will help them understand the use and declaration of variables, arrays, and constants in JavaScript. By working through these steps, they should gain practical experience with these fundamental programming concepts.
```
