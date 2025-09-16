# VIII. Side Effects & Data Fetching

Side effects in React involve tasks like fetching data from APIs, subscriptions, or timers. The `useEffect` hook is commonly used to manage side effects, and this section covers fetching data, using Axios vs. `fetch`, and handling loading, errors, and empty states.

## Fetching API Data

Use the `useEffect` hook to fetch data when a component mounts or when dependencies change.

**Example**:
```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []); // Empty dependency array = runs once on mount

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Axios vs Fetch

- **`fetch`**: Built-in browser API, lightweight, but requires manual JSON parsing and error handling.
- **Axios**: A popular library with better error handling, automatic JSON parsing, and interceptors.

**Fetch Example**:
```jsx
useEffect(() => {
  fetch('https://api.example.com/data')
    .then((response) => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.error(error));
}, []);
```

**Axios Example**:
```bash
npm install axios
```
```jsx
import axios from 'axios';
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Best Practice**:
- Use `fetch` for simple apps or when minimizing dependencies.
- Use Axios for better error handling and cleaner code in larger apps.

## Handling Loading, Errors, and Empty States

Always account for loading states, errors, and empty data to improve user experience.

**Example**:
```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (users.length === 0) return <p>No users found.</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Best Practice**:
- Use separate state variables for `loading`, `error`, and `data`.
- Display user-friendly messages for each state.
- Handle edge cases like empty data or network failures.