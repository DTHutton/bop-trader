var db = require("../models");

module.exports = function(app) {
  // POST route for saving a newUser
  // app.post("/api/posts", function(req, res) {
  //   console.log("/api/posts  HIT >> req.body = ", req.body);
  // db.User.create({
  //   email: req.body.email,
  //   password: req.body.password
  // }).then(function(newUser) {
  //   res.json(newUser);
  // });
  // });

  // Get FUSION CHARTS
  app.get("/api/fusioncharts", function(req, res) {
    res.render("fusioncharts");
  });

  // Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
};
