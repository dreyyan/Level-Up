# Pre-requisite: JavaScript, HTML, and CSS for Frontend Development
Please complete the specified project.
> **NOTE**: Provide separate HTML, CSS, and JavaScript files for the project. Create your submission files in the provided folder. This project integrates all concepts learned (JavaScript basics, DOM manipulation, event handling, and forms) as a prerequisite for React development.
By completing this project, you will demonstrate a solid understanding of frontend development concepts necessary for React.

## PROJECT: Interactive Quiz App
### INSTRUCTIONS:
Create an interactive quiz application that combines forms, DOM updates, and event handling. The app should present a series of multiple-choice questions, track the user’s score, and display results at the end.

#### HTML Requirements:
- Create a structure for displaying quiz questions, including:
  - A header (`<h1>`) for the quiz title.
  - A section for the current question with multiple-choice options (use radio buttons or checkboxes).
  - A "Next Question" button to load the next question.
  - A section to display the current score and progress (e.g., "Question 1 of 5").
  - A results section to show the final score and correct/incorrect answers at the end.

#### CSS Requirements:
- Style the quiz questions as cards with clear, readable formatting.
- Create a progress bar to visually indicate quiz progress (e.g., using a `<div>` with dynamic width).
- Highlight correct answers in green and incorrect answers in red.
- Ensure the layout is clean and user-friendly, with consistent spacing and typography.

#### JavaScript Requirements:
- Store an array of question objects, each with:
  - Question text
  - Array of answer options
  - Correct answer
- Use `querySelector` to select DOM elements (question area, options, buttons, score display, etc.).
- Add event listeners for:
  - Form submission to handle answer selection for each question.
  - "Next Question" button to dynamically load the next question.
- Track the user’s score in real-time and update the score display.
- Manipulate the DOM to show the final results, including the total score and a breakdown of correct/incorrect answers.
- Ensure JavaScript runs after the DOM is fully loaded using `DOMContentLoaded`.

#### Extension Features:
- Implement a timer for each question (e.g., 30 seconds per question, auto-submit when time runs out).
- Use `localStorage` to save and display the user’s high score across sessions.

[View Sample Solution](sample-quiz-app/index.html)