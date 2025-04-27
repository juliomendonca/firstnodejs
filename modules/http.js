const http = require("http"); // Importing the http module

const PORT = 3000; // Define the port number

const server = http.createServer((req, res) => { // Create an HTTP server
  if (req.url === "/") { // Check if the request URL is "/"
    res.writeHead(200, { "Content-Type": "text/html" }); // Write the response header
    res.end("<h1>Welcome to my server!</h1>"); // End the response with a welcome message
  }

  if (req.url == '/users')  {
    const users = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 }
    ];
    res.writeHead(200, { "Content-Type": "application/json" }); // Write the response header for JSON
    res.end(JSON.stringify(users)); // End the response with the users data in JSON format
  }
}); // End the response

server.listen(PORT, () => { // Start the server and listen on the defined port
  console.log(`Server is running at http://localhost:${PORT}`); // Log the server URL to the console
}); // End the server creation