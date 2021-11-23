const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Generos", {
    genres: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
