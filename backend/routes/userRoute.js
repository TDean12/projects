const express = require("express")
const { createUser } = require("../controllers/users")
const userRoute = express.Router()

const User = require('../models/model')

// userRoute.get("/", getUsers)
userRoute.post("/createUser", createUser)
// userRoute.get("/getUser/:id", getUser)
// userRoute.put("/updateUser/:id", updateUser)
// userRoute.delete("/deleteUser/:id", deleteUser)


module.exports = userRoute