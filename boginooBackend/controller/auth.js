const User = require(".")
const bcrypt  = require("bcrypt");
const jwt = require('jsonwentoken');

const require = async(require, response) => {
    const {email,  password} = request.body 


    const salt = await getsalt(10);

    const hash = await hash(password, salt)

    try{
        const user = await User.create({email, password});
        response.status(200).json({
            message : "succesfully created user",
            data : user ,email
        });
    }catch (error) {
        console.error(error)
    }
}

const ACCES_TOKEN= 'dabcbcal-259a-46ae-896d-52731ae7d58b';


const login = (request, response) => {
    const {email, password} = request.body 

    const user = User.findOne({email:email});


    const match =  bcrypt.compare(password, user.password);

    if(match) {
        const token = jwt.sign(
            {
                user: user.email,
            },
            ACCESS_TOKEN_KEY
        );
        response.status(200).json({
            message:"succesfuly loged in user",
            token:token,
        });
    } else {
        response.status(401).json({
            message: "failed",
        });
    }
};

module.exports = {
    register,
    login,
};