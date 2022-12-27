// const UserModel = require("../../model/user");

exports.createUser = async (reqeust, response) => {
    if (
        !reqeust.body?.firstName ||
        !reqeust.body?.lastName

    );
    const firstname = 'naem'
    const lastName = 'name'
    console.log(reqeust)

    try {
        // const user = new UserModel({ firstname, lastName }).save();
        response.status(200).json({
            message: "new user created",
            data: user,
        });
    } catch (error) {
        return response.status(400).json({ message: error, data: null });
    }
}