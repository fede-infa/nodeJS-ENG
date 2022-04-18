
const phrase = 'Hello world, how are you doing?';

const express = require('express');
const app = express();
const PORT = 8080;


const server = app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
})

server.on('error' , error =>{
    console.log(`Alert! ${error}`);
});


app.get('/api/phrase', (req, res) =>{
    res.send(phrase);
});

app.get('/api/letter/:num', (req, res) =>{
    try {
        if(!phrase[req.params.num -1]){
            res.json({
                error: "Parameter not in range"
            });
        } else{
            res.send(phrase[req.params.num - 1]);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/word/:num', (req, res) =>{
    try {
        const arrayPhrase = phrase.split(' ');
        if(!arrayPhrase[req.params.num - 1]){
            res.json({
                error: "Parameter not in range"
            });
        } else{
            res.send(arrayPhrase[req.params.num - 1]);
        }
    } catch (error) {
        res.status(500).send(error);
    }
});
