// Dependencies 
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

const testData = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    name: 'Chris',
    isAuthed: false,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'gamerData'
// });

// connection.connect();

// connection.query('SELECT * from userInfo', function(error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0]);
// });

// ===DATA BASE====
// First Name 
// Last Name 
// Username 
// Email 
// Password 

app.use(express.static('public'));

// Set up the Express app to Handle data parsing 

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//Routes Handling 

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/signup.html"))
})

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/survey.html"))
})

app.get('/test', (req,res) => {
    res.render('blocks/home', testData);
})


app.post("/signup", function(req, res) {

    console.log(req.body);

    connection.query('Insert into userInfo (username, first_name, last_name, email, password) values("' + req.body.Username + '", "' + req.body.firstname + '", "' + req.body.lastname + '", "' + req.body.Email + '", "' + req.body.password + '")', function(error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0]);
    });
})

// PORT
app.listen(3000, function() {
    console.log("Server started on Port 3000...")
})