const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Generos", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
