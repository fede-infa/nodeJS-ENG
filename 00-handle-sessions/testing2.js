const express = require('express');
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(session({
    secret: 'ASjdsajfas241844sdfsfsd5w53',
    resave: true,
    saveUninitialized: true
}));
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

// Endpoints tested with Postman

app.post('/signup', (req, res) =>{
    const {username, password} = req.body;
    if(!username || !password) throw new Error('Invalid credentials');
    req.session.user = username;
    req.session.is = req.session.id ? req.session.id + 1: 1;
    res.cookie('isRegistered', 'true').json({
        msg: 'User registered',
        username,
    })
})

app.post('/login', (req, res) =>{
    const {username} = req.body;
    if(!username) throw new Error('Invalid credentials');
    if(req.session.user == username){
        res.send('Authentication completed');
    } else{
        res.send('You are not registered');
    }
})

app.post('/logout', (req, res) =>{
    req.session.destroy();
    res.send('User logged out');
})

app.listen(4000, () => console.log('http://localhost:4000'));