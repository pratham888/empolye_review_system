const mongoose = require("mongoose");
const dotEnv = require('dotenv');
dotEnv.config();

// const url=process.env.MONGODB_URL;
// // Connection to mongodb.
// mongoose.connect("mongodb+srv://kfaizan0496:049632@cluster0.w6qbmlr.mongodb.net/?retryWrites=true&w=majority"); 
mongoose.connect('mongodb://127.0.0.1/emplyee_review');
//const db=mongoose.connection;

// db store the connection
const db = mongoose.connection; 

// checking the connection
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DATABASE connection is Established");
});

// Exporting the connection.
module.exports = db;