# [ 5 ] Auth
Please complete all the specified problems for each topic.
> **NOTE**: Please provide separate files (HTML, JavaScript, or others as specified) for each problem unless stated otherwise. Create your submission files in the separate folders provided. CSS is not required as the focus is on backend development concepts and integration using the MERN stack.
By completing all the problems, you will gain a solid understanding of the essentials for backend development with MongoDB, Express.js, React, and Node.js.

## PROBLEM #5: Authentication
### INSTRUCTIONS:
Create the following to implement JWT-based authentication:
- **Task 1**: An Express.js app with Mongoose and MongoDB. Define a User schema with `username`, `email`, `password` (all required). Implement:
  - POST /register (hash password with bcrypt, save user)
  - POST /login (verify credentials, return JWT)
  - Use a .env file for the JWT secret.
- **Task 2**: Extend the app from Task 1. Add JWT verification middleware to protect the Book API endpoints from Problem #4, Task 2. Return 401 for unauthorized requests.