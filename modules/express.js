const express = require("express");

const app = express();

const PORT = 3000; // Define the port number

app.get("/", (req, res) => {
  res.contentType("text/html"); // Set the content type to HTML
  res.status(200).send("<h1>Welcome to my server!</h1>"); // Send a welcome message as HTML response
});

app.get("/users", (req, res) => {
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 },
  ];
  res.status(200).json(users); // Send the users data as JSON response
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); // Log the server URL to the console
}); // End the server creation
// This code creates a simple Express server that responds to HTTP GET requests on two routes: "/" and "/users".
