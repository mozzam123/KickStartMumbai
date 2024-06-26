const express = require("express");
const router = express.Router();
const tournamentController = require("./../controllers/tournamentCont");

router
  .post("/tournament", tournamentController.CreateTournament)
  .get("/tournament", tournamentController.getAllTournaments)
  .delete("/tournament/:id", tournamentController.deleteTournament)
  .put("/tournament/:id", tournamentController.updateTournament)
  .post("/tournament/add-team", tournamentController.AddTeamToTournament)

module.exports = router;
