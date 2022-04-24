const { Sequelize } = require("sequelize");
const cnn = require("./credenciales");


const sequelize = new Sequelize(cnn.database, cnn.username, cnn.password, {
  host: cnn.host,
  dialect: cnn.dialect,
});

module.exports = { sequelize };
