const userController = {
    create: function(accountID, username, connection, cb) {
        const queryString = 
            "INSERT INTO `users` (accountID, username, joinDate, lastActive)" + 
            "VALUES (?, ?, NOW(), NOW());"

        connection.execute(queryString, [accountID, username], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nuserController - User Found: ", results);

            cb(results);
        })

    },
    find: function(accountID,connection, cb) {
        const queryString = "SELECT * FROM `users` WHERE `accountID`=?";

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\nuserController - User Found: ", results);
            cb(results[0]);
        })
    }
}

module.exports = userController;