// Example of how it used to be
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session'); // Cookies on server-side
const MongoStore = require('connect-mongo');

const mongoOptions = {useNewUrlParser: true, useUnifiedTopology:true};

// Now all the sessions are being saved in REDIS
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://fede-infa:<password>@myproject.4m9q3.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions,
    }),
    secret: 'This is private, a secret', // Should be a random keyword to encrypt the info on session
    resave: true, // Save in every change
    saveUninitialized: true // Save in every change
}));

app.use(cookieParser()); // It allows to use method req.cookies
app.user(express.json());


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