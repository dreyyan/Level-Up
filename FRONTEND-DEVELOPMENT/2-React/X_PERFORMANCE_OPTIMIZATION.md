# X. Performance Optimization

Optimizing React applications ensures fast rendering and a smooth user experience. This section covers memoization, lazy loading, code splitting, and avoiding unnecessary re-renders.

## Memoization (`React.memo`)

`React.memo` prevents unnecessary re-renders of functional components when their props haven’t changed.

**Example**:
```jsx
import { memo } from 'react';

const Child = memo(({ value }) => {
  console.log('Child rendered');
  return <p>Value: {value}</p>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child value="static" />
    </div>
  );
}
```

- `Child` only re-renders if `value` changes, not when `count` updates.

**Best Practice**:
- Use `React.memo` for components with expensive rendering logic.
- Avoid overusing it, as it adds overhead.

## Lazy Loading & Code Splitting (`React.lazy` & `Suspense`)

`React.lazy` and `Suspense` enable loading components only when needed, reducing initial bundle size.

**Example**:
```jsx
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
```

**Best Practice**:
- Use lazy loading for routes or large components.
- Provide a meaningful `fallback` UI (e.g., spinner).

## Avoiding Unnecessary Re-renders

Unnecessary re-renders occur when components update without changes to their output. Optimize by:

- **Using `useMemo` for Expensive Computations**:
```jsx
import { useMemo } from 'react';

function ExpensiveComponent({ items }) {
  const sortedItems = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return <ul>{sortedItems.map((item) => <li key={item}>{item}</li>)}</ul>;
}
```

- **Using `useCallback` for Functions**:
```jsx
import { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Child Button</button>;
});
```

**Best Practice**:
- Profile performance with React Developer Tools before optimizing.
- Use `useMemo` and `useCallback` only when necessary, as they add complexity.
- Avoid inline objects/functions in props to prevent re-renders.