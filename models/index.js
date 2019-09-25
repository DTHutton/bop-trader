"use strict";

const fs        = require("fs");
const path      = require("path");
const Sequelize = require("sequelize");
const basename  = path.basename(module.filename);
const env       = process.env.NODE_ENV || "development";
const config    = require(__dirname + "/../config/config.js")[env];
const db        = {};

// if database is deployed, use JAWSDB_URL from config.use_env_variable
if (config.use_env_variable) {
  console.log("JAWSDB_URL connected.");

  var sequelize = new Sequelize(process.env[config.use_env_variable]);

  // should there be an additional parameter >      , config  ^ ^ 
  
} else { 
  // else, use Local database
  console.log("local database connected.")
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function (file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function (file) {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
