// imports
const express = require("express");
const userRoute = require("./routes/userRoute");
const connect = require('./db');
const linkRoute = require("./routes/linkRoute");


// app
const app = express();
app.use(express.json())

const port = 4000;
connect();
app.use("/user",userRoute)
app.use("/link",linkRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});