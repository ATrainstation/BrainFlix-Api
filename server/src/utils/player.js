const mapPlayerFieldsForClient = (player) => {
  const { is_active, is_captain, ...rest } = player;

  const playerData = {
    ...rest,
    isActive: typeof is_active === "undefined" || !!is_active,
    isCaptain: !!is_captain,
  };

  return playerData;
};

const mapPlayerFieldsForDatabase = (player) => {
  const { isActive, isCaptain, ...rest } = player;

  const playerData = {
    ...rest,
    is_active: typeof isActive === "undefined" || !!isActive,
  };

  playerData.is_captain = !!isCaptain 


  return playerData;
};

module.exports = { mapPlayerFieldsForClient, mapPlayerFieldsForDatabase };
