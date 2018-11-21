const connection = require("./../config/connection.js");

const userController = {
    create: function(accountID, username, cb) {
        const queryString = 
            "INSERT INTO `users` (accountID, username, joinDate, lastActive)" + 
            "VALUES (?, ?, NOW(), NOW());"

        connection.execute(queryString, [accountID, username], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nuserController - User Found: ", results);

            cb(results);
        })

    },
    updateLastActive: function (accountID, cb) {
        const queryString = 
            "UPDATE `users` SET lastActive=NOW() WHERE `accountID`=?;"

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nuserController - Updated Last Active: ", results);

            cb(results);
        })
    },
    find: function(accountID, cb) {
        const queryString = "SELECT * FROM `users` WHERE `accountID`=?";

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\nuserController - User Found: ", results);
            cb(results[0]);
        })
    },
    addFriend: function (userID, friendObj, cb) {
        const queryString = "UPDATE `users` SET friends=? WHERE `userID`=?";

        connection.execute(queryString, [friendObj, userID], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nuserController - Add Friend: ", results);
            cb(results);
        });
    }
}

module.exports = userController;