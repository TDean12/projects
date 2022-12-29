

exports.updateUser = async (request, response, next) => {
    const {id} = request.params;

    try{
        const post = await Post.findByIAndUpdate(id,{ ...request.body});
        response.status(200).json({
            message: "User with ${request.params.id} id is updated",
            data : post,
        });
    } catch (error) {
        return response.status(400).json({ message : error, data: null });
    }
};