const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const { genSalt, hash } = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request, response } = require("express");

const register = async (req, res) => {
  const { email, password } = req.body;
  const salt = await genSalt(10);

  const hash = await bcrypt.hash(password, salt);
  try {
    const user = await User.create({ email: email, password: hash });
    res.status(200).json({
      message: "created user successfully",
      DataTransfer: user,
    });
    res.send(user);
    console.log(user.users);
  } catch (error) {
    console.log(error);
  }
};

const ACCESS_TOKEN_KEY = "lol";

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });
  const match = await bcrypt.compare(password, user.password);
  if (match) {
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

module.exports = {
  register,
  login,
};

const heyCheckMeYourTax = async (request, response, next ) => {
  const itIsMyTicket = request.body.tickets;

  if(itIsMyTicket === true) {
    next()
    return;
  }else {
    response.status(403).send("You don't have ticket or your ticker is not valid");
    return;
  }
}

const getLinks = (req, res, next) => {
  res.status(200).json ({
    message : "succes",
    data : ["links","link"]
  })
}