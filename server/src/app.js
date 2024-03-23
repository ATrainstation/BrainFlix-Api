const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();
const PORT = process.env.PORT ?? 8080;

app.use(cors());
app.use(express.json());

const players = require("./routes/players");
app.use("/players", players);

const teams = require("./routes/teams");
app.use("/teams", teams);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
