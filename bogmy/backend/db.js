const mongoose = require("mongoose");

const uri = "mongodb+srv://tugu_dean:lol@cluster0.mc4eln1.mongodb.net/test";

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database is successfully connected");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connect;