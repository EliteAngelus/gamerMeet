const express = require("express");
const router = express.Router();

const ORM = require("./../controllers/ORM.js");

router.get("/", (req, res) => {
	console.log("\n\n app.get '/' cookie check: ", req.cookies.gamersmeetup);
	// Look up the cookie info.
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		results => {
			console.log("\n\napp.get '/' Results: ", results);
			const homePageData = {
				pageTitle: "Home"
			};

			// If the cookie has an accountID attached, find the user tied to the cookie...
			if (results.accountID !== null) {
				ORM.users.find(results.accountID, results => {
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

module.exports = router;