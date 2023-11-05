````markdown
# Lab 09: Using JavaScript Methods

In this lab, we will explore JavaScript array methods to perform operations such as sorting, adding, and removing elements. You'll practice these on a local environment instead of using an online editor like JSBin.

## Objective

Understand and use JavaScript's array manipulation methods to manage and manipulate list data.

## Prerequisites

- A text editor installed on your computer (such as VSCode, Sublime Text, or Atom).
- A web browser for testing your JavaScript file.

## Setup

☐ 1. Create a new folder on your computer to store your lab files.

☐ 2. Inside this folder, create a new file named `arrays.js`.

## Steps

### Writing Your Array

☐ 3. Open `arrays.js` in your text editor.

☐ 4. Write the following arrays into `arrays.js`:

```javascript
let songs = ['California Girls', 'Area Codes', '88 Lines About 44 Women'];

let songlists = [
  ['East Coast', 'Southern', 'Mid-West', 'Northern', 'West Coast'],
  ['770', '404', '718', '202'],
  ['Deborah', 'Carla', 'Mary', 'Suzen'],
];
```
````

### Sorting Arrays

☐ 5. Use the `sort()` method to sort the `songs` array alphabetically.

```javascript
songs.sort();
```

☐ 6. Also sort the first sub-array within `songlists`.

```javascript
songlists[0].sort();
```

### Logging Results

☐ 7. Log the sorted arrays to the console.

```javascript
console.log(songs);
console.log(songlists);
```

### Sorting Sub-Lists

☐ 8. Write the statements to sort the other two sub-lists within `songlists`.

```javascript
songlists[1].sort();
songlists[2].sort();
```

### Push and Pop Methods

☐ 9. Add a new song to the end of the `songs` array.

```javascript
songs.push('We Care a Lot');
```

☐ 10. Log the array to the console to see the new list of songs.

```javascript
console.log(songs);
```

☐ 11. Remove the last song from the `songs` array.

```javascript
songs.pop();
```

☐ 12. Log the array to the console to see the list of songs after removal.

```javascript
console.log(songs);
```

### Adding a New Sub-List

☐ 13. Add a new sub-list to the `songlists` array.

```javascript
songlists.push([
  'Raindrops on Roses',
  'Whiskers on Kittens',
  'Bright Copper Kettles',
  'Warm Woolen Mittens',
]);
```

☐ 14. Log the `songlists` array to the console to see the new sub-list.

```javascript
console.log(songlists);
```

## Testing Your Code

☐ 15. Save the `arrays.js` file.

☐ 16. Open your terminal or command prompt, navigate to the directory where your `arrays.js` file is located.

☐ 17. Run the file using Node.js or any JavaScript environment available on your computer (e.g., `node arrays.js`).

☐ 18. Observe the output in the console.

## Conclusion

You've now practiced using several key array methods in JavaScript to manipulate and manage lists. You've learned how to sort arrays, add new items, and remove items from arrays.

```

To test the JavaScript code, you can use Node.js by running the `arrays.js` file in the terminal with `node arrays.js` command, or you can embed the JavaScript in an HTML file and open it in a web browser to view the console output.
```

````markdown
# Lab 09: Using JavaScript Methods

In this lab, we will explore JavaScript array methods to perform operations such as sorting, adding, and removing elements. Instead of using JSBin, we'll be running our code locally with an HTML file that includes our JavaScript.

## Objective

Understand and use JavaScript's array manipulation methods to manage and manipulate list data.

## Prerequisites

- A text editor installed on your computer (such as VSCode, Sublime Text, or Atom).
- A web browser for testing your HTML and JavaScript file.

## Setup

☐ 1. Create a new folder on your computer to store your lab files.

☐ 2. Inside this folder, create two new files named `index.html` and `scripts.js`.

## Steps

### Creating the HTML File

☐ 3. Open `index.html` in your text editor.

☐ 4. Write the basic HTML5 document structure.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Array Methods Lab</title>
    <script src="scripts.js" defer></script>
  </head>
  <body>
    <h1>JavaScript Array Methods Lab</h1>
    <p>Open the console to see the output.</p>
  </body>
</html>
```
````

### Writing Your JavaScript

☐ 5. Open `scripts.js` in your text editor.

☐ 6. Write the JavaScript code as described in the previous steps.

```javascript
// Add your JavaScript code here
let songs = ['California Girls', 'Area Codes', '88 Lines About 44 Women'];

// ... rest of your JavaScript code as outlined previously
```

### Running Your Code

☐ 7. Save both `index.html` and `scripts.js` files.

☐ 8. Open `index.html` in your web browser.

☐ 9. Open the browser's Developer Tools (usually F12 or right-click > Inspect).

☐ 10. Click on the "Console" tab to view the output from your `scripts.js` file.

## Conclusion

You have successfully run JavaScript code that manipulates arrays through an HTML file. By using the Developer Tools, you are able to see the results of your array methods directly in the browser's console.

```

This markdown includes the setup for an HTML file and a separate JavaScript file, which is a common structure for web development projects. Students would write the JavaScript code in `scripts.js`, including the array methods as described previously. They would then open `index.html` in a web browser and use the browser's developer tools to view the console output, ensuring their code is working as expected.
```
