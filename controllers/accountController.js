const accountController = {
	create: function(username, email, connection, cb) {
		const queryString =
            "INSERT INTO `userAccounts` (username, joinDate, email)" 
            +" VALUES (?,NOW(),?);";
        
        connection.execute(queryString, [username, email], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\naccountController - Account Created: ", results);

            cb(results);
        })
	},

	find: function(username, email, connection, cb) {
        const queryString = 
            "SELECT `joinDate` FROM `userAccounts` WHERE `username`=? OR `email`=?";

        connection.execute(queryString, [username, email], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\naccountController - Account Found: ", results[0]);

            cb(results[0]);
        });
    }
};

module.exports = accountController;
