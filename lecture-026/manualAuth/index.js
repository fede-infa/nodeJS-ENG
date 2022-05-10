const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(session({
    secret: 'asdajsksfd92109jnas_ai2812@@@ksgd09012n',
    resave: false,
    saveUninitialized: false
}));

app.get('/', (req, res) =>{
    res.send('server ok');
});


const auth = (req, res, next) =>{
    if(req.session && req.session.user) return next();
    return res.status(400).send('Not authorized');
}
let users = [];

app.post('/signup', (req, res) =>{
    const user = req.body;
    const existUser = users.find( u => u.username === user.username);

    if(existUser) res.status(400).send(`User is already created`);

    // Hash vs Encrypt
    /*
        Hash can not go backwards vs Encryptation can
     */
    user.password = bcrypt.hashSync(user.password, 12);
    users.push(user);
    console.log(users);
    res.json({
        status: 'User created',
        user: user
    })
});

app.post('/login', (req, res) =>{
    const {username, password} = req.body;
    const existUser = users.find( u => u.username === username);

    if(!existUser || !bcrypt.compareSync(password, existUser.password)) res.status(400).send('Invalid credentials');

    if(bcrypt.compareSync(password, existUser.password)){
        req.session.user = username;
        res.send('You are now being redirected');
    }
})

app.get('/data', auth, (req, res) =>{
    res.send(req.session);
})

app.delete('/logout', auth, (req, res) =>{
    req.session.destroy();
    res.send('You logged out');
})

app.listen(8080, () => console.log('Server up on port 8080'));