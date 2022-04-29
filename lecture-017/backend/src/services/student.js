const StudentDAO = require('../models/dao/student');

module.exports =  class StudentService{
    constructor(){}

    async createStudent(student){
        const studentInstance = new StudentDAO;
        // When we use 'return' it's not necessary to use an await
        return studentInstance.createStudent(student);

    }
}