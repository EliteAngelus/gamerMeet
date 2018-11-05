const userController = {
    find: function(accountID,connection, cb) {
        const queryString = "SELECT * FROM `users` WHERE `accountID`=?";

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;
            console.log("User Found: ", results[0]);
            cb(results[0]);
        })
    }
}

module.exports = userController;