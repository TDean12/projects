const UserModel = require("../model");

exports.updateUser = async(reqeust, response, next) => {
    const {id} = reqeust.params;

    try{
        const post = await Post.findByIdAndDelete(id);
        response.status(200).json({
            message: "User with ${request.params.id} id is deleted",
            data:post, 
        });
    }catch (error) {
        return response.status(400).json({message:error, data :null});
    }
}