const db = require('../db/db');

// DAO stands for Data Access Object. It means that here it goes all the connections to the DB, all the CRUD operations. So I import the connection via 'const db = require('../db/db');' 
module.exports = class StudentDAO{

    // Object destructuring
    async createStudent({first_name, last_name, email, birth_day}){
        // Array destructuring
        const [id] = await db('student').insert({ // Once I got the db object, I insert data into 'student' table
            first_name,
            last_name,
            email,
            birth_day
        });
        return id;
    }
}