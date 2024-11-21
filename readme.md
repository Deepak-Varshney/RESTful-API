Here’s a simple README file template for your project that includes all the necessary details:

---

# User API - Node.js and Express

A simple RESTful API to manage a list of users, built with Node.js and Express. This API supports CRUD operations (Create, Read, Update, Delete) for users and includes middleware for logging requests and validating inputs.

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
  - [GET /users](#get-users)
  - [GET /users/:id](#get-usersid)
  - [POST /users](#post-users)
  - [PUT /users/:id](#put-usersid)
  - [DELETE /users/:id](#delete-usersid)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Testing](#testing)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/user-api.git
   ```

2. Navigate into the project folder:

   ```bash
   cd user-api
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node app.js
   ```

   Your API will be running at `http://localhost:3000`.

## API Endpoints

### GET /users

Fetch a list of all users.

- **Method**: `GET`
- **URL**: `/users`
- **Response** (Example):
  ```json
  [
    {
      "id": "1",
      "firstName": "Anshika",
      "lastName": "Agarwal",
      "hobby": "Teaching"
    }
  ]
  ```

### GET /users/:id

Fetch details of a specific user by their ID.

- **Method**: `GET`
- **URL**: `/users/:id`
- **Response** (Example):
  ```json
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Teaching"
  }
  ```
  
  **Error Response** (if user not found):
  ```json
  {
    "message": "User not found"
  }
  ```

### POST /users

Add a new user to the list.

- **Method**: `POST`
- **URL**: `/users`
- **Request Body** (Example):
  ```json
  {
    "id": "2",
    "firstName": "John",
    "lastName": "Doe",
    "hobby": "Reading"
  }
  ```
- **Response** (Example):
  ```json
  {
    "id": "2",
    "firstName": "John",
    "lastName": "Doe",
    "hobby": "Reading"
  }
  ```

### PUT /users/:id

Update the details of an existing user.

- **Method**: `PUT`
- **URL**: `/users/:id`
- **Request Body** (Example):
  ```json
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Writing"
  }
  ```
- **Response** (Example):
  ```json
  {
    "id": "1",
    "firstName": "Anshika",
    "lastName": "Agarwal",
    "hobby": "Writing"
  }
  ```

### DELETE /users/:id

Delete a user by their ID.

- **Method**: `DELETE`
- **URL**: `/users/:id`
- **Response**: `204 No Content`

## Middleware

- **Logger Middleware**: Logs the details of each request (method, URL, status code, and duration).
  
- **Validation Middleware**: Ensures that `id`, `firstName`, `lastName`, and `hobby` fields are provided when creating or updating a user. Returns a `400` status code if any required field is missing.

## Error Handling

- **404**: Returned if the user with the specified ID is not found (for `GET`, `PUT`, `DELETE`).
- **400**: Returned if the request body is missing any required fields (`POST`, `PUT`).
- **204**: Returned on successful user deletion with no content.

## Testing

You can test the API using **Postman** or **ThunderClient** (VS Code extension).

- Test each endpoint by sending the appropriate HTTP requests (GET, POST, PUT, DELETE).
- You can see the responses, which will include the relevant user data or error messages based on the status code.

### Example Tests:

- **GET /users**: Fetches all users.
- **GET /users/:id**: Fetches a specific user by their ID.
- **POST /users**: Adds a new user.
- **PUT /users/:id**: Updates an existing user.
- **DELETE /users/:id**: Deletes a user by their ID.

## Usage

Once the server is running, you can interact with the API using the provided endpoints. You can test, modify, and extend the API to suit additional use cases.

## Technologies

- **Node.js**: A JavaScript runtime used to build the API.
- **Express**: Web framework for Node.js to handle routing and middleware.

## Contributing

Feel free to fork the repository, submit issues, and create pull requests. Contributions are welcome!

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---
