const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017";

const connect = async () => {
    try{
        await mongoose.connect(uri);
        console.log("Database is successfully connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;