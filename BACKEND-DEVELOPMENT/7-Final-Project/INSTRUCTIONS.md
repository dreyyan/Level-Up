# Final Project
### INSTRUCTIONS:
Create the following to integrate Node.js, Express.js, MongoDB, and JWT authentication for a backend task management API:
- **Task 1**: A Node.js/Express.js app (`server.ts`) with MongoDB (using Mongoose) and TypeScript. Implement a task management API with:
  - A Task schema with `title` (string, required), `description` (string), `completed` (boolean, default: false), and `createdAt` (Date, default: current date).
  - Endpoints:
    - GET /api/tasks: Return a JSON array of all tasks.
    - POST /api/tasks: Create a task from the request body (title required). Return the created task with a 201 status.
    - PUT /api/tasks/:id: Update a task’s title, description, or completed status. Return the updated task or 404 if not found.
    - DELETE /api/tasks/:id: Delete a task by ID. Return a 204 status or 404 if not found.
  - Use TypeScript interfaces for request/response types and Mongoose schemas.
  - Include error handling (400 for invalid input, 500 for server errors).
- **Task 2**: Extend the app from Task 1 to include user authentication and additional functionality:
  - Implement a User schema with `username` (string, required), `email` (string, required), `password` (string, required).
  - Add endpoints:
    - POST /api/register: Hash password (use bcrypt) and save user. Return the user (omit password) with a 201 status.
    - POST /api/login: Verify credentials and return a JWT token.
    - Protect all task endpoints with JWT authentication middleware (return 401 for unauthorized requests).
  - Add a query parameter to GET /api/tasks (e.g., `?completed=true`) to filter tasks by completion status.
  - Log all requests (method, URL, timestamp) to a `logs.txt` file using the `fs` module with promises.
  - Use a `.env` file for configuration (`MONGO_URI`, `JWT_SECRET`, `PORT`) and include a `.env.example` file.
  - Use TypeScript for all files, with strict type checking and interfaces for data models.