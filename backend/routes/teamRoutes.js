const express = require("express");
const router = express.Router();
const team = require("./../controllers/teamController");

router
  .post("/team", team.CreateTeam)
  .get("/team", team.GetAllTeams)
  .delete("/team/:id", team.deleteTeam);

module.exports = router;
