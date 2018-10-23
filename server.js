// Dependencies 
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

const authTestData = require('./test-data/user-CXL.js');
const nonAuthTestData = require('./test-data/non-auth.js');
const groupData = [
    require('./test-data/group-NEOFF.js'),

]



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



app.use(express.static(path.join(__dirname, 'public')));

// Set up the Express app to Handle data parsing 

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Routes Handling
// ------------------------------------------------
app.get('/', (req,res) => {
    if (req.query.auth){
        res.render('blocks/home', authTestData);
    }
    else {
        res.render('blocks/home', nonAuthTestData);
    }
    
})

app.get('/signup', (req,res) => {
    if (req.query.auth){
        res.render('blocks/signup', authTestData);
    }
    else {
        res.render('blocks/signup', nonAuthTestData);
    }
    
})

app.get('/signin', (req,res) => {
    if (req.query.auth){
        res.render('blocks/signin', authTestData);
    }
    else {
        res.render('blocks/signin', nonAuthTestData);
    }
    
})

app.get('/dashboard', (req,res) => {
    if (req.query.auth){
        res.render('blocks/dashboard', authTestData);
    }
    else {
        res.render('blocks/dashboard', nonAuthTestData);
    }
    
})

app.get('/user-profile', (req,res) => {
    if (req.query.auth){
        res.render('blocks/user-profile', authTestData);
    }
    else {
        res.render('blocks/user-profile', nonAuthTestData);
    }

})

app.get('/group-profile/:groupID', (req,res) => {
    res.render('blocks/group-profile', groupData[req.params.groupID - 1]);
})
// --------------------------------------------------


app.post("/signup", function(req, res) {

    console.log(req.body);

    // connection.query('Insert into userInfo (username, first_name, last_name, email, password) values("' + req.body.Username + '", "' + req.body.firstname + '", "' + req.body.lastname + '", "' + req.body.Email + '", "' + req.body.password + '")', function(error, results, fields) {
    //     if (error) throw error;
    //     console.log('The solution is: ', results[0]);
    // });

    res.redirect('/dashboard?auth=true');
})

app.post('/signin', (req,res) => {
    console.log(req.body);

    res.redirect('/dashboard?auth=true');
})

// PORT
app.listen(3000, function() {
    console.log("Server started on Port 3000...")
})