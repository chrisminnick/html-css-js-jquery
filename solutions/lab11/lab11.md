# Lab 11: Performing DOM Manipulation

In this lab, you will write an exciting game that runs in a local HTML file. The game is set in a distant future where you are the pilot of a spaceship. Your mission is to destroy approaching asteroids with your anti-gravity laser system to save your home world from mass extinction.

## Objective

To practice DOM manipulation by creating an interactive web page that responds to user actions.

## Prerequisites

- Text editor (e.g., Visual Studio Code, Sublime Text, Atom).
- Web browser (e.g., Chrome, Firefox, Safari).

## Instructions

### Setup

☐ 1. Create a new folder on your computer where you will save the game files.

☐ 2. Within this folder, create three separate files named `index.html`, `styles.css`, and `script.js`.

### HTML

☐ 3. Open `index.html` with your text editor and enter the following HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Asteroid Destroyer</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="asteroid">*</div>
    <script src="script.js"></script>
  </body>
</html>
```

### CSS

☐ 4. Open `styles.css` with your text editor and enter the following CSS code:

```css
#asteroid {
  font-size: 128px;
  color: orange;
  width: 50px;
  margin: 40px;
}
```

### JavaScript

☐ 5. Open `script.js` with your text editor and enter the following JavaScript code:

```javascript
let target = document.getElementById('asteroid');
target.addEventListener('click', function () {
  target.innerHTML = 'Boom!';
});
```

### Testing

☐ 6. Double-check your work to ensure there are no errors in the code.

☐ 7. Open the `index.html` file in your web browser.

☐ 8. Click on the `*` representing the asteroid on the webpage.

☐ 9. Observe the text change to "Boom!" when the asteroid is clicked.

## Conclusion

Congratulations! You have successfully completed Lab 11. You've practiced basic DOM manipulation by creating a simple game using HTML, CSS, and JavaScript. This lab has demonstrated how to set up a local development environment and how to link together HTML, CSS, and JavaScript files.
