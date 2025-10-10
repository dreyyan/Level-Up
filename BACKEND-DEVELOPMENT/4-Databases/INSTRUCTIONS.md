# [ 4 ] Databases
Please complete all the specified problems for each topic.
> **NOTE**: Please provide separate files (HTML, JavaScript, or others as specified) for each problem unless stated otherwise. Create your submission files in the separate folders provided. CSS is not required as the focus is on backend development concepts and integration using the MERN stack.
By completing all the problems, you will gain a solid understanding of the essentials for backend development with MongoDB, Express.js, React, and Node.js.

## PROBLEM #4: Databases
### INSTRUCTIONS:
Create the following to integrate MongoDB with Express.js using Mongoose:
- **Task 1**: An Express.js app with Mongoose connected to MongoDB. Define a Book schema with `title` (string, required), `author` (string, required), `published` (number). Implement POST /books to save a book and return it.
- **Task 2**: Extend the app from Task 1 with endpoints:
  - GET /books (list all books)
  - GET /books/:id (get a book by ID)
  - PUT /books/:id (update a book’s title or author)
  - DELETE /books/:id (delete a book)
  - Return appropriate HTTP status codes and error messages.