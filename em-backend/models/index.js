// models/index.js
const { Sequelize } = require("sequelize");
const config = require("../config/config.json").development;

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {
  Sequelize,
  sequelize,
  User: require("./user")(sequelize, Sequelize.DataTypes),
};

module.exports = db;
