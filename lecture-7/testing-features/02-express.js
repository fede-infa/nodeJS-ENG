
const express = require('express');
const app = express();

const PORT = 8080;

const server = app.listen( PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

app.get('/', (req, res) =>{
    console.log(`Request received`);
    res.json({
        msg: 'Hallo!',
        author: 'Federico Infantino'
    });
});

app.get('/people/:id', (req, res) =>{
    console.log(`Request received ${req.params.id}`);
    res.json({
        id: req.params.id,
        name: 'Fede',
        lastName: 'Infa',
    });
});

// Query params url.com/view?age=29&name=Federico
app.get('/people/', (req, res) =>{
    console.log(`Request received ${req.params.id}`);
    res.json({
        name: req.query.name,
        lastName: 'Infa',
        age: req.query.age
    });
});

// server.on is an event, the first arg is the event 
server.on("error", error =>{
    console.log(`Alert! ${error}`);
});