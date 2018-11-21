const connection = require("./../config/connection.js");

const hashController = {
    create: function(accountID, iterations, hash, cb) {
        const queryString = 
            "INSERT INTO `hashes` (accountID, iterations, hash) " +
            "VALUES (?, ?, ?);"
            
        connection.execute(queryString, [accountID, iterations, hash], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nhashController - Hash created: ", results);

            cb(results);
        });
    },
    find: function(accountID, cb) {
        const queryString = "SELECT * FROM `hashes` WHERE `accountID`=?";

        connection.execute(queryString, [accountID], (err, results, fields) => {
            if (err) throw err;
            console.log("\n\nhashController - User Found: ", results[0]);
            cb(results[0]);
        })
    }
}

module.exports = hashController;