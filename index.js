const dotenv = require("dotenv");
const connectDB = require("./src/database/connect"); // Import the connectDB function from the database module

dotenv.config(); // Load environment variables from .env file
connectDB(); // Call the connectDB function to establish a connection to the database

// const Person = require("./person").Person;

// // require("./modules/path"); // This will execute the path module code

// const person1 = new Person("Alice", 30);
// const person2 = new Person("Bob", 25);

// console.log(person1.greet()); // Hello, my name is Alice and I am 30 years old.
// console.log(person2.greet()); // Hello, my name is Bob and I am 25 years old.

// require("./modules/http"); // This will execute the http module code

// require("./modules/express"); // This will execute the express module code