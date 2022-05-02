const studentModel = require('../dao/models/student');

module.exports = class{
    async createStudent(student){
        return studentModel.create(student);
    }

    async getStudent(id){
        return studentModel.findById(id);
    }

    async getAllStudent(){
        return studentModel.find();
    }

    async updateStudent(id, updatedStudent){
        const newStudent = await studentModel.findByIdAndUpdate(id, updatedStudent, {
            new: true
        });
        return newStudent;
    }

    async deleteStudent(id){
        return studentModel.findByIdAndDelete(id);
    }
}