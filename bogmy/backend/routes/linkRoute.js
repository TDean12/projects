const express = require("express")
const { getShorts, getShortsByUser, getShortById, createShort } = require("../controllers/url")

const linkRoute = express.Router()


linkRoute.get("/", getShorts)
linkRoute.get("/:id", getShortById)
linkRoute.get("/user/:id", getShortsByUser);
linkRoute.post("/", createShort);



module.exports = linkRoute