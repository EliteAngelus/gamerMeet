const sessionController = require("./sessionController.js");
const accountController = require("./accountController.js");
const userController = require("./userController.js");
const messagesController = require("./messagesController.js");

const ORM = {
    sessions: sessionController,
    accounts: accountController,
    users: userController,
    messages: messagesController,
}

module.exports = ORM;