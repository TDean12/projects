const UserModel = require("../model");

exports.getUser = async (request, response, next ) => {
    const {id} = request.params;

    try {
        const user = await User.findById(id);
        response.status(200).json({message:true , data: post});
    } catch (error) {
        return response.status(400).json({message: error, data: null});
    }
}