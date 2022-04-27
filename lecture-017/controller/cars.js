const carsService = require('../service/cars');

class CarsController{
    async createCar(req, res){
        try {
            const id = await carsService.createCar(req.body);
            res.status(201).json(id);
        } catch (error) {
            console.log(error);
        }
    }
    
}

module.exports = new CarsController();