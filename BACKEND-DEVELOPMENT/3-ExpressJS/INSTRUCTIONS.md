# [ 3 ] ExpressJS
Please complete all the specified problems for each topic.
> **NOTE**: Please provide separate files (HTML, JavaScript, or others as specified) for each problem unless stated otherwise. Create your submission files in the separate folders provided. CSS is not required as the focus is on backend development concepts and integration using the MERN stack.
By completing all the problems, you will gain a solid understanding of the essentials for backend development with MongoDB, Express.js, React, and Node.js.

## PROBLEM #3: Express.js
### INSTRUCTIONS:
Create the following to build RESTful APIs with Express.js:
- **Task 1**: An Express.js app with routes:
  - GET /api/books (return JSON array of books)
  - POST /api/books (add a book from request body; store in memory)
  - DELETE /api/books/:id (delete a book by ID)
  - Use an in-memory array and return appropriate HTTP status codes (200, 201, 404).
- **Task 2**: Extend the app from Task 1 with a middleware that logs the HTTP method, URL, and timestamp for each request to the console.