# Pre-requisite: JavaScript DOM Manipulation for React
Please complete all the specified problems.
> **NOTE**: Please provide a separate HTML and JavaScript file (and CSS where necessary) for each problem unless stated otherwise. Create your submission files in the separate folders provided.
By completing all the problems, you will have a solid understanding of JavaScript DOM manipulation necessary for React development.

## PROBLEM #1: Dynamic Text Update
### INSTRUCTIONS:
Create an HTML file with a paragraph and a button. In a separate JavaScript file:
- Select the paragraph and button using `querySelector`.
- Add a click event listener to the button that updates the paragraph's text content to a new message.
- Ensure the JavaScript runs after the DOM is fully loaded using `DOMContentLoaded`.  

[View Problem #1: Sample Solution](sample-outputs/problem-1/index.html)

## PROBLEM #2: Toggle Visibility
### INSTRUCTIONS:
Create an HTML file with a div containing some text and a button. In a separate JavaScript file:
- Select the div and button using `querySelector`.
- Add a click event listener to the button that toggles the div's visibility (e.g., using `style.display`).
- Update the button text to reflect the current state (e.g., "Show" or "Hide").  

[View Problem #2: Sample Solution](sample-outputs/problem-2/index.html)

## PROBLEM #3: Dynamic List Creation
### INSTRUCTIONS:
Create an HTML file with an empty unordered list (`<ul>`) and an input field with a button. In a separate JavaScript file:
- Select the input, button, and list using `querySelector`.
- Add a click event listener to the button that creates a new list item (`<li>`) with the input's value and appends it to the list.
- Clear the input field after adding the item.  

[View Problem #3: Sample Solution](sample-outputs/problem-3/index.html)

## PROBLEM #4: Style Manipulation
### INSTRUCTIONS:
Create an HTML file with multiple divs (at least 3) and a button. In a separate JavaScript file:
- Select all divs using `querySelectorAll` and the button using `querySelector`.
- Add a click event listener to the button that randomly changes the background color of each div (use an array of colors and `Math.random`).
- Include CSS to give the divs a default size and border.  

[View Problem #4: Sample Solution](sample-outputs/problem-4/index.html)

## PROBLEM #5: Interactive Todo List
### INSTRUCTIONS:
Create an HTML file with an input field, a button, and an empty unordered list. In a separate JavaScript file:
- Select the input, button, and list using `querySelector`.
- Add a click event listener to the button to create a new list item with the input's value.
- Add a click event listener to each new list item to toggle a "completed" style (e.g., strikethrough text).
- Include a button in each list item to remove it when clicked.
- Clear the input field after adding an item.  

[View Problem #5: Sample Solution](sample-outputs/problem-5/index.html)