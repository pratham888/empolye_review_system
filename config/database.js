const mongoose = require("mongoose");
const dotEnv = require('dotenv');
dotEnv.config();

// const url=process.env.MONGODB_URL;
mongoose.connect('mongodb+srv://Pratham:Pratham123@cluster0.c87sf5o.mongodb.net/empolye_review');

//mongoose.connect('mongodb://localhost:27017');
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
