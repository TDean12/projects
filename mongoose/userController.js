exports.createUser = async (request, response, next) => {
    if (
        !request.body?.firstName ||
        !request.body?.lastName 
        
    ); {
        response
        .status(400)
        .json({message: `Firstname, lastname or email are required. `});
        
    }
    try{
        const createUser = await User.create({ ...require.body});
        response
        .status(201)
        .json({message: `New user is created.`, data: createUser});
    } catch (error) {
        return response.status(400).json({ message: error});
    }
}