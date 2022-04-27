const db = require('../db/db');
const { createCar } = require('../service/cars');

class CarsDAO{
    async createCar(name){
        // Is a promise, so is better to desconstructered it
        const [id] = await db('cars')
        .insert({
            name
        });

        return id;
    }
}

module.exports = new CarsDAO;   