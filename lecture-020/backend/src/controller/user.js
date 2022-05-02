const UserService = require('../services/user');
const user = new UserService();

exports.createUser = async (req, res, next) => {
    const newUser = await user.createUser(req.body);
    res.json({
        msg: 'User created',
        user: newUser
    });
}
exports.findAll = async (req, res, next) => {
    const allUsers = await user.getAllUser();
    res.json(allUsers);
}
exports.updateUser = async (req, res, next) => {
    const {
        body, 
        params: {userid}
    } = req.body;
    const updatedUser = await user.updateUser(userid, body);
    res.json(updatedUser);
}
exports.getOne = async (req, res, next) => {
    const { params: {userid }} = req;
    const userRetrieved = await user.getUser(userid);
    res.json(userRetrieved);
}

exports.deleteOne = async (req, res, next) => {
    const { params: {userid} } = req;
    await user.deleteUser(userid);
    res.json({msg: 'ok'});
}