const express = require('express');
const connect = require("./database");
const authRouter = require("./routes/auth")
require("dotenv").config(); 
const PORT = process.env.PORT || 3000;
const app = (express.json());
app.use("/auth", authRouter);
app.listen(PORT, () =>{
    console.log(`listening on ${PORT}`);
})

require("dotenv"). config();