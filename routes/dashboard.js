const express = require("express");
const router = express.Router();

const ORM = require("./../controllers/ORM.js");

router.get("/", (req, res) => {
	ORM.sessions.lookup(
		req.cookies.gamersmeetup,
		req.ip,
		results => {
			console.log("\n\nkbjsvbkjsdvbkjdsvkjb: ", results);
			if (!results) {
				res.redirect("/signup");
			} else {
				ORM.users.find(results.accountID, results => {
					console.log("\n\nGJDBSNVJGUHSODJBVHJSDIUOH: ", results);

					const data = {};

					data.user = results;

					res.render("blocks/dashboard", data);
				});
			}
		}
	);
});

module.exports = router;