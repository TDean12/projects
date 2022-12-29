const { response } = require("express")
const UserModel = require("../model/userSchema")


exports.createUser = async (reqeust, response) => {
   const userDetail = reqeust.body
   console.log(userDetail)
        const user = await UserModel.create(userDetail)
        response.send({
            message: "new user created",
            data: user,
        })
}

exports.deleteUser = async (req, res) => {
    res.send("delete user")
}

exports.getUser = async (req, res) => {
    const user = UserModel.find()
    res.send(user)
}
// exports.createUser = async (req, res) =>{
//     res.send('create user')
// }
 