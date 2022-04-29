const StudentService = require('../services/student');

exports.studentController = async (req, res, next) =>{
    try {
        const student = new StudentService();
        const responseStudent = await student.createStudent(req.body)
        console.log(responseStudent);
        res.status(200).json({
            msg: 'Student created',
            id: responseStudent,
            ...req.body,
        })
    } catch (error) {
        return error;
    }
}