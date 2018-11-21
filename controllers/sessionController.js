const connection = require("./../config/connection.js");

const sessionController = {
    // Create a session and store the connections cookieID and cookieIP.
	create: function(cookieID, cookieIP, cb) {
		connection.execute(
            "INSERT INTO `sessions` (cookieID, cookieIP, lastActive) VALUES(?, ?, NOW())", 
            [cookieID, cookieIP],
            function(error, results, fields) {
                if (error) throw error;
                
                console.log("\n\nsessionController - Session Created: ", results);

                cb(results);
		});
	},

    // Refresh a cookie's last active time
	refresh: function(accountID, cookieID) {
        connection.execute("UPDATE `sessions` SET accountID=?, sessionCreated=NOW() WHERE cookieID=?", 
        [accountID, cookieID],
        function(error, results, fields) {
            if (error) throw error;
            
			console.log("\n\nsessionController - Session refreshed: ", results);
		});
    },
    
    // Update a session with an accountID
    update: function(accountID, cookieID, cookieIP, cb) {
        const queryString = 
            "UPDATE `sessions` SET `accountID`=? WHERE `cookieID`=? AND " +
            "`cookieIP`=?;"

        connection.execute(queryString,[accountID, cookieID, cookieIP], (err, results, fields) => {
            if (err) throw err;

            console.log("\n\nsessionController - Session updated: ", results);

            cb(results);
        });
    },

    // End a session
	end: function() {},

    // Remove a session
    delete: function() {},
    
    // Get the data linked to a cookie.
    lookup: function(cookieID, cookieIP, cb) {
        let queryString = "SELECT * FROM `sessions` WHERE `cookieID`=? AND `cookieIP`=?";
        
        connection.execute(queryString, 
        [cookieID, cookieIP],
        function(error, results, fields) {
            if (error) throw error;
            
            console.log("sessionController - Session looked up: ", results[0]);

            return cb(results[0]);
		});
    }
};


// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );



module.exports = sessionController;
