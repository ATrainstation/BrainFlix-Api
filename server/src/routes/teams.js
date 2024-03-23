const express = require("express");
const router = express.Router();

const { getAllTeams, getTeamById } = require("../models/team");
const { getPlayersByTeamId } = require("../models/player");

router.get("/", (_req, res) => {
  res.json(getAllTeams());
});

router.get("/:id/players", (req, res) => {
  let team = getTeamById(req.params.id);

  if (!team) {
    return res.sendStatus(404);
  }

  team.players = getPlayersByTeamId(team.id);
  res.json(team);
});

module.exports = router;
