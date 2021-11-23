const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Videogames", {
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ranking: {
      type: DataTypes.STRING,
      allowNull: true
    },
    plataformas: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
};
