const knex = require('knex');
const knexFile = require('../db/knexfile');

const db = knex(knexFile.development)

const users = [
    {first_name: 'Fede', last_name: 'Infantino', email: 'fede@gmail.com'},
    {first_name: 'Mario', last_name: 'Perez', email: 'perez@gmail.com'},
    {first_name: 'Jaime', last_name: 'Gutierrez', email: 'gutierrez@gmail.com'},
    {first_name: 'Matias', last_name: 'Piccoli', email: 'Matias@gmail.com'},
    {first_name: 'Juan', last_name: 'Carranza', email: 'Juan@gmail.com'}
]

db('users')
    .insert(users)
    .then(() =>{
        console.log('Users added');
    }).catch( error => console.log(error))
    .finally(() =>{
        console.log(`Closing connection`);
        db.destroy();
    })

