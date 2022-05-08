// Example of how it used to be
const express = require('express');
const app = express();
const session = require('express-session'); // Cookies on server-side
const cookieParser = require('cookie-parser');

// Middleware session
app.use(session({
    secret: 'This is private, a secret', // Should be a random keyword to encrypt the info on session
    resave: true, // Save in every change
    saveUninitialized: true // Save in every change
}));

app.use(cookieParser()); // It allows to use method req.cookies

// This sessions are saved in server RAM memory
app.get('/', (req, res) =>{
    req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
    console.log(req.cookies);
    res.send(`Hallo Welt! you visited us ${req.session.counter} times`);
});

app.get('/hallo', (req, res, next) =>{
    req.session.counter = req.session.counter ? req.session.counter + 1 : 1;
    res.send(`From infex you were requesting data`);
})

app.get('/set-cookie', (req, res, next) =>{
    res.cookie('from','server').send('Cookie sent');    
})

app.listen(8080, () => console.log(`Server up http://localhost:8080`));