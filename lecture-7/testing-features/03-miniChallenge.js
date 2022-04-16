
const express = require('express');
const app = express();
const PORT = 8080;

const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

let viewsAmount = 0;

app.get('/', (req, res) =>{
    res.send('<h1 style="color: blue">Welcome to an express server</h1>')
});

app.get('/visits', (req, res) =>{
    res.send(`Amount of views of this endpoint: ${++viewsAmount}`)
});

app.get('/datetime', (req, res) =>{
    res.json({
        dateTime: new Date().toLocaleString()
    })
})

server.on("error", error =>{
    console.log(`There was an error... ${error}`);
});