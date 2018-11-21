const express = require("express");
const router = express.Router();

const ORM = require("./../controllers/ORM.js");

const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		results => {
			if (results.accountID) {
				res.redirect("/dashboard");
			} else {
				res.render("blocks/signin");
			}
		}
	);
});

router.post("/", (req, res) => {
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
		ORM.accounts.find(username, "no email", results => {
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
				ORM.hash.find(results.accountID, results => {
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
								results => {}
							);

							// Update the session info.
							ORM.sessions.update(
								results.accountID,
								req.cookies.gamersmeetup,
								req.ip,
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

module.exports = router;