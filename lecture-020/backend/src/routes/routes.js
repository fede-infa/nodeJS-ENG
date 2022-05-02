const userController = require('../controller/user');

module.exports = (router) =>{
    router
    .post('/api/v1/user', userController.createUser)
    .get('/api/v1/user/:userid', userController.getOne)
    .get('/api/v1/user', userController.findAll)
    .patch('/api/v1/user/:userid', userController.updateUser)
    .delete('/api/v1/user/:userid', userController.deleteOne)
    return router;
}