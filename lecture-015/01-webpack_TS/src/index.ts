import express from 'express';

import {Persona} from './lib/classes';
const operations = require('./lib/functions.js');
const person:Persona = new Persona('Fede', 'Infa');


const app = express();
app.get('/', (req, res) =>{
    res.send({timeES6: operations.getTime(), fullNameTS: person.getFullName()});
});

const PORT:number = 8080;
app.listen(PORT, () => console.log(`Server up! http://localhost:${PORT}`));
