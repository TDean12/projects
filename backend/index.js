// imports
const express = require("express");
const userRoute = require("./routes/userRoute");
const connect = require('./db')


// app
const app = express();
app.use(express.json())

const port = 3000;
connect();
app.use("/user",userRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});