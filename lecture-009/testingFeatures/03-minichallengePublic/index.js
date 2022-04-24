
const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`Server is up http://localhost:${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('',express.static(__dirname + '/public'));

// By default a browser look up for 'index.html' file
// app.get('/', (req, res) =>{
//     res.sendFile('index.html');
// });


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