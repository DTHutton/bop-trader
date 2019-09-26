/* eslint-disable prettier/prettier */
require("dotenv").config(); // this is important!

module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "mysql"
  },
  // "test": {
  //   "username": "q3nvs59j5k507fhx",
  //   "password": "vz20v2f30a5w0657",
  //   "database": "sjro560knhmtbjsf",
  //   "host": "ko86t9azcob3a2f9.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  //   "dialect": "mysql",
  //   "logging": false
  // },
  "test": {
    "username": "root",
    "password": "SQLsetpass774$",
    "database": "testdb",
    "host": "localhost",
    "dialect": "mysql",
    "logging": false
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect": "mysql"
  }
};
