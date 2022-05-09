const express = require('express');
const cookieParse = require('cookie-parser');
const axios = require('axios');
const redisClient = require('./connection');
const { cacheInfo } = require('./cache');

const app = express();
app.use(cookieParse());
app.use(express.json());

app.get('/id', cacheInfo, async (req, res, next) =>{
    const {id} = req.params;
    try {
        const singleCharacter = await axios(`https://rickandmortyapi.com/api/character/${id}`); // fetch data from an API
        redisClient.setex(id, 60, singleCharacter.data); // Set with expiration (id, time in seconds, data to be saved)
        res.json(singleCharacter.data); // Returned data to client
    } catch (error) {
        res.send(error);
    }
})

app.listen(8080, () => console.log('http://localhost:8080'));