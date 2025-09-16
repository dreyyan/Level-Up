# III. React Hooks

React Hooks, introduced in React 16.8, allow functional components to manage state, handle side effects, and access other React features without using class components. This section covers the most commonly used hooks (`useState`, `useEffect`, `useRef`, `useMemo`, `useCallback`) and how to create custom hooks.

## useState (Managing State)

The `useState` hook enables functional components to manage state, replacing the need for class-based state management.

- **Syntax**: `const [state, setState] = useState(initialState);`
- `state`: The current state value.
- `setState`: A function to update the state, triggering a re-render.
- `initialState`: Can be a value or a function for lazy initialization.

**Example**:
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Lazy Initialization** (for expensive initial state):
```jsx
function ExpensiveCounter() {
  const [count, setCount] = useState(() => {
    console.log('Computing initial state');
    return 0;
  });

  return <p>Count: {count}</p>;
}
```

**Best Practice**:
- Use multiple `useState` calls for unrelated state variables.
- Avoid complex state objects unless necessary; prefer separate state variables for clarity.
- Use functional updates (`setCount(prev => prev + 1)`) when the new state depends on the previous state.

## useEffect (Lifecycle Management & Side Effects)

The `useEffect` hook handles side effects (e.g., data fetching, subscriptions, timers) and mimics lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`.

- **Syntax**: `useEffect(() => { /* effect */ }, [dependencies]);`
- Runs after every render by default, or when specified dependencies change.
- Return a cleanup function to handle unmounting or prevent memory leaks.

**Example (Fetching Data)**:
```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Empty array: runs once on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Example (Cleanup)**:
```jsx
import { useEffect } from 'react';

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => console.log('Tick'), 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return <p>Check the console for ticks</p>;
}
```

**Best Practice**:
- Include all dependencies used in the effect in the dependency array.
- Use cleanup functions for subscriptions or timers to prevent memory leaks.
- Split unrelated effects into separate `useEffect` calls for clarity.

## useRef (Referencing DOM Elements)

The `useRef` hook creates a mutable reference that persists across renders, commonly used to access DOM elements or store values without triggering re-renders.

**Example (DOM Reference)**:
```jsx
import { useRef } from 'react';

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
```

**Example (Storing Previous Value)**:
```jsx
import { useState, useEffect, useRef } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count; // Store previous count
  }, [count]);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

**Best Practice**:
- Use `useRef` for DOM manipulation or persistent values that don’t affect rendering.
- Avoid using `useRef` as a substitute for state; use `useState` for values that trigger re-renders.

## useMemo & useCallback (Performance Optimization)

These hooks optimize performance by memoizing values or functions, preventing unnecessary computations or re-renders.

- **useMemo**: Memoizes a computed value, recalculating only when dependencies change.
- **useCallback**: Memoizes a function, recreating it only when dependencies change.

**useMemo Example**:
```jsx
import { useState, useMemo } from 'react';

function SortedList({ items }) {
  const sortedItems = useMemo(() => {
    console.log('Sorting items');
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sortedItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
```

**useCallback Example**:
```jsx
import { useState, useCallback } from 'react';
import { memo } from 'react';

const Child = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment: {count}</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

**Best Practice**:
- Use `useMemo` for expensive computations (e.g., sorting, filtering).
- Use `useCallback` when passing functions to memoized components to prevent re-renders.
- Avoid overuse, as these hooks add complexity and memory overhead.

## Custom Hooks

Custom hooks are reusable functions that encapsulate hook-based logic, promoting code reuse and modularity.

**Example (Custom Hook for Fetching Data)**:
```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

function UserList() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Best Practice**:
- Name custom hooks with the `use` prefix (e.g., `useFetch`).
- Encapsulate related logic (state + effects) in a single hook.
- Ensure custom hooks are reusable across components.