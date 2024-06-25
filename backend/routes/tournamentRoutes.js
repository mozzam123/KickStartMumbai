const express = require("express");
const router = express.Router();
const tournamentController = require("./../controllers/tournamentCont");

router
  .post("/tournament", tournamentController.CreateTournament)
  .get("/tournament", tournamentController.getAllTournaments)
  .delete("/tournament/:id", tournamentController.deleteTournament);

module.exports = router;
