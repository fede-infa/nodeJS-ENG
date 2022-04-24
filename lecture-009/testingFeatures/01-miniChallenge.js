
const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT);

app.use(express.json());
app.use(express.urlencoded({extended: true}));


/* PETS ROUTER */
const routerPets = express.Router();
const pets = [];

routerPets.get('/list', (req, res) =>{
    res.json(pets);
});

routerPets.post('/', (req, res) =>{
    let pet = {...req.body};
    pets.push(pet);
    res.json(pets);
})


/* PEOPLE ROUTER */
const routerPeople = express.Router();
const people = [];

routerPeople.get('/', (req, res) =>{
    res.json(people);
});

routerPeople.post('/', (req, res) =>{
    let person = {...req.body};
    people.push(person);
    res.json(people);
});

// Prefix
app.use('/pets', routerPets);
app.use('/people', routerPeople);