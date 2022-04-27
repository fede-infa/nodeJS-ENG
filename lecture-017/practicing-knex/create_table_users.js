const knex = require('knex');
const knexFile = require('../db/knexfile');

const db = knex(knexFile.development)

db.schema.createTable('users', table =>{
    table.increments('id');
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique();
}).then( () =>{
    console.log('Table CARS created');
}).catch( error =>{
    console.log(`Alert!: ${error}`);
    throw error;
}).finally(() =>{
    console.log('Closing connection...');
    // To close the connection
    db.destroy();
});
