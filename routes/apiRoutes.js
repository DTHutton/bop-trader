var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Get all transaction data
  app.get("/api/transactions", function(req, res) {
    db.Transactions.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by userId
  app.delete("/api/users/:userId", function(req, res) {
    db.User.destroy({ where: { userId: req.params.userId } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
