const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/sql");
const Tareas = require("./Tareas");

const Proyecto = sequelize.define(
  "proyectos",
  {
    proyecto_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    proyecto_nombre: {
      type: DataTypes.STRING(50),
    },
    proyecto_prioridad: {
      type: DataTypes.INTEGER,
    },
    proyecto_descripcion: {
      type: DataTypes.STRING(200),
    },
  },
  {
    timestamps: false,
  }
);

//Relacion de tablas de uno a muchos
Proyecto.hasMany(Tareas, {
  foreignKey: "proyectoId",
  sourceKey: "proyecto_id",
});
Tareas.belongsTo(Proyecto, {
  foreignKey: "proyectoId",
  targetId: "proyecto_id",
});

module.exports = Proyecto;
