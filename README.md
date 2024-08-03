# Simple DOM Manipulation Project

This project demonstrates basic DOM manipulation using vanilla JavaScript. It removes an existing element from the HTML document and dynamically creates and styles new elements.

## Project Structure

- `index.html`: The main HTML file that includes the initial content and references the JavaScript file.
- `script.js`: The JavaScript file containing the code that manipulates the DOM.

## Features

- Removes a specified element from the document.
- Dynamically creates and styles a header, navigation menu, and a paragraph.
- Appends the newly created elements to the body of the document.

## Usage

1. Clone the repository to your local machine.
2. Open `index.html` in a web browser to see the changes.

## Code Explanation

### index.html

The HTML file contains an element with `id="to-remove"` that will be removed by the JavaScript code. It also includes a reference to the `script.js` file.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="to-remove" class="alert alert-danger m-4">This is an element to be removed by JavaScript.</div>
    <script src="script.js"></script>
</body>
</html>
