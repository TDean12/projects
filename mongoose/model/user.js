const {model, Schema } = require("mongoose");
const {Email} = require('')

const UserScheme = new Schema({
    firstName:{
        type:String,
        required:[true, "firstname is required"],
        maxlenth:[50, "firstname lenght must be 6 to 50 characters"],
    },
    lastName:{
        type:String,
        required:[true, "lastname is required"],
        maxlenth:[50, "lastname lenght must be 6 to 50 characters"],
    },
    gender:{
        type:String,
        enum : {valuess:['Male', 'Female', 'Non-binary', "prefer not to say"], message:" {VALUE} is not supported"}
    },
    email:{
        type: String,
        required:[true, "Please enter an email"],
        unique: true,
        lowercase: true,
        validate: [Email, 'enter a valid email']
    },
    phone: String,
    picture:String,
    dateOfBirth: Date ,
    registerDate:{type: Date, default : Date.now }
})


const UserModel = model("user", UserScheme);

module.exports = UserModel;