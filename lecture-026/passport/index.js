const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const { application } = require('express');
const session = require('express-session');
const morgan = require('morgan'); // Dev dependency to get logs

const users = [];
let globalId = 0;

const app = express();
app.use(express.json());
app.use(session({
    secret: 'asufdas89f21bas',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
// app.use(morgan('dev'));

const isValidPassword = (user, password) =>{
    return bcrypt.compareSync(password, user.password);
}
const createHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(7), null);
}

const existUser = (username) =>{
    return users.find(u => u.username === username);
}

// Login strategy
passport.use('login', new LocalStrategy({
    passReqToCallback: true
},
    function(req, username, password, done) {
        let user = users.find( u => u.username == username);

        if(!user || !isValidPassword(user, password)) return done(null, false, console.log('message', 'Invalid credentials'))

        // Return of user 
        return done(null, user);
    }
));

// Signup strategy
passport.use('signup', new LocalStrategy({
    passReqToCallback: true
}, (req, username, password, done) =>{
    findOrCreateUser = () =>{
        let user = existUser(username);

        if(user) return done(null, false, console.log('message', 'Invalid credentials'));

        let newUser = {
            id: ++globalId,
            username: username,
            password: createHash(password),
            rol: req.body.rol
        }
        users.push(newUser);
        return done(null, newUser);
    },
    process.nextTick(findOrCreateUser); // call of the function
})
);

/* Authentication middleware */
const checkAuthentication = (req, res, next) =>{
    if(req.isAuthenticated()){ // Method added by passport
        next()
    } else{
        res.redirect('/login');
    }
}

passport.serializeUser( (user, done) =>{
    done(null, user.id);
});

passport.deserializeUser( (id, done) =>{
    const user = users.find(u => u.id == id);
    return done(null, user);
});

app.get('/login', (req, res) =>{
    res.send({
        message: 'Please login'
    })
})

app.post('/login', passport.authenticate('login', {failureRedirect: '/faillogin'}), (req, res) =>{
    res.send(req.body);
})

app.get('/faillogin', (req, res) =>{
    res.status(400).send({error: 'Invalid credentials'});
})

app.post('/signup', passport.authenticate('signup', {failureRedirect: '/failsignup'}), (req, res) =>{
    res.json(req.body);
})

app.get('/failsignup', (req, res) =>{
    res.status(400).send('There was an error in the signup process');
})

app.get('/data', checkAuthentication, (req, res) =>{
    res.send(req.session);
})

app.delete('/logout', checkAuthentication, (req, res) =>{
    req.logout();
    res.send({logout: 'OK'});
})


const roleAdmin = (req, res, next) =>{
    req.isAuthenticated() && req.user.rol == 'admin' ? next() : res.status(400).send('User not authorized');
}

app.get('/data/admin', roleAdmin, (req, res) =>{
    res.send('Welcome admin');
})


app.listen(8080, () => console.log('http://localhost:8080'));