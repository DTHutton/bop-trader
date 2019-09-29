// const passport = require("passport");
var db = require("../models");

module.exports = function(app) {
  // GET FUSION CHARTS
  app.get("/api/fusioncharts", function(req, res) {
    res.render("fusioncharts");
  });

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

// POST route for saving a newUser
// app.post("posts", function(req, res) {
//   console.log("posts  HIT >> req.body = ", req.body);
//   db.User.create({
//     email: req.body.email,
//     password: req.body.password
//   }).then(function(newUser) {
//     res.json(newUser);
//   });
// });
