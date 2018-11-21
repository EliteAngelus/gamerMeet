// Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");

// Create instance of express
const app = express();

// Set up PUG as the view engine and set the path for the template files
app.set("views", "./views");
app.set("view engine", "pug");

// Set up cookie parser
app.use(cookieParser());

// Manage cookies on incoming connections
app.use(require("./middleware/cookieSetter.js"));

// Set up static directory
app.use(express.static(path.join(__dirname, "public")));

// Set up the Express app to Handle data parsing
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Routes Handling
// ------------------------------------------------

// Home
app.use('/', require('./routes/home.js'))

// Sign Up
app.use('/signup', require("./routes/signup.js"));

// Sign In
app.use('/signin', require("./routes/signin.js"));

// Dashboard
app.use('/dashboard', require("./routes/dashboard.js"));

// User Profile
app.use("/user-profile/:userID", require("./routes/user-profile.js"));

// Group Profile
app.use("/group-profile/:groupID", require("./routes/group-profile.js"));

// --------------------------------------------------

// PORT
app.listen(3000, function() {
	console.log("Server started on Port 3000...");
});