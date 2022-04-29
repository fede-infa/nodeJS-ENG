const knex = require('knex');
const knexfile = require('./knexfile');
const { NODE_ENV } = require('../../config/globals')

// .env not working right now
// const db = knex(knexfile[NODE_ENV]);
const db = knex(knexfile.development);

module.exports = db;