const UserModel = require("../models/model")
const bcrypt = require("bcrypt");
const { genSalt, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");


exports.register = async (request,response ) => {
    const {email, password} = request.body;
    const salt = await genSalt(10);

    const hash = await bcrypt.hash(password, salt);
    try{
        const user = await UserModel.create({email:email, password:hash});
        response.status(200).json({
            message: "created user succes",
            DataTransfer: user,
        });
        response.send(user);
        console.log(user.users);
    } catch (error) {
        console.log(error);
  }
}

const ACCESS_TOKEN_KEY = "lol";

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (password == user.password) {
      const token = jwt.sign(
        {
          user: user.email,
        },
        ACCESS_TOKEN_KEY
      );
      res.status(200).json({
        message: "successfully logged in",
        token: token,
      });
    } else {
      res.status(403).json({
        message: "failed to login",
      });
    }
  };

  
  // const heyCheckMeYourTax = async (request, response, next ) => {
  //   const itIsMyTicket = request.body.tickets;
  
  //   if(itIsMyTicket === true) {
  //     next()
  //     return;
  //   }else {
  //     response.status(403).send("You don't have ticket or your ticker is not valid");
  //     return;
  //   }
  // }
  
  // const getLinks = (req, res, next) => {
  //   res.status(200).json ({
  //     message : "succes",
  //     data : ["links","link"]
  //   })
  // }         