const userModel = require('../dao/models/user')

module.exports = class {

    async createUser(user){
        return userModel.create(user);
    }

    async getUser(id){
        return userModel.findById(id);
    }

    async getAllUser(){
        return userModel.find();
    }

    async updateUser(id, userUpdated){
        const userToUpdate = await userModel.findByIdAndUpdate(id, userUpdated,{
            new: true //if it doesn't exist, create
        });
        return userToUpdate;
    }
    
    async deleteUser(id){
        await userModel.findByIdAndDelete(id)
    }
}