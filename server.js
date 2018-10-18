// Dependencies 
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const mysql = require('mysql');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

const authTestData = {
    title: 'Testing out PUG',
    message: 'Pug is pretty cool.',
    user: {
        username: 'CXL',
        profileImageLocation: '/img/',
        profileImage: 'test-profile-pic.png',
        joinDate: '10/10/2018',
        lastActive: 'Today',
        groups: [
            {
                name: 'Skyrim in Seattle',
                id: 1,
                latestNews: [
                    {
                        message: 'Simon Belmont has joined.',
                        timestamp: 'today',
                    }
                ]
            },
            {
                name: 'Tri-Force Heros',
                id: 2,
                latestNews: [
                    {
                        message: 'Zelda Night: A gathering of heros.',
                        timestamp: 'today',
                    }
                ]
            },
            {
                name: 'Not Even Our Final Form',
                id: 3,
                latestNews: [
                    {
                        message: 'Everyone has to put beerus on their team today.',
                        timestamp: 'yesterday',
                    }
                ]
            }
        ],
        friends: [
            {
                name: 'El Jefe',
                id: 1,
                latestMessages: [
                    {
                        message: "I'm gonna learn beerus, he's not as bad as eveyone says.",
                        timestamp: 'today'
                    }
                ],
            },
            {
                name: 'Simon Belmont',
                id:2,
                latestMessages: [
                    {
                        message: "I can't wait to try bloodstained. I hope it dosen't suck.",
                        timestamp: 'today'
                    }
                ],
            },
            {
                name: 'Beerus Sucks',
                id: 3,
                latestMessages: [
                    {
                        message: "Yup. Beerus sucks. Sigh.",
                        timestamp: 'yesterday'
                    }
                ],
            }
        ]
    },
    name: 'Chris',
    bio: "\"I'm here to kick ass and chew bubblegum. And I'm running low on gum.\"",
    profileImageLocation: '/img/',
    profileImage: 'test-profile-pic.png',
    isAuthed: true,
    numberArray: [1,2,3,4,1,2,3,4],
    colorObject: {color1: 'red', color2: 'blue', color3: 'green'}
}

const nonAuthTestData = {
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