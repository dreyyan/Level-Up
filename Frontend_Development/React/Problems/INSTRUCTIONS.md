# Problems: React
Please complete all the specified problems.

> **NOTE**: Please provide separate files for each problem unless stated otherwise. Create your submission files on the separate folders provided.

By completing all the problems, you will have a solid understanding of the basics of React.

## PROBLEM #1: Simple Greeting (JSX Basics)
### INSTRUCTIONS:
Create a functional component called `Greeting` that renders an `<h1>` tag with the text `"Hello, React!"` inside a `<div>`. Export it as the default export. Render it in `App.ts`.

[View Problem #1: Sample Solution](sample-outputs/problem-1/)

## PROBLEM #2: Inline Styles and Expressions (JSX Basics)
### INSTRUCTIONS:
Update `Greeting` to accept a `name` prop (string). Render `<p>Welcome, {name}!</p>` with inline styles: color red for the paragraph. Pass your name prop as a prop from `App.ts`.

[View Problem #2: Sample Solution](sample-outputs/problem-2/)

## PROBLEM #3: Profile Card (Components & Props)
### INSTRUCTIONS:
Build a `ProfileCard` component that takes 3 props:
- name (string)
- age (number)
- city (string)

Render them in a card-like `<div>` with borders (use inline styles: border 1px solid black, padding 10px).

[View Problem #3: Sample Solution](sample-outputs/problem-3/)

## PROBLEM #4: Reusable Button (Components & Props)
### INSTRUCTIONS:
Create a `CustomButton` component that accepts a `label` prop (string) and an `onClick` prop (function). Render a `<button>` with the label, and call `onClick` on click.
In `App.ts`, pass a handler that logs "Button Clicked!" to the console. Render three buttons with different labels
[View Problem #4: Sample Solution](sample-outputs/problem-4/)

## PROBLEM #5: Counter App (State and Event Handling)
### INSTRUCTIONS:
Build a `Counter` component using `useState` to track a count (start at 0). Render the count in an `<h2>`, plus Increment and Decrement `<button>`s that update the state on click.

[View Problem #5: Sample Solution](sample-outputs/problem-5/)

## PROBLEM #6: Toggle Visibility (State and Event Handling)
### INSTRUCTIONS:
Create a `ToggleBox` component with state for `isVisible` (boolean, starts false). Render a button labeled "Toggle" that flips the state. Conditionally render a `<p>Secret message!</p>` only if `isVisible` is true.

[View Problem #6: Sample Solution](sample-outputs/problem-6/)

## PROBLEM #7: Weather Display (Conditional Rendering and Lists)
### INSTRUCTIONS:
Make a `Weather` component that takes a `temperature` prop (number).Use conditional rendering:
- If temperature > 25, show "It's Hot! ☀️"; else "It's cool! ❄️".

Render it in an `<h3>`. In `App.ts`, pass temperatures 30 and 15 to two instances.

[View Problem #7: Sample Solution](sample-outputs/problem-7/)

## PROBLEM #8: Todo List Basics (Conditional Rendering and Lists)
### INSTRUCTIONS:
Create a `ToDoList` component with state as an array of strings (initial: ["Learn React", "Build App"]).
Render an unordered list `<ul>` of the todos using `.map()`. Each `<li>` should have a unique `key` prop (use the index or todo text).

[View Problem #8: Sample Solution](sample-outputs/problem-8/)

## PROBLEM #9: Filtered List (Conditional Rendering and Lists)
### INSTRUCTIONS:
Extend `ToDoList` with a `filter` state (string, starts empty) and a text input. On input change, update `filter` state. Render the list filtered to only include todos that include the filter text (use `.filter()` before `.map()`).

[View Problem #9: Sample Solution](sample-outputs/problem-9/)

## PROBLEM #10: Simple Form (Forms and Controlled Components)
### INSTRUCTIONS:
Build a `UserForm` component with two controlled inputs: `name` and `email` (useState for each). On submit (via `<form>` with `onSubmit`), log the values to console and prevent default. Render a submit button.

[View Problem #10: Sample Solution](sample-outputs/problem-10/)

## PROBLEM #11: Validation Feedback (Forms and Controlled Components)
### INSTRUCTIONS:
Update `UserForm` to show error messages below each input if empty on submit (use conditional rendering). Clear errors after valid input. Add a success message on valid submit.

[View Problem #11: Sample Solution](sample-outputs/problem-11/)

## PROBLEM #12: Hooks - useEffect and Side Effects (Data Fetch Simulation)
### INSTRUCTIONS:
Create a `DataFetcher` component using `useState` for `data` (array, starts empty) and `useEffect`. In `useEffect` (empty dependency array), simulate fetching by setting data to ["Item 1", "Item 2"] after 1 second (use `setTimeout`). Render the list once loaded, or "Loading..." otherwise.

[View Problem #12: Sample Solution](sample-outputs/problem-12/)

## PROBLEM #13: Window Resize Logger (Data Fetch Simulation)
### INSTRUCTIONS:
Build a `ResizeTracker` component with `useState` for `width`. Use `useEffect` to add a resize event listener on mount (update width with `window.innerWidth`) and remove it on unmount. Render the current width.

[View Problem #13: Sample Solution](sample-outputs/problem-13/)

## PROBLEM #14: Shared Counter (Composition and Lifting State)
### INSTRUCTIONS:
Create a parent `CounterParent` component with state `count`. Render two child `CounterDisplay` components, each showing the count but with different labels (e.g., "Player 1: {count}"). Pass `count` as prop. Add an Increment button in parent that updates state.

[View Problem #14: Sample Solution](sample-outputs/problem-14/)

## PROBLEM #15: Multi-Step Form (Composition and Lifting State)
### INSTRUCTIONS:
Build a `StepForm` with state for `step` (0-2) and form data object. Render three child components: `Step1` (name input), `Step2` (email input), `Step3` (submit). Use props to pass data down and callbacks up to update state and advance steps. On submit, log all data. Expected Output: Step-by-step form that collects and submits data.

[View Problem #15: Sample Solution](sample-outputs/problem-15/)