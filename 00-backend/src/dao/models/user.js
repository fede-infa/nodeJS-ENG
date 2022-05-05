const {Schema, model} = require('mongoose');

// Creating properties of user in MongoDB using Mongoose, we can add type of attribute
const userSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    address: String,
    age: Number
});

// With the schema we construct the model
module.exports = model('User', userSchema); // Object or class with methods to use the CRUD