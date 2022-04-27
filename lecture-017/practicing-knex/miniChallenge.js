const knex = require('knex')({
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    port : 3306,
    user : 'root',
    password : null,
    database : 'test'
  }
});

(() =>{
    try {
        knex.schema.createTable('items', table =>{
            console.log('estoy en create table');
            table.increments('id').unique().primary();
            table.string('name', 15).notNullable();
            table.string('code', 10).notNullable();
            table.float('price').notNullable();
            table.integer('stock').notNullable();
        }).then(() =>{
            console.log('Table items created');
        }).catch( err => {console.log(err)
        }).finally(() =>{
            console.log('Closing connection');
            knex.destroy();
        });
    } catch (error) {
        return error;
    }
});

const articles = [
    {name: 'Paper', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Glass', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Apple', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Water', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Cheese', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Cup', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Phone', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
    {name: 'Mouse', code: Math.floor(Math.random() * (9999999999 - 1) + 1), price: Math.floor(Math.random() * (200 - 30) + 30), stock: Math.floor(Math.random() * (25 - 4) + 4) },
];

(() =>{
    //Creation of items
    knex('items')
        .insert(articles)
        .then( () => console.log('items created'))
        .catch(err => console.log(err)
        .finally( () => {console.log('Closing connection...'); knex.destroy();}));

    // Reading items where stock > 7
    knex('items')
        .where('stock', '>', 7)
        .select('*')
        .then(rows => console.log(rows))
        .catch(err => console.log(err))
        .finally(() => knex.destroy());
    
    // Delete item id 3
    knex('items')
        .where({id: 3})
        .del()
        .catch(err => console.log(err))
        .finally(() => knex.destroy());
    
    // Update stock to 0 of item id = 2
    knex('items')
        .where({id: 2})
        .update({stock: 0})
        .catch(err => console.log(err))
        .finally(() => knex.destroy());
})()
