# Pre-requisite: JavaScript Event Handling and Forms for React
Please complete all the specified problems.
> **NOTE**: Please provide a separate HTML and JavaScript file (and CSS where necessary) for each problem unless stated otherwise. Create your submission files in the separate folders provided.
By completing all the problems, you will have a solid understanding of JavaScript event handling and form manipulation necessary for React development.

## PROBLEM #1: Basic Event Handling
### INSTRUCTIONS:
Create an HTML file with a button and a counter display (e.g., a `<span>`). In a separate JavaScript file:
- Select the button and counter display using `querySelector`.
- Initialize a counter variable to 0.
- Add 2 click event listeners to 2 buttons (increment and decrement) that increments and decrements the counter and updates the display.
- Ensure the JavaScript runs after the DOM is fully loaded using `DOMContentLoaded`.  

[View Problem #1: Sample Solution](sample-outputs/problem-1/index.html)

## PROBLEM #2: Form Input Validation
### INSTRUCTIONS:
Create an HTML file with a form containing a text input for a username and a submit button. In a separate JavaScript file:
- Select the form, input, and button using `querySelector`.
- Add a submit event listener to the form that prevents default submission.
- Validate that the username is at least 3 characters long; display an error message in a `<div>` if invalid, or log the username to the console if valid.
- You can include CSS to style the error message (e.g., red text).  

[View Problem #2: Sample Solution](sample-outputs/problem-2/index.html)

## PROBLEM #3: Dynamic Form Fields
### INSTRUCTIONS:
Create an HTML file with a form containing a button to add new text inputs dynamically. In a separate JavaScript file:
- Select the form and button using `querySelector`.
- Add a click event listener to the button to create and append a new text input to the form.
- Add a submit event listener to the form that prevents default submission and logs all input values as an array to the console.
- You can include CSS to style the form and inputs.  

[View Problem #3: Sample Solution](sample-outputs/problem-3/index.html)

## PROBLEM #4: Event Delegation
### INSTRUCTIONS:
Create an HTML file with an unordered list (`<ul>`) and a button to add new list items. In a separate JavaScript file:
- Select the list and button using `querySelector`.
- Add a click event listener to the button to append a new `<li>` with text (e.g., "Item X").
- Use event delegation on the list to handle clicks on any list item, toggling a CSS class (e.g., highlight) when clicked.
- Include CSS for the highlight style (e.g., background color).  

[View Problem #4: Sample Solution](sample-outputs/problem-4/index.html)

## PROBLEM #5: Form with Multiple Inputs
### INSTRUCTIONS:
Create an HTML file with a form containing inputs for:
- Name (text, required)
- Email (email, required)
- Age (number)
- Subscribe (checkbox)
In a separate JavaScript file:
- Select the form and inputs using `querySelector`.
- Add a submit event listener to prevent default submission.
- Validate that name and email are non-empty; display errors in a `<div>` if invalid.
- If valid, log an object containing all input values (including checkbox state) to the console.
- Clear the form inputs after successful submission.
- Include CSS to style the form and error messages.  

[View Problem #5: Sample Solution](sample-outputs/problem-5/index.html)