const express = require("express");
const router = express.Router();

const {
  getAllPlayers,
  getPlayerById,
  addPlayer,
  updatePlayer,
} = require("../models/player");

router
  .route("/")
  .get((_req, res) => {
    res.json(getAllPlayers());
  })
  .post((req, res) => {
    try {
      const player = addPlayer(req.body);
      res.status(201).json(player);
    } catch (error) {
      res.status(500).send(`Couldn't add player: ${error}`);
    }
  });

router
  .route("/:id")
  .get((req, res) => {
    const player = getPlayerById(req.params.id);

    if (!player) {
      return res.sendStatus(404);
    }

    res.json(player);
  })
  .post((req, res) => {
    try {
      const player = updatePlayer(req.body);
      res.json(player);
    } catch (error) {
      res.status(400).send(`Couldn't update player: ${error}`);
    }
  });

module.exports = router;
