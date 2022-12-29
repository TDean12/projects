const UserModel = require("../model/user")

exports.getUsers = async (request, response, next) => {
    try{
        const users = await UserModel.find();
        response.status(200).json({
            message: true,
            data: users,
        });
    } catch (error) {
        return response.status(400).json({message: error, data: null});
    }
}