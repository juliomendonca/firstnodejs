const express = require("express");
const UserModel = require("../src/database/models/user.model"); // Import the UserModel from the database module

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies

// Middleware to log request details
// É executado antes de cada rota
app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`); // Log the HTTP method of the request
  console.log(`Request URL: ${req.url}`); // Log the URL of the request
  console.log(`Request Body: ${JSON.stringify(req.body)}`); // Log the body of the request
  next(); // Call the next middleware or route handler
});

const PORT = 3000; // Define the port number

app.get("/", (req, res) => {
  res.contentType("text/html"); // Set the content type to HTML
  res.status(200).send("<h1>Welcome to my server!</h1>"); // Send a welcome message as HTML response
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find(); // Fetch all users from the database
    res.status(200).json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error to the console
    res.status(500).send(error.message); // Send an error response
  }
});

app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const users = await UserModel.findById(id); // Fetch all users from the database
    res.status(200).json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error fetching users:", error); // Log the error to the console
    res.status(500).send(error.message); // Send an error response
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = new UserModel(req.body); // Create a new user instance with the request body
    req.status(201).json(user); // Send the created user as JSON response
  } catch (error) {
    console.error("Error creating user:", error); // Log the error to the console
    res.status(500).send(error.message); // Send an error response
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const users = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // Update the user with the given ID using the request body
    res.status(200).json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error creating user:", error); // Log the error to the console
    res.status(500).send(error.message); // Send an error response
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id; // Get the user ID from the request parameters
    const users = await UserModel.findByIdAndDelete(id); // Delete the user with the given ID using the request body
    res.status(200).json(users); // Send the users as JSON response
  } catch (error) {
    console.error("Error creating user:", error); // Log the error to the console
    res.status(500).send(error.message); // Send an error response
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`); // Log the server URL to the console
}); // End the server creation
// This code creates a simple Express server that responds to HTTP GET requests on two routes: "/" and "/users".
