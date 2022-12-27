const connect = require("./App");
const express = require("express");
const app = express();
const PORT = 8000;
const bp = require("body-parser");
const router = require("./routes/userRouter")


// connect();

app.use(bp.json());
app.use('user/', router);

app.listen(PORT, () => {
    console.log("working");
});