// Dependencies
const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const mysql = require("mysql2");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const bcrypt = require("bcrypt");

const ORM = require("./controllers/ORM.js");

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
connection.connect();

// Create instance of express
const app = express();

// Set up PUG as the view engine and set the path for the template files
app.set("views", "./views");
app.set("view engine", "pug");

// Set up cookie parser
app.use(cookieParser());

// Manage cookies - If user does not have a cookie, set one.
app.use((req, res, next) => {
	// Get the gamers meet up cookie;
	const cookie = req.cookies.gamersmeetup;

	// Check if the cookie is set or undefined.
	if (cookie === undefined) {
		// If the cookie is undefined (no cookie) ...
		console.log("\n\nNo Cookie found.");

		// Create a random sequence to be used as the cookieID
		crypto.randomBytes(256, (err, buf) => {
			if (err) throw err;

			// Send the cookie to the user.
			res.cookie("gamersmeetup", buf.toString("hex"), {
				maxAge: 1800000,
				httpOnly: true
			});

			// Create a session and store the cookieID and connection IP
			ORM.sessions.create(buf.toString("hex"), req.ip, connection, () => {
				// Redirect the connection to it's destination in order to make sure
				// that every connection has a cookie attached.
				// It creates a loop, where every connection gets checked and only
				// passes when there is a cookie attached.
				res.redirect(req.path);
			});
		});
	} else {
		// Cookie found
		//console.log("\n\nCookie found: ", req.cookies);

		// Continue to the next module.
		next();
	}
});

// Set up static directory
app.use(express.static(path.join(__dirname, "public")));

// Set up the Express app to Handle data parsing
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// const authTestData = require("./test-data/users/user-Beerus.js");

// Routes Handling
// ------------------------------------------------
app.get("/", (req, res) => {
	console.log("\n\n app.get '/' cookie check: ", req.cookies.gamersmeetup);
	// Look up the cookie info.
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		connection,
		results => {
			console.log("\n\napp.get '/' Results: ", results);
			const homePageData = {
				pageTitle: "Home"
			};

			// If the cookie has an accountID attached, find the user tied to the cookie...
			if (results.accountID !== null) {
				ORM.users.find(results.accountID, connection, results => {
					// Attach the user info to the home page data.
					homePageData.user = results;

					// Render the home page and pass in the user info.
					res.render("blocks/home", homePageData);
				});
			} else {
				// if the cookie does not have an accountID attached...

				// Render the home page without passing any data.
				res.render("blocks/home");
			}
		}
	);
});

app.get("/signup", (req, res) => {
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		connection,
		results => {
			if (results.accountID) {
				res.redirect("/dashboard");
			} else {
				res.render("blocks/signup");
			}
		}
	);
});

app.get("/signin", (req, res) => {
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		connection,
		results => {
			if (results.accountID) {
				res.redirect("/dashboard");
			} else {
				res.render("blocks/signin");
			}
		}
	);
});

app.get("/dashboard", (req, res) => {
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		connection,
		results => {
			console.log("\n\nkbjsvbkjsdvbkjdsvkjb: ", results);
			if (!results) {
				res.redirect("/signup");
			} else {
				ORM.users.find(results.accountID, connection, results => {
					console.log("\n\nGJDBSNVJGUHSODJBVHJSDIUOH: ", results);

					const data = {};

					data.user = results;

					res.render("blocks/dashboard", data);
				});
			}
		}
	);
});

app.get("/user-profile/:userID", (req, res) => {
	if (req.query.auth && req.params.userID) {
		data = userData[req.params.userID];

		res.render("blocks/user-profile", data);
	} else {
		res.render("blocks/user-profile", nonAuthTestData);
	}
});

app.get("/group-profile/:groupID", (req, res) => {
	if (req.params.groupID) {
		res.render("blocks/group-profile", groupData[req.params.groupID]);
	}
});
// --------------------------------------------------

// POST Routes
// --------------------------------------------------
app.post("/signup", function(req, res) {
	console.log("\n\n app.post /signup", req.body);
	const { username, email, password, confirmPass } = req.body;

	// Check if there are missing fields
	if (
		username === "" ||
		email === "" ||
		password === "" ||
		confirmPass === ""
	) {
		// If there are missing fields...

		// Create an object with the errors.
		const errObj = { message: "Some fields are blank." };

		// re-render the sign up page with the errors passed in.
		res.render("blocks/signup", errObj);
	} else {
		// If there are no missing fields...

		// Check if the password and confirm pass are the same.
		if (password !== confirmPass) {
			// If the password and confirm pass do NOT match...

			// Create an object with the errors.
			const errObj = { message: "The password fields do not match." };

			// re-render the sign up page with the errors passed in.
			res.render("blocks/signup", errObj);
		} else {
			// If the password and confirm pass DO MATCH...

			// Find the accounts to check if the account already exists.
			ORM.accounts.find(username, email, connection, results => {
				console.log(results);

				// Check if the account exists.
				if (results !== undefined) {
					// If there ARE results
					// (A matching account with the same username or email).

					// Create an object with the errors.
					const errObj = {
						message: "The username or email already exists."
					};

					// re-render the sign up page with the errors passed in.
					res.render("blocks/signup", errObj);
				} else {
					// If there NO matching accounts.

					// Create an account.
					ORM.accounts.create(
						username,
						email,
						connection,
						results => {
							console.log(
								"\n\n\nUSER account created: ",
								results
							);

							// Create the hash.
							bcrypt.hash(password, 10000, function(err, hash) {
								if (err) throw err;

								console.log("\n\n\nHASH: ", hash);

								ORM.hash.create(
									results.insertId,
									10000,
									hash,
									connection,
									results => {
										console.log(
											"\n\n\nHASH created: ",
											results
										);
									}
								);

								ORM.sessions.update(
									results.insertId,
									req.cookies.gamersmeetup,
									req.ip,
									connection,
									results => {
										console.log(
											"\n\nSession update: ",
											results
										);
									}
								);

								ORM.users.create(
									results.insertId,
									username,
									connection,
									results => {
										res.redirect("/dashboard");
									}
								);
							});

							//res.render("blocks/signup");
						}
					);
				}
			});
		}
	}

	//res.redirect("/dashboard");
});

app.post("/signin", (req, res) => {
	console.log("\n\napp.post /signin: ", req.body);
	const { username, password } = req.body;

	// Check if there are missing fields.
	if (username === "" || password === "") {
		// If there are missing fields...

		// Create an object with the errors.
		const errObj = {
			message: "Some fields are blank."
		};

		// re render the sign in page with the error message passed in.
		res.render("blocks/signin", errObj);
	} else {
		// If there are no missing fields...

		// Try to find the account to see if it already exists.
		ORM.accounts.find(username, "no email", connection, results => {
			console.log(
				"\n\napp.post /signin Check if account exists: ",
				results
			);

			if (results === undefined) {
				// If the account with that username does NOT exist...

				// Create an error object with the error.
				const errObj = {
					message: "Username / Password do not match."
				};

				// re render the sign in page with the error message passed in.
				res.render("blocks/signin", errObj);
			} else {
				// If the account does exist...

				// Find the hash for the accountID
				ORM.hash.find(results.accountID, connection, results => {
					// Use bcyrpt to compare the password and hash.
					bcrypt.compare(password, results.hash, (err, result) => {
						// Check if the password and hash match.
						if (!result) {
							// If the passwords do NOT match...

							// Create an error object with the error.
							const errObj = {
								message: "Username / Password do not match."
							};

							// re render the sign in page with the error message passed in.
							res.render("blocks/signin", errObj);
						} else {
							// If the password DOES match...

							// Update the user info.
							ORM.users.updateLastActive(
								results.accountID,
								connection,
								results => {}
							);

							// Update the session info.
							ORM.sessions.update(
								results.accountID,
								req.cookies.gamersmeetup,
								req.ip,
								connection,
								results => {
									res.redirect("/dashboard");
								}
							);
						}
					});
				});
			}
		});
	}

	// res.redirect("/dashboard");
});
// ---------------------------------------------------

// PORT
app.listen(3000, function() {
	console.log("Server started on Port 3000...");
});

// connection.query("SELECT * from users", function(error, results, fields) {
// 	if (error) throw error;
// 	console.log("The solution is: ", results);
// });

// const nonAuthTestData = require("./test-data/non-auth.js");
// const groupData = [
// 	{ groupDefault: "Error obj" },
// 	require("./test-data/groups/group-SIS.js"),
// 	require("./test-data/groups/group-TFH.js"),
// 	require("./test-data/groups/group-NEOFF.js")
// ];

// const userData = [
// 	{ userDefault: "Error obj" },
// 	require("./test-data/users/user-Jefe.js"),
// 	require("./test-data/users/user-Simon.js"),
// 	require("./test-data/users/user-Beerus.js"),
// 	require("./test-data/users/user-CXL.js")
// ];
