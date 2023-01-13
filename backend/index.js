const http = require("http");
const express = require("express");
const userRoute = require("./routes/userRoute");
const app = express()

const port = 3000;
app.use("/",userRoute)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});