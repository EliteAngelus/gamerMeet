// Dependencies 
const express = require('express');

const bodyparser = require('body-parser');

const path = require('path');

const app = express();
// ===DATA BASE====
// First Name 
// Last Name 
// Username 
// Email 
// Password 

app.use(express.static('public'));

// Set up the Express app to Handle data parsing 

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Routes Handling 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/signup.html"))
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"))
})

// PORT
app.listen(3000, function() {
    console.log("Server started on Port 3000...")
})