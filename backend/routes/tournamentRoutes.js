const express = require("express")
const router = express.Router()
const tournamentController = require("./../controllers/tournamentCont")

router.post("/tournament", tournamentController.CreateTournament)


module.exports = router;