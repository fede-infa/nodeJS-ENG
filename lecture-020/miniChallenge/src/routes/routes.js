const studentController = require('../controller/student');

module.exports = (router) =>{
    router
    .post('/api/v1/student', studentController.createStudent)
    .get('/api/v1/student/:studentid', studentController.getOne)
    .get('/api/v1/student', studentController.findAll)
    .patch('/api/v1/student/:studentid', studentController.updateStudent)
    .delete('/api/v1/student/:studentid', studentController.deleteOne)
    return router;
}