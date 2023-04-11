const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Activity', {
      id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      duracion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0
      },
      temporada: {
        type: DataTypes.ENUM(
          "Invierno",
          "Primavera",
          "Verano",
          "Otoño"
        ),
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.ENUM(
          "1",
          "2",
          "3",
          "4",
          "5"
        ),
        allowNull: false,
      }
    },
    {timestamps: false}
    )
}