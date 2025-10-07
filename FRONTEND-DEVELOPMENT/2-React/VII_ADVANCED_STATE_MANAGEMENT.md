# VII. Advanced State Management

Advanced state management techniques handle complex state logic across components, including lifting state up, using the Context API, and introducing Redux for larger applications.

## Lifting State Up

When multiple components need to share state, “lift” the state to their closest common ancestor.

**Example**:
```jsx
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </div>
  );
}

function ChildA({ count }) {
  return <p>Count: {count}</p>;
}

function ChildB({ setCount }) {
  return <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>;
}
```

**Best Practice**:
- Lift state only as high as necessary to avoid prop drilling.
- Consider Context API for deeply nested components.

## Context API

The Context API provides a way to share state globally without prop drilling.

**Example**:
```jsx
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}
```

**Best Practice**:
- Use Context for global state (e.g., theme, user authentication).
- Avoid overuse; Context can make state changes harder to trace.
- Split contexts for unrelated concerns (e.g., separate `ThemeContext` and `UserContext`).

## Introduction to Redux (Optional for Advanced)

Redux is a predictable state container for managing complex, app-wide state. It’s optional for advanced users, as Context + hooks often suffice for smaller apps.

**Key Concepts**:
- **Store**: Single source of truth for state.
- **Actions**: Payloads describing what happened.
- **Reducers**: Pure functions that update state based on actions.

**Basic Setup** (using `@reduxjs/toolkit`):
```bash
npm install @reduxjs/toolkit react-redux
```

**Example**:
```jsx
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

// Define a slice
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

// Create store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const { increment } = counterSlice.actions;

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
```

**Best Practice**:
- Use Redux Toolkit to simplify Redux setup.
- Reserve Redux for large apps with complex state logic.
- Combine with Context for simpler global state needs.