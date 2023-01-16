const express = require("express");
const router = express.Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
} = require("./controllers/users");

router
  .post("/", createUser)
  .get("/", getUsers)
  .get("/:id", getUser)
  .put("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
