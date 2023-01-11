const express = require("express");
const { register, login } = require("../controllers/auth");
const router = express.Router();

router.post("/register", register).get("/register", (request, response) => {
  response.send("hello");
});
router.post("/login", login).get("/login", (request, response) => {
  response.send("hello1");
});

module.exports = router;
