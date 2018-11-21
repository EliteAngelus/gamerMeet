// Imports
const mysql = require("mysql2");

// Import Enviorment Variables
require("dotenv").config();


// Create connection to the database
const connection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME
});

// Open the connection to the database
//connection.connect();

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


module.exports = connection;