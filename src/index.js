const { sequelize } = require("./config/sql/index");
const app = require("./app");

//Puerto
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("db sincronizada");
    console.log(`Servidor corriendo en http://localhost:${port}`);
  } catch (error) {
    console.error("Ocurrio un error al sincronizar la bd:", error);
  }
});
