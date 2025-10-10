# II. Basic React Concepts

This section covers the foundational concepts of React, focusing on functional components, props, state, event handling, conditional rendering, and rendering lists. These are essential for building dynamic and interactive React applications.

## Functional vs Class Components

React supports two types of components: **functional** and **class** components. Modern React heavily favors functional components due to their simplicity and the introduction of hooks in React 16.8.

- **Functional Components**: Simple JavaScript functions that return JSX. They are lightweight, easier to read, and support hooks for state and lifecycle management.
- **Class Components**: Older approach using ES6 classes, with lifecycle methods like `componentDidMount`. They are still supported but less common in new codebases.

**Example (Functional Component)**:
```jsx
import React from 'react';

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}

export default Welcome;
```

**Example (Class Component)**:
```jsx
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

export default Welcome;
```

**Why Functional Components?**
- Concise syntax.
- Hooks (`useState`, `useEffect`, etc.) replace lifecycle methods.
- Easier to test and maintain.

**Best Practice**: Use functional components with hooks for new projects unless there's a specific reason to use class components.

## Props (Passing Data to Components)

Props (short for properties) allow you to pass data from a parent component to a child component, making components reusable and dynamic.

- Props are read-only and should not be modified by the child component.
- Props can include any JavaScript value: strings, numbers, objects, functions, etc.

**Example**:
```jsx
function Greeting(props) {
  return <p>Welcome, {props.name}!</p>;
}

function App() {
  return <Greeting name="Alice" />;
}
```

**Destructuring Props**:
```jsx
function Greeting({ name, age }) {
  return <p>Welcome, {name}! You are {age} years old.</p>;
}

function App() {
  return <Greeting name="Alice" age={25} />;
}
```

**Default Props**:
```jsx
function Greeting({ name = 'Guest' }) {
  return <p>Welcome, {name}!</p>;
}
```

**Best Practice**:
- Use descriptive prop names.
- Avoid passing unnecessary props to improve performance.
- Use TypeScript or PropTypes for type checking in larger applications.

## State (Managing Component Data)

State is a built-in React object used to manage dynamic data within a component. Unlike props, state is mutable and controlled by the component itself.

- Use the `useState` hook in functional components to manage state.
- State updates trigger re-renders to reflect changes in the UI.

**Example**:
```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

- `useState(0)` initializes the state variable `count` to 0.
- `setCount` is the function to update `count`.

**Best Practice**:
- Keep state as minimal as possible.
- Avoid redundant state (e.g., don’t store derived values that can be computed).
- Use multiple `useState` calls for unrelated pieces of state.

## Event Handling

React handles events similarly to native JavaScript but uses synthetic events for consistency across browsers.

- Event handlers are functions passed to elements via props like `onClick`, `onChange`, etc.
- Use camelCase for event names (e.g., `onClick` instead of `onclick`).

**Example**:
```jsx
function Button() {
  const handleClick = () => alert('Button clicked!');

  return <button onClick={handleClick}>Click Me</button>;
}
```

**Handling Input Changes**:
```jsx
function Input() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
    </div>
  );
}
```

**Best Practice**:
- Use arrow functions or bind methods to ensure proper `this` context (less relevant in functional components).
- Avoid inline event handlers for better readability and performance:
  ```jsx
  // Avoid
  <button onClick={() => doSomething()}>Click</button>
  // Prefer
  const handleClick = () => doSomething();
  <button onClick={handleClick}>Click</button>
  ```

## Conditional Rendering

Conditional rendering allows you to show or hide elements based on conditions, using JavaScript logic like `if`, ternary operators, or logical `&&`.

**Using If Statements**:
```jsx
function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }
  return <p>Please log in.</p>;
}
```

**Using Ternary Operator**:
```jsx
function LoginStatus({ isLoggedIn }) {
  return <p>{isLoggedIn ? 'Welcome back!' : 'Please log in.'}</p>;
}
```

**Using Logical &&**:
```jsx
function Notification({ hasUnread }) {
  return (
    <div>
      {hasUnread && <p>You have unread messages!</p>}
    </div>
  );
}
```

**Best Practice**:
- Use ternary operators for simple inline conditions.
- Use `&&` for rendering elements only when a condition is true.
- Avoid complex logic in JSX; extract it to variables or functions.

## Lists and Keys

Rendering lists in React involves mapping over an array and returning JSX elements. Each element needs a unique `key` prop to help React efficiently update the DOM.

**Example**:
```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
}

function App() {
  const todos = [
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Build a project' },
  ];
  return <TodoList todos={todos} />;
}
```

- The `key` prop helps React identify which items have changed, been added, or removed.
- Use unique, stable identifiers (e.g., database IDs) for keys, not array indices.

**Why Avoid Indices as Keys?**
Using indices can cause issues when items are reordered or removed, leading to incorrect rendering or performance problems.

**Best Practice**:
- Always include a `key` prop when rendering lists.
- Ensure keys are unique within the list.
- Avoid complex computations inside `map()`; extract them to separate functions if needed.