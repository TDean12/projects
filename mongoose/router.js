const express = require("express");
const router = express.Router();
const { getUsers } = require("./functions/get");
// const { createUser } = require("./functions/");
// const {
//     getUsers,
//     getUser,
//     createUser,
//     updateUser,
//     deleteUser,
// } = require("./userController");

router.post("/", createUser);
//    .get("/", getUsers)
//    .get("/:id", getUser)
//    .put("/:id", updateUser)
//    .delete("/:id", deleteUser);

module.exports = router;
