const hashController = {
    create: function(accountID, iterations, hash, connection, cb) {
        const queryString = 
            "INSERT INTO `hashes` (accountID, iterations, hash) " +
            "VALUES (?, ?, ?);"
            
        connection.execute(queryString, [accountID, iterations, hash], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nhashController - Hash created: ", results);

            cb(results);
        });
    },
    find: function(accountID,connection, cb) {
        const queryString = "SELECT * FROM `users` WHERE `accountID`=?";

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\nhashController - User Found: ", results[0]);
            cb(results[0]);
        })
    }
}

module.exports = hashController;