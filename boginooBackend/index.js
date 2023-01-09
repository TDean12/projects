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


const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/auth");
const cors = require("cors");
require("dotenv").config();
console.log("this is URL: " + process.env.MONGODB_URL);
const app = express();
port = process.env.PORT;
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URL);
mongoose.connection.once("open", () => {
  console.log("mongodb connection established");
});
app.use("/auth", router);
app.use(express.json());
app.listen(port, () => {
  console.log(`server listening on ${port}`);
});