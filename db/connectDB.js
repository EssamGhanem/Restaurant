const { Sequelize } = require("sequelize");
const db = require("../models");



const connect = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("!! Connection to DB has been established successfully.");

    await db.sequelize.sync({ force: false });
    console.log("Database synchronized successfully");


  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connect;
