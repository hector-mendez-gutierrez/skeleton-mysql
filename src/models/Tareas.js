const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sql");

const Tareas = sequelize.define(
  "tareas",
  {
    tarea_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    tarea_nombre: {
      type: DataTypes.STRING(50),
    },
    tarea_estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);
module.exports = Tareas;
