const { update } = require('../dao/models/student');
const StudentService = require('../services/student');
const student = new StudentService();

exports.createStudent = async (req, res, next) => {
    try {
        const newStudent = await student.createStudent(req.body);
        res.json({
            msg: 'Student created',
            student: newStudent
        });
    } catch (error) {
        res.json({
            msg: 'Error',
            error: error
        })
    }
}

exports.findAll = async (req, res, next) =>{
    const allStudents = await student.getAllStudent();
    res.json(allStudents);
}

exports.updateStudent = async (req, res, next) =>{
    const{
        body,
        params: {studentid}
    } = req.body;
    const updatedStudent = await student.updateStudent(studentid, body);
    res.json(updatedStudent);
}

exports.getOne = async (req, res, next) =>{
    const {params: {studentid}} = req;
    const studentRetrieved = await student.getStudent(studentid);
    res.json(studentRetrieved);
}

exports.deleteOne = async (req, res, next) =>{
    const {params: {studentid}} = req;
    await student.deleteStudent(studentid);
    res.json({
        msg: 'Student deleted'
    });
}