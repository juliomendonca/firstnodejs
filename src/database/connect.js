const mogoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cursonodejs.gb7nkxj.mongodb.net/?retryWrites=true&w=majority&appName=CursoNodeJS`;

const connectDB = async () => {
  try {
    await mogoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB; // Export the connectDB function for use in other modules
