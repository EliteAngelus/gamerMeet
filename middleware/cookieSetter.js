const connection = require("./../config/connection.js");
const crypto = require("crypto");
const ORM = require("./../controllers/ORM.js");

// Manage cookies - If user does not have a cookie, set one.
function cookieSetter(req, res, next) {
	// Get the gamers meet up cookie;
	const cookie = req.cookies.gamersmeetup;

	// Check if the cookie is set or undefined.
	if (cookie === undefined) {
		// If the cookie is undefined (no cookie) ...
		//console.log("\n\nNo Cookie found.");

		// Create a random sequence to be used as the cookieID
		crypto.randomBytes(256, (err, buf) => {
			if (err) throw err;

			// Send the cookie to the user.
			res.cookie("gamersmeetup", buf.toString("hex"), {
				maxAge: 1800000,
				httpOnly: true
			});

			// Create a session and store the cookieID and connection IP
			ORM.sessions.create(buf.toString("hex"), req.ip, () => {
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
};

module.exports = cookieSetter;