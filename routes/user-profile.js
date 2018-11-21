const express = require("express");
const router = express.Router();

const ORM = require("./../controllers/ORM.js");

router.get("/", (req, res) => {
	if (req.query.auth && req.params.userID) {
		data = userData[req.params.userID];

		res.render("blocks/user-profile", data);
	} else {
		res.render("blocks/user-profile", nonAuthTestData);
	}
});

module.exports = router;