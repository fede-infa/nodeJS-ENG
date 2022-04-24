// Middleware, executes a code in-between the request and the response
// I can verify, modify, invoke more middlewares

// TYPES OF MIDDLEWARES
// Application-level middleware.
// Router-level middleware.
// Error-handling middleware.
// Built-in middleware.
// Third-party middleware.

const express = require('express');
const app = express();
const PORT = 8080;
const logger = require('morgan');


app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(logger('dev'));


//Router
const myRouter = express.Router();
app.use(myRouter)


// APPLICATION LEVEL MIDDLEWARE
/* app.use((req, res, next) =>{
    console.log('Time:', Date.now().toLocaleString());
    next();
});

myRouter.get('/', (req, res) =>{
    console.log('I got the request after the Middleware');
    res.send('get received');
});
 */


// Route level middleware.

function authenticate(req, res, next){
    console.log('Time', new Date().toLocaleString());
    next();
}

function logs(req, res, next){
    console.log('Time', new Date().toLocaleString());
    next();
}

myRouter.get('/', authenticate, logs, (req, res) =>{
    res.send(`Router level middleware`);
})


// Router-level middleware.
// It applies to all the routes of this Router
myRouter.use( (req, res, next) =>{
    console.log(`This is a middleware`);
    next();
})

// Error-handling middleware.
app.use( (err, req, res, next) =>{
    console.log(err.stack);
    res.status(500).send('Something broke!');
});

myRouter.get('/error', (req, res) =>{
    throw new Error('Fatality!');
});

// Built-in middleware.

// app.use(express.static('public', options))
// 2nd argument, 'options' can have the following properties: dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders


// Third-party middleware.
// For example: morgan, for logs

myRouter.use(logger('dev'));

myRouter.get('/logger', (req, res) =>{
    console.log('asd');
})