const express = require("express");
const router = express.Router();

const ORM = require("./../controllers/ORM.js");

router.get("/", (req, res) => {
	if (req.params.groupID) {
		res.render("blocks/group-profile", groupData[req.params.groupID]);
	}
});

module.exports = router;