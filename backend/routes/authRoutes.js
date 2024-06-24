const express = require("express")
const router = express.Router()
const auth = require("./../controllers/authController")

router.post("/test",auth.createUser )

module.exports = router;
