const knex = require('knex');
const knexFile = require('../db/knexfile');

const db = knex(knexFile.development);

db.from('users').select('*')
.then(rows => {
    for (row of rows) {
        console.log(`${row['id']} ${row['first_name']} ${row['email']}`);
    }
}).catch(error => {
    console.log('error:', error);
}).finally(() => {
    console.log('Closing connection...');
    db.destroy();
});