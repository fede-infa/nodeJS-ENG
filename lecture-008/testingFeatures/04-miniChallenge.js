
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(8080, () =>{
    console.log(`Server is up http://localhost:8080`);
});

server.on("error", error =>{
    console.log(error);
})

let phrase = 'Hello world, how are you doing?';

app.get('/api/phrase', (req, res) =>{
    res.send(phrase);
});

app.get('/api/phrase/letter/:num', (req, res) =>{
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

app.get('/api/phrase/word/:num', (req, res) =>{
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

app.put('/api/phrase', (req, res) =>{
    phrase += req.body.word;
    res.json({
        phrase: phrase
    });
});

app.put('/api/phrase/word/:pos', (req, res) =>{
    try {
        const arrayPhrase = phrase.split(' ');
        if(!arrayPhrase[req.params.pos - 1]){
            res.json({
                error: "Parameter not in range"
            });
        } else{
            arrayPhrase[req.params.pos - 1] = req.body.word;
            phrase = arrayPhrase.join(' ');
            res.json({
                phrase: phrase
            })
        }
    } catch (error) {
        res.json(error);
    }   
});

app.delete('/api/phrase/word/:pos', (req, res) =>{
    try {
        const arrayPhrase = phrase.split(' ');
        if(!arrayPhrase[req.params.pos - 1]){
            res.json({
                error: "Parameter not in range"
            });
        } else{
            let newArray = arrayPhrase.filter( word => word != arrayPhrase[req.params.pos -1]);
            phrase = newArray.join(' ');
            res.json({
                phrase: phrase
            })
        }
    } catch (error) {
        res.json(error);
    }   
});