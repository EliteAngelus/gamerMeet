const sessionController = {
    // Create a session and store the connections cookieID and cookieIP.
	create: function(cookieID, cookieIP, connection, cb) {
		connection.execute(
            "INSERT INTO `sessions` (accountID, cookieID, cookieIP, lastActive) VALUES(?, ?, ?, NOW())", 
            [null, cookieID, cookieIP],
            function(error, results, fields) {
			    if (error) throw error;
                console.log("\n\nSession Created: ", results);
                cb();
		});
	},

    // Refresh a cookie's last active time
	refresh: function(accountID, cookieID, connection) {
        connection.execute("UPDATE `sessions` SET accountID=?, sessionCreated=NOW() WHERE cookieID=?", 
        [accountID, cookieID],
        function(error, results, fields) {
			if (error) throw error;
			console.log("\n\nSession refreshed: ", results);
		});
    },
    
    // Update a session with an accountID
    update: function() {

    },

    // End a session
	end: function() {},

    // Remove a session
    delete: function() {},
    
    // Get the data linked to a cookie.
    lookup: function(cookieID, cookieIP, connection, cb) {
        let queryString = "SELECT * FROM `sessions` WHERE `cookieID`=? AND `cookieIP`=?";
        
        connection.execute(queryString, 
        [cookieID, cookieIP],
        function(error, results, fields) {
			if (error) throw error;
            console.log("Session looked up: ", results[0]);
            return cb(results[0]);
		});
		console.log("session cookie looked up");
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
