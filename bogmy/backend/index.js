// imports
const express = require("express");
const cors = require('cors')
const userRoute = require("./routes/userRoute");
const connect = require('./db');
const linkRoute = require("./routes/linkRoute");


// app
const app = express();
app.use(express.json())
app.use(cors())

const port = 4000;
connect();
app.use("/user",userRoute)
app.use("/link",linkRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});