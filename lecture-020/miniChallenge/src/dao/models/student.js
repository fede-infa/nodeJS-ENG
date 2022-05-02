const {Schema, model} = require('mongoose');

const studentSchema = new Schema({
    first_name: String,
    last_name: String,
    personal_id: String,
    age: Number,
    lesson: String,
    grade: String
})

module.exports = model('student', studentSchema);