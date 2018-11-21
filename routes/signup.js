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
				res.render("blocks/signup");
			}
		}
	);
})


router.post("/", function(req, res) {
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
			ORM.accounts.find(username, email, results => {
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

module.exports = router;