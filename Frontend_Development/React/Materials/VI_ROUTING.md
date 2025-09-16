# VI. Routing

Routing in React enables navigation between different views or pages in a single-page application (SPA). The `react-router-dom` library is the standard for handling routing in React.

## `react-router-dom` Basics

Install `react-router-dom`:
```bash
npm install react-router-dom
```

Wrap your app in a `BrowserRouter` component to enable routing.

**Example**:
```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## `Routes` and `Route` Components

- `Routes`: A container for all `Route` components, ensuring only one route is rendered at a time.
- `Route`: Defines a mapping between a URL path and a component.

**Example**:
```jsx
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
```

- Use `path="*"` for a fallback route (e.g., 404 page).

## `Link` and `NavLink`

- `Link`: A component for navigating between routes without reloading the page.
- `NavLink`: A special `Link` that adds styling for active routes.

**Example**:
```jsx
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'black',
        })}
      >
        About
      </NavLink>
    </nav>
  );
}
```

**Best Practice**:
- Use `Link` for basic navigation.
- Use `NavLink` when you need to style the active link (e.g., highlight the current page).

## URL Parameters

Capture dynamic segments of the URL using `useParams` hook.

**Example**:
```jsx
import { useParams } from 'react-router-dom';

function User() {
  const { id } = useParams();
  return <h1>User ID: {id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- Access the URL via `<Link to="/user/123">User 123</Link>`.

## Nested Routes

Nested routes allow you to render child components within a parent component’s UI.

**Example**:
```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}

function Profile() {
  return <h2>Profile Page</h2>;
}

function Settings() {
  return <h2>Settings Page</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```

- `<Outlet>` renders the child route’s component.
- Access via `/dashboard/profile` or `/dashboard/settings`.

## Redirects/Navigation Programmatically

Use the `useNavigate` hook to programmatically navigate.

**Example**:
```jsx
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login
    navigate('/dashboard');
  };

  return <button onClick={handleLogin}>Log In</button>;
}
```

**Best Practice**:
- Use `useNavigate` for dynamic navigation (e.g., after form submission).
- Avoid hardcoding redirects; use dynamic paths when possible.