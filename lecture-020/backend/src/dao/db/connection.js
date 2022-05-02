const mongoose = require('mongoose');
const { MONGO_URI } = require('../../config/globals');

exports.getConnection = async () =>{
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        return "Connection success" //  URI, config        
    } catch (error) {
        return `Alert! ${error}`;        
    }
}