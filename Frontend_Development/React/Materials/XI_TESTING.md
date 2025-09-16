# XI. Testing

Testing ensures React components work as expected. This section covers unit testing with Jest and component testing with React Testing Library.

## Unit Testing with Jest

Jest is a popular testing framework for JavaScript and React.

**Install**:
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

**Example (Testing a Function)**:
```js
// utils.js
export function add(a, b) {
  return a + b;
}

// utils.test.js
import { add } from './utils';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});
```

**Run Tests**:
```bash
npm test
```

**Best Practice**:
- Write tests for pure functions and utilities.
- Use `describe` and `test` blocks to organize tests.

## Component Testing with React Testing Library

React Testing Library focuses on testing components from the user’s perspective.

**Example**:
```jsx
// Counter.js
import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p data-testid="count">Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

```jsx
// Counter.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('increments count when button is clicked', () => {
  render(<Counter />);
  const button = screen.getByText('Increment');
  const count = screen.getByTestId('count');

  expect(count).toHaveTextContent('Count: 0');
  fireEvent.click(button);
  expect(count).toHaveTextContent('Count: 1');
});
```

**Best Practice**:
- Use `data-testid` for querying elements when necessary.
- Test user interactions (e.g., clicks, typing) with `fireEvent`.
- Avoid testing implementation details; focus on what the user sees.