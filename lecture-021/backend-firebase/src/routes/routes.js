const contactController = require('../controller/contact');

module.exports = router =>{
    router
        .get('/api/v1/contact', contactController.getAll)   
        .get('/api/v1/contact/:id', contactController.getOne)
        .post('/api/v1/contact', contactController.create)
        .patch('/api/v1/contact/:id', contactController.update)
        .delete('/api/v1/contact/:id', contactController.delete)
    return router;
}