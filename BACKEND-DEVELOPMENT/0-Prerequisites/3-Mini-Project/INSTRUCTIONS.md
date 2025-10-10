# Pre-requisite: JavaScript and Node.js for Backend Development
Please complete the specified project.
> **NOTE**: Provide separate JavaScript files for the project (Node.js-based). Create your submission files in the provided folder. This project integrates all concepts learned (JavaScript basics, asynchronous programming, file system operations, and HTTP servers) as a prerequisite for backend development with Node.js and Express.js.
By completing this project, you will demonstrate a solid understanding of backend development concepts necessary for building MERN stack applications.

## PROJECT: Task Management API
### INSTRUCTIONS:
Create a backend task management API using Node.js that handles task creation, retrieval, updates, and deletion, with file-based storage and basic HTTP server functionality. The app should process requests, manage data, and return appropriate responses.

#### JavaScript Requirements (Node.js):
- Create a Node.js application with the following structure:
  - **Main Script (`server.js`)**: Set up an HTTP server using the `http` module to handle requests on port 3000.
  - **Data File (`tasks.json`)**: Store tasks in a JSON file, with each task having `id` (unique string), `title` (string), `completed` (boolean), and `createdAt` (ISO date string).
  - **Utility Module (`taskManager.js`)**: Handle task operations (reading/writing to `tasks.json`, CRUD logic).
- Implement the following endpoints:
  - **GET /tasks**: Return a JSON array of all tasks.
  - **GET /tasks/:id**: Return a JSON object for a specific task by ID or a 404 status if not found.
  - **POST /tasks**: Create a new task from the request body (expects `title` field) and save it to `tasks.json`. Return the created task with a 201 status.
  - **PUT /tasks/:id**: Update a task’s `title` or `completed` status from the request body. Return the updated task or a 404 status if not found.
  - **DELETE /tasks/:id**: Delete a task by ID. Return a 204 status on success or 404 if not found.
- Use the `fs` module with promises (`fs.promises`) for asynchronous file operations to read/write `tasks.json`.
- Parse incoming request bodies for POST and PUT requests (handle JSON payloads).
- Include error handling for:
  - File read/write errors (e.g., return 500 status with error message).
  - Invalid JSON in request bodies (return 400 status).
  - Missing required fields in POST requests (return 400 status).
- Ensure the server responds with appropriate HTTP status codes (200, 201, 400, 404, 500) and JSON responses.

#### Extension Features:
- Implement a basic logging system that writes request details (method, URL, timestamp) to a `logs.txt` file for each request.
- Add query parameter support for GET /tasks (e.g., `?completed=true` to filter tasks by completion status).
- Use `crypto` module to generate unique IDs for new tasks (e.g., `crypto.randomUUID()`).