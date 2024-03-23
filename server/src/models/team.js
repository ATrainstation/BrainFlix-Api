let { teams } = require("../../data/data");

const getAllTeams = () => teams.filter((team) => team.abbreviation !== "ccs");

const getTeamById = (id) => {
  if (typeof id !== "number") {
    id = Number(id);
  }

  return teams.find((team) => team.id === id);
};

module.exports = { getAllTeams, getTeamById };
