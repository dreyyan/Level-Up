# IV. Component Communication

React components often need to share data or coordinate actions. This section covers communication patterns: parent-to-child (via props), child-to-parent (via callbacks), sibling communication, and global state management with the Context API.

## Parent to Child (via Props)

Props are the primary way to pass data from a parent component to a child component.

**Example**:
```jsx
function Parent() {
  const message = 'Hello from Parent!';
  return <Child message={message} />;
}

function Child({ message }) {
  return <p>{message}</p>;
}
```

**Best Practice**:
- Keep props simple and focused; avoid passing large objects unless necessary.
- Use TypeScript or PropTypes to enforce prop types in larger applications.
- Destructure props in the child component for cleaner code.

## Child to Parent (Callback Functions)

Child components can communicate with parents by invoking callback functions passed as props.

**Example**:
```jsx
function Parent() {
  const [message, setMessage] = useState('');

  const handleMessage = (newMessage) => {
    setMessage(newMessage);
  };

  return (
    <div>
      <Child onMessage={handleMessage} />
      <p>Parent received: {message}</p>
    </div>
  );
}

function Child({ onMessage }) {
  return (
    <button onClick={() => onMessage('Hello from Child!')}>
      Send Message
    </button>
  );
}
```

**Best Practice**:
- Use descriptive names for callback props (e.g., `onMessage`, `onChange`).
- Memoize callbacks with `useCallback` if passed to memoized child components.
- Avoid passing too many callbacks to prevent prop drilling.

## Sibling Communication

Siblings cannot directly share data, so communication is achieved by lifting state to a common parent.

**Example**:
```jsx
function Parent() {
  const [sharedState, setSharedState] = useState('');

  return (
    <div>
      <SiblingA setSharedState={setSharedState} />
      <SiblingB sharedState={sharedState} />
    </div>
  );
}

function SiblingA({ setSharedState }) {
  return (
    <input
      type="text"
      onChange={(e) => setSharedState(e.target.value)}
      placeholder="Type something"
    />
  );
}

function SiblingB({ sharedState }) {
  return <p>Sibling B sees: {sharedState}</p>;
}
```

**Best Practice**:
- Lift state to the closest common ancestor to minimize prop drilling.
- Consider Context API for deeply nested components sharing state.

## Context API (Global State Management)

The Context API allows you to share state across the component tree without prop drilling, ideal for global data like themes or user authentication.

**Example**:
```jsx
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Guest', isLoggedIn: false });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Profile />
    </UserContext.Provider>
  );
}

function Header() {
  const { user } = useContext(UserContext);
  return <h1>Welcome, {user.name}!</h1>;
}

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const login = () => {
    setUser({ name: 'Alice', isLoggedIn: true });
  };

  return (
    <div>
      <p>Status: {user.isLoggedIn ? 'Logged In' : 'Logged Out'}</p>
      <button onClick={login}>Log In</button>
    </div>
  );
}
```

**Best Practice**:
- Use Context for truly global state (e.g., theme, user data).
- Avoid overuse; prefer prop drilling for local state to keep changes traceable.
- Split contexts for unrelated concerns (e.g., `ThemeContext` vs. `UserContext`).
- Combine with `useReducer` for complex state logic in larger apps.