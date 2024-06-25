const express = require("express")
const router = express.Router()
const tournamentController = require("./../controllers/tournamentCont")

router.post("/tournament", tournamentController.CreateTournament).get("/tournament", tournamentController.getAllTournaments)


module.exports = router;