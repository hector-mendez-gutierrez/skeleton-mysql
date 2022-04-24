const { sequelize } = require("./config/sql/index");
const app = require("./app");

//Puerto
const port = process.env.PORT || 5000;

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    console.log(`Servidor corriendo en http://localhost:${port}`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
