
/* Get users
http://service/api/users

Add a user (via POST)
http://service/api/users (POST method)

URI (Uniform Resource Identifier). It identifies an unique resource,
http://service/api/users/1

Modified an user
http://service/api/users (PUT method)

Search by criteria
http://service/api/users?city=Berlin (Query string) */

const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

app.get('/', (req, res) =>{
    try {
        res.send('Wilkommen!');
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/messages', (req, res) =>{
    res.send(`Message from ${req.query.country}`);
    res.send('Welcome');
});

app.get('/api/messages/:id', (req, res) =>{
    res.send(`Message id ${req.params.id}`);
});


