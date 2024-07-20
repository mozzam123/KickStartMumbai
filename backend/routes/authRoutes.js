const express = require("express");
const router = express.Router();
const auth = require("./../controllers/authController");

router
  .post("/user", auth.createUser)
  .get("/user", auth.getAllUsers)
  .delete("/user/:id", auth.deleteUser);

module.exports = router;
