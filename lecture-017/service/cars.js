const carsDAO = require('../dao/cars');

class CarService{
    createCar(car){
        const {name} = car;
        return carsDAO.createCar(name);
    }
}

module.exports = new CarService();