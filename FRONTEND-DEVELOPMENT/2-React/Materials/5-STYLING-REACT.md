# IX. Styling React

Styling React components can be done using various approaches, including CSS modules, styled-components, and Tailwind CSS. This section also covers conditional styling.

## CSS Modules

CSS modules scope styles locally to components, preventing naming conflicts.

**Example**:
```css
/* styles.module.css */
.button {
  background-color: blue;
  color: white;
}
```
```jsx
import styles from './styles.module.css';

function Button() {
  return <button className={styles.button}>Click Me</button>;
}
```

**Best Practice**:
- Use CSS modules for modular, component-scoped styles.
- Name files with `.module.css` to enable module support.

## Styled-Components

Styled-components is a CSS-in-JS library that allows you to write CSS within JavaScript.

**Install**:
```bash
npm install styled-components
```

**Example**:
```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

function App() {
  return <Button>Click Me</Button>;
}
```

**Best Practice**:
- Use styled-components for dynamic styles based on props.
- Keep styles concise to avoid bloated components.

## Tailwind CSS with React

Tailwind CSS provides utility classes for rapid styling.

**Install**:
```bash
npm install tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**Configure `tailwind.config.js`**:
```js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
```

**Add to `index.css`**:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

**Example**:
```jsx
function Button() {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      Click Me
    </button>
  );
}
```

**Best Practice**:
- Use Tailwind for rapid prototyping and consistent design.
- Combine with component libraries like Headless UI for accessibility.

## Conditional Styling

Apply styles dynamically based on state or props.

**Example (CSS Modules)**:
```jsx
import styles from './styles.module.css';

function Status({ isActive }) {
  return (
    <div className={`${styles.status} ${isActive ? styles.active : ''}`}>
      Status: {isActive ? 'Active' : 'Inactive'}
    </div>
  );
}
```
```css
/* styles.module.css */
.status {
  padding: 10px;
}
.active {
  background-color: green;
  color: white;
}
```

**Example (Styled-Components)**:
```jsx
import styled from 'styled-components';

const Status = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.isActive ? 'green' : 'gray')};
  color: white;
`;

function App() {
  return <Status isActive={true}>Active</Status>;
}
```

**Best Practice**:
- Use class toggling for CSS modules or Tailwind.
- Use prop-based styles for styled-components.
- Avoid inline styles for maintainability.