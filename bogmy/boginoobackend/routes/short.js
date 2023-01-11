const express = require("express");

const middleware = (req, res, next) => {
  next()
};

const {
  getShortById,
  getShortsByUser,
  createShort,
  updateShort,
  deleteShort,
  getShorts,
} = require("../controllers/generator.js");

const usersRouter = express.Router();

usersRouter.route("/allShorts").get(getShorts);
usersRouter.route("/").post(createShort);
usersRouter.route("/:id").get(getShortById);
usersRouter.route("/home").post(createShort);

module.exports = usersRouter;
