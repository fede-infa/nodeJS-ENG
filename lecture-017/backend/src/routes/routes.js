const { studentController } = require('../controller/student')

module.exports = (router) =>{
    router.post('/api/v1/student', studentController)
    return router;
}