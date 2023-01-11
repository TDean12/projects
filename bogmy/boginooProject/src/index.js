const mongoose = require('express');
require("dotemv").config();

const uri = process.env.MONGODB_URL || "";


const connect = async ()=>{
  try{
    await mongoose.connect(uri);
    console.log("Database is succesfully connected");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connect