const mongoose = require('mongoose')
const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routes/userRouter")


const uri = "mongodb+srv://tugu_dean:lol@cluster0.mc4eln1.mongodb.net/todo?retryWrites=true&w=majority"

app.use(express.json());

mongoose.connect(uri);
mongoose.connection.once("open" , () => {
    console.log("succes")
})

app.use(router);

app.listen(PORT, () => {
    console.log("working");
});